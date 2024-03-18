import React from "react";
import Main from "../pages/Main";
import NewProduct from "../pages/NewProduct";
import ProductList from "../pages/ProductList";
import UpdateProduct from "../pages/UpdateProduct";
import MyNavbar from "../components/MyNavbar";
import About from "../pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/updateproduct" element={<UpdateProduct />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
