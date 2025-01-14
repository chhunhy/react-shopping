import React from "react";

const AboutPage = () => {
  return (
    <>
      {/* Title Page */}
      <section
        className="bg-img1 text-center py-5"
        style={{ backgroundImage: "url('images/bg-01.jpg')" }}
      >
        <h2 className="display-4 text-light">About</h2>
      </section>

      {/* Content Page */}
      <section className="bg-light py-5">
        <div className="container">
          {/* Our Story Section */}
          <div className="row align-items-center mb-5">
            <div className="col-md-7 col-lg-8">
              <h3 className="mb-4">Our Story</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat
                consequat enim, non auctor massa ultrices non. Morbi sed odio massa.
                Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Maecenas varius egestas diam, eu sodales metus scelerisque congue.
              </p>
              <p className="text-muted">
                Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget
                ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in
                vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat
                volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis.
              </p>
              <p className="text-muted">
                Any questions? Let us know in store at 8th floor, 379 Hudson St, New York,
                NY 10018 or call us on (+1) 96 716 6879.
              </p>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="border">
                <img
                  src="images/about-01.jpg"
                  alt="Our Story"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="row align-items-center">
            <div className="col-md-5 col-lg-4 order-md-2 mb-4 mb-md-0">
              <div className="border">
                <img
                  src="images/about-02.jpg"
                  alt="Our Mission"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-7 col-lg-8 order-md-1">
              <h3 className="mb-4">Our Mission</h3>
              <p className="text-muted">
                Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus
                dignissim risus, sed consectetur erat. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis egestas. Nullam
                maximus mauris sit amet odio convallis, in pharetra magna gravida.
              </p>
              <blockquote className="blockquote border-start ps-3">
                <p className="mb-2">
                  Creativity is just connecting things. When you ask creative people how
                  they did something, they feel a little guilty because they didn't really
                  do it, they just saw something. It seemed obvious to them after a while.
                </p>
                <footer className="blockquote-footer">Steve Jobs</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
