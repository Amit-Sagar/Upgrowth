import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    isPrivate: false,
  },
  {
    path: "/about",
    element: <About />,
    isPrivate: false,
  },
  {
    path: "/services",
    element: <About />,
    isPrivate: false,
  },
  {
    path: "/industries",
    element: <About />,
    isPrivate: false,
  },
];

const AllRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
      <Route exact path="*" element={<Navigate to="/error/404" />} />
    </Routes>
  );
};

export default AllRoutes;
