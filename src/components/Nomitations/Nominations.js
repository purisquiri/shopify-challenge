import React from "react";

export default function Nominations({ nominate }) {
  console.log(nominate);
  return (
    <div>
      {nominate?.map((movie) => (
        <div>
          {movie.Title} ({movie.Year}) hello from nominations
        </div>
      ))}
    </div>
  );
}
