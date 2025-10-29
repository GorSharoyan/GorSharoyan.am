import logo from "./logo.svg";
import "./App.css";

// Component imports
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/Home/HomePage";
import BooksPage from "./pages/Books/BooksPage";

//Pages import

function App() {
  return (
    <div className="App">
      <Header />
      <p>page contains explosive content Zen One is back 2025 </p>
      <HomePage />
      <BooksPage />
      <Footer />
    </div>
  );
}

export default App;
