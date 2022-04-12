import React from "react";
import HeaderStyled from "./Header.styled";

export default function Header() {
  return (
    <HeaderStyled>
      <h1 className="header">Facebook</h1>
      <p className="content">Connect with friends and the world around you on Facebook.</p>
    </HeaderStyled>
  );
}
