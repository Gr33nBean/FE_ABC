import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_B3GRzyrRTk7tnNhAUx073kn4FspMgqo",
  authDomain: "foodayionic2024.firebaseapp.com",
  projectId: "foodayionic2024",
  storageBucket: "foodayionic2024.appspot.com",
  messagingSenderId: "1074344701530",
  appId: "1:1074344701530:web:9e57ac7a6588cc69f1f263",
  measurementId: "G-3WZNZZPRT7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
