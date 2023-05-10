import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import QuestionList from './QuestionList.jsx';
import './styles.css';

// eslint-disable-next-line react/prop-types
function QandA({ product }) {
  const [search, setSearch] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState(4);
  const [isReady, setIsReady] = useState(true);
  const [isLoaded, setIsLoaded] = useState(true);

  const getProduct = () => {
    axios.get('qa/questions', {
      params: {
        product_id:40347,
        page: 1,
        count: 20
      }
    })
    .then((res) => {
      setQuestions(res.data.results);
      if (res.data.results.length < questionCount) {
        setQuestionCount(res.data.results.length);
      }
    })
    .then(() => {
      setIsReady(false);
    })
    .catch((err) => {
      console.log("erropr");
    })
  }

  useLayoutEffect(() => {
    getProduct();
  }, []);

  useLayoutEffect(() => {
    if(!isReady) {
      setIsLoaded(false);

      const newQuestions = [];
      for(var i =0; i < questionCount; i++) {
        if (questions[i].question_body.includes(search)) {
          newQuestions.push(questions[i]);
        }
      }
      setCurrentQuestions(newQuestions);
    }
  }, [isReady, questions, search])

  const questionHelpfulHandler = (question_id) => {
    axios.put('/qa/questions/helpful', {
      question_id: question_id
    })
    .then(() => {
      getProduct();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className='qaContainer'>
      Questions & Answers
      <Search filter={setSearch} />
      {isLoaded ? <p>Loading...</p> : <QuestionList product={product} questionHandler={questionHelpfulHandler} questions={currentQuestions} count={questionCount} />}
    </div>
  )
}

export default QandA;