import React from "react";
import "./App.css";
import Post from "./components/Post/Post";
import styled from "styled-components";

const EstilizaPost = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  state = {
    usuarios: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50?a1",
        fotoPost: "https://picsum.photos/200/150?a2",
      },

      {
        nomeUsuario: "Felipe",
        fotoUsuario: "https://picsum.photos/50/50?a3",
        fotoPost: "https://picsum.photos/200/150?a4",
      },

      {
        nomeUsuario: "Mariah",
        fotoUsuario: "https://picsum.photos/50/50?a5",
        fotoPost: "https://picsum.photos/200/150?a6",
      },
    ],

    nomeUsuario: "",
    fotoUsuario: "",
    fotoPost: "",
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost,
    };

    const postagem = [...this.state.usuarios, novoPost];

    this.setState({
      usuarios: postagem,
      nomeUsuario: "",
      fotoUsuario: "",
      fotoPost: "",
    });
  };

  onChangeNomeUsuario = (event) => {
    this.setState({ nomeUsuario: event.target.value });
  };

  onChangeFotoUsuario = (event) => {
    this.setState({ fotoUsuario: event.target.value });
  };

  onChangeFotoPost = (event) => {
    this.setState({ fotoPost: event.target.value });
  };

  render() {
    const listaDeUsuarios = this.state.usuarios.map((usuario) => {
      return (
        <Post
          nomeUsuario={usuario.nomeUsuario}
          fotoUsuario={usuario.fotoUsuario}
          fotoPost={usuario.fotoUsuario}
        />
      );
    });

    return (
      <div>
        <EstilizaPost>
          <input
            value={this.state.nomeUsuario}
            onChange={this.onChangeNomeUsuario}
            placeholder={"Usuario"}
          />

          <input
            value={this.state.fotoUsuario}
            onChange={this.onChangeFotoUsuario}
            placeholder={"Foto Perfil"}
          />

          <input
            value={this.state.fotoPost}
            onChange={this.onChangeFotoPost}
            placeholder={"Foto Post"}
          />

          <button onClick={this.adicionaPost}>Postar</button>
        </EstilizaPost>

        <div>{listaDeUsuarios}</div>
      </div>
    );
  }
}

export default App;
