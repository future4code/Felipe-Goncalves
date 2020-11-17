import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push("/login");
  };

  const goToAppliFormPage = () => {
    history.push("/application-form");
  };

  return (
    <div>
      <p>Home</p>
      <button onClick={goToAppliFormPage}>Formulario de Inscrição</button>
      <button onClick={goToLoginPage}>Ir Para Login</button>
    </div>
  );
}

export default Home;
