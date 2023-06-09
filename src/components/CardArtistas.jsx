import React from "react";
import { Link } from "react-router-dom";
export function CardArtistas(props) {

  const {idartista, idartistas, nomeA, pais, descricao, fotografia} = props;
  return (
    <div id={{idartista}} className="d-flex w-100">
      <div className="card" style={{ width: '18rem', height: '25rem'}}>
        <img style={{width: '285px', height:'180px', objectFit:'cover'}} src={fotografia} className="card-img-top img-fluid" alt="fotografiadoartista" />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h4 className="card-title">{nomeA}</h4>
            <h5>{pais}</h5>
          </div>
          <p style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth:'300px'}} className="card-text pt-3">{descricao}</p>
          <div className="d-flex">
          <Link to={idartistas} type="button" href="#" className="btn btn-primary w-100 mt-5">ver mais</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardArtistas;

