import React from "react";
import { useDispatch } from "react-redux";

import { updateNominations } from "../Nominations/nominationsSlice";

export default function Movies({ movies, query }) {
  const dispatch = useDispatch();

  const handleMovie = (movie) => {
    const { Title, Year, imdbID, Poster } = movie;
    const payload = { title: Title, year: Year, id: imdbID, poster: Poster };

    dispatch(updateNominations(payload));
  };
  //setNominate((prevMovie) => [...prevMovie, movie]);

  return (
    <div>
      This are the movies for {query}
      {movies.Search?.map((movie) => (
        <div key={movie.imdbID}>
          {movie.Title} ({movie.Year})
          <button onClick={() => handleMovie(movie)}>nominate</button>
          {/* <Nominations nominate={nominate} /> */}
        </div>
      ))}
    </div>
  );
}
