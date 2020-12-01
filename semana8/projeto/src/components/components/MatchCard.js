import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content:center;
  text-align: center;
  margin-left: 400px;
  margin-boton: 40px;
  width: 40%;
`;

const ContainerCard = styled.div`
  width: 90%;
`;

const Card = styled.img`
  margin: 20px;
  width: 60%;
  border-radius: 5px;
`;

const BotoesMatch = styled.button`
  margin: 10px;
  border: transparent;
  background: #8b4500;
  padding: 10px;
  border-radius: 5px;
`;

const BackgroundFundoMatch = styled.div`
  width: 70%;
  background: #ee7600;
  border-radius: 15px;
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
      <BackgroundFundoMatch>
        <div>
          <h2>ASTROMATCH</h2>

          <BotoesMatch onClick={props.enjoying}>Troca Troca</BotoesMatch>
        </div>

        <div>
          <ContainerCard>
            <Card src={profile.photo} />

            <h3>
              {profile.name}
              {profile.age}
            </h3>

            <p>{profile.bio}</p>
          </ContainerCard>
        </div>
        <div>
          <BotoesMatch onClick={() => isMatch(false)}>X</BotoesMatch>
          <BotoesMatch onClick={() => isMatch(true)}>♥️</BotoesMatch>
        </div>
      </BackgroundFundoMatch>
    </Container>
  );
}
