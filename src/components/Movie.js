import React from 'react';

const Movie = ({ movies }) => {
  const renderedList = movies.map(movie => {
   return(
     <div className="container">
    <div className="notification is-success py-1" key={movie.imdbID}>
      <button className="delete"></button>
      🍿 {movie.Title} 
    </div>
    <img src={movie.Poster}></img>
    </div>
   );
  });

  return <div className="movie mt-2"> {renderedList}</div>;
};

export default Movie;
