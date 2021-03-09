import React from "react";
import firebase from "../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';

function SignIn() {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const query = firestore.collection('users');
  const [users] = useCollectionData(query);
  

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
    .then(function(result){
      const user = result.user;
      const alreadyExists = users.some(u => u.uid.includes(result.user.uid)); //returns true if already existing

      if (alreadyExists === false){
        return firestore.collection("users").add({
          displayName: user.displayName,
          email: user.email,
          avatar: user.photoURL,
          uid: user.uid
        });
      }
    });
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p>Sign in to go online and chat with peeps</p>
    </>
  );
}

export default SignIn;
