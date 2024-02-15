import { MovieTrailerControls } from "./MovieTrailerControls.js";

function MoreDetailsModal() {
  const { iframe_src, stop_movie_trailer } = MovieTrailerControls();

  return (
    <div
      className="modal fade"
      id="Modal"
      tabIndex="-1"
      aria-labelledby="ModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body ">
            <div className="row m-1 justify-content-center d-flex">
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
            <div className="row m-1 mt-3">
              <p
                className="p-1"
                style={{
                  borderBottom: "1px solid white",
                }}
              >
                Cassandra Webb is a New York City paramedic who starts to show
                signs of clairvoyance. Forced to confront revelations about her
                past, she must protect three young women from a mysterious
                adversary who wants them dead.
              </p>
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
