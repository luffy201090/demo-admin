FROM adoptopenjdk/openjdk11:jre-11.0.9_11.1-alpine
ARG JAR_FILE=demo-admin-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
