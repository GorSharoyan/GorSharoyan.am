import logo from "./logo.svg";
import "./App.css";

//Pages import
import Home from "./pages/Home/Home";

//library imports
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route to="/" element={<Home />} />
    </Routes>
  );
}

export default App;
