import React, {useState} from 'react';
import firebase from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Col, Row } from 'react-bootstrap';



function ChatMessage(props) {
  // const [isLoaded, setLoading] = useState(true); 
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
              <img
                src={avatar}
                alt='user'
              />
              <p>{text}</p>
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
