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
    provider.addScope('profile');
    provider.addScope('email');
    

    auth.signInWithPopup(provider)
    .then(function(result){
      // console.log(result)

      // console.log(result.additionalUserInfo)
      // console.log("newUser?: " + result.additionalUserInfo.isNewUser)
      // console.log("name: " + result.additionalUserInfo.profile.name)
      // console.log("email: " + result.additionalUserInfo.profile.email)
      // console.log("picturte: " + result.additionalUserInfo.profile.picture)
      const user = result.user;
      const userProfile = result.additionalUserInfo.profile;
      const isNewUser = result.additionalUserInfo.isNewUser;

      console.log(user);
      console.log("user.id: " + result.user.uid);
      console.log("user.displayName: " + result.user.displayName);
      console.log("user.email: " + result.user.email);
      const userCollection = firestore.collection('users')
      console.log(userCollection);
      console.log(users)
      console.log(users.some(i => i.uid.includes(result.user.uid)))

      
      
      // if (isNewUser !== false){
        return firestore.collection("users").add({
          displayName: userProfile.name,
          email: userProfile.email,
          avatar: userProfile.picture,
          uid: user.uid
        })

      // }

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
