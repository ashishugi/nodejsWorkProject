import { useState } from "react";
import axios from "axios";

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
