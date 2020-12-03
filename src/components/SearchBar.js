import React, {useState} from 'react';

// onFormSubmit is a call back prop
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    // Submit this term
    onFormSubmit(term);
  };

  return (
    
    <div className="container">
     <form className="form" onSubmit={onSubmit}>
      <div className="field has-addons-centered is-grouped">
        <div className="control is-expanded">
          <input className="input" 
          type="text" 
          placeholder="Search for a movie"
          onChange={e => setTerm(e.target.value)}
          />
        </div>
        <div className="control">
          <a className="button is-info">
            Search
          </a>
        </div>
      </div>
      </form>
    </div>
    
  );
};

export default SearchBar;