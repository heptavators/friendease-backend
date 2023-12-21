resource "google_storage_bucket" "testing-bucket" {
  project = var.project
  name = "${var.data-project}-testing-bucket"
  force_destroy = false
  uniform_bucket_level_access = true
  location = var.region
  labels = local.labels
}