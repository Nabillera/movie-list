import React, { useState } from 'react'
import { Movie } from './Movie'
import "./App.css"

const App = () => {
  let [movies, setMovies] = useState(
      [{
        name: "Shrek",
        director: "Andrew Adamson",
        release: "2001",
        genre: "Comedy",
        poster: "https://en.wikipedia.org/wiki/Shrek#/media/File:Shrek_(2001_animated_feature_film).jpg"
      },
      {
        name: "Shrek 2",
        director: "Andrew Adamson",
        release: "2004",
        genre: "Fantasy",
        poster: "https://en.wikipedia.org/wiki/Shrek_2#/media/File:Shrek_2_poster.jpg"
      },
      {
        name: "Shrek the Third",
        director: "Chris Miller",
        release: "2007",
        genre: "Fantasy",
        poster: "https://en.wikipedia.org/wiki/Shrek_the_Third#/media/File:Shrek_the_Third_(2007_animated_feature_film).jpg"
      },
      {
        name: "Shrek Forever After",
        director: "Mike Mitchell",
        release: "2010",
        genre: "Action",
        poster: "https://en.wikipedia.org/wiki/Shrek_Forever_After#/media/File:Shrek_Forever_After_(2010_animated_feature_film).jpg"
      }]
  )
   
  return (

    <div>
      <div>
      {movies.map((movie) => {
          return (
            <Movie
              name={movie.name}
              release={movie.release}
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