#!/bin/bash

# Name of your running database container
CONTAINER_NAME=manwha_db

# Database connection details
DB_USER=user
DB_NAME=manwhaDB

# Path to the SQL file (from the container's perspective)
SQL_FILE=/database/createTables.sql

# Run the SQL file inside the container
docker exec -i "$CONTAINER_NAME" psql -U "$DB_USER" -d "$DB_NAME" -f "$SQL_FILE"
