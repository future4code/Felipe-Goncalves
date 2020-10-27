import React from "react";
import "./App.css";
import styled from "styled-components";
import axios from "axios";

class App extends React.Component {
  state = {
    nameValue: "",
    emailValue: "",
  };

  componentsDidMount = () => {
    this.pegaUsuario();
  };

  pegaUsuario = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "Felipe-Polato-Dumont",
          },
        }
      )
      .then((response) => {
        this.setState({ usuario: response.data.result.list });
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  criaUsuario = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "Felipe-Polato-Dumont",
          },
        }
      )
      .then((response) => {
        alert("Cadastro com sucesso");
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  onChangeNomeValue = (event) =>{
    this.setState({nameValue: event.target.value})
  }

  onChangeEmailValue = (event) =>{
    this.setState({emailValue: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <input
          value={this.state.nameValue}
          onChange={this.onChangeNomeValue}
          placeholder="Digite nome do Usuario:"
        />

        <input
          value={this.state.emailValue}
          onChange={this.onChangeEmailValue}
          placeholder="Digite nome do Usuario:"
        />

        <button onClick={this.criaUsuario}>Adicionar Usuario</button>
      </div>
    );
  }
}

export default App;
