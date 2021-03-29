import { useState, useEffect } from "react";
import categoryApi from "../Helper/CategoryApi";
import {shuffle} from "../Helper/Shuffle";
import Questionare from "./questionare";
import Answer from "./answer";

function QuizScreen(props) {
  
  const api = categoryApi(props.history.location.state.data);  // the api for each category
  const username = props.history.location.state.names;

 
  const [questions, setQuestions] = useState([]); 
  const [index,setIndex] = useState(0) ;
  const [score,setScore] = useState(0) ;

  
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results);
      });
  },[]);

  
  const q = questions.length > 0 ? questions[index].question : null;
  const a = questions.length > 0 ? shuffle(`${questions[index].incorrect_answers.join('|')}|${questions[index].correct_answer}`.split('|')) : [];

  const nextQuestion = () =>
    { 
      setIndex(index + 1);
    }
    

const getScore = () => { setScore( score + 10) }


  function onAnswer(e){
    const selected = e.target.innerHTML;
    // console.log(questions[index].correct_answer)
    const val = selected.trim() === questions[index].correct_answer  ?  getScore() : {score}  ;
  }

  return questions.length > 0 ? (
    <div className="container">
      <div id="quiz" className="flex-container">
        <div className="scorebox">
          <div id="question-number" className="box">
            Question {index + 1} of 10
            <br />
            Score: {score}
          </div>
        </div>

        <Questionare question={q}/>   
        <Answer answers= {a}  onAnswer={onAnswer}/> 
        <div className="choices">
          <button
            className="next-button"
            onClick={nextQuestion}
          >
            Next 
          </button>
        </div>
      </div>
    </div>
      ) : (
       <h2>Loading</h2>
  );
}

export default QuizScreen;
export {username} ;
