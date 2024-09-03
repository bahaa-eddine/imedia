# Use a base image with JDK and Gradle installed
FROM gradle:7.3.3-jdk8 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the Gradle wrapper and project files into the container
COPY . .

# Build the application, the output will be in /app/build/libs/
RUN gradle clean build -x test

# Use a smaller base image for running the application
FROM openjdk:8-jdk-alpine

# Expose the port the app runs on
EXPOSE 8080

# Copy the JAR file from the build stage
COPY --from=build /app/build/libs/shop-0.0.1-SNAPSHOT.jar imedia24api.jar

# Run the JAR file
ENTRYPOINT ["java", "-jar", "imedia24api.jar"]
