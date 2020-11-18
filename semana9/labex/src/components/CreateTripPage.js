import React from "react";
import { useHistory } from "react-router-dom";

function CreateTripPage() {
  const history = useHistory();

  const goToCreateTripPage = () => {
    history.push("/trips/create");
  };

  const goToHome = () => {
    history.push("/");
  };
console.log("Ola")
  return (
    <div>
      <p>goToCreateTripPage</p>
      <button onClick={goToCreateTripPage}>Criar uma viagem</button>
      <button onClick={goToHome}>Home</button>
    </div>
  );
}

export default CreateTripPage;
