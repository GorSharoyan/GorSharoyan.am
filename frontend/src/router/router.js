// React Router imports
import { Routes, Route } from "react-router-dom";
// custom Routes imports
import ProtectedRoute from "./ProtectedRoute";

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

// components imports
import CardArray from "../components/CardArray/CardArray";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/archives" element={<Archives />} />

      {/*rotected route could be converted to a comment in order to gain acces to this part of code without trying to enter as admin avery time */}
      {/* <Route element={<ProtectedRoute />}> */}
      <Route path="/admindashboard" element={<AdminDashboard />}>
        <Route path="add-books" element={<BooksForm />} />
        <Route path="add-movies" element={<MoviesForm />} />
        <Route path="add-musics" element={<MusicForm />} />
      </Route>
      {/* </Route> */}
    </Routes>
  );
}
