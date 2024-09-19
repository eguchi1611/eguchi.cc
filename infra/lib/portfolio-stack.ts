import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

// GitHub repository
const git_repo = "eguchi1611/eguchi.cc";
// ECR repository
const ecr_repo = "portfolio-website";

export class PortfolioStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 証明書のARN
    const certificateArn = process.env.CERTIFICATE_ARN as string;
    // ドメイン名
    const domainName = process.env.DOMAIN_NAME as string;

    // [1] Next.jsの配信

    // ECRリポジトリの作成
    const repository = new cdk.aws_ecr.Repository(this, "Repository", {
      repositoryName: ecr_repo,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      emptyOnDelete: true,
    });

    // Lambda関数の作成
    const lambdaFunction = new cdk.aws_lambda.DockerImageFunction(this, "Function", {
      code: cdk.aws_lambda.DockerImageCode.fromEcr(repository, {
        tagOrDigest: "latest",
      }),
    });

    // Lambda FunctionのURLを取得
    const lambdaFunctionUrl = lambdaFunction.addFunctionUrl({
      authType: cdk.aws_lambda.FunctionUrlAuthType.NONE,
    });

    // 証明書の取得
    const certificate = cdk.aws_certificatemanager.Certificate.fromCertificateArn(this, "Certificate", certificateArn);

    // CloudFrontディストリビューションの作成
    const distribution = new cdk.aws_cloudfront.Distribution(this, "Distribution", {
      defaultBehavior: {
        origin: new cdk.aws_cloudfront_origins.FunctionUrlOrigin(lambdaFunctionUrl),
        viewerProtocolPolicy: cdk.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cdk.aws_cloudfront.CachePolicy.CACHING_DISABLED,
        originRequestPolicy: cdk.aws_cloudfront.OriginRequestPolicy.ALL_VIEWER_EXCEPT_HOST_HEADER,
      },
      domainNames: [domainName],
      certificate: certificate,
    });

    // Route53ホストゾーンの取得
    const zone = cdk.aws_route53.HostedZone.fromLookup(this, "Zone", {
      domainName: domainName,
    });

    // Route53レコードの作成
    new cdk.aws_route53.ARecord(this, "Record", {
      zone: zone,
      target: cdk.aws_route53.RecordTarget.fromAlias(new cdk.aws_route53_targets.CloudFrontTarget(distribution)),
    });

    // [2] Assetsの配信

    // S3バケットの作成
    const bucket = new cdk.aws_s3.Bucket(this, "Bucket", {});
    distribution.addBehavior(
      "/assets/*",
      cdk.aws_cloudfront_origins.S3BucketOrigin.withOriginAccessControl(bucket, {}),
      {
        viewerProtocolPolicy: cdk.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cdk.aws_cloudfront.CachePolicy.CACHING_OPTIMIZED,
      },
    );

    // [3] GitHub Actionsでのデプロイ

    // IAMロールの作成
    const role = new cdk.aws_iam.Role(this, "Role", {
      assumedBy: new cdk.aws_iam.FederatedPrincipal(
        "arn:aws:iam::183295441800:oidc-provider/token.actions.githubusercontent.com",
        {
          StringLike: {
            "token.actions.githubusercontent.com:sub": "repo:" + git_repo + ":*",
          },
          StringEquals: {
            "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
          },
        },
        "sts:AssumeRoleWithWebIdentity",
      ),
      roleName: "portfolio-website-uploader",
    });
    // ECRへのアクセス権限を追加
    role.addToPolicy(
      new cdk.aws_iam.PolicyStatement({
        actions: ["ecr:GetAuthorizationToken"],
        resources: ["*"],
      }),
    );
    role.addToPolicy(
      new cdk.aws_iam.PolicyStatement({
        actions: ["ecr:*"],
        resources: [repository.repositoryArn],
      }),
    );

    new cdk.CfnOutput(this, "UploaderRoleArn", {
      value: role.roleArn,
      description: "IAM Role ARN for GitHub Actions",
    });
  }
}
