// src/services/firebase.ts
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import Constants from 'expo-constants';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

// Validate configuration
const validateConfig = (config: any): FirebaseConfig => {
  const requiredKeys = [
    'FIREBASE_API_KEY',
    'FIREBASE_AUTH_DOMAIN',
    'FIREBASE_PROJECT_ID',
    'FIREBASE_STORAGE_BUCKET',
    'FIREBASE_MESSAGING_SENDER_ID',
    'FIREBASE_APP_ID'
  ];

  const missingKeys = requiredKeys.filter(key => !config[key]);
  if (missingKeys.length > 0) {
    throw new Error(`Missing Firebase config keys: ${missingKeys.join(', ')}`);
  }

  return {
    apiKey: config.FIREBASE_API_KEY,
    authDomain: config.FIREBASE_AUTH_DOMAIN,
    projectId: config.FIREBASE_PROJECT_ID,
    storageBucket: config.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
    appId: config.FIREBASE_APP_ID
  };
};

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

try {
  const config = validateConfig(Constants.expoConfig?.extra);
  app = initializeApp(config);
  auth = getAuth(app);
  db = getFirestore(app);
  
  if (__DEV__) {
    console.log('Firebase initialized successfully', {
      projectId: config.projectId,
      authDomain: config.authDomain
    });
  }
} catch (error) {
  console.error('Firebase initialization failed:', error);
  throw error;
}

export { auth, db };