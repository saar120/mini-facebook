import React from "react";

import AuthStyled from "./Auth.styled";

import Login from "./components/Login/Login";
import Header from "./components/Header/Header";

export default function Auth() {
  return (
    <AuthStyled>
      <Header />
      <Login />
    </AuthStyled>
  );
}
