# Real Estate Marketplace

## Setup Instructions

### Create Application Using Docker MongoDB

To create a MongoDB database using Docker, follow these steps:

1. Install Docker on your machine.
2. Open a terminal window and run the following command:

```
docker run
    --rm
    -d
    --name real-estate-marketplace-db
    -p 27017:27017
    -e MONGO_INITDB_ROOT_USERNAME=myuser
    -e MONGO_INITDB_ROOT_PASSWORD=mypassword
    mongo
```

This will create a new Docker container with the name `real-estate-marketplace-db` and start a MongoDB instance inside it.

3. Verify that the container is running by running the following command:

```
docker ps
```

This will show a list of all running Docker containers, including the one you just created.

You can now use this MongoDB instance for your Real Estate Marketplace application.
