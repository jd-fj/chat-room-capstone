import React from "react";
import firebase from "../firebase";

function SignIn() {
  const signInWithGoogle = () => {
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    // consider adding user to a document Collection in Firebase called "users" here?
  };

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
