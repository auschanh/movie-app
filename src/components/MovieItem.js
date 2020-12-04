import React, { useEffect, useState } from 'react';
import omdb from '../apis/omdb';
import './MovieItem.css';
import StarRating from './StarRating';

// movie cards with data
// render to movie.js
const KEY = "40d1ffa2"

const MovieItem = ({ movieID }) => {
  const [movieData, setMovieData] = useState({});

  // useEffect(() => {
  //   onStarClick(rating);
  // }, [rating]);

  // perform a search after rendering using movieID
  useEffect(() => {
    search(movieID);
  }, [movieID]);

  // use movieID to obtain other movie data
  // fill out movie card based on that data
  const search = async movieID => {
    const response = await omdb.get(`/?apikey=${KEY}`, {
      params: {
        i: movieID,
        plot: 'short',
      }
    });
    console.log(response);
    setMovieData(response.data);
  };

  return (
    <div className="card mt-6 movie-item">
      <div className="card-title is-size-4 has-text-centered has-text-weight-bold mb-5">
      {movieData.Title}
      </div>
      <div className="card-image has-text-centered px-6 movie-img">
        <img src={movieData.Poster} alt={movieData.Title}/>
      </div>
      <div className="card-content movie-content">
        <div className="content">
          <p><strong>Title:</strong> {movieData.Title}</p>
          <p><strong>Year:</strong> {movieData.Year}</p>
          <p><strong>Genre:</strong> {movieData.Genre}</p>
          <p><strong>Runtime:</strong> {movieData.Runtime}</p>
          <p><strong>IMDB Rating:</strong> {movieData.imdbRating}</p>
        </div>
      </div>
      <footer className="card-footer has-text-weight-bold">
        <p className="card-footer-item">
         My Rating: <StarRating />
        </p>
      </footer>
    </div>

  );
};

export default MovieItem;