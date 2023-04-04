// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-MUt21Eg_3Z9TlMWEa_z7ThipumFlBQc",
  authDomain: "adhikar-667d1.firebaseapp.com",
  projectId: "adhikar-667d1",
  storageBucket: "adhikar-667d1.appspot.com",
  messagingSenderId: "341592257763",
  appId: "1:341592257763:web:57ee76f22ccc73d9d101d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);