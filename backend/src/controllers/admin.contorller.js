// library imports
import Express from "express";

// Models Imports
import Admin from "../models/Admin.js";

// Utils imports
import { hashPassword, comparePassword } from "../utils/hash.js";

// Admin Controller: Handles login requests
const adminController = async (req, res) => {
  //# Step 0
  // Simple Check if We have rescived data from the frontend
  //This helps to check if the connection is all setup
  console.log(
    req.body && Object.keys(req.body).length > 0
      ? "Data received from the frontend:"
      : "No data received from the frontend"
  );
  //# Step 1
  // Safely extract login and password from request body
  const rawLogin = req.body?.login ?? "";
  const rawPassword = req.body?.password ?? "";

  //# Step 2
  // Clean up the values
  const login = rawLogin.toLowerCase().trim();
  const inputPassword = rawPassword.trim();

  try {
    //# Step 3
    // Login: check if fields are provided
    if (!login || !inputPassword) {
      return res.status(400).json({ message: "Login and/orpassword required" });
    }

    //# Step 4
    // Fidning Admin in DB
    const admin = await Admin.findOne({ login });

    if (admin) {
      console.log("Admin has been found in DB:", admin);

      //Step 5
      // Comapiring input password with the one in the DB

      const loginState = await comparePassword(inputPassword, admin.password);

      console.log(loginState);

      return res.json({ message: "Admin exists in DB" });
    } else {
      console.log("Admin NOT found in DB");
      return res.status(401).json({ message: "Invalid login" });
    }
  } catch (error) {
    console.error("Error checking admin:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export default adminController;
