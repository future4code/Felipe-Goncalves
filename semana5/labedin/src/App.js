import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/Cardpequeno/CardPequeno";
import felipe from "./img/felipe.jpeg";
import enxada from "./img/capinando.jpg";
import amolando from "./img/amolando.webp";
import iconeEmail from "./img/email.png";
import iconeLocaliza from './img/mapas-e-localizacao.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={felipe}
          nome="Felipe Polato"
          descricao="Me chamo Felipe Polato Gonçalves, cursei Ciencias Biologicas pela UTFPR. Conheci o mundo programação aos 30 anos e dentro de 3 meses estudando por conta propria resolvi me profissionalizar na area, hoje cursando web fullstack pela escola Labenu."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Contato</h2>

        <CardPequeno imagem={iconeEmail} email="E-mail:" texto="_labenu@.com" />

        <CardPequeno 
        imagem={iconeLocaliza}
        endereco="Endereco:" textoEnd="_Caraguatatuba-São Paulo" />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionalizantes</h2>
        <CardGrande
          imagem={amolando}
          nome="Amolando facão"
          descricao="Experiencia de longa data com pedra deamolar e lima nova que na verdade esta velha!"
        />

        <CardGrande
          imagem={enxada}
          nome="Carpindo lote da cidade"
          descricao="Carpindo os loter em troca de marmita"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
