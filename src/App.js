import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./component/Footer";
import Navbar from "./component/Navigation";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Mangaplus } from "./component/Mangaplus";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mangaplus" element={<Mangaplus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
