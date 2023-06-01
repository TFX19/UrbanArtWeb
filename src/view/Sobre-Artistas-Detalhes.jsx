import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import api from '../api.jsx';
import "../css/Sobre.css";
import GoBack from '../../public/ico-goBack.svg';

import Navbar from "../components/Navbar";
import { Footer } from '../components/Footer';
import Carousel from '../components/Carousel.jsx';


function SobreMuraisDetalhes() {

    const { id } = useParams();
    const [artista, setArtista] = useState();

    useEffect(() => {
        api
            .get(`/artistas/getartista/${id}`)
            .then(response => {
                const artista = response.data.data;
                setArtista(artista);
            })
            .catch(error => console.log(error));
    }, [id]);

    return (
        <div className='App'>
            <Navbar />
            <div className="ghost"></div>

            {/* inicio murais */}
            <div className='section-murais position-relative p-5 d-flex w-100 '>
                <div className='container d-flex mt-5 justify-content-start'>
                    <Link style={{ marginRight: '3%' }} to='/Sobre/artistas'>
                        <img src={GoBack} alt="voltar" />
                    </Link>
                    <h1>Conhece os artistas</h1>
                </div>
            </div>

            <div className='section-murais-cr mt-5 d-flex w-100'>
                <div className='d-flex container h-25 w-100'>
                {artista && (
                   <img className='w-100' style={{height:'414px', objectFit:'cover'}} src={artista.fotografia} alt="testebordalo" />
                   )}
                </div>
            </div>

            <div className="section-artistas-detalhes min-vh-100 position-relative w-100 container mt-5 d-flex">
                {artista && (
                    <div className="container d-block mt-5 align-items-center">
                        <div className='mt-5r'>
                        <h1>{artista.nomeartistico}</h1>
                        <h3 className="text-muted">{artista.nome}</h3>
                        <h3 className="text-muted">{artista.pais}</h3>
                        </div>
                        <div className='mt-5'>
                        <h3 className="text-muted">{artista.email}</h3>
                        <h3 className="text-muted">{artista.sitea}</h3>
                        </div>

                        <div className='mt-5'>
                       <h3 className="text-muted">{artista.redesocial1}</h3>
                       <h3 className="text-muted">{artista.redesocial2}</h3>
                       </div>
                       <div className='mt-5'>
                       
                      <p>{artista.descricao}</p>
                       </div>
                    </div>
                )}
            </div>
            {/* fim murais */}
            <Footer />
        </div>
    );
}

export default SobreMuraisDetalhes;