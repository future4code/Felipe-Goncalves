import { useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useProtectedPage } from "../Hooks/useProtectedPage";

function TripDetailsPage() {
const [candidateTrip, setCandidateTrip] = useState([]);
  const [trip, setTrip] = useState({});
  const history = useHistory();
  const pathParams = useParams();
  const id = pathParams.id;

  useProtectedPage();

  useEffect(() => {
    getTripDetail();
  }, []);

  const getTripDetail = () => {
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
        setCandidateTrip(response.data.trip.candidate);
        setTrip(response.data.trip);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   const goToTripDetailsPage = () => {
  //     history.push("/trips/list");
  //   };

  //   const goToHome = () => {
  //     history.push("/");
  //   };

  //   const goToPageAdm = () => {
  //     history.push("/trip/page-adm");
  //   };

  return (
    <div>
      {candidateTrip.map((candidate) => {
       return <p key={candidate.id}>{candidate.name}</p>;
      })}

      <p>TripDetailsPage</p>
      {/* <button onClick={goToTripDetailsPage}>Detalhes da Viagem</button>
      <button onClick={goToHome}>Home</button>
      <button onClick={goToPageAdm}>Adm</button> */}

      <p key={trip.id}>{trip.durationInDays}</p>
      <p>{trip.name}</p>
      <p>{trip.planet}</p>
    </div>
  );
}

export default TripDetailsPage;
