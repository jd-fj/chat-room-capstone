import { useFirestore, isLoaded } from "react-redux-firebase";
import styled from "styled-components";

const FriendRequests = (props) => {
  const firestore = useFirestore();
  const { currentUser, pendingRequests} = props; 

  const usersRef = firestore.collection('users');

  const friendsRef = firestore
    .collection('users')
    .doc(currentUser.uid)
    .collection('friends');

  const pendingRequestsRef = firestore
    .collection('users')
    .doc(currentUser.uid)
    .collection("pendingRequests");

  const acceptRequest = (userEmail, id) => {
    alert('accepted');
    friendsRef.doc(userEmail).set({
      email: userEmail,
      id: id,
    });
    usersRef.doc(id).collection("friends").doc(currentUser.email).set({
      email: currentUser.email,
      id: currentUser.uid,
    });
    pendingRequestsRef
      .doc(userEmail)
      .delete()
      .then(()=>{
        console.log("deleted from requests");
      });
    usersRef
      .doc(id)
      .collection("sentRequests")
      .doc(currentUser.email)
      .delete()
      .then(() => {
        console.log('successfully deleted');
      });
  }

}