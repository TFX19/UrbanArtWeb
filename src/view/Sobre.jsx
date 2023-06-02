import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import api from '../api.jsx';
import "../css/Sobre.css";

import Navbar from "../components/Navbar";
import { Footer } from '../components/Footer';
import CardMurais from '../components/CardMurais.jsx';
import CardArtistas from '../components/CardArtistas.jsx';
import ModalC from '../components/ModalC.jsx';

function sobre() {

  const [sobreT, setSobreT] = useState('');
  const [sobreD, setSobreD] = useState('');

  const [muraisT, setMuraisT] = useState('');
  const [muraisD, setMuraisD] = useState('');

  const [artistasT, setArtistasT] = useState('');
  const [artistasD, setArtistasD] = useState('');

  const [murais, setMurais] = useState([]);

  const [artistas, setArtistas] = useState([]);

  //Pedido à base de dados das informações dos murais para o cartão 
    useEffect(() => {
        api
            .get("/murais/list")
            .then(({ data }) => {
                const dados = data.data;
                var newMurais = [];
                Object.keys(dados).map((key) => {
                    const mural = dados[key];
                    newMurais.push({
                        idmural: mural.idmural,
                        titulo: mural.titulo,
                        datainauguracao: new Date(mural.datainauguracao).toLocaleDateString(),
                        descricao: mural.descricao,
                        fotografia1: mural.fotografia1
                    });
                });
                setMurais(newMurais);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    //Pedido à base de dados das informações dos artistas para o cartão 
    useEffect(() => {
      api
          .get("/artistas/list")
          .then(({ data }) => {
              const dados = data.data;
              var newArtistas = [];
              Object.keys(dados).map((key) => {
                  const artistas = dados[key];
                  newArtistas.push({
                    idartista: artistas.idartista,
                    nomeartistico: artistas.nomeartistico,
                    pais: artistas.pais,
                    descricao: artistas.descricao,
                    fotografia: artistas.fotografia
                  });
              });
              setArtistas(newArtistas);
              //console.log(newArtistas);
          })
          .catch((error) => {
              alert(error);
          });
  }, []);

//Pedido à base de dados do texto do site
  useEffect(() => {
    api
      .get('/infowebsite/list')
      .then(({ data }) => {
        const dados = data.data
        setSobreT(dados[7].titulo);
        setSobreD(dados[7].descricao2);
        setMuraisT(dados[8].titulo);
        setMuraisD(dados[8].descricao2);
        setArtistasT(dados[9].titulo);
        setArtistasD(dados[9].descricao2);
      })
      .catch((error) => {
        alert(error)
      })
  }, [])


  return (
    <div className='App'>
      <Navbar />
      <div className="ghost"></div>

      <div id="sobre" className="section-imgsobre position-relative w-100 d-flex">
        <div className="container w-100 d-flex p-5">
          <div className='txt-tsobre container d-inline-block w-100 h-25 pt-5 align-content-center text-center'>
            <h2>{sobreT}</h2>
          </div>
        </div>
      </div>

      <div className='section-sobre w-100 d-flex align-content-between'>
        <div className='txtsobreD container w-75 text-center align-content-center d-inline-block'>
          <p>{sobreD}</p>
        </div>
      </div>
      {/* inicio murais */}
      <div className='section-murais position-relative p-5 d-flex w-100 '>
        <div className='container'>
          <div className='container pt-2 w-100'>
            <h1>{muraisT}</h1>
            <p className='pt-4'>{muraisD}</p>
          </div>
        </div>
      </div>

      <div className="section-cards-murais position-relative w-100 container d-flex">
        <div className="container col row row-cols-1 row-cols-md-4 align-items-center">
          {murais.map((mural, index) => (
            <div className="col mt-1">
              <CardMurais key={index} idmural={mural.idmural} idmurais={`/sobre/mural/${mural.idmural}`} titulo={mural.titulo} datainauguracao={mural.datainauguracao} descricao={mural.descricao} fotografia1={mural.fotografia1}/>
            </div>
          )).slice(0, 4)}
        </div>
      </div>
            <ModalC />
      <div className="section-btn-murais p-5 align-content-between text-center w-100">
        <div className='container w-100 p-5 align-content-center'>
          <Link to='/sobre/murais' type='button' className="btn btn-primary align text-center">ver todos</Link>
        </div>
      </div>
      {/* fim murais */}
      
      {/* inicio artistas */}
      <div className='section-murais position-relative p-5 d-flex w-100 '>
        <div className='container'>
          <div className='container pt-5 w-100'>
            <h1>{artistasT}</h1>
            <p className='pt-4'>{artistasD}</p>
          </div>
        </div>
      </div>

      <div className="section-cards-murais position-relative w-100 container d-flex">
        <div className="container col row row-cols-1 row-cols-md-4 align-items-center">
        {artistas.map((artistas, index) => (
            <div className="col mt-3">
              <CardArtistas key={index} idartistas={`/sobre/artista/${artistas.idartista}`} idartista={artistas.idartista} nomeA={artistas.nomeartistico} pais={artistas.pais} descricao={artistas.descricao} fotografia={artistas.fotografia} />
            </div>
          )).slice(0, 4)}
        </div>
      </div>

      <div className="section-btn-murais p-5 align-content-between text-center w-100">
        <div className='container w-100 p-5 align-content-center'>
          <Link to='/sobre/artistas' type='button' className="btn btn-primary align text-center">ver todos</Link>
        </div>
      </div> 
      {/* fim murais */}
      <Footer />
    </div>
  );
}

export default sobre;