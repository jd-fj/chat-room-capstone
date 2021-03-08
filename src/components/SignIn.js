import React from "react";
import firebase from "../firebase";

function SignIn() {
  const signInWithGoogle = () => {
    const auth = firebase.auth();
    const currentUser = auth.currentUser;
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    // consider adding user to a document Collection in Firebase called "users" here?
   
    const firestore = firebase.firestore();
    const usersRef = firestore.collection('users');
    
    usersRef.doc(currentUser).set({
      userName: currentUser,
      friends: [],
      pending: []
  })

  // const sendMessage = async (e) => {
  //   e.preventDefault();

  //   const { uid, photoURL } = auth.currentUser;

  //   await messagesRef.add({
  //     text: formValue,
  //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //     uid,
  //     photoURL,
  //   });

  //   setFormValue('');
  //   dummy.current.scrollIntoView({ behavior: 'smooth' });
  // };

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
