//Models Imports
import Admin from "../models/Admin.js";

const adminController = async (res, req) => {
  // Data Wrapped in Tyr catch in order to catch connection errors
  try {
    //1 Step : verification of the login and password
    // at this point we see if we have rescived any kind of requried data
    const { login, password } = req.body;
    if (!login || !password) {
      return res.status(400).json({ message: "Login and password required" });
    }
    //2 Step : find admin data in the DB
    //at this point we see if there is , there was and information about admin in the DB
    const admin = Admin.findOne({ login, password });
    if (!admin) {
      return res.status(401).json({ message: "Invalid login or password" });
    }
    //3 Step : Displaying rescevied information from the frontend
    res.status(200).json({
      message: "Login successful",
      admin: {
        id: admin._id,
        login: admin.login
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export default adminController;
