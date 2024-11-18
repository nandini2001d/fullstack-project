# Use the official Maven image as the base image
#FROM maven:3.8.4-openjdk-17 AS build

# Set the working directory
#WORKDIR /app

# Copy the pom.xml and any other necessary configuration files
#COPY ./pom.xml /app
#COPY ./src /app/src

# Build the application
#RUN mvn clean package -Dmaven.test.skip=true

# Create a new image for running the application
#FROM openjdk:17-jdk

# Set the working directory
#WORKDIR /app

# Copy the built JAR file from the previous stage
#ADD target/app.jar app.jar
#COPY --from=build /app/target/*.jar app.jar

# Expose the port on which the Spring Boot application will run
#EXPOSE 8080

# Command to run the application
#CMD ["java", "-jar", "app.jar"]

#COPY target/*.jar docker-demo-app.jar   #not imp

FROM openjdk:17  
EXPOSE 8080  
ADD target/app.jar app.jar
#COPY target/*.jar docker-demo-app.jar   #not imp
ENTRYPOINT ["java","-jar","/app.jar"]
