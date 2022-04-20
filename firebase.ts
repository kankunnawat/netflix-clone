
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_Y2HWu4hw3V1AdcbpvSico6iZVdpo-4E",
  authDomain: "netflix-clone-e045c.firebaseapp.com",
  projectId: "netflix-clone-e045c",
  storageBucket: "netflix-clone-e045c.appspot.com",
  messagingSenderId: "812178204286",
  appId: "1:812178204286:web:61d01a5f53593d70ccda2f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }