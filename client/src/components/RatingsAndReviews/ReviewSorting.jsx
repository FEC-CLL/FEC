import React from 'react';

function ReviewSorting({
  setSortType, allReviews,
}) {
  function onSortTypeChange(event) {
    setSortType(event.target.value);
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
