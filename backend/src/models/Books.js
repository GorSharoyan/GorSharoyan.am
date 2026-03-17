import mongoose from "mongoose";

const booksSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    shortDescription: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    establishment: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Books", booksSchema);
