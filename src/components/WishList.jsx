import React, { useContext } from "react";
import { userContext } from "../context/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { clearWishlist } from "../redux/wishlistSlice";


export default function WishList() {
  const { isLoggedIn } = useContext(userContext);
  const temp = localStorage.getItem("currentUser");

  let currentUser = [];
  if (temp && temp !== "null") currentUser = JSON.parse(atob(temp));
  console.log("current user from wishlist", currentUser);

  // Dispatch clear wishlist
  const dispatch = useDispatch();
  const handleClearWishlist = () => {
    console.log("handle clear list called");
    dispatch(clearWishlist());
  };

  // Fetch wishlist data
  const wishlistItems = useSelector((store) => store.wishlist.items);
  console.log("wishlist items", wishlistItems);

  const currentUserData = [];
  for (let i = 0; i < wishlistItems.length; i++) {
    if (wishlistItems[i].userId === currentUser.id) {
      currentUserData.push(wishlistItems[i]);
    }
  }

  console.log("current user data from wishlist", currentUserData);

  return currentUserData.length === 0 ? (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-4 text-danger mb-4">Oops! No items found in wishlist</h1>
        <p className="text-secondary">Please add some items to your wishlist.</p>
      </div>
    </div>
  ) : (
    <div className="bg-light min-vh-100 py-10 mt-5">
      <div className="container">
        <div className="row g-4">
          {currentUserData.map((item, index) => (
            <div className="col-md-4 col-lg-3" key={item.id}>
              <div className="card h-100 shadow-sm">
                {/* Product Image */}
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ maxHeight: "250px", objectFit: "contain" }}
                />
                
                {/* Product Details */}
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p>${item.price}</p>
                  <p>Rating {item.rating?.rate}⭐</p>
                  <p className="card-text text-primary fw-bold">${item.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Clear Wishlist Button */}
        <div className="text-center mt-4">
          <button
            className="btn btn-danger btn-lg px-5 py-2"
            onClick={handleClearWishlist}
          >
            Clear Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
