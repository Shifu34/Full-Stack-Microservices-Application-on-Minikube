# Full-Stack Microservices Application on Minikube

## Overview

This is a full-stack microservices application with a React frontend, Flask backend, and PostgreSQL database. The app is containerized with Docker and orchestrated with Kubernetes.

### Prerequisites

- Docker & Docker Compose
- Minikube & kubectl

### Local Setup with Docker Compose

1. Run `docker-compose up` to start all services locally.
2. Access the frontend at `http://localhost:3000`.

### Deployment on Minikube

1. Start Minikube: `minikube start`.
2. Apply Kubernetes configurations:
   ```bash
   kubectl apply -f kubernetes/
