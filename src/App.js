import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import Main from "../src/components/main/Main";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
