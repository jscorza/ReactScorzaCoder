// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTJccHP_2i6-Na1-FuNBjurK_B6GBCgNI",
  authDomain: "react-coder-611cd.firebaseapp.com",
  projectId: "react-coder-611cd",
  storageBucket: "react-coder-611cd.appspot.com",
  messagingSenderId: "59278723275",
  appId: "1:59278723275:web:8738fc0909273a8f95334e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)