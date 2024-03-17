import React, { useState } from 'react'
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const UpdateProduct = ({ newProduct, setNewProduct }) => {
  console.log(newProduct);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
  }



  return (
    <div className='container col col-lg-6 my-4 rounded-2  bg-light bg-opacity-50'>
      <div className=" text-center">
        <h2 className="text-danger pt-4">UPDATE PRODUCT</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <div className="my-4">
            <label htmlFor="product-name">Product Name</label>
            <input
              type="text" id="product-name" className="form-control mt-2"
              value={""}

            />
          </div>
          <div>
            <label htmlFor="product-price">Product Price</label>
            <input
              type="number" id="product-price" className="form-control mt-2"
              value={""}


            />
          </div>
          <div className="my-4">
            <label htmlFor="product-quantity">Product Quantity</label>
            <input
              type="number" id="product-quantity" className="form-control mt-2"
              value={""}


            />
          </div>
          <label className='mb-2' htmlFor="product-image">Product Image</label>
          <div className="input-group mb-3">
            <span className="input-group-text">https://example.com/</span>
            <input
              type="url" id="product-image" className="form-control"
              value={""}


            />
          </div>
          <div className="text-center mt-4">
            <button
              type="submit" className="btn btn-success mb-4 w-50"><FaCartPlus />  Save to Update Product</button>
          </div>
          <div className="text-center">
            <button
              onClick={() => navigate("/productlist")}
              type="submit" className="btn btn-danger mb-4 w-50"><FaCartPlus />  Go Back to Product List</button>
          </div>
        </div>
      </form>
    </div>

  );
}

export default UpdateProduct