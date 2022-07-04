import firebase from "firebase/app";
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBb2g9unLlcg1ZGgKGMo2QP6PE41flGkUc",
  authDomain: "spellbook-352113.firebaseapp.com",
  projectId: "spellbook-352113",
  storageBucket: "spellbook-352113.appspot.com",
  messagingSenderId: "819309836619",
  appId: "1:819309836619:web:535a1678e7635febda90ce"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const login = () => {
  return auth.signInWithPopup(provider);
}

const logout = () => {
  return auth.signOut();
}

export { auth, login, logout }