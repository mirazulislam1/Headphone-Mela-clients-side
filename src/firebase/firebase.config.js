// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvYbSDRyPd2ahyrGI78CdpPp5A7V4UAhE",
  authDomain: "resell-products.firebaseapp.com",
  projectId: "resell-products",
  storageBucket: "resell-products.appspot.com",
  messagingSenderId: "683355526387",
  appId: "1:683355526387:web:674abe3fb26af4de4b5386"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;