//Services Imports
import { getData, editData, deleteData, postData } from "./fetch.service";

//Api Imports
import { Projects_API } from "../config/api";

//This funciton is dedicated to get all the projects from the dedicated colelciton in the DB
export function getAllProjects(Projects_API) {
  console.log("getting all projects");
  return getData(Projects_API);
}

//This function is dedicated to post a new project to the DB (only with Admin lvl priviledges)
export function postProject() {
  return postData();
}

//This function is dedicated to delete an existiing project from the DB (only with Admin lvl priviledges)
export function deleteProject() {
  return deleteData();
}
//This funciton is dedicated to edit an existing project in the DB(only with Admin lvl privildeges)

export function editProjectInfo() {
  return editData();
}
