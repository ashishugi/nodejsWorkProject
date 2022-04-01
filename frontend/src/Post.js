import { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Post = (props) => {
  const [postData, setPostData] = useState("");
  const handleSubmit = (e) => {
    console.log("submited");
    const url = "http://localhost:8000/api/v1/posts";
    const token = localStorage.getItem("token");
    console.log("here @ post", token);
    axios
      .post(
        url,
        {
          content: postData,
          user: {
            _id: "61bde2d0ad1b295518d423a9",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
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
    isLoggedIn();
    getData();
  });

  const getData = () => {
    const url = "http://localhost:8000/posts";
    const token = localStorage.getItem("token");
    console.log("inside post", token);
    axios
      .get(
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
  };
  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    // if (!token) {
    //   console.log("token is invalid");
    //   window.location.href = "/";
    //   return;
    // }
    // console.log("token is valid");
  };
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
