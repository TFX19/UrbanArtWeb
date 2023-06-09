import { useState, useEffect } from 'react';
import  {Link} from "react-router-dom";
import api from '../api.jsx';
import "../css/App.css";
import cardM from "../../public/ico-card-murais.svg";
import cardA from "../../public/ico-card-artistas.svg";
import cardE from "../../public/ico-card-eventos.svg";
import cardMA from "../../public/ico-card-mapa.svg";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import { Footer } from '../components/Footer';
import Card from '../components/Card';

function App() {

  //Estados
  const [heroiT, setHeroiT] = useState('');
  const [heroiSubT, setHeroiSubT] = useState('');
  const [heroiDesc, setHeroiDesc] = useState('');
  //objetivos
  const [objT, setObjT] = useState('');
  const [objD, setObjD] = useState('');
  //podesContar
  const [podescT, setPodescT] = useState('');
  const [podescD, setPodescD] = useState('');
  //cards
  const [muraisTC, setMuraisTC] = useState('');
  const [muraisDC, setmuraisDC] = useState('');
  //artistas
  const [artistasTC, setArtistasTC] = useState('');
  const [artistasDC, setArtistasDC] = useState('');
  //eventos
  const [eventosTC, setEventosTC] = useState('');
  const [eventosDC, setEventosDC] = useState('');
  //mapa
  const [mapaTC, setMapaTC] = useState('');
  const [mapaDC, setMapaDC] = useState('');

  const [imagem1, setImagem1] = useState('');
  const [titulo1, setTitulo1] = useState('');

  const [imagem2, setImagem2] = useState('');
  const [titulo2, setTitulo2] = useState('');

  const [imagem3, setImagem3] = useState('');
  const [titulo3, setTitulo3] = useState('');

    useEffect(() => {
        api
            .get("/murais/list")
            .then(({ data }) => {
                const dados = data.data;
                var newMurais = [];
                Object.keys(dados).map((key) => {
                    const mural = dados[key];
                    newMurais.push({
                        titulo: mural.titulo,
                        fotografia1: mural.fotografia1
                    });
                });
                setTitulo1(dados[0].titulo);
                setImagem1(dados[0].fotografia1);
                setTitulo2(dados[1].titulo);
                setImagem2(dados[1].fotografia1);
                setTitulo3(dados[2].titulo);
                setImagem3(dados[2].fotografia1);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

  useEffect(() => {
    api
      .get('/infowebsite/list')
      .then(({ data }) => {
        const dados = data.data
        setHeroiT(dados[0].titulo);
        setHeroiSubT(dados[0].descricao);
        setHeroiDesc(dados[0].descricao2);
        setObjT(dados[1].titulo);
        setObjD(dados[1].descricao2);
        setPodescT(dados[2].titulo);
        setPodescD(dados[2].descricao2);
        setMuraisTC(dados[3].titulo);
        setmuraisDC(dados[3].descricao2);
        setArtistasTC(dados[4].titulo);
        setArtistasDC(dados[4].descricao2);
        setEventosTC(dados[5].titulo);
        setEventosDC(dados[5].descricao2);
        setMapaTC(dados[6].titulo);
        setMapaDC(dados[6].descricao2);
      })
      .catch((error) => {
        alert(error)
      })
  }, [])


  return (
    <div className='App'>
        <Navbar />
      {/*<div className="ghost"></div>  div que empurra o conteudo para baixo */}
      <div id="inicio" className="section-heroi position-relative w-100 vh-100 d-flex">
        <div className="container pt-5 d-flex justify-content-between align-items-center">
          <div className="txt-inicio container w-50 pt-5">
            <h1>{heroiT}</h1>
            <h2>{heroiSubT}</h2>
            <p>{heroiDesc}</p>
            <Link to='/sobre' className="btn btn-primary">ver mais</Link>
          </div>
          <div className="carouselll container w-50 pt-5">
            <Carousel imagem1={imagem1} titulo1={titulo1} imagem2={imagem2} titulo2={titulo2} imagem3={imagem3} titulo3={titulo3} />
          </div>
        </div>
      </div>
      <div id="objectivo" className="section-objetivo position-relative d-flex align-items-center">
        <div className="objt container w-100 d-lg-flex justify-content-between align-items-center text-center">
          <div className="py-5">
            <h1>
              <strong>{objT}</strong>
            </h1>
            <h5 className="mt-5 text-muted lead">
              <strong>{objD}</strong>
            </h5>
          </div>
        </div>
      </div>
      <div id="podes-contar" className="section-podes-contar d-flex align-items-center min-vh-100">
        <div className="container p-5 my-4">
          <div className="row">
            <div className="col-xl-6 col-sm-12 row">
              <div></div>
              <div className='txtA p-5 align-content-center'>
                <h3>
                  <strong>{podescT}</strong>
                </h3>
                <p>{podescD}</p>
                <Link to='/explorar' type='button' className="btn btn-primary w-100">Explorar</Link>
              </div>
            </div>
            <div className="container col row row-cols-1 row-cols-md-2">
              <div className="col">
                <Card titulo={muraisTC} descricao={muraisDC} icon={cardM} link={"/sobre/murais"} />
              </div>
              <div className="col">
                <Card titulo={artistasTC} descricao={artistasDC} icon={cardA} link={"/sobre/artitas"} />
              </div>
              <div className="col">
                <Card titulo={eventosTC} descricao={eventosDC} icon={cardE} link={"/sobre"} />
              </div>
              <div className="col">
                <Card titulo={mapaTC} descricao={mapaDC} icon={cardMA} link={"/explorar"} />
              </div>
            </div>
          </div>
        </div>
        <br /> <br />
      </div>
      <Footer />
    </div>
  );
}

export default App;