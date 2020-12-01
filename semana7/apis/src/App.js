import React from "react";
import axios from "axios";
import styled from "styled-components";

const DragaoSelect = styled.select`
  width: 50%;
`;

class App extends React.Component {
  state = {
    listaDeDragoes: [],
    selectedDragaoUrl: "",
  };

  componentDidMount() {
    this.pegaDragao();
  }

  pegaDragao = () => {
    const apiUrl = "https://api.spacexdata.com/v3/dragons";
    axios.get(apiUrl).then((response) => {
      this.setState({ listaDeDragoes: response.data });
    });
  };

  onChangeSelect = (event) => {
    const apiUrl = `https://api.spacexdata.com/v3/dragons/${event.target.value}`;
    axios.get(apiUrl).then((response) => {
      this.setState({selectedDragaoUrl: response.flickr_images});
    });
  };

  render() {
    console.log(this.state.listaDeDragoes);
    const listaNova = this.state.listaDeDragoes.map((dragao) => {
      return <option key={dragao.name}>{dragao.name}</option>;
    });
    return (
      <div>
        <DragaoSelect onChange={this.onChangeSelect} >
          {listaNova}
          </DragaoSelect>
        <img src={this.state.selectedDragaoUrl} />
      </div>
    );
  }
}

// onChange={this.onChangeSelect}
export default App;
