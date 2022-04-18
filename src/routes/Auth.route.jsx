import React from "react";

import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

import { useAuth } from "../context/user.context";

import ROUTES from "../constants/routes";

export default function AuthRoute() {
  const user = useAuth();

  return user ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to={ROUTES.AUTH} />
  );
}
