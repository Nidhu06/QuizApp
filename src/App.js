import {BrowserRouter as Router,Redirect,Switch,Route} from "react-router-dom";
import Category from "./components/loginscreen";
import EndScreen from "./components/endscreen";
import QuizScreen from "./components/quizscreen";

export default function App() {
  return (
    <div>
    <Router>
     <Switch>
          <Route exact path="/" component={Category}/>
          <Route path="/quizscreen" component={QuizScreen}/>
          <Route path="/endscreen" component={EndScreen} />
          {/*Load login screen by default */}
          <Redirect to="/" />
     </Switch>
     </Router>
    </div>
  );
}