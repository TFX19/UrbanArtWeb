import React from "react";
import { Link } from "react-router-dom";
export function Card(props) {
  const {link} = props
  return (
    <div
      className="card border-0 shadow p-3 mb-5 bg-body rounded"
      style={{
        height: "18rem",
        maxWidth: "24rem",
      }}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h4 className="card-title fs-5">{props.titulo}</h4>
          <img style={{width:'50px', height:'50px'}} src={props.icon} alt="iconmurais" />
        </div>
        <p className="card-text mt-3">{props.descricao}</p>
      </div>
      <div className="container">
      <Link to={link} className="card-link">ver mais</Link>
      </div>
    </div>
  );
}

export default Card;

