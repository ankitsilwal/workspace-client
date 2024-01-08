import React, { useState } from "react";
import axios from "axios";
import "./create.css";

export const Create = () => {
  const [name, setName] = useState('');
  const [registrationKey, setRegistrationKey] = useState('');
  const [response, setResponse] = useState('');

  const postData = async (event) => {
    event.preventDefault();  // Prevent default form submission
    try {
      const response = await axios.post('http://localhost:3000/workspace/create', {
        name: name,
        registration_key: registrationKey
      });
      setResponse(response.data);
    } catch (error) {
      console.error('Error posting data:', error);
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
      <input type="submit" value="Submit" />
      {response && <p> {"WorkSpace Added"}</p>}
    </form>
  );
};
