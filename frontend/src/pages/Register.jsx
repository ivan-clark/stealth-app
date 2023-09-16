import { useState } from "react";
import Api from "../services/Api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    Api.register(username, password)
      .then((response) => {
        if (response.data) {
          window.location.replace("/login");
        }
      })
      .catch((error) => console.log(error));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleRegister();
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          required
        />
      </div>
      <button type="button" onClick={handleRegister}>
      Register
      </button>
    </div>
  );
};

export default Register;
