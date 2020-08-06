import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 ",
    authDomain: "🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 ",
    databaseURL: "🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 ",
    projectId: "🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 ",
    storageBucket: "🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 ",
    messagingSenderId: "🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥🚀 🔥 🚀 ",
    appId: "🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 ",
    measurementId: "🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🚀 🔥 🔥 🚀 🔥 🚀 "
});

//   access database
const db = firebaseApp.firestore();
//   access authentication
const auth = firebase.auth();
//   access storage (no s3)
const storage = firebase.storage();

export {db, auth, storage };

//   export default db;