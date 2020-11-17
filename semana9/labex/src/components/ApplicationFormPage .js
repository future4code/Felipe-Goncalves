import React from "react";
import { useHistory } from "react-router-dom";

function ApplicationFormPage() {
  const history = useHistory();

  const goToApplicationFormPage = () => {
    history.push("/application-form");
  };

  const goToHome = () => {
    history.push("/");
  };

  return (
    <div>
      <p>ApplicationFormPage</p>
      <button onClick={goToApplicationFormPage}>Formulario de Inscrição</button>
      <button onClick={goToHome}>Home</button>
    </div>
  );
}

export default ApplicationFormPage;
