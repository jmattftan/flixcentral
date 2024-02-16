import React from "react";
import F1 from "../assets/images/movie_logos/f1.webp";
import F2 from "../assets/images/movie_logos/f2.webp";
import F3 from "../assets/images/movie_logos/f3.webp";
import F4 from "../assets/images/movie_logos/f4.webp";
import F5 from "../assets/images/movie_logos/f5.webp";
import F6 from "../assets/images/movie_logos/f6.webp";
import { Link } from "react-router-dom";

function NowShowing() {
  return (
    <div
      id="now_showing"
      className="row main-row ms-0 me-0 p-1"
      style={{ border: "1px solid blue" }}
    >
      <div
        className="col-sm-12 col-md-12 col-lg-12 col-xl-12 p-1"
        style={{ border: "1px solid yellow" }}
      >
        <div className="row m-1 p-1" style={{ border: "1px solid blue" }}>
          <h1 className="text-center">NOW SHOWING</h1>
        </div>
        <div className="row m-1 p-1" style={{ border: "1px solid blue" }}>
          <div
            className="col-sm-12 col-md-12 col-lg-4 col-xl-4 p-1"
            style={{ border: "1px solid yellow" }}
          >
            <div className="glass p-0">
              <div className="row m-0 p-0">
                <div className="container m-0 p-0">
                  <div className="container-one">
                    <img className="image" src={F1} />
                    <div className="info">
                      <h5 className="title m-1">Madame Web</h5>
                      <p className="time m-1">
                        <b className="rated-system-g">G</b> 2hrs and 13mins
                      </p>
                      <ul>
                        <li>Standard - ₱350</li>
                        <li>Premium - ₱550</li>
                      </ul>
                      <a
                        type="button"
                        className="more-details m-1 text-light"
                        data-bs-toggle="modal"
                        data-bs-target="#modal"
                      >
                        More Details
                      </a>
                    </div>
                  </div>
                  <div className="container-two">
                    <div className="info-two">
                      <p className="genre m-1">Action/Fanstasy</p>
                      <Link
                        className="buy-ticket m-1 text-light"
                        to="/BuyTicketPage"
                      >
                        Buy Ticket
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-12 col-lg-4 col-xl-4 p-1"
            style={{ border: "1px solid yellow" }}
          >
            <div className="glass p-0">
              <div className="row m-0 p-0">
                <div className="container m-0 p-0">
                  <div className="container-one">
                    <img className="image" src={F2} />
                    <div className="info">
                      <h5 className="title m-1">Lisa Frankenstein</h5>
                      <p className="time m-1">
                        <b className="rated-system-pg">PG</b> 2hrs and 13mins
                      </p>
                      <ul>
                        <li>Standard - ₱350</li>
                        <li>Premium - ₱550</li>
                      </ul>
                      <a className="more-details m-1 text-light" href="">
                        More Details
                      </a>
                    </div>
                  </div>
                  <div className="container-two">
                    <div className="info-two">
                      <p className="genre m-1">Action/Fanstasy</p>
                      <a className="buy-ticket m-1 text-light" href="">
                        Buy Ticket
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-12 col-lg-4 col-xl-4 p-1"
            style={{ border: "1px solid yellow" }}
          >
            <div className="glass p-0">
              <div className="row m-0 p-0">
                <div className="container m-0 p-0">
                  <div className="container-one">
                    <img className="image" src={F3} />
                    <div className="info">
                      <h5 className="title m-1">The Fall Guy</h5>
                      <p className="time m-1">
                        <b className="rated-system-pg-13">PG-13</b> 2hrs and
                        13mins
                      </p>
                      <ul>
                        <li>Standard - ₱350</li>
                        <li>Premium - ₱550</li>
                      </ul>
                      <a className="more-details m-1 text-light" href="">
                        More Details
                      </a>
                    </div>
                  </div>
                  <div className="container-two">
                    <div className="info-two">
                      <p className="genre m-1">Action/Fanstasy</p>
                      <a className="buy-ticket m-1 text-light" href="">
                        Buy Ticket
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NowShowing;
