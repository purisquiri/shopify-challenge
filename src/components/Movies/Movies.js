import React, { useState } from "react";
import Nominations from "../Nomitations/Nominations";

export default function Movies({ movies }) {
  const [nominate, setNominate] = useState([]);

  const handleMovie = (movie) =>
    setNominate((prevMovie) => [...prevMovie, movie]);
  return (
    <div>
      {movies.Search?.map((movie) => (
        <div>
          {movie.Title} ({movie.Year})
          <button onClick={() => handleMovie(movie)}>nominate</button>
          {/* <Nominations nominate={nominate} /> */}
        </div>
      ))}
    </div>
  );
}
