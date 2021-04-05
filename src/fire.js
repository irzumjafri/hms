import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA_bcOWa8iLui3QM4G1L8AarYKISVq8jwM",
    authDomain: "hunehar-management-system.firebaseapp.com",
    projectId: "hunehar-management-system",
    storageBucket: "hunehar-management-system.appspot.com",
    messagingSenderId: "405857121024",
    appId: "1:405857121024:web:a6a4c01ab729c14795b9e5",
    measurementId: "G-N38Z42F2K8"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;