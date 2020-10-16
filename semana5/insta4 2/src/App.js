import React from "react";
import "./App.css";
import Post from "./components/Post/Post";

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
    fotoPost: ""
  };

   adicionaPost = () => {    
    const novoPost = { 
      nome: this.state.nomeUsuario,      
      fotoDoUsuario: this.state.fotoUsuario,
      fotoPostUsuario: this.state.fotoPost
    };
  };

    const  novoPosts = [...this.state.usuarios, novoPost];

    this.setState({
    usuario: novoPost,
    nomeUsuario: "",
    fotoUsuario: "",
    fotoPost: ""
  });


  onChangeNomeUsuario = (event) => {
    this.setState({ nomeUsuario: event.target.value });
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

        <div>
          <input
            value={this.state.valor}
            onChange={this.onChangeInputEmail}
            placeholder={"Email"}
          />

          <input
            value={this.state.valorInputEmail}
            onChange={this.onChangeInputEmail}
            placeholder={"Email"}
          />

          <input
            value={this.state.valorInputEmail}
            onChange={this.onChangeInputEmail}
            placeholder={"Email"}
          />

          <button onClick={this.adicionaPessoa}>Adicionar</button>
        </div>

        <div>{listaDeUsuarios}</div>
      </div>
    );
  };
}


export default App;
