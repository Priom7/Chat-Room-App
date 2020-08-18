import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKVPvIgtNxWUhsPqHZ328w8NrCHT5iWWs",
  authDomain: "chat-room-6936d.firebaseapp.com",
  databaseURL: "https://chat-room-6936d.firebaseio.com",
  projectId: "chat-room-6936d",
  storageBucket: "chat-room-6936d.appspot.com",
  messagingSenderId: "438649607136",
  appId: "1:438649607136:web:c30a6b79ba936db6cfd185",
  measurementId: "G-EMMRV3EL6T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
