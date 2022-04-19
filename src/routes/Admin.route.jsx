import React from "react";

import { Outlet, Navigate } from "react-router-dom";

import { useAuth } from "../context/user.context";
import ROUTES from "../constants/routes";

export default function AdminRoute() {
  const user = useAuth();

  return user.admin ? <Outlet /> : <Navigate to={ROUTES.HOME} />;
}
