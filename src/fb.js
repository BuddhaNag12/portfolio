import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
export const app=firebase.initializeApp({
    apiKey: "AIzaSyBYu0b46hxqEQOW4ajYmI1V1-Cu3VwyJf4",
    authDomain: "buddha-nag.firebaseapp.com",
    databaseURL: "https://buddha-nag.firebaseio.com",
    projectId: "buddha-nag",
    storageBucket: "buddha-nag.appspot.com",
    messagingSenderId: "86161309407",
    appId: "1:86161309407:web:7ed5898a433232eae0736a",
    measurementId: "G-JV5V1YC6ZJ"

  })
const db = firebase.firestore();


export default db;