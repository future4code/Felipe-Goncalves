import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "../../App";

export default function GetMatch(props) {
  const [likeList, setLikeList] = useState({});
  

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
    props.setEnjoying(false)
  };

  const clearList = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-polato/clear"
      )
      .then((response) => {
        setLikeList(response.data.id);
      });
  };

  return (
    <div>
      
      <button onClick={clearList}>Limpa Lista</button>
      <button onClick={returnHome}>Vira Vira</button>
    </div>
  );
}
