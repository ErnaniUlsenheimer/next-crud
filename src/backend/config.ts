import firebase from "firebase/app";
import 'firebase/firestore'

const config = {
    apiKey: "a",
    authDomain: "a",
    projectId: "a",
    storageBucket: "a",
    messagingSenderId: "a",
    appId: "a"
};

// console.log(config)

if (!firebase.apps.length) {
    firebase.initializeApp(config);
   
}

export default firebase
