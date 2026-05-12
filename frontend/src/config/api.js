// Below are configuration of basic api and links to the collections inside MongoDBs database

export const API_BASE_URL = "http://localhost:5000";
export const Archives_API = `${API_BASE_URL}/Archives`;
export const Admin_API = `${API_BASE_URL}/Admins`;

export const SHCEMAS_API = `${Archives_API}/schemas`;
export const BOOKS_API = `${Archives_API}/books`;
export const MOVIES_API = `${Archives_API}/movies`;
export const MUSIC_API = `${Archives_API}/musics`;
