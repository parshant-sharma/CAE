import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../commponents/Home";
import NotFoundPage from "../commponents/404";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoute;
