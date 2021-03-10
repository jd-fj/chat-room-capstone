import React, {useState, useHistory} from 'react';
import firebase from '../firebase';
import 'firebase/firestore';
import 'firebase/storage';
import { useCollectionData } from 'react-firebase-hooks/firestore';


function Upload() {
  const [image, setImage] = useState(null);
  const [isLoaded, setLoading] = useState(true); 
  // const history = useHistory();
  const currentUser = firebase.auth().currentUser;
  const firestore = firebase.firestore();
  
  const auth = firebase.auth();
  const currentUserRef = firestore.collection('users').where("uid", "==", currentUser.uid)
  const [users] = useCollectionData(currentUserRef, { idField: 'id' });
  // const idMaybe = currentUserRef.id;
  // const firestore = firebase.firestore();

  const handleChange = e => {
    if (e.target.files[0]){
      setImage(e.target.files[0])
      console.log(users[0].id);
    }
  }

  async function uploadPhoto(event) {
    event.preventDefault();
    const imageRef = firebase.storage().ref(`${currentUser.uid}/avatar/`).child(`${image.name}`);
    await imageRef.put(image);
    return setLoading(false);
  }

  async function setNewPhoto(event) {
    event.preventDefault();
    const currentUserID = auth.currentUser.uid;
    const imageRef = firebase.storage().ref(`${currentUser.uid}/avatar/`).child(`${image.name}`);
    const receivedUrl = await imageRef.getDownloadURL().then(setLoading(false));
    const propertyToUpdate = { avatar: receivedUrl};
    // console.log(users.id);
    firestore.collection('users').doc(users[0].id).update(propertyToUpdate);
    // currentUserRef.update(propertyToUpdate);

    // const setAvatarRef = firestore.collection('users')
    // setAvatarRef.doc(`${currentUser.uid}`).update({
    //       avatar: receivedUrl
    //     })
    console.log(currentUser.avatar);
    
        // console.log('REceiveth url')
        // console.log(receivedUrl)
  }

  // firestore.collection("users").add({
  //   displayName: user.displayName,
  //   email: user.email,
  //   avatar: user.photoURL,
  //   uid: user.uid
  // });


  return (
    <>
      <h1>upload</h1>
      <div className="container" style={{width: '48rem'}}>
        <form onSubmit={setNewPhoto}>
      
          <div className="mb-3">
            <label name="image" className="form-label">Photo</label>
            <input className="form-control" type="file" name="image" onChange={handleChange} />
          </div>
          {isLoaded ? <button variant="success" onClick={uploadPhoto}>Pick New Avatar</button> : <button variant="success" type="submit">Set New Avatar</button>}
        </form>
      </div>
    </>
  )

}

export default Upload;

        // name: event.target.name.value,
    //     email: event.target.email.value,
    //     section1: getItemsFromTextArea(event.target.section1.value),
    //     section2: getItemsFromTextArea(event.target.section2.value),
    //     section3: event.target.section3.value,
    //     imgURL: receivedUrl,
    //     userId: auth.currentUser.uid