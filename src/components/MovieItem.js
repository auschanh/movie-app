import React from 'react';
import './MovieItem.css';

// movie cards with data
// render to movie.js

const MovieItem = ({ movie }) => {
  return (
    <div className="card mt-6 movie-item">
      <div className="card-title is-size-5 has-text-centered has-text-weight-bold mb-5">
      {movie.Title}
      </div>
      <div className="card-image has-text-centered px-6 movie-img">
        <img src={movie.Poster} alt={movie.Title}/>
      </div>
      <div className="card-content movie-content">
        <div className="content">
          <p><strong>Title: </strong> {movie.Title}</p>
          <p><strong>Year: </strong>{movie.Year}</p>
          
        </div>
      </div>
      <footer className="card-footer has-text-weight-bold">
        <p className="card-footer-item">
          My Rating: 
        </p>
      </footer>
    </div>

  );
};

export default MovieItem;