import React from 'react';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../firebase';
import SignIn from './SignIn';
import SignOut from './SignOut';
import ChatRoom from './ChatRoom';

function App() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  return (
    <>
      <header>
        <h1>My Chat App</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </>
  );
}

export default App;
