import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDtMOZAxTd6XdGyYOilCaJt5CsKYnXvFEo",
    authDomain: "whatsapp-clone-9d9eb.firebaseapp.com",
    projectId: "whatsapp-clone-9d9eb",
    storageBucket: "whatsapp-clone-9d9eb.appspot.com",
    messagingSenderId: "550612015863",
    appId: "1:550612015863:web:348ed78eef7b8bfe66d1f2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;

  