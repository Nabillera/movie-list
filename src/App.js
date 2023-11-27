import React, { useState } from 'react'
import { Movie } from './Movie'
import "./App.css"
import img from "./Shrek.webp"

const App = () => {

  const [movie, setMovie] = useState({
    name: "",
    director: "",
    release: "",
    genre: "",
    poster: ""
  });

  const [movies, setMovies] = useState(
    [{
      name: "Shrek",
      director: "Andrew Adamson",
      release: "2001",
      genre: "Comedy",
      poster: "https://upload.wikimedia.org/wikipedia/en/7/7b/Shrek_%282001_animated_feature_film%29.jpg"
    },
    {
      name: "Shrek 2",
      director: "Andrew Adamson",
      release: "2004",
      genre: "Fantasy",
      poster: "https://upload.wikimedia.org/wikipedia/en/b/b9/Shrek_2_poster.jpg"
    },
    {
      name: "Shrek the Third",
      director: "Chris Miller",
      release: "2007",
      genre: "Fantasy",
      poster: "https://upload.wikimedia.org/wikipedia/en/2/22/Shrek_the_Third_%282007_animated_feature_film%29.jpg"
    },
    {
      name: "Shrek the Halls",
      director: "Gary Trousdale",
      release: "2007",
      genre: "Comedy",
      poster: "https://upload.wikimedia.org/wikipedia/en/b/b7/Shrek_the_Halls_poster.jpg"
    },
    {
      name: "Shrek Forever After",
      director: "Mike Mitchell",
      release: "2010",
      genre: "Action",
      poster: "https://upload.wikimedia.org/wikipedia/en/7/70/Shrek_Forever_After_%282010_animated_feature_film%29.jpg"
    }]
  )

  const saveInput = (event) => {
    const userInput = event.target.value;
    setMovie({
      ...movie,
      [event.target.name]: userInput
    })
  };

  const saveMovie = () => {
    movies.push(movie);
    setMovie({
      ...movie,
      name: "",
      director: "",
      release: "",
      genre: "",
      poster: ""
    })
  }
  return (
    <div id="main-container">
      <div id="new-entry-container">
        <img id="illustration-1" src={img} />
        <div id="form">
          <input onChange={saveInput} name="name" className="input-field" placeholder="Title" />
          <input onChange={saveInput} name="release" className="input-field" placeholder="Release date" />
          <input onChange={saveInput} name="genre" className="input-field" placeholder="Genre" />
          <input onChange={saveInput} name="director" className="input-field" placeholder="Director" />
          <input onChange={saveInput} name="poster" className="input-field" placeholder="Poster link" />
          <button onClick={saveMovie}>Add Movie</button>
        </div>
        <img id="illustration-2" src={img} />
      </div>

      <div id="movie-list-container">
        {movies.map((movie) => {
          return (
            <Movie
              name={movie.name}
              release={movie.release}
              genre={movie.genre}
              director={movie.director}
              poster={movie.poster}
            />
          );
        })}
      </div>
    </div>
  )
}

export default App