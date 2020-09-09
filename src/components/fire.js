import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

//Firebase Config file
const firebaseConfig = {
  apiKey: "AIzaSyA88z1zW_Lz7qYkxHGsRJ61jpJurD_7IJY",
  authDomain: "whosnextperson.firebaseapp.com",
  databaseURL: "https://whosnextperson.firebaseio.com",
  projectId: "whosnextperson",
  storageBucket: "whosnextperson.appspot.com",
  messagingSenderId: "923042545452",
  appId: "1:923042545452:web:6468194f5c46f93abb7689",
  measurementId: "G-WW63EB99S0"
};

  const fire = firebase.initializeApp(firebaseConfig)
  // Initialize Firebase
  export {fire as default};
