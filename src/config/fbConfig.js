import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCHNpICeoQXQYBYpYwLyNoyge5_MQerh4s",
    authDomain: "mario-plan-1290c.firebaseapp.com",
    databaseURL: "https://mario-plan-1290c.firebaseio.com",
    projectId: "mario-plan-1290c",
    storageBucket: "mario-plan-1290c.appspot.com",
    messagingSenderId: "404793714772",
    appId: "1:404793714772:web:7b083b0b250f7936b1a5c1",
    measurementId: "G-LEC0BGD6R9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export default firebase;