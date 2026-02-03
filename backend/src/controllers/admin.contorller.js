// library imports
import Express from "express";

// Models Imports
import Admin from "../models/Admin.js";

// Admin Controller: Handles login requests
const adminController = async (req, res) => {
  try {
    // # 1 Step: Verification of the login and password
    // At this point we check if we received all required data
    // const { login, password } = req.body;
    const rawLogin = req.body?.login ?? "";
    const login = rawLogin.trim().toLowerCase();
    console.log("login:", login);

    const rawPassword = req.body?.password ?? "";
    const password = rawPassword.trim().toLowerCase();
    console.log("password:", password);
    // console.log("password:", password);

    if (!login || !password) {
      // If either field is missing, return 400 Bad Request
      return res.status(400).json({ message: "Login and password required" });
    }

    // #2  Step: Find admin data in the DB
    // At this point we check if there is any information about the admin in the DB
    const admin = await Admin.findOne({
      login: login
    });

    if (admin) {
      console.log("Admin has been found in DB:");
      return res.json({ message: "Admin exists in DB" });
    } else {
      console.log("Admin NOT found in DB");
      return res.status(401).json({ message: "Invalid login" });
    }
  } catch (error) {
    // Catch connection or query errors
    console.error("Error checking admin:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export default adminController;
