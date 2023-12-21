resource "google_cloud_run_v2_service" "backend-api" {
  name     = "backend-api"
  location = var.region

  template {
    containers {
      image = "asia.gcr.io/hexavator/friendease-backend@sha256:2379c7272c8061ee9f8c0aab7f5dcb646371019a6fbcd4ff8a9dcfbad7cc4451"

      # Expose port 3000
      ports {
        container_port = 3000
      }
    }

    scaling {
      min_instances = 1
      max_instances = 3
    }

    # Other configurations if needed
  }
}

resource "google_cloud_run_domain_mapping" "api_friendease_id" {
  name     = "api.friendease.id"
  location = var.region
  metadata {
    namespace = "${var.data-project}-api.friendease.id"
  }

  spec {
    route_name = google_cloud_run_v2_service.backend-api.name
  }
}
