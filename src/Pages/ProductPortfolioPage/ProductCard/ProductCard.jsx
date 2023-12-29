import React from "react";
import "./ProductCard.css";
import heart from "../../../assets/heart.png";
import heart1 from "../../../assets/heart1.png";
const ProductCard = (props) => {
  const { item, handleWishlistItem, wishlist } = props;
  const { id, image, title } = item;

  const screenWidth = window.innerWidth;

  return (
    <>
      <div key={id} className="pc-main">
        <div className="pc-main1">
          <img src={image} alt="product-img" className="pc-img" />
        </div>
        <div className="pc-alignText">
          <div className="pc-product-nmes">
            {screenWidth < 430 ? (
              <>{title.substring(0, 12)}...</>
            ) : (
              <>{title.substring(0, 25)}...</>
            )}
          </div>
          <img
            onClick={() => handleWishlistItem(id)}
            className="pc-heartIcon"
            src={wishlist.includes(id) ? heart1 : heart}
          />
        </div>

        <div className="pc-text">
          <u>Sign in</u> or Create an account to see pricing
        </div>
      </div>
    </>
  );
};

export default ProductCard;
