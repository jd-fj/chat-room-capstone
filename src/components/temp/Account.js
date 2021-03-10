// import React, { } from 'react';
// import firebase from '../firebase';
// import 'firebase/storage';
// // import { useCollectionData } from 'react-firebase-hooks/firestore';
// // import ChatMessage from './ChatMessage';
// // import {Row, Col} from 'react-bootstrap';

// function Account() {
//   // const storageRef = firebase.storage().ref();
//   // const uploadsRef = storageRef.child('uploads')

//   var fileButton = document.getElementById('fileButton');
//   var updatedURL;


// fileButton.addEventListener('change', function(e) {
//   var file = e.target.files[0];
//   const storageRef = firebase.storage().ref('profilePhotos/ ' + file.name);
//   firebase.storage().ref('profilePhotos' + file.name);

//   var task = storageRef.put(file) 

//   task.on('state_changed',
//     function progress(snapshot) {

//     },
//     function error(err) {
//     },

//     function complete() {
//       storageRef.getDownloadURL().then(function(url) {
//         console.log(url);
//         const updatedURL = url;
//       })
//       .catch(function(error){
//         console.log(error)
//       });
//       const currentUser = firebase.auth().currentUser;
//       currentUser.updateProfile({
//         photoURL: updatedURL
//       })
//     }
//     );
// })

//   return (
//     <>
//       <h1>Account</h1>
//       fileButton

//     </>
//   );
// }

// export default Account;


// // i suspect i'll want to include this here: 

// // // Update a user's profile: from https://firebase.google.com/docs/auth/web/manage-users
// // var user = firebase.auth().currentUser;

// // user.updateProfile({
// //   displayName: "Jane Q. User",
// //   photoURL: "https://example.com/jane-q-user/profile.jpg"
// // }).then(function() {
// //   // Update successful.
// // }).catch(function(error) {b
// //   // An error happened.
// // });