import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import { register, signIn } from "../../../../firebase/auth/auth";

import LoginStyled from "./Login.styled";

import Input from "../../../../components/Input";
import ROUTES from "../../../../constants/routes";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async () => {
    const user = isLogin ? await signIn(email, password) : await register(email, password);
    if (user.ok) {
      navigate(ROUTES.HOME);
      return;
    }
    setError(user.error);
  };

  const changeLoginOrRegister = () => {
    setIsLogin((prev) => !prev);
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
      <Button onClick={handleSubmit} fullWidth variant="contained">
        {isLogin ? "Log In" : "Sign Up"}
      </Button>
      <Button onClick={changeLoginOrRegister} fullWidth variant="contained">
        {isLogin ? "No account ? sign up" : "Have an account ? log in"}
      </Button>
      <h3>{error}</h3>
    </LoginStyled>
  );
}
