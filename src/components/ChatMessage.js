import React from 'react';
import firebase from '../firebase';

function ChatMessage(props) {
  const auth = firebase.auth();
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'
          }
          alt='of user'
        />
        <p>{text}</p>
      </div>
    </>
  );
}

export default ChatMessage;
