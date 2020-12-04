import React, { useEffect, useState} from 'react';
import Movie from './Movie';
import SearchBar from './SearchBar';
import useMovies from '../hooks/useMovies';


const App = () => {
  
  const [selectedMovie, setSelectedMovie] = useState('');
  const [movies, search] = useMovies('avengers');

  // useEffect(() => {
  //   setSelectedMovie(movies[0]);
    
  // }, [movies])

  const onMovieSelect = movie => {
    setSelectedMovie(movie);
  };


    return (
      <div>

        <section className="section hero is-light">
            <h2 className="title has-text-centered"> <span className="icon">
              <i className="fas fa-video mr-5"></i>
            </span>   Movie Recommendation System   <span className="icon">
              <i className="fas fa-film ml-5"></i>
            </span></h2>
        </section>

        <section className="section">
          <SearchBar onSearchSubmit={search}/>
            
          <section className="section">
              <div className="container">
                <Movie movies={movies} key={movies.imdbID}/> 
              </div>
          </section>

        </section>
        </div>
      );
      
};
export default App;