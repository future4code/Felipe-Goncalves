import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (value, name) => {
    setForm({ ...form, [name]: value });
  };

  return { form, onChange };
};

function ListPageCondidate() {
  const history = useHistory();
  const [allTrip, setAllTrip] = useState([]);
  const pathParams = useParams();
  const id = pathParams.id;

  useEffect(() => {
    getAllTrips();
  }, []);

  const getAllTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe-dumont/trips"
      )
      .then((response) => {
        setAllTrip(response.data.trips);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goApliationTrip = (tripId) => {
    history.push(`/application-form/${tripId}`);
  };

  return (
    <div>
      {allTrip.map((item) => {
        return (
          <div>
            <p key={item.id}>{item.name}</p>
            <button onClick={() => goApliationTrip(item.id)}>
              Cadastre na Viajem
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ListPageCondidate;
