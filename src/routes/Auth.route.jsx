import React from "react";

import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/user.context";

import ROUTES from "../constants/routes";

export default function AuthRoute() {
  const user = useAuth();

  return user ? <Outlet /> : <Navigate to={ROUTES.AUTH} />;
}
