import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Viewcart from "./Components/ViewCart";
import Account from "./Components/Account";
import Basket from "./Components/Basket";
import Footer from "./Components/Footer";
import axios from "axios";

// Context
export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getSearch = (searchVal) => {
    setSearchValue(searchVal);
  };

  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  };

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getAllProduct();
    getCategories();
  }, []);

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    handleSearch(debouncedSearchQuery);
  }, [debouncedSearchQuery, currentPage, selectedCategory]);

  const getAllProduct = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?skip=${
          (currentPage - 1) * itemsPerPage
        }&limit=${itemsPerPage}`
      );
      setTotalPages(Math.ceil(response.data.total / itemsPerPage));
      setProducts(response.data.products);
      setItemsPerPage(response.data.limit);
      setLoading(false);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleSearch = (search) => {
    setLoading(true);
    if (search === "" && selectedCategory === "") {
      getAllProduct();
    } else if (selectedCategory === "") {
      const queryParams = `?q=${search}&skip=${
        (currentPage - 1) * itemsPerPage
      }&limit=${itemsPerPage}`;
      axios
        .get(`https://dummyjson.com/products/search${queryParams}`)
        .then((response) => {
          setProducts(response.data.products);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error searching products:", error);
          setLoading(false);
        });
    } else {
      const queryParams = `?q=${search}&skip=${
        (currentPage - 1) * itemsPerPage
      }&limit=${itemsPerPage}`;
      axios
        .get(`https://dummyjson.com/products/search${queryParams}`)
        .then((response) => {
          const filteredProducts = response.data.products.filter(
            (product) => product.category === selectedCategory
          );
          setProducts(filteredProducts);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error searching products:", error);
          setLoading(false);
        });
    }
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory == "") {
      getAllProduct();
      setSelectedCategory(selectedCategory);
    } else {
      setSelectedCategory(selectedCategory);
      setCurrentPage(1);
      axios
        .get(
          `https://dummyjson.com/products/category/${selectedCategory}?skip=${
            (currentPage - 1) * itemsPerPage
          }&limit=${itemsPerPage}`
        ) 
        .then((response) => {
          setTotalPages(Math.ceil(response.data.total / itemsPerPage));
          setProducts(response.data.products);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching products by category:", error);
          setLoading(false);
        });
    }
  };

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        searchValue,
        products,
        searchQuery,
        setSearchQuery,
        totalPages,
      }}
    >
      <BrowserRouter>
        <Header getSearch={getSearch} />
        <div className="header-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            blandit porta dolor nec venenatis. Nulla eget enim a nulla
            lobortis lacinia. 
          </p>
        </div>

        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  totalPages={totalPages}
                  currentPage={currentPage}
                  handlePaginationClick={handlePaginationClick}
                  selectedCategory={selectedCategory}
                  handleCategoryChange={handleCategoryChange}
                  categories={categories}
                />
              }
            />
            <Route path="/Account" element={<Account />} />
            <Route path="/WishList" element={<Viewcart />} />
            <Route path="/Basket" element={<Basket />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;
