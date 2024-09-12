import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export class PortfolioStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

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

    const distribution = new cdk.aws_cloudfront.Distribution(this, "Distribution", {
      defaultBehavior: {
        origin: new cdk.aws_cloudfront_origins.FunctionUrlOrigin(lambdaFunctionUrl),
        viewerProtocolPolicy: cdk.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
    });
  }
}
