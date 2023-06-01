import { useState, useEffect } from "react";
import StreetViewLink from "../components/StreetViewLink.jsx";
import { Link, useParams } from "react-router-dom";
import api from "../api.jsx";
import "../css/Sobre.css";
import GoBack from "../../public/ico-goBack.svg";
import newTab from "../../public/ico-newtab.svg";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import Carousel from "../components/Carousel.jsx";

function SobreMuraisDetalhes() {
  const { id } = useParams();
  const [mural, setMural] = useState();
  const [artista, setArtista] = useState();
  const [fotografia1, setFotografia1] = useState();
  const [fotografia2, setFotografia2] = useState();
  const [fotografia3, setFotografia3] = useState();
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    api
      .get(`/murais/getmural/${id}`)
      .then((response) => {
        const mural = response.data.data;
        mural.datainauguracao = new Date(
          mural.datainauguracao
        ).toLocaleDateString();
        setMural(mural);
        setArtista(mural.artistas[0]);
        setFotografia1(mural.fotografia1);
        setFotografia2(mural.fotografia2);
        setFotografia3(mural.fotografia3);
      })
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    api
      .get(`/murais/getmuralev/${id}`)
      .then((response) => {
        const { eventos } = response.data.data;
        if (eventos && eventos.length > 0) {
          setEventos(eventos);
          console.log(eventos);
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

 

  return (
    <div className="App">
      <Navbar />
      <div className="ghost"></div>

      {/* inicio murais */}
      <div className="section-murais d-block p-5 d-flex w-100 ">
        <div className=" p-5 container d-flex justify-content-start">
          <Link style={{ marginRight: "3%" }} to="/Sobre/murais">
            <img src={GoBack} alt="voltar" />
          </Link>
          <h1>Conhece a arte Urbana</h1>
        </div>
      </div>

      <div className="d-block mt-5 p-2 w-100">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="container">
              <Carousel
                imagem1={fotografia1}
                imagem2={fotografia2}
                imagem3={fotografia3}
              />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-murais-detalhes d-flex min-vh-100 mt-5 w-100">
      <div className="container mt-3 align-items-center">
        {mural && (
            <div className="container">
              <h1 className="mb-5">{mural.titulo}</h1>
              <h3 className="text-muted"> <Link to={`/sobre/artista/${artista.idartista}`}>{artista.nomeartistico}</Link></h3>
              <h3 className="text-muted">{mural.datainauguracao}</h3>
              <h2 className="mt-5"> 
                 <StreetViewLink latitude={mural.latitude} longitude={mural.longitude} morada={mural.rua}/> <img src={newTab} alt="link externo" />
              </h2>
              <p className="mt-5">{mural.descricao}</p>
            </div>
        )}
        {eventos.map((evento) => (
          <div className="container mt-5" key={evento.idevento}>{evento.nome}</div>
        ))}
      </div>
      </div>
      {/* fim murais */}
      <Footer />
    </div>
  );
}

export default SobreMuraisDetalhes;
