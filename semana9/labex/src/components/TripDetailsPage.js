import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useProtectedPage } from "../hooks/useProtectedPage";

function TripDetailsPage() {
  const [trip, setTrip] = useState({});
  const history = useHistory();
  useProtectedPage();

  useEffect(() => {
    getTripDetail();
  }, []);

  const getTripDetail = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe-dumont/trip/${id}",
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setTrip(res.data.trip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

      <p>Trip Detail</p>
      <p>{trip.name}</p>
      <p>{trip.planet}</p>
    </div>
  );
}

export default TripDetailsPage;
