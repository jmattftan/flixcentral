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
          <div className="modal-body"></div>
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
