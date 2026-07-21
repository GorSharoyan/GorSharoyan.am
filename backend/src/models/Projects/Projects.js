import mongoose from "mongoose";

// Database Imports
import { connectToProjectsDb } from "../../config/database.js";

const projectsSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true
    },
    Year: {
      type: String,
      required: true
    },
    shortDescription: {
      type: String,
      required: true
    },
    LongDescription: {
      type: String,
      required: true
    },
    Partner: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false, // removes __v
    timestamps: false // uncomment if you want createdAt / updatedAt
  }
);

const Projects = connectToProjectsDb.model("Projects", projectsSchema);
export default Projects;
