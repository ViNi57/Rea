import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
        <div className="container">
          <a href="index.html" className="navbar-brand">
            <img src={require("../../img/mainlogo1.png").default} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="lni-menu"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#blog">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#features">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-singin" href="#">
                  Sign-UP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
