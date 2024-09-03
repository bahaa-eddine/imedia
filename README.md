# Technical Test - Imedia24 GmbH

## Setup and Execution

To run the complete project, please follow the steps below:

1. Navigate to the Docker directory:
   ```bash
   cd docker
2. Build and start the services using Docker Compose:
    ```bash
   docker-compose -p imedia up --build
   
Note:
The backend and frontend projects are separate and do not have any direct relationship or dependencies between them.

## Improvments & Future work
# Backend Enhancements
- Adapt the application to support multiple profiles with different database configurations.
- Integrate Keycloak for enhanced security, including authentication and authorization.
- Implement Spring WebFlux to enable reactive programming for better performance and scalability.
- Develop additional microservices for notifications and other functional components.
- Incorporate Spring Cloud for improved microservices management and communication.
- Add caching mechanisms to optimize response times and system efficiency.
- Implement load balancing with NGINX or Traefik for better traffic management.
- Orchestrate containers using Kubernetes for scalable and resilient deployments.
- Define and implement auto-deployment strategies specific to the client's cloud environment.
- ...

# Frontend Enhancements
- Implement atomic design and micro frontend architecture for better modularity and scalability.
- Migrate codebase from JavaScript to TypeScript for enhanced type safety and maintainability.
- Adapt the frontend to support multiple environments for seamless deployment across different stages.
- ...

