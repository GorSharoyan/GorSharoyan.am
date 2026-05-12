//Library imports
import express from "express";

//Model import
import Music from "../models/Archives/Music.js";

//generic imports
import genericRouter from "./1_generic.router.js";

const musicRouter = genericRouter("musics", Music);

export default musicRouter;
