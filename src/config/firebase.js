// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy28d-aGFsg3WxDws0epc4VSviZ_-VC1M",
  authDomain: "blog-web-6037a.firebaseapp.com",
  projectId: "blog-web-6037a",
  storageBucket: "blog-web-6037a.firebasestorage.app",
  messagingSenderId: "126507428467",
  appId: "1:126507428467:web:330fb8b511cedb0d46d806"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const fireStore = getFirestore(app);

export default app;