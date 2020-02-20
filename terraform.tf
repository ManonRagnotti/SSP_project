provider "aws" {
  profile    = "default"
  region     = "eu-west-1"
}

resource "aws_key_pair" "samu" {
  key_name   = "samu-key-pair"
  public_key = file("${path.module}/id_rsa.pub")
}

resource "aws_instance" "samu-instance" {
  ami             = "ami-035966e8adab4aaad"
  instance_type   = "t2.micro"
  key_name        = "samu-key-pair"
  security_groups = [aws_security_group.samu-security-group.name]

}

resource "aws_default_vpc" "default" {
  tags = {
    Name = "samu vpc"
  }
}

resource "aws_security_group" "samu-security-group" {
  name        = "samu-security-group"
  vpc_id      = aws_default_vpc.default.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1"
    cidr_blocks     = ["0.0.0.0/0"]
  }
  }