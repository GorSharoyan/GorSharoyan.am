// Load environment variables first
import dotenv from "dotenv";
dotenv.config();

// NPM imports
import express from "express";
import cors from "cors";

// Models
import Books from "./src/models/Books.js";
// import Movies from "./src/models/Movies.js";

// Routers
import genericRouter from "./src/routes/generic.router.js";
import adminRouter from "./src/routes/admin.router.js";

// DB
import connectToDb from "./src/config/database.js";

// Creating Express.js app
const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"]
  })
);
app.use(express.json());

// Connect to DB
connectToDb();

// Routes
const booksRouter = genericRouter(Books);
// const moviesRouter = genericRouter(Movies);
app.use("/books", booksRouter);
app.use("/admin", adminRouter);
// app.use("/movies", moviesRouter);

// Test Route
app.get("/", (req, res) => {
  res.send("Hello, backend is working!");
});

//Sytnax Below is dedicated for post method testing
// app.post("/test", (req, res) => {
//   console.log("Received POST /test", req.body);
//   res.json({ message: "Test OK" });
// });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
