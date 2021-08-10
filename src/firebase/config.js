// import * as firebase from "firebase/app";
// import 'firebase/storage';
// import 'firebase/firestore';
import firebase from "firebase";

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyClnsVGzT2yGld8cP7NeGdqXWAyL_vZgXg",
  authDomain: "imagegallery-f8c1f.firebaseapp.com",
  projectId: "imagegallery-f8c1f",
  storageBucket: "imagegallery-f8c1f.appspot.com",
  messagingSenderId: "392017738070",
  appId: "1:392017738070:web:1b3730a6a47bc9864dbef7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore , timestamp };