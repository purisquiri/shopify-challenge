import React from "react";
import { useSelector } from "react-redux";
import { updateNominations } from "./nominationsSlice";

export default function Nominations() {
  const nominations = useSelector(updateNominations);
  console.log(nominations);

  return (
    <div>
      And the nominiees are
      {nominations.payload.nominations.nominations?.map((movie) => (
        <div key={movie.id}>
          {movie.title} ({movie.year}) <button>remove</button>
        </div>
      ))}
    </div>
  );
}
