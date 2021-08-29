import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyAH07tMZh0TCK1n-4aX8guHhDPR_OIWitw",
        authDomain: "instagramclone-60b24.firebaseapp.com",
        projectId: "instagramclone-60b24",
        storageBucket: "instagramclone-60b24.appspot.com",
        messagingSenderId: "316739856044",
        appId: "1:316739856044:web:b24721c24d8595fead2109",
        measurementId: "G-GNY3N3YXDS"
    }
)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };