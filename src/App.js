import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Main from "./components/Main";

import { Container } from "./styles";

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/earn-money">
            <Main />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
