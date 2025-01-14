import React from "react";

const Blog = () => {
  return (
    <>
      {/* Title Page */}
      <section
        className="bg-img1 text-center py-5"
        style={{ backgroundImage: `url('images/bg-02.jpg')` }}
      >
        <h2 className="ltext-105 cl0">Blog</h2>
      </section>

      {/* Content Page */}
      <section className="bg0 py-5">
        <div className="container">
          <div className="row">
            {/* Blog Content */}
            <div className="col-md-8 col-lg-9 mb-5">
              <div className="pr-lg-4">
                {/* Blog Item 1 */}
                <div className="mb-5">
                  <a href="/blog-detail" className="hov-img0 position-relative">
                    <img src="images/blog-04.jpg" alt="Blog" className="w-100" />
                    <div className="d-flex flex-column align-items-center justify-content-center size-123 bg9 position-absolute top-0 start-0">
                      <span className="ltext-107 cl2">22</span>
                      <span className="stext-109 cl3">Jan 2018</span>
                    </div>
                  </a>
                  <div className="pt-4">
                    <h4 className="mb-3">
                      <a
                        href="/blog-detail"
                        className="ltext-108 cl2 hov-cl1 text-decoration-none"
                      >
                        8 Inspiring Ways to Wear Dresses in the Winter
                      </a>
                    </h4>
                    <p className="stext-117 cl6">
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien
                      eu varius
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <span className="stext-111 cl2">
                        <span>By Admin | </span>
                        <span>StreetStyle, Fashion, Couple | </span>
                        <span>8 Comments</span>
                      </span>
                      <a
                        href="/blog-detail"
                        className="stext-101 cl2 hov-cl1 text-decoration-none"
                      >
                        Continue Reading <i className="fa fa-long-arrow-right ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Add other blog items similarly */}
                {/* Blog Pagination */}
                <div className="d-flex justify-content-center mt-4">
                  <a href="#" className="btn btn-primary mx-2 active">
                    1
                  </a>
                  <a href="#" className="btn btn-primary mx-2">
                    2
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-md-4 col-lg-3">
              <div className="side-menu">
                {/* Search Bar */}
                <div className="mb-5">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-secondary" type="button">
                      <i className="zmdi zmdi-search"></i>
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-5">
                  <h4 className="mb-4">Categories</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <a href="#" className="text-decoration-none text-dark">
                        Fashion
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-decoration-none text-dark">
                        Beauty
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-decoration-none text-dark">
                        Street Style
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-decoration-none text-dark">
                        Life Style
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none text-dark">
                        DIY & Crafts
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Featured Products */}
                <div className="mb-5">
                  <h4 className="mb-4">Featured Products</h4>
                  <ul className="list-unstyled">
                    <li className="d-flex mb-3">
                      <a href="#" className="me-3">
                        <img src="images/product-min-01.jpg" alt="Product" className="img-fluid" />
                      </a>
                      <div>
                        <a href="#" className="text-decoration-none text-dark">
                          White Shirt With Pleat Detail Back
                        </a>
                        <p className="text-muted">$19.00</p>
                      </div>
                    </li>
                    <li className="d-flex mb-3">
                      <a href="#" className="me-3">
                        <img src="images/product-min-02.jpg" alt="Product" className="img-fluid" />
                      </a>
                      <div>
                        <a href="#" className="text-decoration-none text-dark">
                          Converse All Star Hi Black Canvas
                        </a>
                        <p className="text-muted">$39.00</p>
                      </div>
                    </li>
                    <li className="d-flex">
                      <a href="#" className="me-3">
                        <img src="images/product-min-03.jpg" alt="Product" className="img-fluid" />
                      </a>
                      <div>
                        <a href="#" className="text-decoration-none text-dark">
                          Nixon Porter Leather Watch In Tan
                        </a>
                        <p className="text-muted">$17.00</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="mb-4">Tags</h4>
                  <div className="d-flex flex-wrap gap-2">
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      Fashion
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      Lifestyle
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      Denim
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      Streetstyle
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      Crafts
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
