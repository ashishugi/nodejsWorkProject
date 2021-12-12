import { useState } from "react";
import axios from "axios";

const SignUp = (props) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
    confirm: "",
  });
  const handleSubmit = (e) => {
    console.log(input);
    const url = "http://localhost:8000/users/create";
    axios
      .post(
        url,
        {
          email: input.email,
          password: input.password,
          name: input.name,
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
        Confirm :
        <input
          type="text"
          value={input.confirm}
          onChange={(e) => setInput({ ...input, confirm: e.target.value })}
        />
        Name :
        <input
          type="text"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <br />
        <br />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
