import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./Pages/Search";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/Search' component={Search}>
            xx
          </Route>
          <Route exact path='/' component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
