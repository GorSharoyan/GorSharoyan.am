// Library, framework imports
import express from "express";

//controller imports
import adminController from "../controllers/admin.contorller.js";
// utils/services imports
import { hashPassword } from "../utils/hash.js";

const adminRouter = express.Router();

//Test function to test if connection with frontend is working is below
// //Tips : don't forget to restart bakcend server or run it via nodemoon before posting data in frontend
// adminRouter.post(
//   "/login",
//   adminController
//   // (req, res) => {
//   // res.json({ message: "Login received" });
//   // }
// );

adminRouter.post("/login", adminController);

export default adminRouter;
