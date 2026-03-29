//Library imports
import express from "express";

//Model import
import Schemas from "../models/Schemas.js";

//generic imports
import genericRouter from "./1_generic.router.js";

const schemasRouter = genericRouter("schemas", Schemas);

export default schemasRouter;
