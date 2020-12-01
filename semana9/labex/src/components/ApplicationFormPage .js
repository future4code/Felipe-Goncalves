import axios from "axios";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (value, name) => {
    setForm({ ...form, [name]: value });
  };

  return { form, onChange };
};

function ApplicationFormPage() {
  const pathParams = useParams();
  const id = pathParams.id;
  
  const { form, onChange } = useForm({
    nameCandidate: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    trip: "",
  });

  const handleInputCandidate = (event) => {
    const {
      nameCandidate,
      age,
      applicationText,
      profession,
      country,
      trip,
    } = event.target;

    onChange(nameCandidate, age, applicationText, profession, country, trip);
  };

  const formCondidate = () => {
    const body = {
      nameCandidate: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe-dumont/trips/${id}/apply`,
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/trips/list");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  return (
    <div>
      <p>ApplicationFormPage</p>

      <button onClick={goToHome}>Home</button>

      <form onSubmit={formCondidate}>
        <p>Candidato</p>
        <input
          value={form.nameCandidate}
          placeholder={"Nome"}
          onChange={handleInputCandidate}
          name={"name"}
          type={"text"}
          pattern={"[A-Za-z]{3,}"}
          min="3"
          required
        />
        <input
          value={form.age}
          placeholder={"Idade"}
          onChange={handleInputCandidate}
          name={"age"}
          type={"number"}
          min="18"
          required
        />
        <input
          value={form.applicationText}
          placeholder={""}
          onChange={handleInputCandidate}
          name={"applicationText"}
          type={"text"}
          min="30"
          required
        />
        <input
          value={form.profession}
          placeholder={"Profissão"}
          onChange={handleInputCandidate}
          name={"profession"}
          type={"text"}
          required
        />
        <input
          value={form.country}
          placeholder={""}
          onChange={handleInputCandidate}
          name={"country"}
          type={"text"}
          required
        />
        <input
          value={form.trip}
          placeholder={"id trip"}
          onChange={handleInputCandidate}
          name={"trip"}
          type={"text"}
          required
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default ApplicationFormPage;
