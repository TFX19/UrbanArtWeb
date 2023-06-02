import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import api from '../api.jsx';
import "../css/Sobre.css";
import goBack from "../../public/ico-goBack.svg";
import Search from '../components/Search.jsx';
import Navbar from "../components/Navbar";
import { Footer } from '../components/Footer';
import CardArtistas from '../components/CardArtistas.jsx';

function sobre() {

    const [artistas, setArtistas] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

    const filteredArtistas = artistas.filter((artistas) =>
    artistas.nomeartistico.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
            })
            .catch((error) => {
                alert(error);
            });
    }, []);
    return (
        <div className='App'>
            <Navbar />
            <div className="ghost"></div>

            {/* inicio artistas */}
            <div className='section-murais position-relative p-5 d-flex w-100 '>
                <div className='container d-flex justify-content-start'>
                    <Link style={{marginRight: '3%'}} to='/Sobre'>
                        <img src={goBack} alt="voltar" />
                    </Link>
                    <h1>Conhece os artistas</h1>
                </div>
            </div>

            <Search searchTerm={searchTerm} handleSearch={handleSearch} />

            <div className="section-cards-tdsartistas min-vh-100 position-relative w-100 container d-flex">
                <div className="container col row row-cols-1 row-cols-md-4 align-items-center">
                    {filteredArtistas.map((artistas, index) => (
                        <div className="col mt-3">
                         <CardArtistas  key={index} idartistas={`/sobre/artista/${artistas.idartista}`} idartista={artistas.idartista} nomeA={artistas.nomeartistico} pais={artistas.pais} descricao={artistas.descricao} fotografia={artistas.fotografia}  />
                        </div>
                    ))}
                </div>
            </div>
            {/* fim artistas */}
            <Footer />
        </div>
    );
}

export default sobre;