import firebase from 'firebase';

// add SDK Firebase

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMnVWouoRvtU_6tJ4GpE00g-d6e6bhl6w",
  authDomain: "project-67-20d86.firebaseapp.com",
  projectId: "project-67-20d86",
  storageBucket: "project-67-20d86.appspot.com",
  messagingSenderId: "327519521685",
  appId: "1:327519521685:web:9425b2874502d76e7a849c"
};

// Initialize Firebase

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();