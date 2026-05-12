//Library imports
import express from "express";

//Model import
import Movies from "../models/Archives/Movies.js";

//generic imports
import genericRouter from "./1_generic.router.js";

const moviesRouter = genericRouter("movies", Movies);

export default moviesRouter;
