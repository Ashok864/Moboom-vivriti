import React, { useContext, useEffect, useState } from "react";
import "./ViewCart.css";
import { cartContext } from "../App";

const ViewCart = () => {
  const [total, setTotal] = useState(0);
  const { cart, setCart } = useContext(cartContext);
  // console.log(cart);
  useEffect(() => {
    setTotal(
      cart.reduce(
        (accumlator, current) => accumlator + parseInt(current.price),
        0
      )
    );
  }, [cart]);

  const RemoveCartItem = (cartItemToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== cartItemToRemove.id);
    setCart(updatedCart);
  };

  return (
    <>
      <h1 className="cart-heading">View Products</h1>
      <div className="cart-container">
        {cart.map((cartItem) => (
          <div className="cart-product" key={cartItem.id}>
            <div className="img">
              <img src={cartItem.thumbnail} alt="image" />
            </div>
            <div className="cart-product-details">
              <div>
                <h3>{cartItem.title}</h3>
                <p>{cartItem.description}</p>
                <p className="price">Rs: {cartItem.price}</p>
              </div>
              <div>
                <button
                  className="btnRemove"
                  onClick={() => RemoveCartItem(cartItem)}
                >
                  Remove From List
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="cart-amt">Total Amount RS : {total}</h2>
    </>
  );
};

export default ViewCart;
