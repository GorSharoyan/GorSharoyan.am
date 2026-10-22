import express from "express";

//Model import
import PersonalData from "../models/PersonalData/PersonalData.js";

//generic imports
import genericRouter from "./1_generic.router.js";

const personalDataRouter = genericRouter("personalData", PersonalData);

export default personalDataRouter;
