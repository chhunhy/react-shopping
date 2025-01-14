import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { userContext } from "../context/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { currentUser, isLoggedIn } = useContext(userContext);

  const cartItemsCount = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  const wishlistItemsCount = useSelector((state) => state.wishlist.items.length);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <header>
        <div className="container-menu-desktop">
          <div className="top-bar">
            <div className="content-topbar flex-sb-m h-full container">
              <div className="left-top-bar">
                Free shipping for standard order over $100
              </div>
              <div className="right-top-bar flex-w h-full">
                {isLoggedIn ? (
                  <>
                    <span className="flex-c-m trans-04 p-lr-25">
                      Welcome, {currentUser?.name || "User"}
                    </span>
                    <Link to="/profile" className="flex-c-m trans-04 p-lr-25">
                      My Profile
                    </Link>
                    <Link to="/login" className="flex-c-m trans-04 p-lr-25">
                      Login
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="flex-c-m trans-04 p-lr-25">
                      Login
                    </Link>
                    <Link to="/register" className="flex-c-m trans-04 p-lr-25">
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="wrap-menu-desktop pb-5">
            <nav className="limiter-menu-desktop container ">
              <Link to="/" className="logo">
                <img src="/images/icons/logo-01.png" alt="Logo" />
              </Link>
              <div className="menu-desktop">
                <ul className="main-menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/shopping-cart">Features</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/aboutus">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="wrap-icon-header flex-w flex-r-m">
                {/* Wishlist Icon */}
                <Link to="/wishlist" className="position-relative me-4">
                  <i
                    className="zmdi zmdi-favorite-outline"
                    style={{ fontSize: "24px", cursor: "pointer" }}
                  ></i>
                  {wishlistItemsCount > 0 && (
                    <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                      {wishlistItemsCount}
                    </span>
                  )}
                </Link>

                {/* Cart Icon */}
                <div
                  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                  data-notify={cartItemsCount}
                  onClick={toggleCart}
                >
                  <i className="zmdi zmdi-shopping-cart"></i>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {showCart && <Cart toggleCart={toggleCart} />}
    </>
  );
};

export default Header;


