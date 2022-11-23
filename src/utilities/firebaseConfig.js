import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRi4wGAZ0Sp27qZLNa27mN10b9ZGG1gwc",
  authDomain: "manga-shop-2fbf1.firebaseapp.com",
  projectId: "manga-shop-2fbf1",
  storageBucket: "manga-shop-2fbf1.appspot.com",
  messagingSenderId: "424264445366",
  appId: "1:424264445366:web:95ac93a9bc824eccea6517"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
