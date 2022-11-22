import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBC4pYvepyocgFGb_6fEVvANbwonncfpk",
  authDomain: "shoutouts-410e1.firebaseapp.com",
  projectId: "shoutouts-410e1",
  storageBucket: "shoutouts-410e1.appspot.com",
  messagingSenderId: "901980775089",
  appId: "1:901980775089:web:ab1fa97464d2b198353890",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
export const storage = getStorage(app);
