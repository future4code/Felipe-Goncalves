import React from "react";
import axios from "axios";

class CriaPlayList extends React.Component {
  state = {
    playlistValue: "",
  };

  criarPlaylist = () => {
    const body = {
      name: this.state.playlistValue,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "felipe-polato-dumont",
          },
        }
      )
      .then((res) => {
        alert("PLAYLIST CRIADA");
        this.setState({ playlistValue: "" });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  onChangePlaylistValue = (event) => {
    this.setState({ playlistValue: event.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <input
            placeholder="Nome da Playlist"
            value={this.state.playlistValue}
            onChange={this.onChangePlaylistValue}
          />
          <button onClick={this.criarPlaylist}>Criar Playlist</button>
        </div>
      </div>
    );
  }
}

export default CriaPlayList;
