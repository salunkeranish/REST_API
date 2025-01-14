Project Overview

This project demonstrates the implementation of a simple RESTful API using Node.js and Express.
The API manages a list of users with full CRUD functionality and includes features like middleware for request logging and validation, error handling, and an in-memory data source.

Requirements
1 clone this repository
2 install dependencies- npm install
3 start server - node app.js , base url - http://localhost:3000

Testing

Use Postman or ThunderClient to test the API.

Testing Steps:

GET /users:

Send a GET request to fetch all users.

Verify the returned list matches the expected format.

Take a screenshot of the request and response.

GET /users/:id:

Test with a valid id to fetch user details.

Test with an invalid id to verify error handling.

Take a screenshot of both scenarios.

POST /user:

Test with a complete JSON body:

{
    "firstName": "Alice",
    "lastName": "Smith",
    "hobby": "Gardening"
}

Test with a missing field (e.g., omit "hobby") to trigger validation.

Take screenshots of a successful request and a validation error.

PUT /user/:id:

Test updating a user with a valid id.

Test with an invalid id to check error handling.

Take screenshots for both cases.

DELETE /user/:id:

Test deleting a user with a valid id.

Test with an invalid id to verify error handling.

Take screenshots for both cases.
