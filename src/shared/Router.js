import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Write from "../pages/Write";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Detail" element={<Detail />} />
        <Route path="Write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;