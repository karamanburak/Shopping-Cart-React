import { useNavigate } from "react-router-dom";

const ProductCard = ({ newProduct, setNewProduct, deleteData}) => {

  const navigate = useNavigate()


 const handleDecrement = (id) => {
   setNewProduct(newProduct.map((product) => {
     if (product.id === id) {
       return { ...product, amount: product.amount -  (product.amount > 1 ? 1 : 0) }
     }
     return product
    }))

  }


  const handleIncreasement = (id) => {
    setNewProduct(newProduct.map((product)=>{
      if(product.id === id) {
        if(product.amount < 10){
          return {...product, amount: Number(product.amount) + (product.amount < 10 ? 1 : 0 )}
          
        }else {
          alert("Number of products cannot be more than 10")
        }
       
        
      }
      return product
    }))

  }

 


  return (<div>
    {newProduct.map(({ name, image, price, amount, id }) => (
      <div key={id} className="card mb-3">
        <div className="row g-0 card-container">
          <div className="col-md-5 ">
            <img
              src={image}
              className="w-100 h-100 rounded-start"
              alt={"name"}
              title={""}
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#editModal"
            />
          </div>
          <div className="col-md-7">
            <div className="card-body ">
              <h5 className="card-title" role="button"
              >
                {name}
              </h5>
              <div className="product-price d-flex flex-wrap align-items-center">
                <span className="damping-price text-warning h2">{`$${(price * 0.8).toFixed(0)}`} </span>

                <span className="h5 text-dark text-decoration-line-through">
                  {` $${price} `}
                </span>
              </div>
              <div className="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
                <div className="quantity-controller">
                  <button
                    onClick={() => handleDecrement(id)}
                    className="btn btn-secondary btn-sm">
                    <i className="fas fa-minus"></i>
                  </button>
                  <p className="d-inline mx-4" id="product-quantity">{amount} </p>
                  <button
                    onClick={() => handleIncreasement(id)}
                    className="btn btn-secondary btn-sm">
                    <i className="fas fa-plus" ></i>
                  </button>
                </div>
              </div>
              <div className="product-removal mt-4">
                <button
                  onClick={() => deleteData(id)}
                  className="btn btn-danger btn-sm w-100 remove-product">
                  <i className="fa-solid fa-trash-can me-2"></i>Remove
                </button>
              </div>
              <div className="product-removal mt-4">
                <button
                  onClick={() => navigate("/updateproduct")}
                  className="btn btn-warning btn-sm w-100 remove-product">
                  <i className="fa-solid fa-pen-to-square me-2"></i>Edit
                </button>
              </div>
              <div className="mt-2">
                <b> Total Price: </b> $<span className="product-line-price">{((price * 0.8) * amount).toFixed(0)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    )}
  </div>
  );
};

export default ProductCard;
