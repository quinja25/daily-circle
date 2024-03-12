import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FB_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FB_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_FB_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_FB_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_FB_APPID,
    measurementId: process.env.NEXT_PUBLIC_FB_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };