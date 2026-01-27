import express from "express";
import adminController from "../controllers/admin.contorller.js";

const adminRouter = express.Router();

//Test function to test if connection with frontend is working is below
//Tips : don't forget to restart bakcend server or run it via nodeboon before posting data in frontend
adminRouter.post("/login", (req, res) => {
  console.log("Form data received from frontend:", req.body);
  res.json({ message: "Login received" });
});

export default adminRouter;
