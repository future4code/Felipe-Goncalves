import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

function ListTripsPage() {
  const [trips, setTrip] = useState([]);
  const history = useHistory();

  useEffect(() => {
    detailsTrip();
  }, []);

  const detailsTrip = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe-dumont/trips",
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setTrip(response.data.trips);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goToTripDetailsPage = () => {
    history.push("/trips/details");
  };

  const goToHome = () => {
    history.push("/");
  };
  return (
    <div>
      {trips.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}

      <button onClick={goToTripDetailsPage}>Detalhes da Viagem</button>
      <button onClick={goToHome}>Home</button>
    </div>
  );
}

export default ListTripsPage;
