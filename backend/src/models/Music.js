import mongoose from "mongoose";

// DataBase Imports
import { connectToArchivesDb } from "../config/database.js";

const musicSchema = new mongoose.Schema(
  {
    artist: {
      type: String,
      required: true
    },
    album: {
      type: String,
      required: true
    },
    genre: {
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

const Music = connectToArchivesDb.model("Music", musicSchema);
export default Music;
