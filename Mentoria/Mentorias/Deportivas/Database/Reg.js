// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh15WLpzPIIduiYEZioqStUfg7kt509To",
  authDomain: "pagos-kayfuture.firebaseapp.com",
  projectId: "pagos-kayfuture",
  storageBucket: "pagos-kayfuture.appspot.com",
  messagingSenderId: "617434621054",
  appId: "1:617434621054:web:baed4ac3a5c67bd5f2e42f"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
  
 export const auth = getAuth(app);
 
 //CREMOS UNA INSTANCIA DE FIRESTORE
 const database = getFirestore(app);


 //VEAMOS LA CRUD →  CREATE - READ - 
 //CREATE
 export const createTask  = objeto => addDoc(collection(database,"DatosPago"),objeto);  
 //READ
 export const readTasks = () => getDocs(collection(database,"DatosPago"));
