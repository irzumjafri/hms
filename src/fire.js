import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBQw13bxxgXGvAhlxMxfQiSGNAIvuHxQNw",
  authDomain: "project-hms-database.firebaseapp.com",
  projectId: "project-hms-database",
  storageBucket: "project-hms-database.appspot.com",
  messagingSenderId: "98674088411",
  appId: "1:98674088411:web:98a0c0cee83340deeceffe",
  measurementId: "G-GSKESMESSH"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;