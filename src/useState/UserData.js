import React from "react";
import { useState } from "react";

const UserData = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState({
    name: "John",
    email: "john@example.com",
  });
  const changeUser = () => {
    setUser((userData) => ({ ...userData, name: input }));
  };
  return (
    <div>
      <h2>User:</h2>
      <input
        onChange={(e) => setInput(e.target.value)}
        placeholder="enter a new name..."
      />
      <button onClick={changeUser}>Change username</button>
      <span>Username is: {user.name}</span>
    </div>
  );
};

export default UserData;
