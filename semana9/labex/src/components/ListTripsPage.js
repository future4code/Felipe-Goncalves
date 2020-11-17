import React from "react";
import { useHistory } from "react-router-dom";

function ListTripsPage() {
  const history = useHistory();

  const goToTripDetailsPage = () => {
    history.push("/trips/details");
  };

  const goToHome = () => {
    history.push("/");
  };

  return (
    <div>
      <p>ListTripsPage</p>

      <button onClick={goToTripDetailsPage}>Detalhes da Viagem</button>
      <button onClick={goToHome}>Home</button>
    </div>
  );
}

export default ListTripsPage;
