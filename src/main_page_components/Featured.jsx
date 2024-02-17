import React, { useEffect } from "react";
import "../assets/owl_carousel/owl.carousel.min.css";
import "../assets/owl_carousel/owl.theme.default.min.css";
import "../assets/owl_carousel/jquery.min.js";
import "../assets/owl_carousel/owl.carousel.min.js";
import F1 from "../assets/images/movie_logos/f1.webp";
import F2 from "../assets/images/movie_logos/f2.webp";
import F3 from "../assets/images/movie_logos/f3.webp";
import F4 from "../assets/images/movie_logos/f4.webp";
import F5 from "../assets/images/movie_logos/f5.webp";
import F6 from "../assets/images/movie_logos/f6.webp";

function Featured() {
  useEffect(() => {
    var owl = window.$(".owl-carousel");
    owl.owlCarousel({
      items: 6,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      center: true,
      //slideTransition: "linear",
      //autoplaySpeed: 6000,
      //smartSpeed: 6000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 3,
          nav: true,
        },
        1000: {
          items: 5,
          nav: false,
        },
      },
    });

    $(".play").on("click", function () {
      owl.trigger("play.owl.autoplay", [1000]);
    });

    $(".stop").on("click", function () {
      owl.trigger("stop.owl.autoplay");
    });
  }, []);

  return (
    <div
      id="featured"
      className="row main-row  ms-0 me-0 p-1"
      style={{ border: "1px solid blue" }}
    >
      <div
        className="col-sm-12 col-md-12 col-lg-12 col-xl-12 p-1"
        style={{ border: "1px solid yellow" }}
      >
        <div className="row m-1 p-1" style={{ border: "1px solid blue" }}>
          <h1 className="text-center">FEATURED</h1>
        </div>
        <div
          className="row p-1 m-1 justify-content-start"
          style={{ border: "1px solid blue" }}
        >
          <div
            className="owl-carousel owl-theme me-5 p-1"
            style={{ border: "1px solid green" }}
          >
            <div
              className="justify-content-center d-flex p-1 item"
              style={{ border: "1px solid yellow" }}
            >
              <div className="card">
                <img src={F1} className="card-img-top" />
                <p className="image-text f-title">MADAME WEB</p>
              </div>
            </div>
            <div
              className="justify-content-center d-flex p-1 item"
              style={{ border: "1px solid yellow" }}
            >
              <div className="card">
                <img src={F2} className="card-img-top" />
                <p className="image-text f-title">LISA FRANKENSTEIN</p>
              </div>
            </div>
            <div
              className="justify-content-center d-flex p-1 item"
              style={{ border: "1px solid yellow" }}
            >
              <div className="card">
                <img src={F3} className="card-img-top" />
                <p className="image-text f-title">FALL GUY</p>
              </div>
            </div>
            <div
              className="justify-content-center d-flex p-1 item"
              style={{ border: "1px solid yellow" }}
            >
              <div className="card">
                <img src={F4} className="card-img-top" />
                <p className="image-text f-title">THE BEEKEEPER</p>
              </div>
            </div>
            <div
              className="justify-content-center d-flex p-1 item"
              style={{ border: "1px solid yellow" }}
            >
              <div className="card">
                <img src={F5} className="card-img-top" />
                <p className="image-text f-title">DUNE: PART TWO</p>
              </div>
            </div>
            <div
              className="justify-content-center d-flex p-1 item"
              style={{ border: "1px solid yellow" }}
            >
              <div className="card">
                <img src={F6} className="card-img-top" />
                <p className="image-text f-title">KUNG FU PANDA 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
