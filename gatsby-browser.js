import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./src/routing/AppRoute";
import "./public/style.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const wrapRootElement = ({ element }) => {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
};
