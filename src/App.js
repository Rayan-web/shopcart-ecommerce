import "./App.css";
import Alertheader from "./components/alertheader";
import Navbar from "./components/Navbar";
import Priceoff from "./components/priceoff";
import Categories from "./components/CategoriesNav";
import Main from "./components/main";
import { Provider } from "react-redux";
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

function App() {
  const [select, setSelect] = useState("");
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Mainlayout />} />

        <Route path="test" element={<Detailpage />} />
        <Route path="payment" element={<Paypage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
