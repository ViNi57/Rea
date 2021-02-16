import React from "react";
function About() {
  return (
    <>
      <section id="about" className="section">
        <div className="sec">
          <span></span>
          <span></span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-text section-header text-center">
                <div>
                  <h2 className="section-title">ABOUT US</h2>
                  <div className="desc-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do
                    </p>
                    <p>eiusmod tempor incididunt ut labore et dolore.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-xs-12 about-item">
              <div className="about-item-wrapper">
                <div className="about-item-img">
                  <a href="single-post.html">
                    <img
                      src={require("../../img/aboutus.png").default}
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="about-item-text">
                  <h3>
                    <a href="single-post.html">
                      a<br />Y
                    </a>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry.
                  </p>
                  <a href="" className="read-more">
                    5 Min read
                  </a>
                </div>
                <div className="author">
                  <span className="date float-right">
                    <i className="lni-calendar"></i>
                    <a href="#">10 FEB, 2021</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12 about-item">
              <div className="about-item-wrapper">
                <div className="about-item-img">
                  <a href="single-post.html">
                    <img
                      src={require("../../img/aboutus1.png").default}
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="about-item-text">
                  <h3>
                    <a href="single-post.html">
                      b <br />y
                    </a>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry.
                  </p>
                  <a href="" className="read-more">
                    5 Min read
                  </a>
                </div>
                <div className="author">
                  <span className="date float-right">
                    <i className="lni-calendar"></i>
                    <a href="#">10 FEB, 2021</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12 about-item">
              <div className="about-item-wrapper">
                <div className="about-item-img">
                  <a href="single-post.html">
                    <img
                      src={require("../../img/aboutus2.png").default}
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="about-item-text">
                  <h3>
                    <a href="single-post.html">
                      C <br />y
                    </a>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry.
                  </p>
                  <a href="" className="read-more">
                    5 Min read
                  </a>
                </div>
                <div className="author">
                  {/* <span className="name">
                    <i className="lni-user"></i>
                    <a href="#">Posted by VINI</a>
                  </span> */}
                  <span className="date float-right">
                    <i className="lni-calendar"></i>
                    <a href="#">10 FEB, 2021</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lines">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </section>
    </>
  );
}
export default About;
