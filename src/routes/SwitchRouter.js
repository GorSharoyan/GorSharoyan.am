import react from "react";

//React Router Imports

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

//Pages import
import HomePage from "../pages/Home/HomePage";
import BooksPage from "../pages/Books/BooksPage";

export default function SwitchRouter() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookstore" element={<BooksPage />} />
      </Routes>
    </main>
  );
}
