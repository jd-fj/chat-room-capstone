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

  const

}