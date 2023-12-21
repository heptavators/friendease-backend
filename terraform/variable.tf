locals {
    labels = {
        "data-project" = var.data-project
    }
}

variable "project" {
    type= string
    description = "ID Google project"
    default = "hexavator"
}

variable "region" {
    type= string
    description = "Region Google project"
    default = "asia-southeast2"
}

variable  "data-project" {
    type = string
    description = "Name of data pipeline project to use as resource prefix"
    default = "friendease"
}