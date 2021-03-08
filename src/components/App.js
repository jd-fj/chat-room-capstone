import React from 'react';
import './App.css';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../firebase';
import SignIn from './SignIn';
import SignOut from './SignOut';
import ChatRoom from './ChatRoom';
import Login from './Login';
// import Navigation from './Navbar'



function App() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  return (
    <>
      {/* <header>
        <h1>My Chat App</h1>
        <SignOut />
      </header>*/}
      {/* <SignIn/>
      <SignOut/>
      <ChatRoom/> */}
      <section>{user ? <> <SignOut/> <ChatRoom /> </> : <Login/>}</section> 
      
    </>
  );
}

export default App;