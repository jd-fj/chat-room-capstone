import React from 'react';
import './App.css';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../firebase';
import SignOut from './SignOut';
import ChatRoom from './ChatRoom';
import Login from './Login';
import Spinner from '../img/KATCHAT.svg'


function Homepage() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  return (
    <>
      <section>{!user ? <img src={Spinner} className="App-logo" alt="logo"/> : null}</section>
      <section>{user ? <> <SignOut/> <ChatRoom/> </> : <Login/> }</section>

    </>
  );
}

export default Homepage;

