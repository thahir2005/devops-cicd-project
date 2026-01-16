# 🚀 End-to-End CI/CD Pipeline with Docker & GitHub Actions

This project demonstrates a complete DevOps CI/CD workflow where every code change is automatically built, containerized, and published using GitHub Actions and Docker.

## 🔧 Tech Stack
- Node.js (Express)
- Git & GitHub
- Docker
- GitHub Actions (CI/CD)
- Docker Hub

## 📌 What This Project Does

Whenever code is pushed to the `main` branch:

1. GitHub Actions is triggered
2. The application is built
3. A Docker image is created
4. The image is pushed to Docker Hub automatically

This removes all manual steps and enables continuous delivery.

## 🧱 Architecture Flow

Developer Code Change
|
v
Git Push
|
v
GitHub Actions
|
v
Docker Build
|
v
Docker Hub Push
|
v
docker pull & run

## ▶ Run the App

```bash
docker pull <your-docker-username>/devops-cicd-app:latest
docker run -d -p 4000:3000 <your-docker-username>/devops-cicd-app:latest

Open in browser:

	http://localhost:4000


What I Learned
	•	Automating builds using GitHub Actions
	•	Containerizing applications using Docker
	•	Secure credential handling using GitHub Secrets
	•	Building real-world CI/CD pipelines
	•	Debugging production-style failures
