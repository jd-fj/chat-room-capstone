import React, {useState, useHistory} from 'react';
import firebase from '../firebase';
import 'firebase/firestore';
import 'firebase/storage';

function Upload() {
  const [image, setImage] = useState(null);
  const [isLoaded, setLoading] = useState(true); 
  // const history = useHistory();
  const currentUser = firebase.auth().currentUser;
  const firestore = firebase.firestore();

  // const currentUserRef = firestore.collection('users').doc(auth.currentUser.uid)
  // const auth = firebase.auth();
  // const firestore = firebase.firestore();

  const handleChange = e => {
    if (e.target.files[0]){
      setImage(e.target.files[0])
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
    // return currentUserRef.update({
    //       avatar: receivedUrl
    //     })
        console.log('REceiveth url')
        console.log(receivedUrl)
    // }
    // );
    // history.push("/Profile")
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
          {isLoaded ? <button variant="success" onClick={uploadPhoto}>Begin Upload</button> : <button variant="success" type="submit">Complete</button>}
        </form>
      </div>
    </>
  )

}

export default Upload;

        // title: event.target.title.value,
    //     author: event.target.author.value,
    //     ingredients: getItemsFromTextArea(event.target.ingredients.value),
    //     instructions: getItemsFromTextArea(event.target.instructions.value),
    //     notes: event.target.notes.value,
    //     imgURL: receivedUrl,
    //     userId: auth.currentUser.uid