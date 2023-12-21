resource "google_cloud_run_service" "backend-api" {
  name     = "backend-api"
  location = var.region

  template {
    spec {
      containers {
        image = "asia.gcr.io/hexavator/friendease-backend"
      }
      container_concurrency = 10
      timeout_seconds       = 300
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }

  min_instances = 1
  max_instances = 10
}

resource "google_cloud_run_domain_mapping" "api_friendease_id" {
  name     = "api-friendease-id"
  location = var.region
  metadata {
    namespace = var.project
  }

  spec {
    route_name       = google_cloud_run_service.backend-api.name
    domain_name      = var.custom-domain
    certificate_mode = "AUTOMATIC"
    security_policy  = "SECURE_ALWAYS"

    template {
        containers {
          image = "asia.gcr.io/hexavator/friendease-backend"
        }
    scaling {
      # Min instances
      min_instance_count = 1
      max_instance_count = 3
    }
    }

    traffic {
      percent         = 100
      latest_revision = true
    }

    managed_certificate {
      domains = [var.custom-domain]
    }
  }
}
