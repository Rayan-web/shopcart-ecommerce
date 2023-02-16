import "./App.css";
import { Provider } from "react-redux";
import Alertheader from "./components/alertheader";
import Navbar from "./components/Navbar";
import Priceoff from "./components/priceoff";
import Categories from "./components/CategoriesNav";
import Main from "./components/main";
import { createStore } from "redux";
import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Detailpage from "./components/detailpage";
import Mainlayout from "./Layouts/Mainlayout";
import Paypage from "./components/paypage";
import Paymentmodal from "./components/paymentmodal";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Mainlayout />} />

        <Route path="products/:id" element={<Detailpage />} />
        <Route path="payment/:id" element={<Paypage />} />
        <Route path="payment/modal" element={<Paymentmodal />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
