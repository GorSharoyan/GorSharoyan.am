//NPM import
import express from "express";

//generic controller imports :
import genericController from "../controllers/generic.controller.js";

// GetAll data Generic Router
const genericRouterGetAll = (model) => {
  const router = express.Router();
  const controller = genericController(model);
  router.get("/", controller.getAllItems);
  console.log("Generic Router Works!!");

  return router;
};

// Post Data Generic Router Router
// const postDataRouter = (location, cotnroller) => {
//   const router = express.Router();
//   router.post(location, controller);
//   return router;
// };

export default genericRouterGetAll;
