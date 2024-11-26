import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Art from "./pages/Art";
import Music from "./pages/Music";
import Web from "./pages/Web";
import Contact from "./pages/Contact";
import { AudioProvider } from "./contexts/AudioContext";
import AudioControls from "./components/AudioControls";

const App = () => {
  return (
    <AudioProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1 pt-20 pb-24 sm:pb-28">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/art" element={<Art />} />
              <Route path="/music" element={<Music />} />
              <Route path="/web" element={<Web />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <AudioControls />
        </div>
      </BrowserRouter>
    </AudioProvider>
  );
};

export default App;