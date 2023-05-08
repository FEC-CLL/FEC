import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './SearchQandA.jsx';
import SearchList from './SearchQandAList.jsx';

const QandA = () => {
  const [search, setSearch] = useState('');
  const [questions, setQuestions] = useState([]);

  // useEffect(() => {
  //   axios.get('qa/questions', {
  //     product_id: ?,
  //     count: 500
  //   })
  //   .then((res) => {
  //     setQuestions(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }, []);

  return (
    <div className='qaContainer'>
      Questions & Answers
      <Search></Search>
      {/* <SearchList></SearchList> */}
    </div>
  )
}

export default QandA;