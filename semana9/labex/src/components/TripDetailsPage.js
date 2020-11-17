import React from "react";
import { useHistory } from "react-router-dom";

function TripDetailsPage() {
  const history = useHistory();

  const goToTripDetailsPage = () => {
    history.push("/trips/list");
  };

  const goToHome = () => {
    history.push("/");
  };

  return (
    <div>
      <p>TripDetailsPage</p>
      <button onClick={goToTripDetailsPage}>Detalhes da Viagem</button>
      <button onClick={goToHome}>Home</button>
    </div>
  );
}

export default TripDetailsPage;
