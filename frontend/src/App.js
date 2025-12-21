// import logo from "./logo.svg";
import "./App.css";

// components import
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// //Pages import
import Home from "./pages/Home/Home";
import Archives from "./pages/Archives/Archives";
import Experience from "./pages/Experience/Experience";
import Hobbies from "./pages/Hobbies/Hobbies";

import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experince" element={<Experience />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/archives" element={<Archives />} />
      </Routes>
      <Footer />
    </div>
  );
}
