//NPM import
import express from "express";

//generic controller imports :
import genericController from "../controllers/generic.controller.js";

// GetAll data Generic Router
const genericRouter = (modelsName, model) => {
  const router = express.Router();
  const controller = genericController(model);

  //debug
  console.log("Gerneric Rotuer Gets Model", modelsName, model);

  router.get("/", controller.getAllItems);
  router.post("/", controller.postItem);

  console.log("Generic Router Works!!");

  return router;
};

// Post Data Generic Router Router
// const postDataRouter = (location, cotnroller) => {
//   const router = express.Router();
//   router.post(location, controller);
//   return router;
// };

export default genericRouter;
