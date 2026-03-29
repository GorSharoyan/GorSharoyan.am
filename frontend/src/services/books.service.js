//Services imports
import { postData } from "./fetch.service";

//config imports
import { BOOKS_API } from "../config/api";

export default async function postBooks(booksBody) {
  console.log("postBooks booksBody", booksBody);
  return await postData(BOOKS_API, booksBody);
}
