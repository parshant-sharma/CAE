import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import AppRoute from "../routing/AppRoute";

const IndexPage = () => (
  <Router>
    {" "}
    {/* Wrap your AppRoute in BrowserRouter */}
    <div>
      <h1>Welcome to My Gatsby Site with React Router!</h1>
      <AppRoute />
    </div>
  </Router>
);

export default IndexPage;
