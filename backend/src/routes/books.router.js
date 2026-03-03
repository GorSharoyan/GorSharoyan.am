//Library imports
import express from "express";

//Model import
import Books from "../models/Books.js";

//generic imports
import genericRouterGetAll from "./1_generic.router.js";

const booksRouter = genericRouterGetAll(Books);

export default booksRouter;
