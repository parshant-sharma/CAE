import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import AppRoute from "../routing/AppRoute";

const IndexPage = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // This will run only in the browser after the component has mounted
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    // Prevent rendering Router during SSR
    return null;
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
