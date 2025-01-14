import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/wishlistSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleWishlistClick = () => {
    dispatch(addToWishlist(product)); // Dispatch the action to add to wishlist
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 border-0 shadow-sm">
        {/* Product Image */}
        <div className="position-relative">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
            style={{ maxHeight: "200px", objectFit: "contain" }}
          />
          <Link
            to={`/productdetails/${product.id}`}
            className="btn btn-primary btn-sm position-absolute top-0 end-0 m-2"
          >
            Quick View
          </Link>
          <button
            className="btn btn-outline-danger btn-sm position-absolute top-0 start-0 m-2"
            onClick={handleWishlistClick}
            aria-label="Add to Wishlist"
          >
            <img
              src="/images/icons/icon-heart-01.png" // Default heart
              alt="Wishlist Icon"
              style={{ width: "20px", height: "20px" }}
            />
          </button>
        </div>

        {/* Product Details */}
        <div className="card-body">
          <h5 className="card-title">
            <Link
              to={`/productdetails/${product.id}`}
              className="text-decoration-none text-dark"
            >
              {product.title}
            </Link>
          </h5>
          <p className="card-text text-muted mb-1">${product.price.toFixed(2)}</p>
          <p className="card-text">
            <small className="text-muted">Rating: {product.rating?.rate} ⭐</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
