// Below are configuration of basic api and links to the collections inside MongoDBs database

// Main Databases and APIs
export const API_BASE_URL = "http://localhost:5000";
export const Archives_API = `${API_BASE_URL}/Archives`;
export const Admin_API = `${API_BASE_URL}/Admins`;
export const Projects_API = `${API_BASE_URL}/Projects/projects`;
export const PersonalData_API = `${API_BASE_URL}/PersonalData/personaldatas`;

// Sub Collection connection APIS
export const BOOKS_API = `${Archives_API}/books`;
export const MOVIES_API = `${Archives_API}/movies`;
export const MUSIC_API = `${Archives_API}/musics`;
export const SHCEMAS_API = `${API_BASE_URL}/Schemas/schemas`;
