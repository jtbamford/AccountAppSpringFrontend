FROM java:8
ARG artifact_id
ARG version
ENV artifact=${artifact_id}-${version}.war
COPY target/${artifact} /opt/${artifact}
EXPOSE 8080
ENTRYPOINT java -war /opt/${artifact}