import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export class PortfolioStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const certificateArn = process.env.CERTIFICATE_ARN as string;
    const domainName = process.env.DOMAIN_NAME as string;

    const repository = new cdk.aws_ecr.Repository(this, "Repository", {
      repositoryName: "portfolio-website",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      emptyOnDelete: true,
    });

    const lambdaFunction = new cdk.aws_lambda.DockerImageFunction(this, "Function", {
      code: cdk.aws_lambda.DockerImageCode.fromEcr(repository, {
        tagOrDigest: "latest",
      }),
    });

    const lambdaFunctionUrl = lambdaFunction.addFunctionUrl({
      authType: cdk.aws_lambda.FunctionUrlAuthType.NONE,
    });

    const certificate = cdk.aws_certificatemanager.Certificate.fromCertificateArn(this, "Certificate", certificateArn);

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

    const zone = cdk.aws_route53.HostedZone.fromLookup(this, "Zone", {
      domainName: domainName,
    });

    new cdk.aws_route53.ARecord(this, "Record", {
      zone: zone,
      target: cdk.aws_route53.RecordTarget.fromAlias(new cdk.aws_route53_targets.CloudFrontTarget(distribution)),
    });

    const bucket = new cdk.aws_s3.Bucket(this, "Bucket", {});
    distribution.addBehavior(
      "/assets/*",
      cdk.aws_cloudfront_origins.S3BucketOrigin.withOriginAccessControl(bucket, {}),
      {
        viewerProtocolPolicy: cdk.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cdk.aws_cloudfront.CachePolicy.CACHING_OPTIMIZED,
      },
    );

    const role = new cdk.aws_iam.Role(this, "Role", {
      // assumedBy: new cdk.aws_iam.FederatedPrincipal(
      //   "arn:aws:iam::183295441800:oidc-provider/token.actions.githubusercontent.com",
      //   {
      //     StringLike: {
      //       "token.actions.githubusercontent.com:sub": "repo:eguchi1611/eguchi.cc:*",
      //     },
      //     StringEquals: {
      //       "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
      //     },
      //   },
      // ),
      // GitHub OIDC provider
      assumedBy: new cdk.aws_iam.FederatedPrincipal(
        "arn:aws:iam::183295441800:oidc-provider/token.actions.githubusercontent.com",
        {
          StringLike: {
            "token.actions.githubusercontent.com:sub": "repo:eguchi1611/eguchi.cc:*",
          },
          StringEquals: {
            "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
          },
        },
        "sts:AssumeRoleWithWebIdentity",
      ),
      roleName: "portfolio-website-uploader",
    });

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
    // role.addToPolicy(
    //   new cdk.aws_iam.PolicyStatement({
    //     actions: ["sts:AssumeRoleWithWebIdentity"],
    //     principals: [
    //       new cdk.aws_iam.FederatedPrincipal(
    //         "arn:aws:iam::183295441800:oidc-provider/token.actions.githubusercontent.com",
    //       ),
    //     ],
    //     conditions: {
    //       StringLike: {
    //         "token.actions.githubusercontent.com:sub": "repo:eguchi1611/eguchi.cc:*",
    //       },
    //       StringEquals: {
    //         "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
    //       },
    //     },
    //   }),
    // );

    new cdk.CfnOutput(this, "UploaderRoleArn", {
      value: role.roleArn,
    });
  }
}
