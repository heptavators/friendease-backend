resource "google_cloud_run_service" "backend-api" {
  name     = "backend-api"
  location = var.region

  template {
    spec {
      containers {
        image = "asia.gcr.io/hexavator/friendease-backend"
      }
    }
  }
}

resource "google_cloud_run_domain_mapping" "api.friendease.id" {
  name     = "api.friendease.id"
  location = var.region
  metadata {
    namespace = var.project
  }

  spec {
    route_name       = google_cloud_run_service.backend-api
    domain_name      = var.custom_domain
    certificate_mode = "AUTOMATIC"
    security_policy  = "SECURE_ALWAYS"

    managed_certificate {
      domains = [var.custom_domain]
    }
  }
}