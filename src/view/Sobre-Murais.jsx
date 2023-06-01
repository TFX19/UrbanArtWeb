import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import api from '../api.jsx';
import "../css/Sobre.css";

import Search from '../components/Search.jsx';
import Navbar from "../components/Navbar";
import { Footer } from '../components/Footer';
import CardMurais from '../components/CardMurais.jsx';
import ModalC from '../components/ModalC.jsx';

function sobre() {

const [murais, setMurais] = useState([]);

const [searchTerm, setSearchTerm] = useState('');

const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

const filteredMurals = murais.filter((mural) =>
  mural.titulo.toLowerCase().includes(searchTerm.toLowerCase())
);

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


    return (
        <div className='App'>
            <Navbar />
            <div className="ghost"></div>

            {/* inicio murais */}
            <div className='section-murais position-relative p-5 d-flex w-100 '>
                <div className='container d-flex justify-content-start'>
                    <Link style={{marginRight: '3%'}} to='/Sobre'>
                        <img src="../assets/ico-goBack.svg" alt="" />
                    </Link>
                    <h1>Conhece a arte Urbana</h1>
                </div>
            </div>
        
            <Search searchTerm={searchTerm} handleSearch={handleSearch} />
        
            <div className="section-cards-tdsmurais mb-5 min-vh-100 position-relative w-100 container d-flex">
                <div className="container col row row-cols-1 row-cols-md-4 ">
                    {filteredMurals.map((mural, index) => (
                        <div className="col mt-3">
                            <CardMurais key={index} titulo={mural.titulo} idmural={mural.idmural} idmurais={`/sobre/mural/${mural.idmural}`} datainauguracao={mural.datainauguracao} descricao={mural.descricao} fotografia1={mural.fotografia1} />
                        </div>
                    ))}
                </div>
            <ModalC />
            </div>
            {/* fim murais */}
            <Footer />
        </div>
    );
}

export default sobre;