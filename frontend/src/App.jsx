import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Fab from "./components/Fab.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import SolomonGPT from "./components/SolomonGPT.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/solomongpt" element={<SolomonGPT />} />
        </Routes>
      </main>
       <Fab />
      <Footer />
    </div>
  );
}
