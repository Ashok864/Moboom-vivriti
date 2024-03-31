import React, { useContext } from "react";
import "./Product.css";
import { cartContext } from "../App";
import heart from "../assets/heart.png";

const Product = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);

  const ProductDescription =
    product.description.length > 41
      ? product.description.substring(0, 35) + "..."
      : product.description;

  const AddCart = () => {
    setCart([...cart, product]);
  };

  const RemoveCart = () => {
    setCart(cart.filter((c) => c.id !== product.id));
  };

  return (
    <div className="product">
      <div className="img-corner">
        <img src={heart} alt=""></img>
      </div>
      <div className="img">
        <img src={product.thumbnail} alt={product.name} />
      </div>
      <div className="details">
        <h3>{product.title}</h3>
        <p>{ProductDescription}</p>
        <p style={{ color: "black", fontWeight: "bold", padding: "5px 0px" }}>
          {" "}
          ${product.price}
        </p>
        {cart.includes(product) ? (
          <button onClick={RemoveCart} className="btnRemove">
            Remove From List
          </button>
        ) : (
          <button onClick={AddCart}>Select To List</button>
        )}
      </div>
    </div>
  );
};

export default Product;
