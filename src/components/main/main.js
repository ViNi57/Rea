import React from "react";

function Mai() {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row space-100">
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="contents">
                <h2 className="head-title">
                  dolores ea fugiat nesciunt <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab{" "}
                  <br />
                  dolores ea fugiat nesciunt quisquam.
                </p>
                <div className="header-button">
                  <a href="#" className="btn btn-border-filled">
                    Get Started
                  </a>
                  <a href="#contact" className="btn btn-border page-scroll">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12 p-0">
              <div className="intro-img">
                <img src={require("../../img/intro.png").default} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Mai;
