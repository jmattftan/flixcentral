import React from "react";
import { Link, useNavigate } from "react-router-dom";

function BuyTicket() {
  const navigate = useNavigate();

  const GoToLink = () => {
    $("#buy_ticket_modal").modal("hide");
    setTimeout(() => {
      navigate("/ChooseSeatPage");
    }, 500);
  };

  return (
    <div
      className="modal fade"
      id="buy_ticket_modal"
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
                className="col-sm-12 col-md-12 col-lg-12 col-xl-12 p-1"
                style={{ border: "1px solid yellow" }}
              >
                <div
                  className="row m-1 p-1"
                  style={{ border: "1px solid red" }}
                >
                  <h2 className="text-center">MOVIE SCHEDULE</h2>
                </div>
                <div
                  className="row text-center m-1 p-1"
                  style={{ border: "1px solid red" }}
                >
                  <h5 className="movie-date text-start">
                    Monday, February 1, 2023
                  </h5>

                  <input
                    id="select-movie-date-1"
                    className="select-movie-date"
                    type="checkbox"
                  ></input>
                  <label
                    for="select-movie-date-1"
                    className="select-movie-date-label"
                  >
                    11:00 AM
                  </label>
                  <input
                    id="select-movie-date-2"
                    className="select-movie-date"
                    type="checkbox"
                  ></input>
                  <label
                    for="select-movie-date-2"
                    className="select-movie-date-label"
                  >
                    12:00 AM
                  </label>
                  <input
                    id="select-movie-date-3"
                    className="select-movie-date"
                    type="checkbox"
                  ></input>
                  <label
                    for="select-movie-date-3"
                    className="select-movie-date-label"
                  >
                    1:00 PM
                  </label>
                  <input
                    id="select-movie-date-4"
                    className="select-movie-date"
                    type="checkbox"
                  ></input>
                  <label
                    for="select-movie-date-4"
                    className="select-movie-date-label"
                  >
                    2:00 PM
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-dark"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-dark" onClick={GoToLink}>
              Choose Seat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyTicket;
