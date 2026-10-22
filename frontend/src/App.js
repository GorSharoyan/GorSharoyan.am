// import logo from "./logo.svg";
import "./App.css";

// components import
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from "./router/router";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}
