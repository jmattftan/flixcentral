import { useState } from "react";

export const MovieTrailerControls = () => {
  const video_id = "s_76M4c4LTo";

  const [trailer_id, set_trailer_id] = useState(video_id);

  const stop_movie_trailer = () => {
    set_trailer_id("disable");
    setTimeout(() => {
      set_trailer_id(video_id);
      console.log(iframe_src);
    }, 1000);
  };

  const iframe_src = `https://www.youtube.com/embed/${trailer_id}?&controls=1&rel=0`;

  return { iframe_src, stop_movie_trailer };
};
