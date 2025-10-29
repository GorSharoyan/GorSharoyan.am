import react from "react";

//React Router Imports

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

//Pages import
import HomePage from "../pages/Home/HomePage";
import BooksPage from "../pages/Books/BooksPage";
import MyMapPage from "../pages/Map/MyMapPage";
import MyProjectsPage from "../pages/Projects/MyProjectsPage";

export default function SwitchRouter() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookstore" element={<BooksPage />} />
        <Route path="/projects" element={<MyProjectsPage />} />
        <Route path="/map" element={<MyMapPage />} />
      </Routes>
    </main>
  );
}
