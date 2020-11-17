import React from "react";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  const goToListTripPage = () => {
    history.push("/trips/list");
  };

  const goToCreateTripPage = () => {
    history.push("/trips/create");
  };

  return (
    <div>
      <p>LoginPage</p>
      <button onClick={goToListTripPage}>Ver Todas as viagens</button>
      <button onClick={goToCreateTripPage}>Criar uma viagem</button>
      <button onClick={goToHome}>Home</button>
    </div>
  );
}

export default LoginPage;
