import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAqYjJnsYHu17cyGTvIU896Xas5z6odlSs",
    authDomain: "disney-plus-clone-67d3e.firebaseapp.com",
    projectId: "disney-plus-clone-67d3e",
    storageBucket: "disney-plus-clone-67d3e.appspot.com",
    messagingSenderId: "302081511487",
    appId: "1:302081511487:web:9496f8d4f3f9649b54288a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
