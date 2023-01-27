import React from "react";
import { Outlet } from "react-router-dom";
import Alertheader from "../components/alertheader";
import CategoriesNav from "../components/CategoriesNav";
import Main from "../components/main";
import Navbar from "../components/Navbar";
import Priceoff from "../components/priceoff";

const Layout = ({ setSelect }) => {
  return (
    <>
      <section>
        <Alertheader />
        <Navbar />
        {/* <Priceoff /> */}
        {/* <CategoriesNav setSelect={setSelect} /> */}
        {/* <Main /> */}
      </section>
      <div className="">
      <Outlet />
      </div>
        
    </>
  );
};

export default Layout;
