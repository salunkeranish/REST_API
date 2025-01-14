// Import necessary modules
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample in-memory data source
let users = [
    { id: "1", firstName: "Anshika", lastName: "Agarwal", hobby: "Teaching" },
    { id: "2", firstName: "Ramesh", lastName: "Verma", hobby: "Cycling" }
];

// Middleware to log request details
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Validation middleware for POST and PUT
const validateUser = (req, res, next) => {
    const { firstName, lastName, hobby } = req.body;
    if (!firstName || !lastName || !hobby) {
        return res.status(400).json({ error: "Missing required fields: firstName, lastName, hobby" });
    }
    next();
};

// Routes
// GET /users - Fetch all users
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

// GET /users/:id - Fetch a user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
});

// POST /user - Add a new user
app.post('/user', validateUser, (req, res) => {
    const { firstName, lastName, hobby } = req.body;
    const newUser = { id: (users.length + 1).toString(), firstName, lastName, hobby };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT /user/:id - Update an existing user
app.put('/user/:id', validateUser, (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    const { firstName, lastName, hobby } = req.body;
    user.firstName = firstName;
    user.lastName = lastName;
    user.hobby = hobby;
    res.status(200).json(user);
});

// DELETE /user/:id - Delete a user by ID
app.delete('/user/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === req.params.id);
    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }
    users.splice(userIndex, 1);
    res.status(200).json({ message: "User deleted successfully" });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "An unexpected error occurred" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
