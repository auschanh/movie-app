import {useEffect, useState} from 'react';
import omdb from '../apis/omdb';

// omdb api key
const KEY = "40d1ffa2"
// http://www.omdbapi.com/?apikey=40d1ffa2&t=spirited+away

// custom hook that fetches movie data from imdb/omdb 
// called from App component

const useMovies = (defaultSearchTerm) => {
  const [movies, setMovies] = useState([]);

  // when empty search for this default placeholder term
  // Same as componentDidMount()
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  // await response from omdb api
  // set array of movies to display 
  // set a featured movie, first element in response array
  const search = async searchedTerm => {
    const response = await omdb.get(`/?apikey=${KEY}`, {
      params: {
        s: searchedTerm,
      }
    });
    console.log(response)
    setMovies(response.data.Search);
    
  };

  return [ movies, search ];

};

export default useMovies;