import React from "react";
import { actors } from "../data";

function Actors() {
  const getactors = actors.map(actor => {
    const listMovies = actor.movies.map(movie => {
      return (
        <li key={movie}>{movie}</li>
      )
    })
    return (
      <div key={actor.name}>
        <h3>{actor.name}</h3>
        <ul>
          {listMovies}
        </ul>
      </div>
    )
  })
  return (
  <div>
    <h1>Actors Page</h1>
    {getactors}
  </div>
  )
}

export default Actors;
