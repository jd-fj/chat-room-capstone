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
      console.log(result.user.id);
      console.log(result.additionalUserInfo)
      console.log("newUser?: " + result.additionalUserInfo.isNewUser)
      console.log("name: " + result.additionalUserInfo.profile.name)
      console.log("email: " + result.additionalUserInfo.profile.email)
      console.log("picturte: " + result.additionalUserInfo.profile.picture)

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
