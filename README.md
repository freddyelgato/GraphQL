
# GraphQL API - Node.js Application

This project is a simple GraphQL API built using Node.js and Docker. You can run it locally and interact with it using tools like Postman or GraphQL Playground.

## Requirements
- **Docker**: [Install Docker](https://www.docker.com/get-started) if you don’t have it yet.

## Installation Instructions

1. **Clone this repository**:
   ```bash
   git clone https://github.com/freddyelgato/GraphQL.git
   cd GraphQL
2. **Build and run the application with Docker**:
   ```bash
   docker build -t graphql-api .
   docker run -d -p 4000:4000 --name graphql-api-container graphql-api
3. **Access the API**
   Open your browser or Postman and visit:
   - **GraphQL Playground**: [http://localhost:4000/graphql](http://localhost:4000/graphql)


## API Methods

Use the following queries and mutations in the GraphQL Playground or Postman:

1. **Get all friends**:
   ```bash
   query {
     friends {
       id
       name
       age
     }
   }
2. **Mutation**:
   ```bash
   mutation {
   addPerson(
    name: "Juanito Alimaña"
    phone: "09000000123"
    street: "Av. Salcedo"
    city: "Cuenca"
   ) {
    name
    phone
    address {
      street
      city
    }
    id
   }
   }
3. **Get Person**
   ```bash
   query {
   findPerson(name: "Freddy Moreira") {
    name
    phone
    address {
      street
      city
    }
    id
   }
   }

## Images of the Project in operation
<p align="center">
  <img src="https://i.postimg.cc/qtr66V9V/1.png" alt="Imagen 1">
  <br>
  <a href="https://postimg.cc/qtr66V9V">Watch Here</a>
</p>

<p align="center">
  <img src="https://i.postimg.cc/vgH1X7Y0/2.png" alt="Imagen 2">
  <br>
  <a href="https://postimg.cc/vgH1X7Y0">Watch Here</a>
</p>

<p align="center">
  <img src="https://i.postimg.cc/xkPJKp2k/3.png" alt="Imagen 3">
  <br>
  <a href="https://postimg.cc/xkPJKp2k">Watch Here</a>
</p>


## Useful Commands

- View running containers: `docker ps`
- Stop the container: `docker stop graphql-api-container`
- Remove the container: `docker rm graphql-api-container`
- Remove the image: `docker rmi graphql-api`

## Docker Hub Image
You can push the image to Docker Hub for easy access if needed: [Docker Hub Image](https://hub.docker.com/r/2424833f/graphql-image)

## GitHub Repository
Check out the GitHub repository for more details and updates: [GitHub Repository](https://github.com/freddyelgato/GraphQL)


