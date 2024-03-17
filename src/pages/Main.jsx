import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";


const Main = () => {

  const navigate = useNavigate()

  return (
    <main className="main">
      <div>
        <h1>Welcome to Shopping Cart Application</h1>
        <div className="main-buttons">
          <button
            className="btn btn-outline-primary px-4"
            onClick={() => navigate("/newproduct")}
          >
            Add New Product
          </button>
          <button className="btn btn-primary px-4 ms-3"
            onClick={() => navigate("/productlist")}
          > <MdOutlineProductionQuantityLimits className="shopping-basket" style={{ color: "red" }} /> See Products</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
