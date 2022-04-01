import { useState } from "react";
import axios from "axios";

import { setCookie, getCookie } from "./helper/cookies";

const SignIn = (props) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    console.log(input);
    const url = "http://localhost:8000/api/v1/users/sign-in";
    axios
      .post(url, {
        email: input.email,
        password: input.password,
      })
      .then(function (response) {
        console.log("response is made");
        console.log(response.data);
        if (response.data.success) {
          const { data: { data: { token = "" } = {} } = {} } = response;
          // console.log("token", token);
          // console.log("-->", response.data.data.token);
          // let date = new Date(Date.now() + 86400e3);
          // date = date.toUTCString();
          // console.log(`token=${token}; expires=${date}`);
          // setCookie(`token=${token}; expires=${date}`);
          // console.log("->", getCookie("token"));
          localStorage.setItem("token", token);
        }
      })
      .catch(function (error) {
        console.log("some error occurred");
        console.log(error);
      });

    e.preventDefault();
  };
  return (
    <div>
      <form>
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
        <br />
        <br />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
