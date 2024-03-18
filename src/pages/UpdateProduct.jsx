import axios from "axios";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const BASE_URL = "https://65f4c515f54db27bc0224f20.mockapi.io/products";
  const navigate = useNavigate();
  const {state:{product}} = useLocation()
  const [item,setItem] = useState(product)
  
  // console.log(item);


  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${BASE_URL}/${product.id}`,{...item})
  };

  //! POST (CREATE)\\

  return (
    <div className="container col col-lg-6 my-4 rounded-2  bg-light bg-opacity-50">
      <div className=" text-center">
        <h2 className="text-danger pt-4">UPDATE PRODUCT</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <div className="my-4">
            <label htmlFor="product-name">Product Name</label>
            <input
              type="text"
              id="product-name"
              className="form-control mt-2"
              value={item.name || ""}
              onChange={(e)=>setItem({...item, name:e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="product-price">Product Price</label>
            <input
              type="number"
              id="product-price"
              className="form-control mt-2"
              value={item.price || ""}
              onChange={(e) => setItem({ ...product, price: e.target.value })}

            />
          </div>
          <div className="my-4">
            <label htmlFor="product-quantity">Product Quantity</label>
            <input
              type="number"
              id="product-quantity"
              className="form-control mt-2"
              value={item.amount ||""}
              onChange={(e) => setItem({ ...product, amount: e.target.value })}

            />
          </div>
          <label className="mb-2" htmlFor="product-image">
            Product Image
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text">https://example.com/</span>
            <input
              type="url"
              id="product-image"
              className="form-control"
              value={item.image || ""}
              onChange={(e) => setItem({ ...product, image: e.target.value })}

            />
          </div>
          <div className="text-center mt-4">
            <button
            onClick={()=> navigate(-1)}
             type="submit" className="btn btn-success mb-4 w-50">
              <FaCartPlus /> Save to Update Product
            </button>
          </div>
          <div className="text-center">
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
