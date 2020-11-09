import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBXJ2fOjgh1FPuHibL6NyKy0SPSqLbGN6Q",
    authDomain: "clone-1fa50.firebaseapp.com",
    databaseURL: "https://clone-1fa50.firebaseio.com",
    projectId: "clone-1fa50",
    storageBucket: "clone-1fa50.appspot.com",
    messagingSenderId: "300190801078",
    appId: "1:300190801078:web:1bf9419c1567d970f51a17"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const db = firebaseApp.firestore();

  export {auth, googleProvider};

  export default db;