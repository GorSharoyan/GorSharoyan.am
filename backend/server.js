//NPM, library imports :
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//Models imports
import Books from "./src/models/Books.js";
import Movies from "./src/models/Movies.js";

// genericRouter imports
import genericRouter from "./src/routes/generic.router.js";
// DB imports
import connectToDb from "./src/config/database.js";

//Creating Express.js app
const app = express();

//Creating Routes
const booksRouter = genericRouter(Books);
// const moviesRouter = genericRouter(Movies);

// loading environment variables
dotenv.config();

//connecting to DB
connectToDb();

//Middleware
app.use(cors()); // Allow frontend requests from other origins
app.use(express.json()); // Parse JSON request bodies

// using Routes
app.use("/books", booksRouter);
// app.use("/movies", moviesRouter);

//Test Route
app.get("/", (req, res) => {
  res.send("Hello, backend is working!");
});

// Test Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
