// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDWT3zlTQ8sXrrNgaRlc2kzJJ4_qPD03gI',
    authDomain: 'fb-misitioreact123.firebaseapp.com',
    projectId: 'fb-misitioreact123',
    storageBucket: "fb-misitioreact123.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
