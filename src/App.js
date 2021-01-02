import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./Pages/SearchPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/Search' component={SearchPage}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
