import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  margin-left: 400px;
  width: 30%;
  border: solid 1px red;
`;

const ContainerCard = styled.div`
  width: 100%;
`;

const Card = styled.img`
  width: 80%;
`;

export default function MatchCard(props) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    get();
  }, []);

  const get = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-polato/person"
      )
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const isMatch = (boolean) => {
    const body = { id: profile.id, choice: boolean };
    const axiosUrl =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-polato/choose-person";
    axios
      .post(axiosUrl, body)
      .then((response) => {
        get();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };



  return (

    <Container>
      <div>
        <h2>ASTROMATCH</h2>

        <button onClick={props.enjoying}>Troca Troca</button>
      </div>

      <div>
        <ContainerCard>
          <Card src={profile.photo} />

          <h3>
            {profile.name}
            {profile.age}
          </h3>

          <p >{profile.bio}</p>

        </ContainerCard>
      </div>
        <div>
      <button onClick={() => isMatch(false)}>X</button>
      <button onClick={() => isMatch(true)}>♥️</button>
      </div>

      
      
    </Container>
  );
}
