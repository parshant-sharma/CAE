import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import AppRoute from "../routing/AppRoute";

const IndexPage = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  if (!isBrowser) {
    // Prevent rendering Router during SSR
    return <h1>hello</h1>;
  }

  return (
    <Router>
      <div>
        <AppRoute />
      </div>
    </Router>
  );
};

export default IndexPage;
