//NPM import
import express from "express";

//generic controller imports :
import genericController from "../controllers/generic.controller.js";

// GetAll data Generic Router
const genericRouter = (modelsName, model, options = {}) => {
  const router = express.Router();
  const controller = genericController(model, options);

  //debug
  console.log("Gerneric Rotuer Gets Model", modelsName, model, options);

  // This is a very important piece of code
  // Here is all about choosing a route based on information that you get from the generic cotnroller

  if (controller.getAllItems) {
    router.get("/", controller.getAllItems);
  }

  if (controller.getSingelItem) {
    router.get("/", controller.getSingelItem);
  }

  router.get("/:id", controller.getById);
  router.post("/", controller.postItem);
  router.put("/:id", controller.updateItem);
  router.delete("/:id", controller.removeItem);

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
