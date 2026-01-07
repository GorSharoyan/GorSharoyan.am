//NPM,libraries imports
import mongoose from "mongoose";

//environment varialbes imports
import dotenv from "dotenv";
dotenv.config();

const mongoDB_URI = process.env.mongoDB_URI;

export default async function connectToDb() {
  try {
    console.log("MongoDB is connected successfully! ");
    console.log(mongoDB_URI);
    const connection = await mongoose.connect(mongoDB_URI);
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    console.log("Collections in DB:", collections);

    return await mongoose.connect(mongoDB_URI);
  } catch (error) {
    console.log("MongoDB is not connected");
  }
}
