import React, { useEffect, useState } from "react";


// Predefined images for categories
const categoryImages = {
  electronics: "/images/electronics.png", // Replace with your actual image path
  jewelery: "/images/jewelery.png", // Replace with your actual image path
  "women's clothing": "/images/women.png", // Replace with your actual image path
  "men's clothing": "/images/banner-02.jpg", // Replace with your actual image path
};

const Banner = () => {
  const [categories, setCategories] = useState([]);

  // Fetch categories from Fake Store API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="sec-banner bg0 p-t-80 p-b-50">
      <div className="container">
        <h3 className="ltext-103 cl5 text-center p-b-40">Shop by Category</h3>
        <div className="row">
          {categories.map((category, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-xl-3 p-b-30 m-lr-auto">
              <div className="block1 wrap-pic-w shadow-lg">
                <img
                  src={categoryImages[category]} // Use predefined images
                  alt={category}
                  className="rounded"
                />
                <a
                  href={`/products?category=${category}`}
                  className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-20 p-tb-20 trans-03 text-center"
                >
                  <div className="block1-txt-child1 flex-col-l">
                    <span className="block1-name ltext-102 trans-04 p-b-8 text-uppercase font-weight-bold">
                      {category}
                    </span>
                  </div>
                  <div className="block1-txt-child2 p-b-4 trans-05">
                    <div className="block1-link stext-101 cl0 trans-09 bg-primary text-white p-2 rounded">
                      Shop Now
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
