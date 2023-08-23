
import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1PrykoW-7O4H-1C2OeXL_MA1dewCGv-Y",
  authDomain: "segunda-floreria.firebaseapp.com",
  projectId: "segunda-floreria",
  storageBucket: "segunda-floreria.appspot.com",
  messagingSenderId: "1051055806233",
  appId: "1:1051055806233:web:f7327cf6705c370f415788",
  measurementId: "G-QCW9BSS89T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

