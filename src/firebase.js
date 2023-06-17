import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAssvrrm_OOH93dTCuUvBsDMG-rBawWDQg",
    authDomain: "otp-auth-72064.firebaseapp.com",
    projectId: "otp-auth-72064",
    storageBucket: "otp-auth-72064.appspot.com",
    messagingSenderId: "868167438602",
    appId: "1:868167438602:web:2093b8facab6cb1203eaf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

