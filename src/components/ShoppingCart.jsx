import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"; // Import Link for navigation
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cartSlice";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleIncrement = (id, userId) => {
    dispatch(incrementQuantity({ id, userId }));
  };

  const handleDecrement = (id, userId) => {
    dispatch(decrementQuantity({ id, userId }));
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Shopping Cart</h2>
      <div className="row">
        {/* Cart Items Section */}
        <div className="col-lg-8 mb-4">
          {cartItems.length > 0 ? (
            <table className="table align-middle border">
              <thead className="bg-light">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="d-flex align-items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="me-3 border"
                        style={{ width: "60px", height: "60px", objectFit: "contain" }}
                      />
                      <span>{item.title}</span>
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => handleDecrement(item.id, item.userId)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          className="form-control text-center mx-2"
                          style={{ width: "50px" }}
                          readOnly
                        />
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => handleIncrement(item.id, item.userId)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center">Your cart is empty.</p>
          )}

          {/* Coupon and Update Section */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="d-flex align-items-center">
              <input
                type="text"
                placeholder="Coupon Code"
                className="form-control me-2"
                style={{ width: "250px" }}
              />
              <button className="btn btn-outline-secondary">Apply Coupon</button>
            </div>
            <button className="btn btn-primary">Update Cart</button>
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className="col-lg-4">
          <div className="border p-4 rounded">
            <h5 className="mb-4">Cart Totals</h5>
            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>Subtotal:</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <hr />
              <p>Shipping: Free shipping on orders over $100</p>
            </div>
            <Link to="/checkout" className="btn btn-dark w-100">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
