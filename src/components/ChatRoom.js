import React, { useRef, useState } from 'react';
import firebase from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';

function ChatRoom() {
  const dummy = useRef();
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main className="chatRoom">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      {/* <div class='inputControl'> */}
        <form onSubmit={sendMessage}>
          <input
            className='inputControl'
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder='text input'
          />

          <button className="sendButton" type='submit' disabled={!formValue}>
            sEnd
          </button>
          
        </form>

        <div>
          
        </div>
      {/* </div> */}
    </>
  );
}

export default ChatRoom;
