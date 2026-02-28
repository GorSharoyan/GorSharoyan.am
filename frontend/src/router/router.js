// React Router imports
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";
import Archives from "../pages/Archives/Archives";
import Experience from "../pages/Experience/Experience";
import Hobbies from "../pages/Hobbies/Hobbies";
import AdminPanel from "../pages/AdminPanel/AdminPanel";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import BooksForm from "../components/Forms/BooksForm/BooksForm";
import MoviesForm from "../components/Forms/MoviesForm/MoviesForm";
import MusicForm from "../components/Forms/MusicForm/MusicForm";

export default function router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/archives" element={<Archives />} />
      <Route path="/admin" element={<AdminPanel />} />|
      <Route path="/adminDashboard" element={<AdminDashboard />}>
        <Route path="books" element={<BooksForm />} />|
        <Route path="movies" element={<MoviesForm />} />|
        <Route path="music" element={<MusicForm />} />|
      </Route>
    </Routes>
  );
}
