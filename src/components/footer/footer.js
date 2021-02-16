import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <section id="footer-Content">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 col-mb-12">
                <div className="footer-logo">
                  {/* <img src={require("../../img/mainlogo.png").default} alt="" /> */}
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-mb-12">
                <div className="widget">
                  <h3 className="block-title">Know More</h3>
                  <ul className="menu">
                    <li>
                      <a href="#"> - About Us</a>
                    </li>
                    <li>
                      <a href="#">- Career</a>
                    </li>
                    <li>
                      <a href="#">- Blog</a>
                    </li>
                    <li>
                      <a href="#">- Press</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-mb-12">
                <div className="widget">
                  <h3 className="block-title">Products</h3>
                  <ul className="menu">
                    <li>
                      <a href="#"> - Customer Service</a>
                    </li>
                    <li>
                      <a href="#">- Enterprise</a>
                    </li>
                    <li>
                      <a href="#">- Price</a>
                    </li>
                    <li>
                      <a href="#">- Scurity</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="site-info text-center">
                    <p>Crafted by InIv</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
export default Footer;
