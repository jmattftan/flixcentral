import React from "react";
import Icons from "../assets/images/icons/icon.png";

function NavigationBar() {
  return (
    <nav
      className="navbar navbar-expand-lg nav-color m-0"
      style={{ border: "1px solid blue" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          <img className="icon" src={Icons} />
          <b>Flixcentral</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#featured"
              >
                Featured
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#now_showing"
              >
                Now Showing
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#coming_soon"
              >
                Coming Soon
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#contact_us"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
