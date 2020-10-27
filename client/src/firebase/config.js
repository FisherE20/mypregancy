import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBtmE0Skh5M8xYAzMAl656h8MH_ifzUwkI",
  authDomain: "my-pregnancy-journal--photo.firebaseapp.com",
  databaseURL: "https://my-pregnancy-journal--photo.firebaseio.com",
  projectId: "my-pregnancy-journal--photo",
  storageBucket: "my-pregnancy-journal--photo.appspot.com",
  messagingSenderId: "15301845663",
  appId: "1:15301845663:web:77f3c8066912ac098338aa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };