// Load environment variables first
import dotenv from "dotenv";
dotenv.config();

// Library imports
import express from "express";
import cors from "cors";

// Routes
import booksRouter from "./src/routes/books.router.js";
import musicRouter from "./src/routes/music.router.js";
import moviesRouter from "./src/routes/movies.router.js";
import adminRouter from "./src/routes/0_admin.router.js";
import schemasRouter from "./src/routes/schemas.router.js";

// DB
import connectToDb from "./src/config/database.js";

//utils/services imports
import generateSchemas from "./src/utils/schema-generator.js";

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

// Calling/using the Routes
app.use("/admin", adminRouter);
app.use("/books", booksRouter);
app.use("/movies", moviesRouter);
app.use("/music", musicRouter);
app.use("/schemas", schemasRouter);

// I used this test to check how many requests i rescive from the frontend .
//This helps to rest assure if there are no multiple requests from the frontend .
// let postCount = 0;
// app.use((req, res, next) => {
//   if (req.method === "POST" && req.originalUrl === "/admin/login") {
//     postCount += 1;
//     console.log(`POST /admin/login count: ${postCount}`);
//   }
//   next();
// });

// Test Route
app.get("/", (req, res) => {
  res.send("Hello, backend is working!!!!!!!!!!!");
});

//Sytnax Below is dedicated for post method testing
// app.post("/test", (req, res) => {
//   console.log("Received POST /test", req.body);
//   res.json({ message: "Test OK" });
// });

// At this point we are using services/utisl I have created
const generateSchemasCall = async () => {
  try {
    await generateSchemas();
    console.log("Schemas generated successfully");
  } catch (err) {
    console.error("Error generating schemas:", err);
  }
};

// Call it
generateSchemasCall();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
