//NPM,libraries imports
import mongoose from "mongoose";

//environment varialbes imports
import dotenv from "dotenv";
dotenv.config();

// environment variables:
const mongoDB_URI = process.env.mongoDB_URI;
const mongoDB_Archives_URI = process.env.mongoDB_Archives_URI;
const mongoDB_Admins_URI = process.env.mongoDB_Admins_URI;
const mongoDB_Schemas_URI = process.env.mongoDB_Schemas_URI;
const mongoDB_Projects_URI = process.env.mongoDB_Projects_URI;
const mongoDB_Personal_Data_URI = process.env.mongoDB_Personal_Data_URI;

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

//#1  This variable is responsible for connected to Archives in MongoDB
// this is another sytnax it don't use default connection but it is a named connection
export const connectToArchivesDb =
  mongoose.createConnection(mongoDB_Archives_URI);

//#2  This variable is responsible for connected to Admins in MongoDB
export const connectToAdminsDb = mongoose.createConnection(mongoDB_Admins_URI);
//#3  This varialbe is dedicated to establish a connection to the schemas
export const connectToSchemasDb =
  mongoose.createConnection(mongoDB_Schemas_URI);
//#4 This variable is dedicated to establish a connection to the Projects in MongoDB
export const connectToProjectsDb =
  mongoose.createConnection(mongoDB_Projects_URI);
//#5 this variable is dedicated to establish a connection the the Personal Data in MongoDb
export const connectToPersonalDataDb = mongoose.createConnection(
  mongoDB_Personal_Data_URI
);

