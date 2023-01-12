// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcG7a-C3TZGbGcz4vljs8iPDLlmArBMe4",
  authDomain: "react-real-estate-app-bb537.firebaseapp.com",
  projectId: "react-real-estate-app-bb537",
  storageBucket: "react-real-estate-app-bb537.appspot.com",
  messagingSenderId: "453560977014",
  appId: "1:453560977014:web:09176dcc4bfff7ae36c157"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()