import mongoose from "mongoose";
// DataBase Imports
import { connectToArchivesDb } from "./../../config/database.js";

const moviesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    genre: {
      type: String,
      required: true
    },
    director: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const Movies = connectToArchivesDb.model("Movies", moviesSchema);
export default Movies;
