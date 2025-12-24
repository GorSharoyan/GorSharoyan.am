//NPM, library imports
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectToDb = require("././config/database");

//Creating Express.js app
const app = express();
// loading environment variables
dotenv.config();

//MongoDB database deployment
connectToDb();

//Middleware deployment
app.use(cors()); // Allow frontend requests from other origins
app.use(express.json()); // Parse JSON request bodies

//here we connect server.js to the routes(in this project every route is the same as schema and shcema is the same as colleciton in MongoDB)
app.use("/books", booksRouter); // All /books requests go to booksRouter

//Test Route
app.get("/", (req, res) => {
  res.send("Hello, backend is working!");
});

// Test Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
