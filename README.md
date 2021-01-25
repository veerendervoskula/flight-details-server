# flight-details-server
Nodej express rest api connected to mongodb for performin g CRUD operations on flight details

## Overview

- Store and retrive flight details to/from mongoDB
- Provides endpoints to manage (CRUD) flight details

## Usage

- Install dependencies
    - npm install
- Scripts 
    - npm start (just run the application)
   - npm test (run all tests)
- Docker
    - docker-compose up -d


## Endpoints
#GET list http://localhost:3600/flight-details
#PATCH http://localhost:3600/flight-details/:id
#DELETE http://localhost:3600/flight-details/:id
#GET http://localhost:3600/flight-details/:id
#POST http://localhost:3600/flight-details
