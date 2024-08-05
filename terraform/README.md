# terraform構成

## ウェブサイト

- AWS ACMから証明書を取得
- terraform.tfvarsを構成、取得したACMのARNを設定
- `terraform init`
- `plan`
- `apply`

```shell
#
# aws_cloudfront_distribution_domain_name =
# aws_s3_bucket_name =
```

- Outputs:aws_cloudfront_distribution_domain_nameをCNAMEへ
- aws cliからaws_s3_bucket_nameへアップロード
