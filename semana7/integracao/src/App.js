import React from "react";
import "./App.css";
import styled from "styled-components";
import Formulario from "./components/Formulario";
import ListaDeUsuarios from "./components/ListaDeUsuarios";

class App extends React.Component {
  state = {
    Formulario: true,
  };

  changePage = () => {
    this.setState({ Formulario: !this.state.Formulario });
  };

  render() {
    const currentPage = this.state.Formulario ? <Formulario /> : <ListaDeUsuarios />;
    return (
      <div>
        {currentPage}
        <button onClick={this.changePage}>Mudar de Página</button>
      </div>
    );
  }
}

export default App;
