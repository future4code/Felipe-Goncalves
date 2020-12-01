import React from "react";
import axios from "axios";

class Formulario extends React.Component {
  state = {
    nameValue: "",
    emailValue: "",
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
            Authorization: "felipe-polato-dumont",
          },
        }
      )
      .then((response) => {
        this.setState({ nameValue: "", emailValue: "" });
        alert("Cadastro com sucesso");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  onChangeNomeValue = (event) => {
    this.setState({ nameValue: event.target.value });
  };

  onChangeEmailValue = (event) => {
    this.setState({ emailValue: event.target.value });
  };

  render() {
    return (
      <div>
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

export default Formulario;
