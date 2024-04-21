// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// Create an Express application
const app = express();

// Connect to MongoDB cloud at the specified database
mongoose.connect("mongodb+srv://sanskarjadhav:*********@projects.0wab4zm.mongodb.net/login?retryWrites=true&w=majority&appName=Projects");

// Import the MongoDB model for handling sign up data
const collection = require('./model/Signupschema');

// Configure body-parser middleware to parse JSON and URL encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use cors middleware to enable CORS
app.use(cors());

// Handle POST requests to the /Signup route
app.post("/Signup", (req, res) => {
    // Create data object containing the user ID and password from request body
    const data = {
        uid: req.body.uid,
        password: req.body.pw
    };

    // Use Mongoose to create a new document in the database
    collection.create([data])
        .then(() => res.json("Successfully Saved"))  // Respond with success message
        .catch(err => res.json("Data not saved: " + err));  // Handle errors and respond with error message
});

// Handle POST requests to the /Signin route
app.post('/Signin', (req, res) => {
    // Attempt to find a single document matching the user ID from request body
    collection.findOne({ uid: req.body.uid })
        .then((result) => {
            if (!result) {
                // If no document is found, respond with 'No user found'
                return res.json({ message: 'No user found' })
            } else {
                // Check if the password in the database matches the one provided in the request
                let validPassword = result.password === req.body.pw;
                if (validPassword) {
                    // redirect user to welcome page
                    return res.redirect("http://localhost:3000/Welcome");
                } else {
                    // If the password is invalid, respond with 'Password is incorrect'
                    return res.json({ message: 'Password is incorrect' })
                }
            }
        })
        .catch(err => {
            // On error, redirect to the sign in page
            res.redirect("http://localhost:3000/SignIn");
        });
});


// Start the server on port 4000
app.listen(4000, () => console.log("Server Started"));
