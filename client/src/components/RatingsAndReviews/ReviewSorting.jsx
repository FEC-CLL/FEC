import React from 'react';

function ReviewSorting({
  setSortType, setPage, setAllReviews, allReviews,
}) {
  function onSortTypeChange(event) {
    setAllReviews([]);
    setSortType(event.target.value);
    setPage(1);
  }

  return (
    <div className="reviewSorting">
      <div>
        {allReviews.length}
        {' '}
        reviews, sorted by
      </div>
      <select className="sortDropdown" onChange={onSortTypeChange}>
        <option value="relevant">relevant</option>
        <option value="newest">newest</option>
        <option value="helpful">helpful</option>
      </select>
    </div>
  );
}

export default ReviewSorting;
