//Services imports
import { postData } from "./fetch.service";

//config imports
import { MUSIC_API } from "../config/api";

export default async function postBooks(musicBody) {
  return await postData(MUSIC_API, musicBody);
}
