import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDIit-AFKytuo8dVZFd6w1QtjDwxi3GaRE",
    authDomain: "linkedin-clone-d9ef4.firebaseapp.com",
    projectId: "linkedin-clone-d9ef4",
    storageBucket: "linkedin-clone-d9ef4.appspot.com",
    messagingSenderId: "814772345865",
    appId: "1:814772345865:web:fcf1ebca3f5be990bfecd8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth}