import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

let object = require("./secrets");
const firebaseApp = firebase.initializeApp(object);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
