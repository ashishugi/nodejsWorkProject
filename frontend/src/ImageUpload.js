import { useState } from "react";
import axios from "axios";

const ImageUpload = (props) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    profileImg: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    const url = "http://localhost:8000/api/v1/users/update";
    axios
      .post(
        url,
        {
          email: input.email,
          user: {
            id: "61bde2d0ad1b295518d423a9",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log("response is made");
      })
      .catch(function (error) {
        console.log("some error occurred");
        console.log(error);
      });
  };

  const onChangeUpload = (e) => {
    console.log(e.target.files[0]);
    setInput({
      ...input,
      profileImg: e.target.files[0],
    });
  };

  return (
    <div>
      <div>
        <h1>Upload Image here !!!</h1>
      </div>
      Email :
      <input
        type="email"
        value={input.email}
        onChange={(e) => setInput({ ...input, email: e.target.value })}
      />
      Password :
      <input
        type="text"
        value={input.password}
        onChange={(e) => setInput({ ...input, password: e.target.value })}
      />
      <input
        type="file"
        name="profile"
        placeholder="Profile Photo"
        onChange={(e) => onChangeUpload(e)}
      />
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
  );
};

export default ImageUpload;
