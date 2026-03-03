//Library imports
import express from "express";

//Model import
import Movies from "../models/Movies.js";

//generic imports
import genericRouterGetAll from "./1_generic.router.js";

const moviesRouter = genericRouterGetAll(Movies);

export default moviesRouter;
