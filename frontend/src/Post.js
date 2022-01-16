import { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Post = (props) => {
  const [postData, setPostData] = useState("");
  const handleSubmit = (e) => {
    console.log("submited");
    const url = "http://localhost:8000/api/v1/posts";
    axios
      .post(url, {
        content: postData,
        user: {
          _id: "61b4d0000b1967c2a868f68c",
        },
      })
      .then(function (response) {
        console.log("response is made");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    e.preventDefault();
  };
  console.log(postData);
  useEffect(() => {
    function getData() {
      console.log("inside post");
      const url = "http://localhost:8000/posts";
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjFiZGUyZDBhZDFiMjk1NTE4ZDQyM2E5IiwiZW1haWwiOiJhQGEuY29tIiwiaWF0IjoxNjQyMzQ0NjMwLCJleHAiOjE2NDIzNTE4MzB9.ngzJh3uxyxa7fG3AHRL1vjtTl_aYa0qiA6T3AGSLV5s";
      axios
        .post(
          url,
          {},
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(function (response) {
          console.log("response is made");
          console.log(response);
          if (!response.data.success) {
            console.log("inside the response .data");
            props.history.push("/signin");
            return <Redirect to="/signin" />;
          }
        })
        .catch(function (error) {
          console.log("some error occurred");
          console.log(error);
        });
    }
    getData();
  });
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hey there at Post Page</h1>
      <input
        type="text"
        value={postData}
        onChange={(e) => setPostData(e.target.value)}
      />
      <button onClick={(e) => handleSubmit(e)}>Post</button>
    </div>
  );
};

export default Post;
