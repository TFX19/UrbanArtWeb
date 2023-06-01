import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import api from '../api.jsx';
import "../css/App.css";
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api';
import Navbar from "../components/Navbar";
import { Footer } from '../components/Footer';

function explorar() {

  const [explorarT, setExplorarT] = useState('');
  const [explorarD, setExplorarD] = useState('');

  const [murais, setMurais] = useState([]);
  const [artistas, setArtistas] = useState([]);


  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  //Pedido à base de dados do texto do site
  useEffect(() => {
    api
      .get('/infowebsite/list')
      .then(({ data }) => {
        const dados = data.data
        setExplorarT(dados[10].titulo);
        setExplorarD(dados[10].descricao2);
      })
      .catch((error) => {
        alert(error)
      })
  }, [])

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
            rua: mural.rua,
            latitude: mural.latitude,
            longitude: mural.longitude,
            datainauguracao: new Date(mural.datainauguracao).toLocaleDateString(),
            descricao: mural.descricao,
            fotografia1: mural.fotografia1
          });
        });
        setMurais(newMurais);
        //console.log(newMurais);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAAvehyjkVUeOx_c8neoQ2FEJTxnxRxSSI",

  })

  const containerStyle = {
    width: '100%',
    height: '100vh'
  };

  const center = {
    lat: 40.280753,
    lng: -7.504461,
  };

  return (
    <div className='App'>
      <Navbar />
      <div className="ghost"></div>

      <div id="sobre" className="section-imgexplorar position-relative w-100 d-flex">
        <div className="container w-100 d-flex p-5">
          <div className='txt-tsobre container d-inline-block w-100 h-25 pt-5 align-content-center text-center'>
            <h2>{explorarT}</h2>
          </div>
        </div>

      </div>

      <div className='section-sobre w-100 d-flex align-content-between'>
        <div className='txtsobreD container w-75 text-center align-content-center d-inline-block'>
          <p>{explorarD}</p>
        </div>
      </div>
      <div className='section-sobre-maps w-100 min-vh-100'>
          {isLoaded ? (
            <GoogleMap
              onClick={() => setActiveMarker(null)}
              mapContainerStyle={containerStyle} center={center} options={{ mapId: "fcba7eeff23c2e40" }} zoom={15} >

              {murais.map((murais, idmural) => (

                <MarkerF
                  key={idmural}
                  onClick={() => handleActiveMarker(idmural)}
                  position={{
                    lat: parseFloat(murais.latitude),
                    lng: parseFloat(murais.longitude),
                  }}
                  icon={{
                    url:"../../assets/markerp.png",
                  }}
                  options={{
                    label: {
                      text: (murais.titulo),
                      className: "map-marker",
                    }
                  }}
                >
                  {activeMarker === idmural ? (
                    <InfoWindowF
                      anchor={MarkerF}
                      position={murais.position}
                      onCloseClick={() => { setSelectedElement(null) }}
                    >
                      <div className='InfoWindowStyle d-flex'>
                        <div className='container w-100'>
                          <img style={{ height: '172px', width: '100%', objectFit: 'cover' }} src={murais.fotografia1} alt="foto do mural" />
                          <div className='cabecalho-InfoWindow w-100 mt-3 d-flex justify-content-between container'>
                            <h1 >{murais.titulo}</h1>
                            <h3>{murais.datainauguracao}</h3>
                          </div>
                          <div className='txt-InfoWindow mt-2'>
                            <p>{murais.rua}</p>
                          </div>
                          <Link to={`/sobre/mural/${murais.idmural}`} type="button" style={{ width: '100%' }} href="#" className="btn btn-primary">saber mais</Link>
                        </div>
                      </div>
                    </InfoWindowF>) : null}
                </MarkerF>
              ))}
            </GoogleMap>
          ) : (
            <>carregar...</>
          )}
      </div>
      <Footer />
    </div>
  )
}

export default React.memo(explorar);