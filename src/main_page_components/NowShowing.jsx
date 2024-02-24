import React, { useEffect, useState } from "react";
import F1 from "../assets/images/movie_logos/f1.webp";

function NowShowing() {
  const [nsm_array, set_nsm_array] = useState([]);

  useEffect(() => {
    const fetch_now_showing_movie_data = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/now_showing_movies"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const now_showing_movies_json = await response.json();
        const nsm_details = now_showing_movies_json.map((nsmd) => ({
          id: nsmd._id,
          title: nsmd.movie_title,
          genre: nsmd.movie_genre,
          mrs_indicator: nsmd.movie_rated_system[0].indicator,
          mrs_description: nsmd.movie_rated_system[0].description,
          duration: nsmd.movie_duration,
        }));

        set_nsm_array(nsm_details);
        console.log("Movie Details:", nsm_details);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetch_now_showing_movie_data();
  }, []);

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
          {nsm_array.map((nsmd) => (
            <div
              key={nsmd.id}
              className="col-sm-12 col-md-12 col-lg-4 col-xl-4 p-1"
              style={{ border: "1px solid yellow" }}
            >
              <div className="glass p-0">
                <div className="row m-0 p-0">
                  <div className="container m-0 p-0">
                    <div className="container-one">
                      <img className="image" src={F1} />
                      <div className="info">
                        <h5 className="title m-1">{nsmd.title}</h5>
                        <p className="time m-1">
                          <b className={`${nsmd.mrs_indicator}`}>
                            {nsmd.mrs_description}
                          </b>{" "}
                          {nsmd.duration}
                        </p>
                        <ul>
                          <li>Standard - ₱350</li>
                          <li>Premium - ₱550</li>
                        </ul>
                        <a
                          type="button"
                          className="more-details m-1 text-light"
                          data-bs-toggle="modal"
                          data-bs-target="#more_details_modal"
                        >
                          More Details
                        </a>
                      </div>
                    </div>
                    <div className="container-two">
                      <div className="info-two">
                        <p className="genre m-1">{nsmd.genre}</p>
                        <a
                          type="button"
                          className="buy-ticket m-1 text-light"
                          data-bs-toggle="modal"
                          data-bs-target="#buy_ticket_modal"
                        >
                          Buy Ticket
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NowShowing;
