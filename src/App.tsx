import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Art from "./pages/Art";
import Music from "./pages/Music";
import Web from "./pages/Web";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <main className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<Art />} />
          <Route path="/music" element={<Music />} />
          <Route path="/web" element={<Web />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;