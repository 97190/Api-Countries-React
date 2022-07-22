import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pays from "./pages/Pays";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pays" element= {<Pays />} />
        <Route path="*" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* Créer le chemin de la route + importer en haut de page*/