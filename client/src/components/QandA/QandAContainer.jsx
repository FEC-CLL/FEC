import React, { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import QuestionList from './QuestionList';
import AddQuestion from './AddQuestion';
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
    axios.get('qa/questions', {
      params: {
        product_id: 40347,
        page: 1,
        count: 200,
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
      .catch(() => {
        console.log('erropr');
      });
  };

  useLayoutEffect(() => {
    getProduct();
  }, []);

  useLayoutEffect(() => {
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
    console.log(data.product_id);
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
    console.log(howMany);
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
        {isLoaded ? <p>Loading...</p>
          : (
            <QuestionList
              product={product}
              questionHandler={questionHelpfulHandler}
              questions={currentQuestions}
              count={questionCount}
            />
          )}
      </div>
      <div className="qaComponent">
        <div className="buttonContainer">
          {hasMoreQuestions ? <button type="button" onClick={handleMoreAnsweredQuestions} className="qa-button">MORE ANSWERED QUESTIONS</button>
            : null}
          <button type="button" onClick={() => setShow(true)} className="qa-button imageButton">
            ADD A QUESTION
          </button>
          <AddQuestion
            addQuestion={addQuestionHandler}
            product={product}
            show={show}
            setShow={setShow}
          />
        </div>
      </div>
    </div>
  );
}

export default QandA;
