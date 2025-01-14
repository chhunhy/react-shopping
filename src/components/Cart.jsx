import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = ({ toggleCart }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const navigate = useNavigate();

  const handleViewCart = () => {
    toggleCart(); // Close the cart sidebar
    navigate("/shopping-cart"); // Navigate to the ShoppingCart page
  };

  return (
    <div className="wrap-header-cart show-header-cart ">
      <div className="s-full js-hide-cart" onClick={toggleCart}></div>
      <div className="header-cart">
        <div className="header-cart-title flex-w flex-sb-m p-b-8">
          <span className="mtext-103 cl2 p-3">Your Cart</span>
          <div
            className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04"
            onClick={toggleCart}
          >
            <i className="zmdi zmdi-close"></i>
          </div>
        </div>
        <div className="header-cart-content flex-w js-pscroll p-4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul className="header-cart-wrapitem w-full">
                {cartItems.map((item) => (
                  <li
                    className="header-cart-item flex-w flex-t m-b-12"
                    key={item.id}
                  >
                    <div className="header-cart-item-img">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="header-cart-item-txt p-t-8">
                      <span className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                        {item.title}
                      </span>
                      <span className="header-cart-item-info">
                        {item.quantity} x ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="w-full">
                <div className="header-cart-total w-full p-tb-40">
                  Total: ${total.toFixed(2)}
                </div>
                <div className="header-cart-buttons flex-w w-full">
                  <button
                    onClick={handleViewCart}
                    className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"
                  >
                    View Cart
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
