
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9uElMYH35RDjc_WO8QSDiP_k_e5UuUUc",
  authDomain: "dragon-news-web-project.firebaseapp.com",
  projectId: "dragon-news-web-project",
  storageBucket: "dragon-news-web-project.firebasestorage.app",
  messagingSenderId: "144640489065",
  appId: "1:144640489065:web:fdb25d237c3fc05ffb14f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);