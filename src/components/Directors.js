import React from "react";
import { directors } from "../data";

function Directors() {
  const getDirectors = directors.map(director => {
    const listMovies = director.movies.map(movie => {
      return (
        <li key={movie}>{movie}</li>
      )
    })
    return (
      <div key={director.name}>
        <h3>{director.name}</h3>
        <ul>
          {listMovies}
        </ul>
      </div>
    )
  })
  return (
  <div>
    <h1>Directors Page</h1>
    {getDirectors}
  </div>
  )
}

export default Directors;
