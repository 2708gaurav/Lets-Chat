const firebaseConfig = {
    apiKey: "AIzaSyDVl7RhyoTfsJVgoUWqHWVeLQirIGCPJFM",
    authDomain: "kwitter-103b1.firebaseapp.com",
    databaseURL: "https://kwitter-103b1-default-rtdb.firebaseio.com",
    projectId: "kwitter-103b1",
    storageBucket: "kwitter-103b1.appspot.com",
    messagingSenderId: "950245376924",
    appId: "1:950245376924:web:c51825734808258355be59"
  };
  
  // Initialize Firebase
  firebase.initializeApps(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
