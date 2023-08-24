
import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYpPqBUKhZXrS6sGxoXrI6Rlo_Qkc5an4",
  authDomain: "buenos-aires-flores.firebaseapp.com",
  projectId: "buenos-aires-flores",
  storageBucket: "buenos-aires-flores.appspot.com",
  messagingSenderId: "951961442061",
  appId: "1:951961442061:web:7b833a87a6e60945558244"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

