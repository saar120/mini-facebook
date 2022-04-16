import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "./context/user.context";
import GlobalStyles from "./styles/styles.global";

import ROUTES from "./constants/routes";

import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import AuthRoute from "./routes/Auth.route";

function App() {
  console.count("app");
  return (
    <>
      <GlobalStyles />
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<AuthRoute />}>
              <Route path={ROUTES.HOME} element={<Home />} />
            </Route>
            <Route path={ROUTES.AUTH} element={<Auth />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
