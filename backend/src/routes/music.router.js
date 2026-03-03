//Library imports
import express from "express";

//Model import
import Music from "../models/Music.js";

//generic imports
import genericRouterGetAll from "./1_generic.router.js";

const musicRouter = genericRouterGetAll(Music);

export default musicRouter;
