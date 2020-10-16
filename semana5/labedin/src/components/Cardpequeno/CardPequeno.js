import React from "react";
import "./CardPequeno.css";

function CardPequeno(props) {
  return (
    <div className="card-pequeno">
      <img src={props.imagem} />
      <h4>{props.email}</h4>
      <h4>{props.endereco}</h4>
      

      <div>
        <p>{props.textoEnd}</p>
        <p>{props.texto}</p>
      </div>
    </div>
  );
}

export default CardPequeno;
