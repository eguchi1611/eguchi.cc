variable "name" {
  description = "Prefix for all resources"
  type        = string
}

variable "domain_name" {
  type = string
}

variable "acm_certificate_arn" {
  type = string
}
