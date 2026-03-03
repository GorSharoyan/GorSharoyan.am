import mongoose from "mongoose";

const schemasSchema = new mongoose.Schema(
  {
    fields: {
      type: Array,
      required: true
    }
  },
  { timestamps: true }
);

const Schemas = mongoose.model("Schemas", schemasSchema);
export default Schemas;
