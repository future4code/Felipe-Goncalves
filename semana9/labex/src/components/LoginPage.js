import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

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

  return (
    <div>
      <p>Login</p>
      <input value={email} onChange={handleEmail} />
      <input value={password} onChange={handlePassword} />
      <button onClick={login}>Fazer login</button>
    </div>
  );
}

export default LoginPage;
