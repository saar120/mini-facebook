import React from "react";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavbarStyled from "./Navbar.styled";

import { signUserOut } from "../../firebase/auth/auth";

import ROUTES from "../../constants/routes";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <NavbarStyled>
      <Button onClick={() => navigate(ROUTES.HOME)}>Home</Button>
      <div className="actions">
        <Button onClick={signUserOut}>Sign Out</Button>
      </div>
    </NavbarStyled>
  );
}
