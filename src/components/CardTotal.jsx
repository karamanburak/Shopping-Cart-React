import React from "react";


const CardTotal = ({ newProduct }) => {
  // console.log(newProduct);

  const taxRate = 0.18;

  const subtotal = newProduct.reduce((acc, item) => acc + item.price * item.dumpingRate * item.amount, 0).toFixed(0)
  // console.log(subtotal);

  const tax = (subtotal * taxRate).toFixed(0)

  const shipping = subtotal > 300 || subtotal == 0 ? 0 : 25

  const total = (Number(subtotal) + Number(taxRate) + shipping).toFixed(0)

  return (

    <table className="table  ">
      {subtotal <= 0 ? (
        <div className="message-div">
          <p className="message text-center text-danger fw-bold display-6 "
          >No products data...</p>
        </div>
      ) : (
        <tbody >
          <tr className="text-end">
            <th className="text-start" style={{ color: "skyblue" }}>Subtotal</th>
            <td className="fw-bold" style={{ color: "wheat" }}>
              $<span className="subtotal" >{subtotal}</span>
            </td>
          </tr>
          <tr className="text-end">
            <th className="text-start" style={{ color: "skyblue" }}>Tax(18%)</th>
            <td className="fw-bold" style={{ color: "wheat" }}>
              $<span className="tax">{tax} </span>
            </td>
          </tr>
          <tr className="text-end">
            <th className="text-start" style={{ color: "skyblue" }}>Shipping</th>
            <td className="fw-bold" style={{ color: "wheat" }}>
              $<span className="shipping">{shipping}</span>
            </td>
          </tr>
          <tr className="text-end">
            <th className="text-start" style={{ color: "skyblue" }}>Total</th>
            <td className="fw-bold" style={{ color: "wheat" }}>
              $
              <span className="total">{total}</span>
            </td>
          </tr>
        </tbody>
      )}

    </table>

  );
};

export default CardTotal;
