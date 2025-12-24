const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://gorSharoyan:Nscrew32073207@gorsharoyandb.7jrafxi.mongodb.net/?appName=GorSharoyanDB"
    );
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Stop server if DB connection fails
  }
};

module.exports = connectToDb;
