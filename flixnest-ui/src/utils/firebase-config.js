
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAlKM9-33nOvzD5plbJ4wDJ-mV5DnppQ94",
    authDomain: "react-movie-platform.firebaseapp.com",
    projectId: "react-movie-platform",
    storageBucket: "react-movie-platform.appspot.com",
    messagingSenderId: "403315319274",
    appId: "1:403315319274:web:49206b519a21a616325293",
    measurementId: "G-3WC6R5P5CE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
