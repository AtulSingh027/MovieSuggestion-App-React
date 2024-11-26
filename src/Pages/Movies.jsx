import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Movies.css';

export default function Movies({setSelectedMovies}) {
    let navigate = useNavigate();
    const [movies] = useState([
        {
            id: 1,
            name: "Action",
            description: "Adrenaline-packed movies with intense stunts and battles.",
            thumbnail: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
        },
        {
            id: 2,
            name: "Romance",
            description: "Heartwarming stories about love and relationships.",
            thumbnail: "https://img.freepik.com/premium-vector/love-poster-movie_992397-2629.jpg?semt=ais_hybrid",
        },
        {
            id: 3,
            name: "Science Fiction",
            description: "Futuristic tales with advanced technology and space exploration.",
            thumbnail: "https://images-cdn.ubuy.co.in/6352289f38bb253c44612d53-interstellar-movie-poster-24-x-36-inches.jpg",
        },
    ]);

    return (
        <div className="movies-wrapper">
            <div className="movies-container">
                {movies.map((movie) =>(
                    
                    <div className="ForOnclick" onClick={()=>{
                        setSelectedMovies(movie)
                        navigate("/MovieDetails")
                    }}>
                        <div key={movie.id} className="movie-card">
                        <div className="movie-thumbnail">
                            <span className="movie-id">{movie.id}</span>
                            <img src={movie.thumbnail} alt={movie.name} />
                        </div>
                        <div className="movie-info">
                            <h3 className="movie-title">{movie.name}</h3>
                            <p className="movie-description">{movie.description}</p>
                        </div>
                    </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}