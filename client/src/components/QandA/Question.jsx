import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer';
import AddAnswer from './AddAnswer';

function Question({
  product, question, questionHandler,
}) {
  const [answers, setAnswers] = useState([]);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [moreAnswers, setMoreAnswers] = useState(false);
  const [answerCount, setAnswerCount] = useState(2);
  const [isClicked, setIsClicked] = useState(false);
  const [show, setShow] = useState(false);
  const [answersIsExpanded, setAnswersIsExpanded] = useState(false);

  const getAnswers = () => {
    axios.get('/qa/answers', {
      params: {
        question_id: question.question_id,
        count: 100,
        page: 1,
      },
    })
      .then((res) => {
        setAnswers(res.data.results);
        if (res.data.results.length < 2) {
          setAnswerCount(res.data.results.length);
        }
        if (res.data.results.length > 2) {
          setMoreAnswers(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addAnswerHandler = (data) => {
    axios.post('/qa/answers', {
      body: data.body,
      name: data.name,
      email: data.email,
      photos: data.photos,
      question_id: data.question_id,
    })
      .then(() => {
        getAnswers();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const yesHandler = () => {
    questionHandler(question.question_id);
    setIsClicked(true);
  };

  useEffect(() => {
    getAnswers();
  }, []);

  useEffect(() => {
    if (answers.length) {
      const newAnswers = [];
      for (let i = 0; i < answerCount; i += 1) {
        newAnswers.push(answers[i]);
      }
      setCurrentAnswers(newAnswers);
    }
  }, [answers]);

  // eslint-disable-next-line camelcase
  const answerHelpfulHandler = (answer_id) => {
    axios.put('/qa/answers/helpful', {
      // eslint-disable-next-line camelcase
      answer_id,
    })
      .then(() => {
        getAnswers();
      });
  };

  // eslint-disable-next-line camelcase
  const answerReportHandler = (answer_id) => {
    axios.put('/qa/answers/report', {
      // eslint-disable-next-line camelcase
      answer_id,
    })
      .then(() => {
        console.log('reported');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addAnswersExpandHandler = () => {
    const newAnswers = [];
    for (let i = 0; i < answers.length; i += 1) {
      newAnswers.push(answers[i]);
    }
    setCurrentAnswers(newAnswers);
    setAnswersIsExpanded(true);
  };

  const addAnswersCollapseHandler = () => {
    const newAnswers = [];
    for (let i = 0; i < answerCount; i += 1) {
      newAnswers.push(answers[i]);
    }
    setCurrentAnswers(newAnswers);
    setAnswersIsExpanded(false);
  };

  return (
    <div className="qa-container">
      <div className="question-container">
        <div>
          Q:
        </div>
        <div className="question">
          {question.question_body}
          <span className="question-info">
            Helpful?
            {isClicked ? <div className="regular">Yes</div> : <button type="button" onClick={yesHandler} className="astext">Yes</button>}
            (
            {question.question_helpfulness}
            )
            <div className="pole"> | </div>
            <button type="button" onClick={() => setShow(true)} className="addAnswerButton astext">Add Answer</button>
            <AddAnswer
              addAnswer={addAnswerHandler}
              product={product}
              question={question}
              show={show}
              setShow={setShow}
            />
          </span>
        </div>
      </div>
      <div className="answers" style={{ overflow: answersIsExpanded ? 'auto' : 'none' }}>
        {answers.length ? 'A:' : null}
        <div className="answer">
          {currentAnswers.map((answer) => (
            <Answer
              key={answer.answer_id}
              reportHandler={answerReportHandler}
              helpfulHandler={answerHelpfulHandler}
              answer={answer}
            />
          ))}
          {moreAnswers
            ? (
              <div>
                { answersIsExpanded
                  ? <button type="button" onClick={addAnswersCollapseHandler}>Collapse answers</button>
                  : <button type="button" onClick={addAnswersExpandHandler}>See More answers</button>}
              </div>
            )
            : null}
        </div>
      </div>
    </div>
  );
}

export default Question;
