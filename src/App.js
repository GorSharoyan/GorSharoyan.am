import logo from "./logo.svg";
import "./App.css";

// Component imports
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//Router import
import SwitchRouter from "./routes/SwitchRouter";

function App() {
  return (
    <div className="App">
      <Header />
      <SwitchRouter />
      <Footer />
    </div>
  );
}

export default App;
