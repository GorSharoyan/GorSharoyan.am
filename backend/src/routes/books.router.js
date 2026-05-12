//Library imports
import express from "express";

//Model import
import Books from "../models/Archives/Books.js";

//generic imports
import genericRouter from "./1_generic.router.js";

const booksRouter = genericRouter("books", Books);

export default booksRouter;
