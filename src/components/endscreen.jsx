import { useHistory } from "react-router-dom";

function EndScreen(props){

  console.log(props.history.location.state.data);

  let history = useHistory();

   function handlePlayAgain(){
     history.push("/");
   }
  return(
    <div className="endpage">
      <h1>Name your score is this</h1>
      <button onClick={handlePlayAgain}>Play Again</button>
      <br/>
      <button onClick={handlePlayAgain}>Exit</button>
    </div>
  );
  }
  
  
export default EndScreen;