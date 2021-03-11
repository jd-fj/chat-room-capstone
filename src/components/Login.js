import React from 'react';
import './App.css';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../firebase';
import SignIn from './SignIn';
import SignOut from './SignOut';

function Login() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  return (
    <>
      <section>{user ? <SignOut /> : <SignIn />}</section>
    </>
  );
}

export default Login;