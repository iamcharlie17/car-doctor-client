// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkcgn4Z8EvH1ZxtHzB_feSiS2H9y6V8Kw",
  authDomain: "cars-doctor-b927f.firebaseapp.com",
  projectId: "cars-doctor-b927f",
  storageBucket: "cars-doctor-b927f.appspot.com",
  messagingSenderId: "928981754170",
  appId: "1:928981754170:web:a272de03b4c58d3a193003"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;