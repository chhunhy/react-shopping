import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice"; // Import Redux action

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize Redux dispatch

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product details:", err));
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity })); // Dispatch the addToCart action
  };

  const handleCloseView = () => {
    navigate(-1);
  };

  return (
    <section className="sec-product-detail bg0 p-t-65 p-b-60">
      <div className="container">
        <div className="row">
          <div className="col-12 text-right">
            <button
              onClick={handleCloseView}
              className="btn btn-danger mb-4"
              style={{
                fontSize: "16px",
                padding: "10px 20px",
                borderRadius: "5px",
              }}
            >
              Close
            </button>
          </div>
          <div className="col-md-6 col-lg-3 p-b-30 p-4">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 col-lg-6 m-4 p-b-30">
            <h4 className="mtext-105 cl2 js-name-detail p-b-14">
              {product.title}
            </h4>
            <span className="mtext-106 cl2">${product.price}</span>
            <p className="stext-102 cl3 p-t-23">{product.description}</p>
            <div className="p-t-33">
              <div className="d-flex align-items-center mb-3">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  className="form-control mx-2 text-center"
                  value={quantity}
                  readOnly
                  style={{ width: "75px" }}
                />
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-primary w-100"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
