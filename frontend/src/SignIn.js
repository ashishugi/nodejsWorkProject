import { useState } from "react";
import axios from "axios";

const SignIn = (props) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    console.log(input);
    const url = "http://localhost:8000/users/signin";
    axios
      .post(url, {
        email: input.email,
        password: input.password,
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
