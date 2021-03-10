import React, {useState} from 'react';
import firebase from '../firebase';
//new
import { useCollectionData } from 'react-firebase-hooks/firestore';


function ChatMessage(props) {

  // const [isLoaded, setLoading] = useState(true); 

  const auth = firebase.auth();
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'Sent' : 'Received';
  //new
  const currentUserRef = firebase.firestore().collection('users').where("uid", "==", uid)
  const [users] = useCollectionData(currentUserRef, { idField: 'id' });
  // console.log(users);

  if (users){
    const avatar = users[0].avatar;
    return (
      <>
        <div className={`message${messageClass}`}>
          <img
            src={
              avatar || 'https://api.adorable.io/avatars/23/abott@adorable.png'
            }
            alt='user'
          />
          <p>{text}</p>
        </div>
      </>
    );
  } else {
    return "adflkj";
  }
  }
  // {users &&  avatar = users[0].avatar;
  // }
  // const avatar = users[0].avatar;

  

export default ChatMessage;
