import React from "react";
import firebase from "../firebase";

function SignIn() {

  const signInWithGoogle = () => {
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    auth.signInWithPopup(provider)
    .then(function(result){
      console.log(result)
      // {user: Dm, credential: Gg, additionalUserInfo: mg, operationType: "signIn"}
      console.log(result.user);
      console.log(result.additionalUserInfo)
      // console.log(result.additionalUserInfo.profile)
      // console.log("email: " + result.additionalUserInfo.profile.email)
      // console.log("NAME: " + result.additionalUserInfo.profile.name)

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
