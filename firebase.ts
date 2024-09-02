import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "chatgpt-messenger-learn.firebaseapp.com",
  projectId: "chatgpt-messenger-learn",
  storageBucket: "chatgpt-messenger-learn.appspot.com",
  messagingSenderId: "252176339063",
  appId: "1:252176339063:web:6d326320d41f05afef3672",
  measurementId: "G-TMSS1FFMH4",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };
