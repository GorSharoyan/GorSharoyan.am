//Services imports
import { postData } from "./fetch.service";

//config imports
import { MOVIES_API } from "../config/api";

export default async function postMovies(moviesBody) {
  return await postData(MOVIES_API, moviesBody);
}
