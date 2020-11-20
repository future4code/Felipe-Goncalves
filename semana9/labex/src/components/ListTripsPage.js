import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { useProtectedPage } from "../Hooks/useProtectedPage";

function ListTripsPage() {
  const [trips, setTrips] = useState([]);

  const history = useHistory();

  useEffect(() => {
    listTrips();
  }, []);

  useProtectedPage()

  const listTrips = () => {
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
        setTrips(response.data.trips);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const detailsTrip = (id) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe-dumont/trip/${id}`,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        history.push(`/trip/details/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goToHome = () => {
    history.push("/");
  };

  return (
    <div>
      {trips.map((item) => {
        return (
          <div>
            <p key={item.id}>{item.name}</p>

            <button onClick={() => detailsTrip(item.id)}>
              Detalhes da Viagem
            </button>
          </div>
        );
      })}

      <button onClick={goToHome}>Home</button>
    </div>
  );
}

export default ListTripsPage;
