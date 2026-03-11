//Services imports
import { postData } from "./fetch.service";

//config imports
import { MOVIES_API } from "../config/api";

export default function postMovies(moviesBody) {
  return postData(MOVIES_API, moviesBody);
}
