import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbXLdndAiaJ_jukPyNo3eFReVXZ0A-Hs8",
  authDomain: "my-project-f5245.firebaseapp.com",
  databaseURL: "https://my-project-f5245-default-rtdb.firebaseio.com",
  projectId: "my-project-f5245",
  storageBucket: "my-project-f5245.appspot.com",
  messagingSenderId: "656599859191",
  appId: "1:656599859191:web:ede28e31f1943c4077b8f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
