import React from "react";
import {BrowserRouter as Router,Route, Link, Routes} from "react-router-dom";
import "./css/App.css";

//paginas
import Start from "./view/Start";
import Sobre from "./view/Sobre";
import Explorar from "./view/Explorar";
import SobreArtistas from "./view/Sobre-Artistas"
import SobreArtistasDetalhes from "./view/Sobre-Artistas-Detalhes"
import SobreMurais from "./view/Sobre-Murais";
import SobreMuraisDetalhes from "./view/Sobre-Murais-Detalhes";


function App() {
  
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/sobre/artistas" element={<SobreArtistas />} />
          <Route path="/sobre/artista/:id" element={<SobreArtistasDetalhes />}/>
          <Route path="/sobre/murais" element={<SobreMurais />} />
          <Route path="/sobre/mural/:id" element={<SobreMuraisDetalhes />}/>
          <Route path="/explorar" element={<Explorar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
