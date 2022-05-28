import React from "react";
import data from "./data";
import Add from "./components/Add";
import Home from "./components/Home";
import Detail from "./components/Detail";

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(data("products")));
}
function getProducts() {
  if (!localStorage.getItem("products")) {
    saveProducts();
  }
  return JSON.parse(localStorage.getItem("products"));
}
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home cards={getProducts()} />,
  },
  {
    path: "/add",
    exact: true,
    main: () => <Add products={getProducts()} />,
  },
  {
    path: "/detail/:id",
    exact: true,
    main: () => <Detail/>,
  },
];
export default routes;
