output "aws_s3_bucket_name" {
  value = aws_s3_bucket.www.bucket
}

output "aws_cloudfront_distribution_domain_name" {
  value = aws_cloudfront_distribution.www.domain_name
}
