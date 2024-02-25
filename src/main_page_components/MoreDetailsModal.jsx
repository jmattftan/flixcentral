import React, { useEffect, useState } from "react";
/*import { MovieTrailerControls } from "../javascript/MovieTrailerControls.js";*/

function MoreDetailsModal() {
  /*const { iframe_src, stop_movie_trailer } = MovieTrailerControls();*/

  const [movie_array, set_movie_array] = useState([]);
  const [is_close_clicked, set_is_close_clicked] = useState(false);

  useEffect(() => {
    const fetch_movie_data = async () => {
      try {
        const response = await fetch("http://localhost:3001/movies");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const movies_json = await response.json();
        const movies_map = movies_json.map((movie) => ({
          id: movie._id,
          trailer_id: movie.movie_trailer_id,
          description: movie.movie_description,
          released_date: movie.movie_released_date,
          director: movie.movie_director,
          budget: movie.movie_budget,
          distributed_by: movie.movie_distributed_by,
          main_casts: movie.movie_main_casts,
        }));

        set_movie_array(movies_map);
        console.log("Movie Details:", movies_map);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetch_movie_data();
  }, []);

  const stop_movie_trailer = () => {
    set_is_close_clicked(true);
    setTimeout(() => {
      set_is_close_clicked(false);
    }, 1000);
  };

  return (
    <>
      {movie_array.map((movie, index) => (
        <React.Fragment key={movie.id}>
          <div
            className="modal fade"
            id={`more_details_modal_${movie.id}`}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <div
                    className="row m-1 p-1"
                    style={{ border: "1px solid red" }}
                  >
                    <div
                      className="col-sm-12 col-md-12 col-lg-12 col-xl-12 p-1 justify-content-center d-flex"
                      style={{ border: "1px solid yellow" }}
                    >
                      <iframe
                        id="movie-trailer"
                        className="p-0"
                        width="1110"
                        height="350"
                        src={`https://www.youtube.com/embed/${
                          is_close_clicked ? "disabled" : movie.trailer_id
                        }?&controls=1&rel=0`}
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
                      <p>{movie.description}</p>
                    </div>
                  </div>
                  <div
                    className="row m-1 p-1"
                    style={{ border: "1px solid red" }}
                  >
                    <div
                      className="col-sm-12 col-md-12 col-lg-6 col-xl-6 text-start p-1"
                      style={{ border: "1px solid yellow" }}
                    >
                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <li>Released Date: {movie.released_date}</li>
                        <li>Director: {movie.director}</li>
                        <li>Budget: {movie.budget}</li>
                      </ul>
                    </div>
                    <div
                      className="col-sm-12 col-md-12 col-lg-6 col-xl-6 text-start p-1"
                      style={{ border: "1px solid yellow" }}
                    >
                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <li>Distributed by: {movie.distributed_by}</li>
                        <li>Main Cast: {movie.main_casts}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    onClick={() => stop_movie_trailer()}
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
        </React.Fragment>
      ))}
    </>
  );
}

export default MoreDetailsModal;
