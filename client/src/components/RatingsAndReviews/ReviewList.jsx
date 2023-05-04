import React, {useState} from "react";
import axios from "axios";

let ReviewList = ({reviewData}) => {
  let [allReviews,setReviews] = useState({});
  let [displayedReviews, setdisplayedReviews] = useState()


  return (
    <div>

      {allReviews.results.length > 2 ? <button id="addReview">Add Review</button> : ""}

    </div>
  )

}

export default ReviewList;