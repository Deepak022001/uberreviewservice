import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDE9nHZanwPu_T61BMpMX5G5o21xgGKSPA",
  authDomain: "netflix-dd4b7.firebaseapp.com",
  projectId: "netflix-dd4b7",
  storageBucket: "netflix-dd4b7.appspot.com",
  messagingSenderId: "409696827791",
  appId: "1:409696827791:web:0322e18a6e2f00bb5773fa",
  measurementId: "G-CD96FTVEBB"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
