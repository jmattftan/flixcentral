import PC1 from "../assets/images/payment_cards/visa.png";
import PC2 from "../assets/images/payment_cards/mastercard.png";
import PC3 from "../assets/images/payment_cards/american_express.png";
import PC4 from "../assets/images/payment_cards/paypal.png";

export const PaymentPage = () => (
  <>
    <div className="main-row mb-5" style={{ border: "1px solid blue" }}>
      <div className="row m-1 p-1" style={{ border: "1px solid red" }}>
        <div
          className="col-sm-12 col-md-6 col-lg-6 col-xl-7 p-1"
          style={{ border: "1px solid yellow" }}
        >
          <div
            className="payment-info-header mt-3 p-1"
            style={{ border: "1px solid green" }}
          >
            <h4>Payment Summary</h4>
          </div>
          <div
            className="payment-info-body mt-3 p-1"
            style={{ border: "1px solid green" }}
          >
            <h5>Payment Details</h5>
            <div className="detail-one mt-3">
              <p>Movie: Madame Web</p>
              <p>Ticket Price: ₱550</p>
              <p>No. of {"Premium"} Tickets: 5</p>
            </div>
            <div className="detail-two mt-3">
              <p className="total-ticket-price">
                Total Ticket Price: <b className="bold-price">₱2,750</b>
              </p>
              <p className="service-charge">
                Service Charge: <b className="bold-price">₱20</b>
              </p>
              <p className="total">
                Total: <b className="bold-price">₱2,770</b>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-sm-12 col-md-6 col-lg-6 col-xl-5 p-1"
          style={{ border: "1px solid yellow" }}
        >
          <div
            className="payment-form-header mt-3 p-2"
            style={{ border: "1px solid green" }}
          >
            <p>We Accept the following cards:</p>
            <div className="payment-cards">
              <img className="payment-card ms-4" src={PC1} />
              <img className="payment-card ms-4" src={PC2} />
              <img className="payment-card ms-4" src={PC3} />
              <img className="payment-card ms-4" src={PC4} />
            </div>
          </div>
          <div
            className="payment-form-body mt-3 p-1"
            style={{ border: "1px solid green" }}
          >
            <div
              className="form-input-group-one mt-1 p-1"
              style={{ border: "1px solid green" }}
            >
              <div className="mb-3 ms-2 me-2">
                <label htmlFor="first_name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  placeholder="John"
                ></input>
              </div>
              <div className="mb-3 ms-2 me-2">
                <label htmlFor="middle_name" className="form-label">
                  Middle Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="middle_name"
                  placeholder="Hill"
                ></input>
              </div>
              <div className="mb-3 ms-2 me-2">
                <label htmlFor="last_name" className="form-label ">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  placeholder="Doe"
                ></input>
              </div>
            </div>
            <div
              className="form-input-group-two mt-1 p-1"
              style={{ border: "1px solid green" }}
            >
              <div className="mb-3 ms-2 me-2">
                <label htmlFor="email" className="form-label ">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                ></input>
              </div>
              <div className="mb-3 ms-2 me-2">
                <label htmlFor="contact_number" className="form-label ">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contact_number"
                  placeholder="0912 345 6789"
                ></input>
              </div>
            </div>
            <div
              className="form-input-group-three mt-1 p-1"
              style={{ border: "1px solid green" }}
            >
              <div className="mb-3 ms-2 me-2">
                <label htmlFor="card_number" className="form-label">
                  Card Number
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="card_number"
                  placeholder="**** **** **** ****"
                  maxLength={16}
                ></input>
              </div>
              <div className="mb-3 ms-2 me-2">
                <label htmlFor="valid_thru" className="form-label">
                  Valid Thru
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="valid_thru"
                  placeholder="10/27"
                ></input>
              </div>
              <div className="mb-3 ms-2 me-2">
                <label htmlFor="vsc" className="form-label">
                  VSC
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="vsc"
                  placeholder="***"
                ></input>
              </div>
            </div>
            <div
              className="text-center mt-1 p-1"
              style={{ border: "1px solid green" }}
            >
              <input id="i-agree" type="checkbox" />
              <label className="ms-1" htmlFor="i-agree">
                I agree to the{" "}
                <a className="text-white" href="">
                  terms
                </a>{" "}
                and{" "}
                <a className="text-white" href="">
                  agreements
                </a>
                .
              </label>
            </div>
            <div
              className="text-end mt-1 p-1"
              style={{ border: "1px solid green" }}
            >
              <button className="btn btn-pay w-25">Pay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
