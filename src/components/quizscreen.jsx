import { useState, useEffect } from "react";
import categoryApi from "../Helper/CategoryApi";
import Questionare from "./questionare";
import Answer from "./answer";

function QuizScreen(props) {
  // console.log(props.history.location.state.data) print category
  // console.log(categoryApi(props.history.location.state.data)) print the api

  const api = categoryApi(props.history.location.state.data);  // the api for each category
 
  const [questions, setQuestions] = useState([]); 
  const [index,setIndex] = useState(0) ;
  
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results);
      });
  },[]);

  function nextQuestion(){
      setIndex(index + 1);
  }

  const q = questions.length > 0 ? questions[index].question : null;
  const a = questions.length > 0 ? `${questions[index].incorrect_answers.join('|')} | ${questions[index].correct_answer}`.split('|') : [];
  
  return questions.length > 0 ? (
    <div className="container">
      <div id="quiz" className="flex-container">
        <div className="scorebox">
          <div id="question-number" className="box">
            Question {index + 1} of 10
            <br />
            Score:
          </div>
        </div>

      {/*  <h2
          id="question"
          dangerouslySetInnerHTML={{ __html: questions[index].question }}
      /> */}

        <Questionare question={q}/>   
        <Answer answers= {a}/> 
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
