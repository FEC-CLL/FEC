import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer';
import AddAnswer from './AddAnswer';

function Question({
  product, question, questionHandler, reportHandler,
}) {
  const [answers, setAnswers] = useState([]);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [moreAnswers, setMoreAnswers] = useState(false);
  const [answerCount, setAnswerCount] = useState(2);
  const [isClicked, setIsClicked] = useState(false);
  const [show, setShow] = useState(false);
  const [answersIsExpanded, setAnswersIsExpanded] = useState(false);
  const [reportClicked, setReportClicked] = useState(false);

  const getAnswers = () => {
    axios.get('/qa/answers', {
      params: {
        question_id: question.question_id,
        count: 100,
        page: 1,
      },
    })
      .then((res) => {
        // sort newAnswers by seller
        res.data.results.sort((a, b) => {
          if (a.answerer_name.toLowerCase() === 'seller' && b.answerer_name.toLowerCase() !== 'seller') {
            return -1;
          }
          if (a.answerer_name.toLowerCase() !== 'seller' && b.answerer_name.toLowerCase() === 'seller') {
            return 1;
          }
          return 0;
        });
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

  const reportingHandler = () => {
    reportHandler(question.question_id);
    setReportClicked(true);
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
            <div className="pole"> | </div>
            {reportClicked ? <div>Reported</div> : <button type="button" onClick={reportingHandler} className="astext">Report</button>}
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
                  ? <button type="button" className="toggle-answers-button" onClick={addAnswersCollapseHandler}>Collapse Answers</button>
                  : <button type="button" className="toggle-answers-button" onClick={addAnswersExpandHandler}>See More Answers</button>}
              </div>
            )
            : null}
        </div>
      </div>
    </div>
  );
}

export default Question;
