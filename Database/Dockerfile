# database/Dockerfile

FROM postgres:13

# Set environment variables for database credentials
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin
ENV POSTGRES_DB=auth_db

# Copy initialization script
COPY init-db.sql /docker-entrypoint-initdb.d/
