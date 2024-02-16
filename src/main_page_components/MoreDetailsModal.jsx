import React from "react";
import { MovieTrailerControls } from "../javascript/MovieTrailerControls.js";

function MoreDetailsModal() {
  const { iframe_src, stop_movie_trailer } = MovieTrailerControls();

  return (
    <div
      className="modal fade"
      id="modal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="row m-1 p-1" style={{ border: "1px solid red" }}>
              <div
                className="col-sm-12 col-md-12 col-lg-12 col-xl-12 p-1 justify-content-center d-flex"
                style={{ border: "1px solid yellow" }}
              >
                <iframe
                  id="movie-trailer"
                  className="p-0"
                  width="1110"
                  height="350"
                  src={iframe_src}
                  allow="fullscreen"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div
              className="row m-1 p-1 mt-3"
              style={{ border: "1px solid red" }}
            >
              <div
                className="col-sm-12 col-md-12 col-lg-12 col-xl-12 p-1"
                style={{ border: "1px solid yellow" }}
              >
                <p>
                  Cassandra Webb is a New York City paramedic who starts to show
                  signs of clairvoyance. Forced to confront revelations about
                  her past, she must protect three young women from a mysterious
                  adversary who wants them dead.
                </p>
              </div>
            </div>
            <div className="row m-1 p-1" style={{ border: "1px solid red" }}>
              <div
                className="col-sm-12 col-md-12 col-lg-6 col-xl-6 text-start p-1"
                style={{ border: "1px solid yellow" }}
              >
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li>Released Date: February 14, 2024</li>
                  <li>Director: S.J. Clarkson</li>
                  <li>Budget: $40 Million</li>
                </ul>
              </div>
              <div
                className="col-sm-12 col-md-12 col-lg-6 col-xl-6 text-start p-1"
                style={{ border: "1px solid yellow" }}
              >
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li>Distributed by: Sony Pictures Releasing </li>
                  <li>Main Cast: Dakota Johnson</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={stop_movie_trailer}
              type="button"
              className=" btn btn-dark"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreDetailsModal;
