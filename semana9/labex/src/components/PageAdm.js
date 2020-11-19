import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (value, name) => {
    setForm({ ...form, [name]: value });
  };

  return { form, onChange };
};

function PageAdm() {
  const { form, onChange } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

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
        <input
          value={form.planet}
          placeholder={"Planeta"}
          onChange={handleInputChange}
          name={"planet"}
          type={"text"}
          required
        />
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

export default PageAdm;
