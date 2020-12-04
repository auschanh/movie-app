import React from 'react';
import MovieItem from './MovieItem';

const Movie = ({ movies, key }) => {
  const renderedList = movies.map(movieID => {
  //  return(
  //    <div className="container">
  //   <div className="notification is-success py-1" key={key}>
  //     <button className="delete"></button>
  //     🍿 {movie.Title} 
  //   </div>
  //   <img src={movie.Poster} alt={movie.Title}/>
  //   </div>
  //  );
      return(
        <MovieItem
        key={key}
        movieID={movieID}
        />
      );
  });

  return (
  <div className="movie-list container">
  
      {renderedList}
       
  </div>
  );
};

export default Movie;
