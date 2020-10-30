import React from "react";
import axios from "axios";

class ListaDeMusicas extends React.Component {
  state = {
    playlists: [],
  };

  componentDidMount = () => {
    this.pegarPlaylists();
  };

  pegarPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "felipe-polato-dumont",
          },
        }
      )
      .then((resposta) => {
        this.setState({ playlists: resposta.data.result.list });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  deletaLista = (listaId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${listaId}`,
        {
          headers: {
            Authorization: "felipe-polato-dumont",
          },
        }
      )
      .then(() => {
        alert("Palylist Apagada!");
        this.pegaLista();
      })
      .catch((error) => {
        alert("ERRO AO APAGAR PLAYLIST");
      });
  };

  render() {
    const novaPlaylist = this.state.playlists.map((playlist) => {
      return (
        <p key={playlist.id}>
          {playlist.name}
          <span onClick={() => this.deletaLista(playlist.id)}>X</span>
        </p>
      );
    });

    return <div>{novaPlaylist}</div>;
  }
}

export default ListaDeMusicas;
