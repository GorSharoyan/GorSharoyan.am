//Library imports
import express from "express";

//Model import
import Projects from "../models/Projects/Projects.js";

//generic imports
import genericRouter from "./1_generic.router.js";

const projectsRouter = genericRouter("projects", Projects);

export default projectsRouter;
