import { useHistory, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const PostDetails = styled.div`
  border: solid 1px black;
  display: flex;
  justify-content: center;
  aligni-items: center;
  margin: 10px;
`;

const CardPost = styled.div`
  background: #ccc;
  width: 80%;
`;

function PostPage() {
  const [detailPost, setDetailPost] = useState({});
  const [comment, setComment] = useState([]);
  const [detailsForm, setDetailsForm] = useState("");
  const history = useHistory();
  const pathParams = useParams();
  const id = pathParams.id;

  useEffect(() => {
    getPostDetail();
  }, []);

  const commentCreat = (event) => {
    event.preventDefault();

    const body = {
      text: detailsForm,
    };

    console.log(body);

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/comment`,
        body,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        alert("Comentario postado!!!");
        getPostDetail();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const getPostDetail = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setDetailPost(response.data.post);
        setComment(response.data.posts.comments);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const hendelInputPost = (event) => {
    setDetailsForm(event.target.value);
  };

  // const hendelInputPost = (event) => {
  //   const { name, value } = event.target;
  //   setDetailsForm({ ...detailsForm, [name]: value });
  // };

  return (
    <PostDetails>
      <CardPost>
        
        <p>{detailPost.userName}</p>
        <p>{detailPost.title}</p>
        <p>{detailPost.text}</p>
        <p>{detailPost.votesCount}</p>
        <p>{detailPost.comentsCount}</p>

        <form>
          <textarea
            name="text"
            type="text"
            value={detailsForm.text}
            onChange={hendelInputPost}
          />

          <button onClick={commentCreat}>Comentar!</button>
        </form>

        {comment &&
          comment.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.text}</p>
                <p>{item.username}</p>
              </div>
            );
          })}
      </CardPost>
    </PostDetails>
  );
}

export default PostPage;
