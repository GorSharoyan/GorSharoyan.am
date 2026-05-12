//NPM,libraries imports
import mongoose from "mongoose";

//environment varialbes imports
import dotenv from "dotenv";
dotenv.config();

const mongoDB_URI = process.env.mongoDB_URI;

// This function is responsible for connecting to the MongoDB database using Mongoose. It uses the connection string from the environment variables and handles any connection errors that may occur. If the connection is successful, it logs a success message; otherwise, it logs an error message.
//As you see from the syntax this is a default connection
export default async function connectToDb() {
  try {
    console.log("MongoDB is connected successfully! ");
    console.log("This is inside mongoDB", mongoose.collections);
    return await mongoose.connect(mongoDB_URI);
  } catch (error) {
    console.log("MongoDB is not connected");
  }
}

// This variable is responsible for connected to Archives in MongoDB
// this is another sytnax it don't use default connection but it is a named connection
export const connectToArchivesDb = mongoose.createConnection(
  process.env.mongoDB_Archives_URI
);

// This variable is responsible for connected to Admins in MongoDB
export const connectToAdminsDb = mongoose.createConnection(
  process.env.mongoDB_Admins_URI
);
