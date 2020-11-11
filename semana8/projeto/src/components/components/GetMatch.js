import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function GetMatch() {
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

  return (
    <div> 
      teste
     </div>
  )
  
}
