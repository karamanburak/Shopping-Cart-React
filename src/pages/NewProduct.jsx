import axios from "axios";
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const BASE_URL = "https://65f4c515f54db27bc0224f20.mockapi.io/products";

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productImage, setProductImage] = useState("");

  //! POST (CREATE)\\

  const postData = async (newData) => {
    await axios.post(BASE_URL, newData);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //^ database e yollamak icin\\

    postData({
      name: productName,
      price: productPrice,
      amount: productQuantity,
      image: productImage,
      dampingRate: 0.8,
    });

    setProductName("");
    setProductPrice("");
    setProductQuantity("");
    setProductImage("");
  };

  return (
    <div className="container col col-lg-6 my-4 rounded-2  bg-light bg-opacity-50">
      <div className=" text-center">
        <h2 className="text-danger pt-4">ADD NEW PRODUCT</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <div className="my-4">
            <label htmlFor="product-name">Product Name</label>
            <input
              onChange={(e) => setProductName(e.target.value)}
              type="text"
              id="product-name"
              className="form-control mt-2"
              value={productName}
              required
            />
          </div>
          <div>
            <label htmlFor="product-price">Product Price</label>
            <input
              onChange={(e) => setProductPrice(e.target.value)}
              type="number"
              id="product-price"
              className="form-control mt-2"
              value={productPrice}
              required
            />
          </div>
          <div className="my-4">
            <label htmlFor="product-quantity">Product Quantity</label>
            <input
              onChange={(e) => setProductQuantity(e.target.value)}
              type="number"
              id="product-quantity"
              className="form-control mt-2"
              value={productQuantity}
              required
            />
          </div>
          <label className="mb-2" htmlFor="product-image">
            Product Image
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text">https://example.com/</span>
            <input
              onChange={(e) => setProductImage(e.target.value)}
              type="url"
              id="product-image"
              className="form-control "
              value={productImage}
              required
            />
          </div>
          <div className="text-center my-4">
            <button type="submit" className="btn btn-success w-25">
              <FaCartPlus /> Save to New Product
            </button>
          </div>
          <div className="text-center">
            <button
              onClick={() => navigate("/productlist")}
              type="submit"
              className="btn btn-primary mb-4 w-25"
            >
              <FaCartPlus /> Go to the Product List
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
