import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function RegistrationPage() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/feedPage");
    }
  }, [history]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleUsername = (e) => {
    setUserName(e.target.value);
  };

  const goToHome = () => {
    history.push("/");
  };

  const login = () => {
    const body = {
      email: email,
      password: password,
      username: userName,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/feedPage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <p>Login</p>
        <input value={email} onChange={handleEmail} placeholder="email" />
        <input value={password} onChange={handlePassword} placeholder="senha" />
        <input value={userName} onChange={handleUsername} placeholder="nome" />
        <button onClick={login}>Fazer login</button>
      </div>

      <button onClick={goToHome}>Home</button>
    </div>
  );
}

export default RegistrationPage;
