import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerMatch = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 400px;
  margin-boton: 40px;
  width: 40%;
`;

const BackgroundFundo = styled.div`
  width: 70%;
  background: #ee7600;
  border-radius: 15px;
`;

const ContainerCardMatch = styled.div`
  width: 90%;
`;

const CardMatch = styled.img`
  margin: 20px;
  width: 60%;
  border-radius: 5px;
`;

const Botoes = styled.button`
  margin: 10px;
  padding: 10px;
  border: transparent;
  background: #8b4500;
  border-radius: 5px;
`;

export default function GetMatch(props) {
  const [likeList, setLikeList] = useState([]);

  useEffect(() => {
    getMatch();
  }, []);

  const getMatch = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-polato/matches"
      )
      .then((response) => {
        setLikeList(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const returnHome = () => {
    props.setEnjoying(false);
  };

  const clearList = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-polato/clear"
      )
      .then((response) => {
        getMatch();
        console.log("Lista Apagada");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ContainerMatch>
      <BackgroundFundo>
        <Botoes onClick={clearList}>Limpa Lista</Botoes>

        {likeList.map((list) => {
          return (
            <ContainerCardMatch>
              <CardMatch src={list.photo} />
              <p>{list.name}</p>
            </ContainerCardMatch>
          );
        })}

        <Botoes onClick={returnHome}>Vira Vira</Botoes>
      </BackgroundFundo>
    </ContainerMatch>
  );
}
