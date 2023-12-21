resource "google_cloud_run_v2_service" "backend-api" {
  name     = "backend-api"
  location = var.region

  template {
      containers {
        image = "asia.gcr.io/hexavator/friendease-backend"
      }
      scaling  {
            # Min instances
            min_instance_count  = 1
            max_instance_count  = 3
        }

    #   container_concurrency = 10
    #   timeout_seconds       = 300

  }

#   traffic {
#     percent         = 100
#     latest_revision = true
#   }

}

resource "google_cloud_run_domain_mapping" "api_friendease_id" {
  name     = "api.friendease.id"
  location = var.region
  spec {
    route_name = google_cloud_run_v2_service.backend-api.name
  }
}
