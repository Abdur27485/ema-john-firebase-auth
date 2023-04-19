// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3zRliyUSwgmcXG2K4okwbjJR6UqJgKrI",
  authDomain: "ema-john-firebase-auth-22ea6.firebaseapp.com",
  projectId: "ema-john-firebase-auth-22ea6",
  storageBucket: "ema-john-firebase-auth-22ea6.appspot.com",
  messagingSenderId: "353058532714",
  appId: "1:353058532714:web:d4f50293dfd625016cc913"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;