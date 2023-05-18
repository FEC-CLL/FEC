import React from 'react';

function Search({ filter }) {
  const changeHandler = (event) => {
    if (event.target.value.length >= 3) {
      filter(document.getElementById('searchInput').value);
    } else {
      filter('');
    }
  };

  return (
    <div className="searchForm">
      <input onChange={changeHandler} id="searchInput" className="searchInput" type="search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      <div className="searchButton" />
    </div>
  );
}

export default Search;
