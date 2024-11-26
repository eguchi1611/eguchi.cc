terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.77.0"
    }
  }
}

provider "aws" {
  region = "ap-northeast-1"
}

resource "aws_vpc" "my_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
}

resource "aws_internet_gateway" "my_igw" {
  vpc_id = aws_vpc.my_vpc.id
}

resource "aws_route_table" "my_rtb_public" {
  vpc_id = aws_vpc.my_vpc.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.my_igw.id
  }
}

resource "aws_subnet" "public_1a" {
  vpc_id            = aws_vpc.my_vpc.id
  cidr_block        = "10.0.0.0/24"
  availability_zone = "ap-northeast-1a"
}

resource "aws_route_table_association" "my_rta_public" {
  route_table_id = aws_route_table.my_rtb_public.id
  subnet_id      = aws_subnet.public_1a.id
}

resource "aws_security_group" "app_server_sg" {
  vpc_id = aws_vpc.my_vpc.id
}

resource "aws_security_group_rule" "app_server_sg_ssh" {
  security_group_id = aws_security_group.app_server_sg.id
  type              = "ingress"
  from_port         = 22
  to_port           = 22
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_instance" "app_server" {
  ami                         = "ami-060012f4b7111a68b"
  instance_type               = "t4g.nano"
  key_name                    = "m1mac"
  subnet_id                   = aws_subnet.public_1a.id
  # security_groups             = [aws_security_group.app_server_sg.id]
  associate_public_ip_address = true
}
