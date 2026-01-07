//NPM import
import express from "express";

//generic controller imports :
import genericController from "../controllers/generic.controller.js";

const genericRouter = (model) => {
  const router = express.Router();
  const controller = genericController(model);
  router.get("/", controller.getAllItems);
  console.log("Generic Router Works!!");

  return router;
};

export default genericRouter;
