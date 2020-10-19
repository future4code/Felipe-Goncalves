import React from "react";
import "./App.css";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

export class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return <Etapa1 />;
    }
  };

  onClickIrProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1 ? this.state.etapa < 4 : false,
    });
  };

  render() {
    return (
      <div className="App">
        {this.renderizaEtapa()}
        <button onClick={this.onClickIrProximaEtapa}>Próxima Etapa</button>
      </div>
    );
  }
}

export default App;
