import { postData } from "./fetch.service";

//API imports
import { PersonalData_API } from "../config/api";

export default function postPersonalData(personalData) {
  return postData(PersonalData_API, personalData);
}
