import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./src/routing/AppRoute";
import "./src/style.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickCarousel = dynamic(() => import("react-slick"), { ssr: false });

export const wrapRootElement = ({ element }) => {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
};
