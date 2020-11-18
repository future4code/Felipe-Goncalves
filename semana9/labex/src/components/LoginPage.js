import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/trips/list");
    }
  }, [history]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    const body = {
      email,
      password,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe-dumont/login",
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

//   const goToHome = () => {
//     history.push("/");
//   };

//   const goToListTripPage = () => {
//     history.push("/trips/list");
//   };

//   const goToCreateTripPage = () => {
//     history.push("/trips/create");
//   };

  return (
    <div>
      <p>Login</p>
      <input value={email} onChange={handleEmail} />
      <input value={password} onChange={handlePassword} />
      <button onClick={login}>Fazer login</button>

      {/* <button onClick={goToListTripPage}>Ver Todas as viagens</button>
      <button onClick={goToCreateTripPage}>Criar uma viagem</button>
      <button onClick={goToHome}>Home</button> */}
    </div>
  );
}

export default LoginPage;
