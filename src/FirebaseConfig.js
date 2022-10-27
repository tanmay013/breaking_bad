// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh_35aHkFpN9frA5AfjM4Re2v6ffvz7mQ",
  authDomain: "breakingbad-web.firebaseapp.com",
  projectId: "breakingbad-web",
  storageBucket: "breakingbad-web.appspot.com",
  messagingSenderId: "740052120099",
  appId: "1:740052120099:web:508a274493f03fdd1a7796",
  measurementId: "G-PWGBZ4XTXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);