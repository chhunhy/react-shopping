import React from "react";

const ContactPage = () => {
  return (
    <>
      {/* Title Page */}
      <section
        className="bg-img1 text-center py-5"
        style={{ backgroundImage: "url('images/bg-01.jpg')" }}
      >
        <h2 className="display-4 text-light">Contact</h2>
      </section>

      {/* Content Page */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            {/* Contact Form */}
            <div className="col-md-6 mb-4">
              <div className="border p-4 rounded">
                <h4 className="text-center mb-4">Send Us A Message</h4>
                <form>
                  <div className="mb-3 position-relative">
                    <input
                      type="text"
                      name="email"
                      placeholder="Your Email Address"
                      className="form-control py-3 ps-5"
                    />
                    <img
                      src="images/icons/icon-email.png"
                      alt="Email Icon"
                      className="position-absolute top-50 start-0 translate-middle-y ms-3"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      name="msg"
                      placeholder="How Can We Help?"
                      className="form-control"
                      rows="5"
                    ></textarea>
                  </div>

                  <button className="btn btn-primary w-100 py-2">Submit</button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-md-6">
              <div className="border p-4 rounded">
                {/* Address */}
                <div className="d-flex align-items-start mb-4">
                  <i className="bi bi-geo-alt fs-3 text-primary me-3"></i>
                  <div>
                    <h5 className="mb-1">Address</h5>
                    <p className="mb-0">
                      Coza Store Center 8th floor, 379 Hudson St, New York, NY
                      10018 US
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="d-flex align-items-start mb-4">
                  <i className="bi bi-telephone fs-3 text-primary me-3"></i>
                  <div>
                    <h5 className="mb-1">Let's Talk</h5>
                    <p className="mb-0">+1 800 1236879</p>
                  </div>
                </div>

                {/* Email */}
                <div className="d-flex align-items-start">
                  <i className="bi bi-envelope fs-3 text-primary me-3"></i>
                  <div>
                    <h5 className="mb-1">Sale Support</h5>
                    <p className="mb-0">contact@example.com</p>
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

export default ContactPage;
