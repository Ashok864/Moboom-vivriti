import React, { useContext, useState } from "react";
import Product from "./Product";
import "./Home.css";
import { cartContext } from "../App";
import Pagination from "./Pagination";

const Home = ({
  totalPages,
  currentPage,
  handlePaginationClick,
  selectedCategory,
  handleCategoryChange,
  categories,
}) => {
  const { products } = useContext(cartContext);

  return (
    <>
      <div className="select-container">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {categories.map((category, i) => (
            <option key={i} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="product-container">
        {products.map((product) => (
          <Product key={products.id} product={product} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePaginationClick={handlePaginationClick}
      />
    </>
  );
};

export default Home;
