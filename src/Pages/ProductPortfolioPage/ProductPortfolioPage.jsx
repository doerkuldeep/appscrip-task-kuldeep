import React from "react";
import "./ProductPortfolioPage.css";
import left from "../../assets/arrow-left.png";
import right from "../../assets/arrow-right.png";
import arrow from "../../assets/arrow.png";
import ProductCard from "./ProductCard/ProductCard";
import FilterSection from "../FilterSection/FilterSection";
const ProductPortfolioPage = (props) => {
  const {
    products,
    sortArr,
    handleShowOptions,
    showOptions,
    selectedOption,
    handleSelect,
    handleWishlistItem,
    wishlist,
    handleFilter,
    showFilter,
    checkboxes,
    handleCheckboxChange,
    handleUnSelectAll,
    handleShowCheckBoxes,
    showCheckBoxes,
  } = props;
  return (
    <>
      <div className="ppp-container">
        <h2 className="ppp-head ">DISCOVER OUR PRODUCTS</h2>
        <p className="ppp-text">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <div className="ppp-container1">
        <div className="ppp-alignDiv">
          <div className="ppp-container1-head ppp-toSHow">
            {products.length} ITEMS
          </div>

          <div className="ppp-container1-head ppp-toSHow1">Filter</div>
          <div className="ppp-divider"></div>
          {showFilter ? (
            <div onClick={handleFilter} className="ppp-alignIcon">
              <img className="ppp-iconArrow" alt="left arrow" src={left} />
              <div className="ppp-Hide ">Hide Filter</div>
            </div>
          ) : (
            <div onClick={handleFilter} className="ppp-alignIcon">
              <img className="ppp-iconArrow" alt="left arrow" src={right} />
              <div className="ppp-Hide ">Open Filter</div>
            </div>
          )}
        </div>
        <div className="ppp-sort">
          <div onClick={handleShowOptions} className="ppp-container1-head">
            {selectedOption}
            {"    "}
            <img className="ppp-iconArrow" alt="left arrow" src={arrow} />
          </div>
          {showOptions && (
            <div className="ppp-sort1">
              {sortArr.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleSelect(item)}
                    className={
                      selectedOption === item ? "ppp-sort2A" : "ppp-sort2U"
                    }
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="ppp-productView">
        <div className={showFilter ? "ppp-productView1" : "ppp-productView2"}>
          {showFilter && (
            <FilterSection
              checkboxes={checkboxes}
              handleCheckboxChange={handleCheckboxChange}
              handleUnSelectAll={handleUnSelectAll}
              handleShowCheckBoxes={handleShowCheckBoxes}
              showCheckBoxes={showCheckBoxes}
            />
          )}
        </div>
        <div className="ppp-productContainer">
          {products.map((item, index) => {
            return (
              <ProductCard
                item={item}
                key={index}
                handleWishlistItem={handleWishlistItem}
                wishlist={wishlist}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductPortfolioPage;
