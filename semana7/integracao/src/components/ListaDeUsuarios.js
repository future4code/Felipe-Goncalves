import React from "react";
import axios from "axios";
import styled from "styled-components";

const BotaoDeleta = styled.span`
  color: red;
  margin-left: 10px;
`;

const linkUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const axiosUsuario = {
  headers: {
    Authorization: "felipe-polato-dumont",
  },
};

class ListaDeUsuarios extends React.Component {
  state = {
    listaUsuario: [],
  };

  componentsDidMount = () => {
    this.pegaUsuario();
  };

  pegaUsuario = () => {
    axios
      .get(linkUrl, axiosUsuario)
      .then((response) => {
        this.setState({ listaUsuario: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  deletaUsuario = (idUsuario) => {
    axios
      .delete(`${linkUrl}/${idUsuario}`, axiosUsuario)
      .then((response) => {
        alert("Usuário deletado com sucesso!");
        this.pegaUsuario();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    const novaLista = this.state.listaUsuario.map((usuario) => {
      return (
        <p key={usuario.id}>
          {usuario.name}
          <BotaoDeleta onClick={() => this.deletaUsuario(usuario.id)}>
            EXCLUI
          </BotaoDeleta>
        </p>
      );
    });

    return <div>{novaLista}</div>;
  }
}

export default ListaDeUsuarios;
