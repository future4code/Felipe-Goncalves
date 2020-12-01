import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push("/login");
  };

  const goToAppliFormPage = () => {
    history.push("/trip/listpagecandidate");
  };

  const goToPageAdm = () => {
    history.push("/trip/page-adm");
  };

  return (
    <div>
      <p>Home</p>
      <button onClick={goToAppliFormPage}>Formulario de Inscrição</button>
      <button onClick={goToLoginPage}>Ir Para Login</button>
      <button onClick={goToPageAdm}>Adm</button>
    </div>
  );
}

export default Home;
