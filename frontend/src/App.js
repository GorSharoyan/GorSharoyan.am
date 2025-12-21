// import logo from "./logo.svg";
import "./App.css";

// //Pages import
import Home from "./pages/Home/Home";

import { Routes, Route, Link } from "react-router-dom";

function About() {
  return <h1>About</h1>;
}

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
