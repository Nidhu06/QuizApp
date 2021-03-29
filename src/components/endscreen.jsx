import { useHistory } from "react-router-dom";
import username from "./loginscreen"


function EndScreen(props){

 
  let history = useHistory();

   function handlePlayAgain(props){
     history.push("/");
   }
  return(
    <div className="endpage">
      <h1> {username} your score is 

       </h1>
      <button onClick={handlePlayAgain}>Play Again</button>
      <br/>
      <button onClick={handlePlayAgain}>Exit</button>
    </div>
  );
  }
  
  
export default EndScreen;