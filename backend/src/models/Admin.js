import mongoose from "mongoose";

// this is schema for ADmins login and password.
// here all the information is tored how inputs hsould be , also ther is written typo Uniqe that means htat no any
//  other collection could store the name wiht that tag .
const adminSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
