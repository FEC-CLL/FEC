import React, {useState, useEffect} from 'react';
import Answer from './Answer.jsx'
import axios from 'axios';
import AddAnswer from './AddAnswer.jsx';

const Question = ({addAnswer, product, question, questionHandler}) => {
  const [answers, setAnswers] = useState([]);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [answerCount, setAnswerCount] = useState(2);
  const [isClicked, setIsClicked] = useState(false);
  const [show, setShow] = useState(false);

  const getAnswers = () => {
    axios.get('/qa/answers', {
      params: {
        question_id: question.question_id,
        count: 2,
        page: 1
      }
    })
    .then((res) => {
      setAnswers(res.data.results);
      if (res.data.results.length < answerCount) {
        setAnswerCount(res.data.results.length);
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const addAnswerHandler = (data) => {
    axios.post('/qa/answers', {
      body: data.body,
      name: data.name,
      email: data.email,
      question_id: data.question_id
    })
    .then(() => {
      getAnswers();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const yesHandler = () => {
    questionHandler(question.question_id);
    setIsClicked(true);
  }

  useEffect(() => {
    getAnswers();
  }, [])

  useEffect(() => {
    const newAnswers = [];
    for (var i =0; i < answerCount; i++) {
      newAnswers.push(answers[i]);
    }
    setCurrentAnswers(newAnswers);
  }, [answers])

  const answerHelpfulHandler = (answer_id) => {
    axios.put('/qa/answers/helpful', {
      answer_id: answer_id
    })
    .then(() => {
      getAnswers();
    })
  }

  const answerReportHandler = (answer_id) => {
    axios.put('/qa/answers/report', {
      answer_id: answer_id
    })
    .then(() => {
      getAnswers();
    })
  }

  return (
    <div>
      <div className="question">
          Q: {question.question_body}
          <span className="questionHelp">
            Helpful?
            {isClicked ? <div>Yes</div> : <button onClick={yesHandler} className="astext">Yes</button>}

            ({question.question_helpfulness})
            <div className="pole"> | </div>
            <button onClick={() => setShow(true)} className="astext">Add Answer</button>
            <AddAnswer addAnswer={addAnswerHandler} product={product} question={question} show={show} setShow={setShow}/>
          </span>
      </div>
      <div className="answer">
        {answers.map((answer) => {
          return <Answer reportHandler={answerReportHandler} helpfulHandler={answerHelpfulHandler} answer={answer} />
        })}
      </div>
    </div>
  );
}

export default Question;