import React from 'react';

// Solution when user presses search
// const Search = ({filter}) => {
//   const submitHandler = (event) => {
//     event.preventDefault();
//     filter(document.getElementById("searchInput").value);
//     document.getElementById("searchInput").value = '';
//   }

//   return(
//     <form onSubmit={submitHandler} className="searchForm">
//       <input id="searchInput" className="searchInput" type="search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
//       <button className="searchButton" type="submit"></button>
//     </form>
//   );
// }


//solution when user types 3 or more characters
const Search = ({filter}) => {
  const changeHandler = (event) => {
    if (event.target.value.length >= 3) {
      //console.log('yerr');
      filter(document.getElementById("searchInput").value);
    } else {
      filter('');
    }
    // document.getElementById("searchInput").value = '';
  }

  return(
    <div className="searchForm">
      <input onChange={changeHandler} id="searchInput" className="searchInput" type="search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      <div className="searchButton"></div>
    </div>
  );
}

export default Search;
