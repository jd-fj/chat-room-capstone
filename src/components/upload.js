
//get elements
var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');

//listen for file selection
fileButton.addEventListener('change', function(e) {
  //get file
  var file = e.target.files[0];

  //create a storage ref (.ref('folderName/fileName))
  firebase.storage().ref('folder_name' + file.name);

  //upload file
  //put method uploads file to firebase storage, it returns an upload task, using the task we can subscribe to when any state changes happens. 
  var task = storageRef.put(file) 

  //update progress
  //.on method allows what event. Three types of state changes to listen to. these state changes are represented by functions.  
  task.on('state_changed',

  //notify me of upload progress. Each time there's an update, i'll get a callback with the snapshot of the progress state
  function progress() {
    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    uploader.value = percentage;
  },

  //notify me of errors:
  function error(err) {

  },

  function complete() {

  }
  
  );
})

 