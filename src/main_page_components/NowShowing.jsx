import React, { useEffect, useState } from "react";

function NowShowing() {
  const [movie_array, set_movie_array] = useState([]);

  useEffect(() => {
    const fetch_movie_data = async () => {
      try {
        const response = await fetch("http://localhost:3001/movies");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const movies_json = await response.json();
        const movies_map = movies_json
          .filter((movie) => movie.movie_status === "Now Showing")
          .map((movie) => ({
            id: movie._id,
            image: movie.movie_image,
            title: movie.movie_title,
            genre: movie.movie_genre,
            mrs_indicator: movie.movie_rated_system[0].indicator,
            mrs_description: movie.movie_rated_system[0].description,
            duration: movie.movie_duration,
          }));

        set_movie_array(movies_map);
        console.log("Movie Details:", movies_map);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetch_movie_data();
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
          {movie_array.map((movie) => (
            <div
              key={movie.id}
              className="col-sm-12 col-md-12 col-lg-4 col-xl-4 p-1"
              style={{ border: "1px solid yellow" }}
            >
              <div className="glass p-0">
                <div className="row m-0 p-0">
                  <div className="container m-0 p-0">
                    <div className="container-one">
                      <img
                        className="image"
                        src={"./images/movie_logos/" + movie.image}
                      />
                      <div className="info">
                        <h5 className="title m-1">{movie.title}</h5>
                        <p className="time m-1">
                          <b className={`${movie.mrs_indicator}`}>
                            {movie.mrs_description}
                          </b>{" "}
                          {movie.duration}
                        </p>
                        <ul>
                          <li>Standard - ₱350</li>
                          <li>Premium - ₱550</li>
                        </ul>
                        <a
                          type="button"
                          className="more-details m-1 text-light"
                          data-bs-toggle="modal"
                          data-bs-target={`#more_details_modal_${movie.id}`}
                        >
                          More Details
                        </a>
                      </div>
                    </div>
                    <div className="container-two">
                      <div className="info-two">
                        <p className="genre m-1">{movie.genre}</p>
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
