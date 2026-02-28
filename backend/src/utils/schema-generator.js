//library imports
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
require("dotenv").config();

// Environemnt Variables imports
const mongoUri = process.env.mongoDB_URI;

// Path to models folder
const modelsPath = path.join(__dirname, "./models");

export default async function generateSchemas() {
  // Code below is need to to connect to the MongoDB and establish a link to it
  const client = new MongoClient(mongoUri);
  try {
    //Here we are actully connected to the Db
    await client.connect();
    //Th this point we gain final access to the Clients DB
    const db = client.db();

    // Read all model files
    const files = fs.readdirSync(modelsPath);

    for (const file of files) {
      if (!file.endsWith(".js")) continue; // skip non-js files

      const model = require(path.join(modelsPath, file));

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

module.exports = generateSchemas;
