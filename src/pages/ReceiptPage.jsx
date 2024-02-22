import React, { useRef } from "react";
import html2canvas from "html2canvas";
import F1 from "../assets/images/movie_logos/f1.webp";
import Barcode from "../assets/barcode.png";

const ReceiptPage = () => {
  const ticketRef = useRef(null);

  const downloadTicket = () => {
    html2canvas(ticketRef.current, { backgroundColor: null }).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "ticket.png";

      link.click();
    });
  };

  return (
    <>
      <div
        className="container main-row mb-5 p-1"
        style={{ border: "1px solid blue" }}
      >
        <div className="row m-0 p-1" style={{ border: "1px solid red" }}>
          <div className="col-12 p-1" style={{ border: "1px solid yellow" }}>
            <div
              className="ticket-receipt-container p-1"
              style={{ border: "1px solid green" }}
            >
              <div
                className="ticket-receipt p-0"
                style={{ border: "1px solid green" }}
                ref={ticketRef}
              >
                <div
                  className="tr-body-one p-0"
                  style={{ border: "1px solid violet" }}
                >
                  <img src={F1} className="ticket-receipt-movie-image" />
                </div>
                <div
                  className="tr-body-two p-2"
                  style={{ border: "0px solid violet" }}
                >
                  <p
                    className="ticket-receipt-movie-genre"
                    style={{ float: "right" }}
                  >
                    Action/Fantasy
                  </p>

                  <h4 className="ticket-receipt-movie-title">Madame Web</h4>

                  <p className="ticket-receipt-movie-duration">
                    <b className="rated-system-g">G</b> Duration: 1hr 23min
                  </p>
                  <ul className="ticket-receipt-details">
                    <li className="ticket-receipt-movie-privilage">
                      Premium
                      <li
                        className="ticket-receipt-movie-time"
                        style={{ float: "right" }}
                      >
                        Time: 11:00 PM
                      </li>
                    </li>
                    <li className="ticket-receipt-movie-room">
                      Room: Cinema 1
                      <li
                        className="ticket-receipt-movie-seat"
                        style={{ float: "right" }}
                      >
                        Seat: S8
                      </li>
                    </li>
                  </ul>
                </div>
                <div className="tr-body-three p-0">
                  <img src={Barcode} className="ticket-receipt-movie-barcode" />
                </div>
              </div>
            </div>
            <div className="text-end p-3" style={{ border: "1px solid green" }}>
              <button
                className="btn btn-download-ticket"
                onClick={downloadTicket}
              >
                Download Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceiptPage;

/*
import React from "react";
import F1 from "../assets/images/movie_logos/f1.webp";
import Barcode from "../assets/barcode.png";

const ReceiptPage = () => (
  <>
    <div
      className="container main-row mb-5 p-1"
      style={{ border: "1px solid blue" }}
    >
      <div className="row m-0 p-1" style={{ border: "1px solid red" }}>
        <div className="col-12 p-1" style={{ border: "1px solid yellow" }}>
          <div
            className="ticket-receipt-container p-1"
            style={{ border: "1px solid green" }}
          >
            <div
              className="ticket-receipt p-0"
              style={{ border: "1px solid green" }}
            >
              <div
                className="tr-body-one p-0"
                style={{ border: "1px solid violet" }}
              >
                <img src={F1} className="ticket-receipt-movie-image" />
              </div>
              <div
                className="tr-body-two p-2"
                style={{ border: "0px solid violet" }}
              >
                <h4 className="ticket-receipt-movie-title">Madame Web</h4>
                <p className="ticket-receipt-movie-genre">Action/Fantasy</p>
                <ul className="ticket-receipt-details">
                  <li className="ticket-receipt-movie-privilage">
                    Premium{" "}
                    <li
                      className="ticket-receipt-movie-room"
                      style={{ float: "right" }}
                    >
                      Room: Cinema 1
                    </li>
                  </li>
                  <li className="ticket-receipt-movie-time">
                    Time: 11:00 PM{" "}
                    <li
                      className="ticket-receipt-movie-seat"
                      style={{ float: "right" }}
                    >
                      Seat: S8
                    </li>
                  </li>
                  <li className="ticket-receipt-movie-freebies">
                    Large Popcorn, Large Iced Tea Drink
                  </li>
                </ul>
              </div>
              <div className="tr-body-three p-0">
                <img src={Barcode} className="ticket-receipt-movie-barcode" />
              </div>
            </div>
          </div>
          <div className="text-end p-3">
            <button className="btn btn-light">Download Ticket</button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ReceiptPage;
*/
