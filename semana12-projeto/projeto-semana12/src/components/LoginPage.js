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
      history.push("/feedPage");
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
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login",
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

  const goToRegistration = () => {
    history.push("/registrationPage");
  };

  const goToFeed = () => {
    history.push("/feedPage");
  };

  const goToPost = () => {
    history.push("/postPage");
  };

  return (
    <div>
      <p>Login</p>
      <input value={email} onChange={handleEmail} />
      <input value={password} onChange={handlePassword} />
      <button onClick={login}>Fazer login</button>

      <button onClick={goToRegistration}> Registro</button>
      <button onClick={goToFeed}>Feed</button>
      <button onClick={goToPost}>Post</button>
    </div>
  );
}

export default LoginPage;
