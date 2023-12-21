terraform {
    backend "gcs" { 
      bucket  = "terraform-state-cicd-friendease"
      prefix  = "prod"
    }
}

provider "google" {
  project = var.project
  region = var.region
}