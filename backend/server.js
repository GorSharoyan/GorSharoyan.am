const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectToDb = require("././config/database");

//Creating Express.js app
const app = express();
// loading environment variables
dotenv.config();

//Middleware
app.use(cors()); // Allow frontend requests from other origins
app.use(express.json()); // Parse JSON request bodies

//MongoDB database deployment
connectToDb();

//Test Route
app.get("/", (req, res) => {
  res.send("Hello, backend is working!");
});

// Test Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
