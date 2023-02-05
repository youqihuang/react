import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Blend from "./pages/Blend";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/blend" element ={<Blend />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
