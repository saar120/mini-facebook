import React from "react";

import LoginStyled from "./Login.styled";

import Input from "../../../../components/Input";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <LoginStyled>
      <Input
        name="email"
        type="email"
        placeholder="Email"
        value={email}
        handleChange={handleChange}
        autoFocus
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        handleChange={handleChange}
      />
      <button type="submit">Log In</button>
    </LoginStyled>
  );
}
