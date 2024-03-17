
import React from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";



const ProductList = ({ newProduct, deleteData,getData,setNewProduct, postData}) => {
  return (
    <div className="container mt-3">
      <div className={" d-sm-block d-md-flex"}>

        <>
          <article id="product-panel" className="col-md-6">
            <ProductCard newProduct={newProduct} setNewProduct={setNewProduct} deleteData={deleteData} getData={getData} postData={postData}/>
          </article>
          <article className="col-md-4 m-3">
            <CardTotal newProduct={newProduct} />
          </article>
        </>

        {/* <p className="text-center text-danger w-100">No products data...</p> */}
      </div>
    </div>
  );
};

export default ProductList;
