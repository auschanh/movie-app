import React, { useEffect, useState} from 'react';
import Movie from './Movie';
import SearchBar from './SearchBar';

const App = () => {
  const movies = [1,2,3];
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
          <SearchBar />
            
          <section className="section">
              <div className="container">
                {movies.map(movie => (
                  <Movie /> 
                ))}
              </div>
          </section>
          
        </section>
        </div>
      );
      
}
export default App;