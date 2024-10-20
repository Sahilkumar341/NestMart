import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAieO17l_EuF0a2wlp5syqfuZ-apod1MUc",
  authDomain: "ecommerce-4cba7.firebaseapp.com",
  projectId: "ecommerce-4cba7",
  storageBucket: "ecommerce-4cba7.appspot.com",
  messagingSenderId: "1025749420405",
  appId: "1:1025749420405:web:819235b36b099c5e75ab3c",
  measurementId: "G-1T5GCRDS4D"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);

