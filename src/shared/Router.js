import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Write from "../pages/Write";
import List from "../pages/List";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Write" element={<Write />} />
        <Route path="/List" element={<List />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
