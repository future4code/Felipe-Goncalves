import React from "react";
import "./App.css";
import CriaPlayList from "./components/CriaPlayList";
import ListaDeMusicas from "./components/ListaDeMusicas";

class App extends React.Component {
  state = {
    minhaPlay: true,
  };

  trocaPagina = () => {
    this.setState({ minhaPlay: !this.state.minhaPlay });
  };
  render() {
    const pagAtual = this.state.minhaPlay ? (
      <CriaPlayList />
    ) : (
      <ListaDeMusicas />
    );

    return (
    
    <div>
      {pagAtual}
      <button onClick={this.trocaPagina}>Troca de Pagina</button>
    </div>
    )
  }
}

export default App;
