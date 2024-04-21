// Import the mongoose module to interact with MongoDB
const mongoose = require("mongoose");

// Define a schema for user sign-up data
// The schema specifies the expected structure and data types for documents in a MongoDB collection
const signupTemplate = new mongoose.Schema({
    uid: String,
    password: String
});

// Create a model from the schema
// A model allows you to create instances of your documents
// 'data' is the name of the collection in the MongoDB database login
const collection = mongoose.model('data', signupTemplate);

// Export the model
// This makes the model available to other files in the application
module.exports = collection;
