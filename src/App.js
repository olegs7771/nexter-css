import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import Home from "../src/components/main/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
///
