import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import QuestionList from './QuestionList';
import Buttons from './Buttons';
import './styles.css';

function QandA({ product }) {
  const [search, setSearch] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState(2);
  const [isReady, setIsReady] = useState(true);
  const [isLoaded, setIsLoaded] = useState(true);
  const [show, setShow] = useState(false);
  const [hasMoreQuestions, setHasMoreQuestions] = useState(false);

  const getProduct = () => {
    if (product.id) {
      axios.get('qa/questions', {
        params: {
          product_id: product.id,
          page: 1,
          count: 100, // make this dynamic
        },
      })
        .then((res) => {
          setQuestions(res.data.results);
          if (res.data.results.length < questionCount) {
            setQuestionCount(res.data.results.length);
          }
          if (res.data.results.length > 2) {
            setHasMoreQuestions(true);
          }
        })
        .then(() => {
          setIsReady(false);
        })
        .catch((err) => {
          console.log(err);
          console.log('erropr');
        });
    }
  };

  useEffect(() => {
    if (product.id) {
      getProduct();
    }
  }, [product.id]);

  useEffect(() => {
    if (!isReady) {
      setIsLoaded(false);

      const newQuestions = [];
      for (let i = 0; i < questionCount; i += 1) {
        if (questions[i].question_body.toLowerCase().includes(search.toLowerCase())) {
          newQuestions.push(questions[i]);
        }
      }
      setCurrentQuestions(newQuestions);
    }
  }, [isReady, questions, search, questionCount]);

  // eslint-disable-next-line camelcase
  const questionHelpfulHandler = (question_id) => {
    axios.put('/qa/questions/helpful', {
      // eslint-disable-next-line camelcase
      question_id,
    })
      .then(() => {
        getProduct();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addQuestionHandler = (data) => {
    axios.post('/qa/questions', {
      body: data.body,
      name: data.name,
      email: data.email,
      product_id: data.product_id,
    })
      .then(() => {
        getProduct();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleMoreAnsweredQuestions = () => {
    const howMany = questions.length - questionCount;
    switch (howMany) {
      case 0:
        setHasMoreQuestions(false);
        break;
      case 1:
        setQuestionCount(questionCount + 1);
        setHasMoreQuestions(false);
        break;
      default:
        setQuestionCount(questionCount + 2);
    }
  };

  return (
    <div className="qaContainer container">
      <div className="qaComponent">
        QUESTIONS & ANSWERS
      </div>
      <div className="qaComponent">
        <Search filter={setSearch} />
      </div>
      <div className="qaComponent">
        <QuestionList
          isLoaded={isLoaded}
          questions={currentQuestions}
          product={product}
          questionHandler={questionHelpfulHandler}
        />
      </div>
      <div className="qaComponent">
        <Buttons
          hasMoreQuestions={hasMoreQuestions}
          handleMoreAnsweredQuestions={handleMoreAnsweredQuestions}
          setShow={setShow}
          addQuestionHandler={addQuestionHandler}
          product={product}
          show={show}
        />
      </div>
    </div>
  );
}

export default QandA;
