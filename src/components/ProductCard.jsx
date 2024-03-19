import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, getData }) => {
  const { name, image, price, amount, id,dampingRate } = product;
  const BASE_URL = "https://65f4c515f54db27bc0224f20.mockapi.io/products";


  const navigate = useNavigate();

  //!PUT to DataBase\\

  const handleDecrement = async () => {
    await axios.put(`${BASE_URL}/${id}`, {
      ...product,
      amount: Number(amount) - (amount > 1 ? 1 : 0),
    });
    getData();
  };

  const handleIncreasement = async () => {
    if (amount < 10) {
      await axios.put(`${BASE_URL}/${id}`, {
        ...product,
        amount: Number(amount) + (amount < 10 ? 1 : 0),
      });
      getData();
    } else {
      alert("Number of products cannot be more than 10");
    }
  };

  //   //! DELETE (Remove from database)\\
  const deleteData = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    getData();
  };

  return (<div>
      <div key={id} className="card mb-3">
        <div className="row g-0 card-container">
          <div className="col-md-5 ">
            <img
              src={image}
              className="w-100 h-100 rounded-start"
              alt={"name"}
              title={""}
              type="button"
            />
          </div>
          <div className="col-md-7">
            <div className="card-body ">
              <h5 className="card-title" role="button">
                {name}
              </h5>
              <div className="product-price d-flex flex-wrap align-items-center">
                <span className="damping-price text-warning h2">
                  {`$${(price * dampingRate).toFixed(2)}`}
                </span>

                <span className="h5 text-dark text-decoration-line-through">
                  {parseFloat(price).toFixed(2)}
                </span>
              </div>
              <div className="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
                <div className="quantity-controller">
                  <button
                    onClick={handleDecrement}
                    className="btn btn-secondary btn-sm"
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <p className="d-inline mx-4" id="product-quantity">
                    {amount}{" "}
                  </p>
                  <button
                    onClick={handleIncreasement}
                    className="btn btn-secondary btn-sm"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              <div className="product-removal mt-4">
                <button
                  onClick={() => deleteData(id)}
                  className="btn btn-danger btn-sm w-100 remove-product"
                >
                  <i className="fa-solid fa-trash-can me-2"></i>Remove
                </button>
              </div>
              <div className="product-removal mt-4">
                <button
                onClick={() => navigate(("/updateproduct"), {state:{product}})}
                  className="btn btn-warning btn-sm w-100 remove-product"
                >
                  <i className="fa-solid fa-pen-to-square me-2"></i>Edit
                </button>
              </div>
              <div className="mt-2">
                <b> Total Price: </b> $
                <span className="product-line-price">
                  {(price * 0.8 * amount).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
