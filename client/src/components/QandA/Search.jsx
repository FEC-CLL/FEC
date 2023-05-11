import React, {useState} from 'react';

const Search = ({filter}) => {
  const submitHandler = (event) => {
    event.preventDefault();
    filter(document.getElementById("searchInput").value);
    document.getElementById("searchInput").value = '';
  }

  return(
    <form onSubmit={submitHandler} className="searchForm">
      <input id="searchInput" className="searchInput" type="search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      <button className="searchButton" type="submit"></button>
    </form>
  );
}

export default Search;
