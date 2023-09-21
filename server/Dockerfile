FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM maven:3.8.4-openjdk-17-slim
COPY --from=build /target/TodoApp-0.0.1-SNAPSHOT.jar TodoApp.jar
EXPOSE 27017
ENTRYPOINT [ "java","-jar","TodoApp.jar" ]