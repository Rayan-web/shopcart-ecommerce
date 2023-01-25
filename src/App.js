import "./App.css";
import Alertheader from "./components/alertheader";
import Navbar from "./components/Navbar";
import Priceoff from "./components/priceoff";
import Categories from "./components/CategoriesNav";
import Main from "./components/main";
import { Provider } from "react-redux";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Detailpage from "./components/detailpage";

function App() {
  const [select, setSelect] = useState("");
  return (
    <div className="font-Montserrat">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout setSelect={setSelect} />}>
            <Route path="/" element={<Alertheader />} />

            <Route path="/" element={<Categories />} />
            <Route path="/" element={<Main select={select} />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <Layout />
      <Detailpage />
    </div>
  );
}

export default App;
