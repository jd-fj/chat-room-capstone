import React from 'react';
import './App.css';
import 'firebase/auth';
import 'firebase/analytics';
import Navigation from './Navigation';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Container} from 'react-bootstrap';
import Homepage from './Homepage';
import Account from './Account';

function App() {
  return (
    <>
      <Router>
        <Navigation/>
          <Container>
            <Switch>
              <Route exact path="/">
                <Homepage/>
              </Route>
              <Route path='/Account'>
                <Account/>
              </Route>
            </Switch>
          </Container>
      </Router>
    </>
  );
}

export default App;