import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieDetails.css"

export default function MovieDetails({selectedMovies}) {
  let [allMovies] = useState([
    {
      id: 1,
      title: "Interstellar",
      description: "Exploration of space to ensure humanity's survival.",
      director: "Christopher Nolan",
      category: "Science Fiction",
      thumbnail:"https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      id: 2,
      title: "Blade Runner 2049",
      description: "A new blade runner unearths secrets about the past.",
      director: "Denis Villeneuve",
      category: "Science Fiction",
      thumbnail:"https://image.tmdb.org/t/p/original/4A4l2Z3tAxmC0NUeYY7CqqS4nxg.jpg",
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      description: "The classic love story of Elizabeth Bennet and Mr. Darcy.",
      director: "Joe Wright",
      category: "Romance",
      thumbnail:"https://image.tmdb.org/t/p/original/7OLS91X84AnO0EQeUVt7hUhg3pV.jpg",
    },
    {
      id: 4,
      title: "La La",
      description: "A musical romance between an actress and a jazz musician.",
      director: "Damien Chazelle",
      category: "Romance",
      thumbnail:"https://image.tmdb.org/t/p/original/8gM0zFsJAdmuicq2aRRzn6YgzkY.jpg",
    },
    {
        id: 5,
        title: "Die Hard",
        description: "A NYPD officer takes on terrorists in a skyscraper.",
        director: "John McTiernan",
        category :"Action",
        thumbnail: "https://image.tmdb.org/t/p/original/9f1JNTUPeR8bUip9jpL62myf0gl.jpg",
    },
    {
        id: 6,
        title: "The Dark Knight",
        description: "Batman faces the Joker in Gotham City.",
        director: "Christopher Nolan",
        category :"Action",
        thumbnail: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
  ]);

  let FinalSuggest = allMovies.filter(e=>e.category === selectedMovies.name);

  return(
    <div className="movie-container">
      <h1 className="movie-heading">Your Movies</h1>
      <div className="movie-grid">
        {
          FinalSuggest.map((e)=>(
            <div className="movie-card" key={e.id}>
              <img src={e.thumbnail} alt={e.title} />
              <h3>{e.title}</h3>
              <p>{e.description}</p>
              <ul className="movie-details">
                <li>{e.director}</li>
                <li>{e.category}</li>
              </ul>
            </div>  
          ))
        }
      </div>
    </div>
  )

  
}
