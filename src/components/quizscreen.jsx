import { useState, useEffect } from "react";
import categoryApi from "../Helper/CategoryApi";

function QuizScreen(props) {
  // console.log(props.history.location.state.data) print category
  // console.log(categoryApi(props.history.location.state.data)) print the api

  const api = categoryApi(props.history.location.state.data);
  console.log(api);

  const [questions, setQuestions] = useState([]);
  // const [qid,setQuestionId] = useState(0)

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results);
      });
  },[]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
          setScore(score + 1);
      }

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
      } else {
          setShowScore(true);
      }
  };

  
  return questions.length > 0 ? (
    <div className="container">
      <div id="quiz" className="flex-container">
        <div className="scorebox">
          <div id="question-number" className="box">
            Question 1 of 10
            <br />
            Score:
          </div>
        </div>

        <h2
          id="question"
          dangerouslySetInnerHTML={{ __html: questions[0].question }}
        />
        <div className="choices">
          <button
            className="button-style"
          >
            {questions[0].correct_answer}
          </button>
        </div>
        <div className="choices">
          <button
            className="button-style"
          >
            {questions[0].incorrect_answers[0]}
          </button>
        </div>
        <div className="choices">
          <button
            className="button-style"
          >
            {questions[0].incorrect_answers[1]}
          </button>
        </div>
        <div className="choices">
          <button
            className="button-style"
          >
            {questions[0].incorrect_answers[2]}
          </button>
        </div>
      </div>
    </div>
      ) : (
       <h2>Loading</h2>
  );
}

export default QuizScreen;
