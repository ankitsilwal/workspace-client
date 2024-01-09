import React, { useState } from "react";
import axios from "axios";
import "./create.css";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [registrationKey, setRegistrationKey] = useState("");
  const [password, setpassword] = useState("");
  const [isActive] = useState(false);
  const [response, setResponse] = useState("");

  const postData = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/workspace/create",
        {
          name: name,
          registration_key: registrationKey,
          password: password,
          isActive: isActive,
        }
      );
      setResponse(response.data);
      navigate("/");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <form onSubmit={postData}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Registration Key:
        <input
          type="text"
          name="registration_key"
          value={registrationKey}
          onChange={(e) => setRegistrationKey(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
        />
      </label>
      <input type="submit" value="Submit" />
      {response && <p> {"WorkSpace Added"}</p>}
    </form>
  );
};
