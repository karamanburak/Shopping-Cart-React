import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";

import spinner from "../assets/loading.gif";

const ProductList = () => {
  const [newProduct, setNewProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  //! GET (READ)\\
  const BASE_URL = "https://65f4c515f54db27bc0224f20.mockapi.io/products";

  const getData = async () => {
    const res = await axios.get(BASE_URL);
    // console.log(res.data);

    setNewProduct(res.data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className=" text-center mt-5">
        <img src={spinner} alt="" width="100px" />
      </div>
    );
  }

  return (
    <div className="container mt-3">
      <div className={" d-sm-block d-md-flex"}>
        <>
          <article id="product-panel" className="col-md-6">
            {newProduct.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                getData={getData}
              />
            ))}
          </article>
          <article className="col-md-4 m-3">
            <CardTotal newProduct={newProduct} />
          </article>
        </>
      </div>
    </div>
  );
};

export default ProductList;
