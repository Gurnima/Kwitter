
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAbllgEnKqurf4niUl8Lzj2_sxorpz0OBI",
      authDomain: "kwitteru-u.firebaseapp.com",
      databaseURL: "https://kwitteru-u-default-rtdb.firebaseio.com",
      projectId: "kwitteru-u",
      storageBucket: "kwitteru-u.appspot.com",
      messagingSenderId: "764101285941",
      appId: "1:764101285941:web:04d854af7d4388e357397c"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
