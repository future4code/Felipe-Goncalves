import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Deslike from "../image/seta-dupla.svg";
import Enjoying from "../image/seta-direita.svg";
import Like from "../image/avanco-rapido.svg";
import LikeYellou from "../image/seta-amarela.svg";

const ContainerCard = styled.div`
  border: solid 1px black;
  display: flex;
  justify-content: center;
  aligni-items: center;
  margin: 10px;
`;

const Card = styled.div`
  background: #ccc;
  width: 80%;
`;

const Image = styled.img`
  display: flex;
  width: 5%;
  margin: 10px;
`;

function FeedPage() {
  const [post, setPost] = useState([]);
  const [form, setForm] = useState({ text: "", title: "" });
  const history = useHistory();

  useEffect(() => {
    getPost();
  }, []);

  const postFeed = (event) => {
    event.preventDefault();

    const body = {
      text: form.text,
      title: form.title,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",
        body,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        alert("POST CADASTRADO COM SUCESSO");
        getPost();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const getPost = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setPost(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const votePost = (rate) => {
    const body = {
      direction: rate,
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${post.id}/vote`,
        body,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        alert("Deu certo!!!");
        getPost();
        
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const enjoying = () => {
    if (post.userVoteDirection === 0) {
      return (
        <div>
          <Image
            src={Deslike}
            onClick={() => {
              votePost(-1);
            }}
          />

          <p>{post.votesCount}</p>

          <Image
            src={Enjoying}
            onClick={() => {
              votePost(1);
            }}
          />
        </div>
      );
    } else if (post.userVoteDirection === 1) {
      return (
        <div>
          <Image
            src={Like}
            onClick={() => {
              votePost(-1);
            }}
          />

          <p>{post.votesCount}</p>

          <Image
            src={LikeYellou}
            onClick={() => {
              votePost(0);
            }}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Image
            src={Deslike}
            onClick={() => {
              votePost(0);
            }}
          />

          <p>{post.votesCount}</p>

          <Image
            src={Enjoying}
            onClick={() => {
              votePost(1);
            }}
          />
        </div>
      );
    }
  };

  const hendelInputFeed = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const goToDetilsPost = (id) => {
    history.push(`/postPage/${id}`);
  };
  return (
    <div>
      <form>
        <label>Titulo do Post:</label>
        <input
          name="title"
          type="text"
          placeholder="Titulo do Post"
          value={form.title}
          onChange={hendelInputFeed}
        />

        <textarea
          name="text"
          type="text"
          place="Digite seu Post"
          value={form.text}
          onChange={hendelInputFeed}
        />

        <button onClick={postFeed}>Criar Post</button>
      </form>

      {post.map((item) => {
        return (
          <ContainerCard key={item.id}>
            <Card>
              <h2>{item.title}</h2>
              <h3>{item.username}</h3>
              <p>{item.text}</p>
              <p>{item.commentsCount}</p>
              <p>{item.votesCount}</p>

              <button onClick={() => goToDetilsPost(item.id)}>
                {" "}
                Detalhes Post
              </button>

              {enjoying()}
            </Card>
          </ContainerCard>
        );
      })}
    </div>
  );
}

export default FeedPage;
