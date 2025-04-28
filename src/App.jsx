import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Training from "./pages/Training";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/training" element={<Training />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
