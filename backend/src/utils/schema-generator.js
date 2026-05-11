//library imports
import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

// Environemnt Variables imports
const mongoDBArchives_URI = process.env.mongoDB_Archives_URI;

// Load environment variables
dotenv.config();

// Convert ES Module URL to file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to models folder
const modelsPath = path.join(__dirname, "../models");

export default async function generateSchemas() {
  // Code below is need to to connect to the MongoDB and establish a link to it
  const client = new MongoClient(mongoDBArchives_URI);
  try {
    //#Step 1 Connecting to the DB
    //Here we are actully connected to the Db
    await client.connect();

    //#Step 2 Calling the DB
    //Th this point we gain final access to the Clients DB
    const db = client.db();

    //#Step 3 reading all models from the DB
    // Read all model files
    const files = fs.readdirSync(modelsPath);

    //Step 4 lloping inside the models in db
    for (const file of files) {
      if (!file.endsWith(".js")) continue; // skip non-js files

      // Step 5: Dynamically import the model (ES Modules)
      //as we have changed in the package-json require to import we need to add this code in ored to have a clear syntax
      const modelPath = path.join(modelsPath, file);
      const modelModule = await import(`file://${modelPath}`);
      const model = modelModule.default;

      // Only process if it's a Mongoose model
      if (!model.schema) continue;

      const schemaObj = model.schema.obj;

      // Convert Mongoose schema fields into frontend-safe JSON
      const fields = Object.entries(schemaObj).map(([key, value]) => {
        let type = value.type?.name?.toLowerCase() || "string";

        if (value.enum) type = "select"; // convert enum fields to select
        return {
          name: key,
          type,
          label: key.charAt(0).toUpperCase() + key.slice(1),
          required: !!value.required,
          options: value.enum || []
        };
      });

      const schemaDoc = { collection: model.collection.name, fields };

      // Upsert into 'schemas' collection
      await db
        .collection("schemas")
        .updateOne(
          { collection: model.collection.name },
          { $set: schemaDoc },
          { upsert: true }
        );

      console.log(`Schema for '${model.collection.name}' synced successfully.`);
    }
  } catch (err) {
    console.error("Error generating schemas:", err);
  } finally {
    await client.close();
  }
}
