// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBain9FOUOhBbY6MlBkf9GWkEyhukM8zA",
  authDomain: "employee-crud-39d26.firebaseapp.com",
  projectId: "employee-crud-39d26",
  storageBucket: "employee-crud-39d26.appspot.com",
  messagingSenderId: "851329503278",
  appId: "1:851329503278:web:839fce8e325b2fddaccfbf",
  measurementId: "G-KX96Q2JYGM"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const storage = getStorage(app);

