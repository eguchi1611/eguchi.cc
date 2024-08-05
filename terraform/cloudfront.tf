# CloudFront Distribution
resource "aws_cloudfront_distribution" "www" {
  origin {
    domain_name              = aws_s3_bucket.www.bucket_regional_domain_name
    origin_id                = aws_s3_bucket.www.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.www.id
  }

  # カスタムドメインを設定
  aliases = [var.domain_name]
  enabled = true

  default_cache_behavior {
    cache_policy_id = data.aws_cloudfront_cache_policy.CachingOptimized.id
    allowed_methods = ["GET", "HEAD"]
    cached_methods  = ["GET", "HEAD"]
    # origin.origin_idに合わせる
    target_origin_id       = aws_s3_bucket.www.bucket_regional_domain_name
    viewer_protocol_policy = "redirect-to-https"
  }

  # ビューワーのアクセス制限
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # ドメイン証明書
  viewer_certificate {
    acm_certificate_arn = var.certificate_arn
    ssl_support_method  = "sni-only"
  }

  # 仮
  default_root_object = "index.html"
}

# Origin Access Control
resource "aws_cloudfront_origin_access_control" "www" {
  name                              = aws_s3_bucket.www.id
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# キャッシュポリシー
# https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html?icmpid=docs_cf_help_panel#managed-cache-caching-optimized
data "aws_cloudfront_cache_policy" "CachingOptimized" {
  name = "Managed-CachingOptimized"
}
