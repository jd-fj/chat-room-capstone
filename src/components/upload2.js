

var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');


fileButton.addEventListener('change', function(e) {
  var file = e.target.files[0];
  firebase.storage().ref('folder_name' + file.name);

  var task = storageRef.put(file) 

  task.on('state_changed',
    function progress() {
      var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploader.value = percentage;
    },
    function error(err) {
    },

    function complete() {
    }
    );
})

 