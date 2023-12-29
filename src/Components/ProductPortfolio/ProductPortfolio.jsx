import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import ProductPortfolioPage from "../../Pages/ProductPortfolioPage/ProductPortfolioPage";
import { getData } from "../../Config/Config";
import Footer from "../Footer/Footer";
const ProductPortfolio = () => {
  const [products, setProducts] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [showFilter, setFilter] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Recommended");
  const [wishlist, setWishlist] = useState([]);
  const [showCheckBoxes, setShowCheckboxes] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  useEffect(() => {
    const fetchAllProducts = async () => {
      const response = await getData("products");
      if (response) {
        setProducts(response);
      } else {
        return null;
      }
    };

    fetchAllProducts();
  }, []);

  const sortArr = [
    "Recommended",
    "Newest First",
    "Popular",
    "Price: High To Low",
    "Price: Low To High",
  ];

  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSelect = (e) => {
    setSelectedOption(e);
    setShowOptions(!showOptions);
  };

  const handleWishlistItem = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const handleFilter = () => {
    setFilter(!showFilter);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });
  };

  const handleUnSelectAll = () => {
    setCheckboxes({
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
    });
  };

  const handleShowCheckBoxes = () => {
    setShowCheckboxes(!showCheckBoxes);
  };

  return (
    <>
      <Header />
      <ProductPortfolioPage
        products={products}
        sortArr={sortArr}
        handleShowOptions={handleShowOptions}
        showOptions={showOptions}
        selectedOption={selectedOption}
        handleSelect={handleSelect}
        handleWishlistItem={handleWishlistItem}
        wishlist={wishlist}
        handleFilter={handleFilter}
        showFilter={showFilter}
        checkboxes={checkboxes}
        handleCheckboxChange={handleCheckboxChange}
        handleUnSelectAll={handleUnSelectAll}
        handleShowCheckBoxes={handleShowCheckBoxes}
        showCheckBoxes={showCheckBoxes}
      />
      <Footer />
    </>
  );
};

export default ProductPortfolio;
