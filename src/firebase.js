import { initializeApp } from "firebase/app";
import {auth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtKze4j93hvvah7d9itAqczLThoM9lf60",
  authDomain: "instagram-clone-cbf6a.firebaseapp.com",
  projectId: "instagram-clone-cbf6a",
  storageBucket: "instagram-clone-cbf6a.appspot.com",
  messagingSenderId: "850752908040",
  appId: "1:850752908040:web:d0d9c6d96c7403335b1abd"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();