import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { cartContext } from "../App";

const Header = ({ getSearch }) => {
  const { cart, searchQuery, setSearchQuery } = useContext(cartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <label className="title">
        <span>M</span>oBoo<span>M</span>
      </label>
      <input
        type="search"
        placeholder="search here"
        className="form-control"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span className="line"></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/Account"}>Account</NavLink>
        </li>
        <li>
          <NavLink to={"/WishList"}>
          Wish List<span className="cart-count">{cart.length}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Basket"}>Basket</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
