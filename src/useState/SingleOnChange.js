import React from "react";
import { useState } from "react";

const SingleOnChange = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    country: "",
    phonenumber: "",
  });
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(user);
  return (
    <div>
      <form action="">
        <input
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="username"
        />
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="email"
        />
        <input
          type="text"
          name="country"
          onChange={handleChange}
          placeholder="country"
        />
        <input
          type="text"
          name="phonenumber"
          onChange={handleChange}
          placeholder="phonenumber"
        />
      </form>
    </div>
  );
};

export default SingleOnChange;
