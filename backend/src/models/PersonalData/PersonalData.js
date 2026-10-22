import mongoose from "mongoose";

//database imports
import { connectToPersonalDataDb } from "../../config/database.js";

const personalDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  slogan: { type: String, required: true },
  bio: { type: String, required: true }
});

const PersonalData = connectToPersonalDataDb.model(
  "PersonalData",
  personalDataSchema
);
export default PersonalData;
