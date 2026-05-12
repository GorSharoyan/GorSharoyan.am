import mongoose from "mongoose";

// DataBase Imports
import { connectToArchivesDb } from "./../../config/database.js";

const schemasSchema = new mongoose.Schema(
  {
    fields: {
      type: Array,
      required: true
    }
  },
  { timestamps: true }
);

const Schemas = connectToArchivesDb.model("Schemas", schemasSchema);
export default Schemas;
