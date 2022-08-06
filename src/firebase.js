import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTHDOMAIN}`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGEBUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MEASURMENT_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_API_ID}`,
  measurementId: `${process.env.REACT_APP_FIREBASE_MEASSAGESENDING_ID}`
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
 
const auth = firebase.auth();

// google authantication 
const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle =(e) =>{
  e.preventDefault();
  auth.signInWithPopup(googleProvider).then((res)=>{
    console.log(res.user);
  }).catch((error)=>{
    console.log(error.message);
  })
}
 
export { auth, signInWithGoogle };
export default db;
