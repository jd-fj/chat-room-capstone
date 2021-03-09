import React from 'react';

import './App.css';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../firebase';
// import SignIn from './SignIn';
import SignOut from './SignOut';
import ChatRoom from './ChatRoom';
import Login from './Login';


function Homepage() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  return (
    <>
      <section>{user ? <> <SignOut/> <ChatRoom/> </> : <Login/>}</section>

    </>
  );
}

export default Homepage;

