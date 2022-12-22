import React from "react";
import { movies } from "../data";

const getMovies = movies.map(movie => {
  const listGenres = movie.genres.map(genre => {
    return (
      <li key={movie[genre]}>{genre}</li>
    )
  })
  return (
    <div key={movie.title}>
      <h3>{movie.title}</h3>
      <small>{movie.time} Minutes</small>
      <ul>
        {listGenres}
      </ul>
    </div>
  )
})

function Movies() {
  return (
  <div>
    <h1>Movies Page</h1>
    {getMovies}
  </div>
  )
}

export default Movies;
