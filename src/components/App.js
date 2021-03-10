import React from 'react';
import './App.css';
import 'firebase/auth';
import 'firebase/analytics';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import firebase from '../firebase';
// import SignIn from './SignIn';
// import SignOut from './SignOut';
// import ChatRoom from './ChatRoom';
// import Login from './Login';
import Navigation from './Navigation';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Container} from 'react-bootstrap';
import Homepage from './Homepage';
import Account2 from './Account2';



function App() {
  // const auth = firebase.auth();
  // const [user] = useAuthState(auth);

  return (
    <>
      {/* <header>
        <h1>My Chat App</h1>
        <SignOut />
      </header>*/}
      
      {/* <SignIn/>
      <SignOut/>
      <ChatRoom/> */}


      <Router>
        <Navigation/>
          <Container>
            <Switch>
              <Route exact path="/ProjName">
                <Homepage/>
              </Route>
              <Route path='/ChatRoom'>
                <Homepage/>
              </Route>
              <Route>
                <Account2/>
              </Route>
            </Switch>
          </Container>
      </Router>

      {/* <section>{user ? <> <SignOut/> <ChatRoom/> </> : <Login/>}</section>  */}
      
    </>
  );
}

export default App;