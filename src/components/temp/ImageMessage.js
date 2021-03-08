import React from 'react';
import firebase from '../../firebase';

function ImageMessage(props) {
  const auth = firebase.auth();
  const { image, uid, photoURL } = props.image;
  const messageClass = uid === auth.currentUser.uid ? 'Sent' : 'Received';

  return (
    <>
      <div className={`image${messageClass}`}>
        <img
          src={
            photoURL
          }
          alt='user'
        />
        <p>{image}</p>
      </div>
    </>
  );
}

export default ImageMessage;
