import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import GlobalStyles from "./styles/styles.global";

import ROUTES from "./constants/routes";

import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<h1>Home</h1>} />
          <Route path={ROUTES.AUTH} element={<Auth />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
