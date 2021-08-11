import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyAU5fQatPrEMTnsSny7oeI3lT-AOx2TU4o",
    authDomain: "disney-b43c8.firebaseapp.com",
    projectId: "disney-b43c8",
    storageBucket: "disney-b43c8.appspot.com",
    messagingSenderId: "733606942981",
    appId: "1:733606942981:web:992401b486389d5a8cbf6c"
  };
  // Initialize Firebase

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;