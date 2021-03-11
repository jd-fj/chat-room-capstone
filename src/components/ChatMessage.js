import React from 'react';
import firebase from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Col, Row } from 'react-bootstrap';



function ChatMessage(props) {

  const auth = firebase.auth();
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'Sent' : 'Received';
  const currentUserRef = firebase.firestore().collection('users').where("uid", "==", uid)
  const [users] = useCollectionData(currentUserRef, { idField: 'id' });

  if (users){
    const avatar = users[0].avatar;
    return (
      <>
        <Row>
          <Col>
            <div className={`message${messageClass}`}>
            <p>{avatar ? <img src={avatar} alt='user'/> : <img src={photoURL} alt="user"/>}
              {text}</p>
            </div>
          </Col>
        </Row>
      </>
    );
  } else {
      return <h2>Loading...</h2>;
    }
  }


  

export default ChatMessage;
