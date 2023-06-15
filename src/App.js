import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
// import Login from './pages/login';
import LoginV2 from './pages/loginV2';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/">
            {/* <Login /> */}
            <LoginV2 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
