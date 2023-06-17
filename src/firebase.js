
import firebase from 'firebase/compat/app';
import  'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getDownloadURL, ref, uploadBytes, getStorage} from 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDO1Iwvmr3yzkA5QxxPdvsi6WWvCHvwZjo",
  authDomain: "newone-39300.firebaseapp.com",
  projectId: "newone-39300",
  storageBucket: "newone-39300.appspot.com",
  messagingSenderId: "621082000962",
  appId: "1:621082000962:web:5f2ba7fa1300683b03f7db",
  measurementId: "G-QFNQEL1Y6L"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, db, storage };



// const firebaseConfig = {
//   apiKey: "AIzaSyCwVEdLNAAi0MJnM8iRaTydAngzWHuToXM",
//   authDomain: "practice-ee778.firebaseapp.com",
//   projectId: "practice-ee778",
//   storageBucket: "practice-ee778.appspot.com",
//   messagingSenderId: "198796098934",
//   appId: "1:198796098934:web:935b82c8dedc22f4404e57",
//   measurementId: "G-MPNKTV78R9"
// };






