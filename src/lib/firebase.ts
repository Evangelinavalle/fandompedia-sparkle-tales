
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration for your application
const firebaseConfig = {
  apiKey: "AIzaSyBSUFaC3GcnBBRddktCEPCB3I8mlU6X_Ao",
  authDomain: "fandompedia-16.firebaseapp.com",
  projectId: "fandompedia-16",
  storageBucket: "fandompedia-16.firebasestorage.app",
  messagingSenderId: "956835498278",
  appId: "1:956835498278:web:e4ed451decfc606e7119e7",
  measurementId: "G-Y7FKQ7GWP2"
};

// Initialize Firebase
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  // If an app already exists, use the existing one
  console.error("Error initializing Firebase:", error);
}

// Initialize analytics if in browser environment
let analytics;
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    console.error("Error initializing Analytics:", error);
  }
}

export const auth = getAuth(app);
export { analytics };
export default app;
