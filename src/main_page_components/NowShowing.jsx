import React, { useEffect, useState } from "react";
import F1 from "../assets/images/movie_logos/f1.webp";
import F2 from "../assets/images/movie_logos/f2.webp";
import F3 from "../assets/images/movie_logos/f3.webp";
import F4 from "../assets/images/movie_logos/f4.webp";
import F5 from "../assets/images/movie_logos/f5.webp";
import F6 from "../assets/images/movie_logos/f6.webp";

function NowShowing() {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const fetchNowShowingMovieData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/now_showing_movies"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const nowShowingMovies = await response.json();
        const movieDetails = nowShowingMovies.map((movie) => ({
          id: movie._id,
          title: movie.movie_title,
          genre: movie.movie_genre,
          movie_rated_system: movie.movie_rated_system,
          duration: movie.movie_duration,
        }));

        setMovieDetails(movieDetails);
        console.log("Movie Details:", movieDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNowShowingMovieData();
  }, []);

  const st = "rated-system-pg";

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
          {movieDetails.map((movie) => (
            <div
              key={movie.id}
              className="col-sm-12 col-md-12 col-lg-4 col-xl-4 p-1"
              style={{ border: "1px solid yellow" }}
            >
              <div className="glass p-0">
                <div className="row m-0 p-0">
                  <div className="container m-0 p-0">
                    <div className="container-one">
                      <img className="image" src={F1} />
                      <div className="info">
                        <h5 className="title m-1">{movie.title}</h5>
                        <p className="time m-1">
                          <b className={`${st}`}>{movie.movie_rated_system}</b>{" "}
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
                          data-bs-target="#more_details_modal"
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
