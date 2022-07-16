import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcqKnd0FMXVbn9H-OFw8tdkN8gJho-Gqc",
  authDomain: "uber-next-live-86b5b.firebaseapp.com",
  projectId: "uber-next-live-86b5b",
  storageBucket: "uber-next-live-86b5b.appspot.com",
  messagingSenderId: "86972283846",
  appId: "1:86972283846:web:d76098ef93dce02e7e50c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth}