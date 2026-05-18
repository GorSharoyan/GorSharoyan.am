import mongoose from "mongoose";

// DataBase Imports
import { connectToSchemasDb } from "../../config/database.js";

const schemasSchema = new mongoose.Schema(
  {
    fields: {
      type: Array,
      required: true
    }
  },
  { timestamps: true }
);

const Schemas = connectToSchemasDb.model("Schemas", schemasSchema);
export default Schemas;
