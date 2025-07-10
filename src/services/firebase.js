import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBHYquupp0vzYsVkvxyc1zYfSq-gRHJeLU",
  authDomain: "flightsearchapp-a2851.firebaseapp.com",
  projectId: "flightsearchapp-a2851",
  storageBucket: "flightsearchapp-a2851.firebasestorage.app",
  messagingSenderId: "375694821240",
  appId: "1:375694821240:android:e896a508a8cabf49db6a8d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);