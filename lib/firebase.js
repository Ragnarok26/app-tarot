import firebase from 'firebase/app'
import "firebase/firestore";

const firebaseCredentials = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  apiKey: "AIzaSyD6vgKCxLh2MjkJcneBmca4Nfg0pKdYyFg",
  authDomain: "tarot-static-web.firebaseapp.com",
  projectId: "tarot-static-web",
  storageBucket: "tarot-static-web.appspot.com",
}

// if a Firebase instance doesn't exist, create one
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseCredentials);
}

export default firebase
