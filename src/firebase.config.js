import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCffqRVbaycodB5YO56bp9H4zZA-ZUqNvg",
  authDomain: "restaurant-36525.firebaseapp.com",
  databaseURL: "https://restaurant-36525-default-rtdb.firebaseio.com",
  projectId: "restaurant-36525",
  storageBucket: "restaurant-36525.appspot.com",
  messagingSenderId: "154783335506",
  appId: "1:154783335506:web:2946807eec49d9e7ee0b8b",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
