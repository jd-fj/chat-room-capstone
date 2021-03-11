import React, {useState, useHistory} from 'react';
import firebase from '../firebase';
import 'firebase/firestore';
import 'firebase/storage';
import { useCollectionData } from 'react-firebase-hooks/firestore';


function Upload() {
  const [image, setImage] = useState(null);
  const [isLoaded, setLoading] = useState(true);
  const currentUser = firebase.auth().currentUser;
  const firestore = firebase.firestore();
  const usersRef = firestore.collection('users').where("uid", "==", currentUser.uid)
  const [users] = useCollectionData(usersRef, { idField: 'id' });

  const handleChange = e => {
    if (e.target.files[0]){
      setImage(e.target.files[0]);
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
    const imageRef = firebase.storage().ref(`${currentUser.uid}/avatar/`).child(`${image.name}`);
    const receivedUrl = await imageRef.getDownloadURL().then(setLoading(false));
    const propertyToUpdate = { avatar: receivedUrl};
    firestore.collection('users').doc(users[0].id).update(propertyToUpdate);
  }

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