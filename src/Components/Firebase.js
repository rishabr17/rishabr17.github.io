import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDP5TKvlduDy3R1MqdfAGDw_-BkxaSYPFY",
    authDomain: "my-projects-site.firebaseapp.com",
    databaseURL: "https://my-projects-site.firebaseio.com",
    projectId: "my-projects-site",
    storageBucket: "my-projects-site.appspot.com",
    messagingSenderId: "670502452409",
    appId: "1:670502452409:web:c7931c773cab4ba71e2f68",
    measurementId: "G-H6ZB2LPMRW"
});

const db = firebaseApp.firestore();

export { db };