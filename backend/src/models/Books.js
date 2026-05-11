import mongoose from "mongoose";

// DataBase Imports
import { connectToArchivesDb } from "../config/database.js";

const booksSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    shortDescription: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    establishment: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Books = connectToArchivesDb.model("Books", booksSchema);
export default Books;
