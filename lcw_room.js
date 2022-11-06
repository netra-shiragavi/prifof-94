const firebaseConfig = {
      apiKey: "AIzaSyAJHmXTuUQwOl_1dZU2RWk_wXgRnfJM2Ws",
      authDomain: "netra-ee113.firebaseapp.com",
      databaseURL: "https://netra-ee113.firebaseio.com",
      projectId: "netra-ee113",
      storageBucket: "netra-ee113.appspot.com",
      messagingSenderId: "94425444721",
      appId: "1:94425444721:web:50c052c1759a754a0486d0",
      measurementId: "G-M76EX003Q8"
    };

    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
