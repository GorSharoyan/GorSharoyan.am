//Libary imports
import jwt from "jsonwebtoken";
//Environment Variable imports
import dotenv from "dotenv";
dotenv.config();

// Below  function is dedicated to generate web tokens
export const generateToken = (payload, expiresIn = "1h") => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
};

// Below funciton is dedicated to verify arrived tokens from frontend
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return null; // token invalid or expired
  }
};

//Token is needed as a verifictation step in order to securely connect frontend to the backend
