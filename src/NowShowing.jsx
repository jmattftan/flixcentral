import F1 from "./assets/f1.webp";
import F2 from "./assets/f2.webp";
import F3 from "./assets/f3.webp";
import F4 from "./assets/f4.webp";
import F5 from "./assets/f5.webp";
import F6 from "./assets/f6.webp";

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
                  <div className="ns-container">
                    <img className="ns-image" src={F1} />
                    <div className="ns-info">
                      <h5 className="ns-title m-1">Madame Web</h5>
                      <p className="ns-time m-1">
                        <b className="rated-system-g">G</b> 2hrs and 13mins
                      </p>
                      <ul>
                        <li>Standard - ₱350</li>
                        <li>Premium - ₱550</li>
                      </ul>
                      <a
                        type="button"
                        className="ns-more-details m-1 text-light"
                        data-bs-toggle="modal"
                        data-bs-target="#Modal"
                      >
                        More Details
                      </a>
                    </div>
                  </div>
                  <div className="ns-container-two">
                    <div className="ns-info-two">
                      <p className="ns-genre m-1">Action/Fanstasy</p>
                      <a className="ns-buy-ticket m-1 text-light" href="">
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
                  <div className="ns-container">
                    <img className="ns-image" src={F2} />
                    <div className="ns-info">
                      <h5 className="ns-title m-1">Lisa Frankenstein</h5>
                      <p className="ns-time m-1">
                        <b className="rated-system-pg">PG</b> 2hrs and 13mins
                      </p>
                      <ul>
                        <li>Standard - ₱350</li>
                        <li>Premium - ₱550</li>
                      </ul>
                      <a className="ns-more-details m-1 text-light" href="">
                        More Details
                      </a>
                    </div>
                  </div>
                  <div className="ns-container-two">
                    <div className="ns-info-two">
                      <p className="ns-genre m-1">Action/Fanstasy</p>
                      <a className="ns-buy-ticket m-1 text-light" href="">
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
                  <div className="ns-container">
                    <img className="ns-image" src={F3} />
                    <div className="ns-info">
                      <h5 className="ns-title m-1">The Fall Guy</h5>
                      <p className="ns-time m-1">
                        <b className="rated-system-pg-13">PG-13</b> 2hrs and
                        13mins
                      </p>
                      <ul>
                        <li>Standard - ₱350</li>
                        <li>Premium - ₱550</li>
                      </ul>
                      <a className="ns-more-details m-1 text-light" href="">
                        More Details
                      </a>
                    </div>
                  </div>
                  <div className="ns-container-two">
                    <div className="ns-info-two">
                      <p className="ns-genre m-1">Action/Fanstasy</p>
                      <a className="ns-buy-ticket m-1 text-light" href="">
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
