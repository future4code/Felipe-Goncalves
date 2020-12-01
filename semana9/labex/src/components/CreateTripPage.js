import axios from "axios";
import React, { useEffect, useState } from "react";

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (value, name) => {
    setForm({ ...form, [name]: value });
  };

  return { form, onChange };
};

function CreatetripPage() {
  const [allTrip, setAllTrip] = useState([]);

  const { form, onChange } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

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

  const handleInputChange = (event) => {
    const {
      value,
      name,
      planet,
      date,
      description,
      durationInDays,
    } = event.target;

    onChange(value, name, planet, date, description, durationInDays);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div>
      {allTrip.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}

      <form onSubmit={onSubmitForm}>
        <p>Trip</p>
        <input
          value={form.name}
          placeholder={"Nome"}
          onChange={handleInputChange}
          name={"name"}
          type={"text"}
          pattern={"[A-Za-z]{3,}"}
          required
        />
        <select value={form.planet} onChange={handleInputChange} required>
          <option>Jupter</option>
          <option>Plutão</option>
          <option>Marte</option>
          <option>Terra</option>
          <option>Venus</option>
          <option>Saturno</option>
        </select>
        <input
          value={form.date}
          placeholder={"Data"}
          onChange={handleInputChange}
          name={"date"}
          type={"date"}
          required
        />
        <input
          value={form.description}
          placeholder={"Descrição"}
          onChange={handleInputChange}
          name={"description"}
          type={"text"}
          required
        />
        <input
          value={form.durationInDays}
          placeholder={"Duração em dias"}
          onChange={handleInputChange}
          name={"durationInDays"}
          type={"number"}
          required
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default CreatetripPage;
