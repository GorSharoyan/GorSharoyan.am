import mongoose from "mongoose";
import { Model } from "mongoose";

//database imports
import { connectToPersonalDataDb } from "../../config/database";

const PersonalDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  slogan: { type: String, required: true },
  bio: { type: String, required: true }
});

const PersonalData = connectToPersonalDataDb.model(
  "PersonalData",
  PersonalDataSchema
);
