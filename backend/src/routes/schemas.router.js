//Library imports
import express from "express";

//Model import
import Schemas from "../models/Schemas.js";

//generic imports
import genericRouterGetAll from "./1_generic.router.js";

const schemasRouter = genericRouterGetAll(Schemas);

export default schemasRouter;
