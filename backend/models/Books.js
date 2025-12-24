const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
      alias: "Book Name" // maps JS name to MongoDB field
    },
    author: {
      type: String,
      required: true,
      alias: "Author"
    },
    whenPublished: {
      type: Number,
      required: true,
      alias: "When Published"
    },
    shortDescription: {
      type: String,
      alias: "Short Description"
    }
  },
  { timestamps: true }
); // optional: adds createdAt and updatedAt

module.exports = mongoose.model("Books", booksSchema);
