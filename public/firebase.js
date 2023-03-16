import * as firebase from 'firebase';
import { firebaseConfig } from "./config.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
var firebaseConfig = {
    apiKey: "AIzaSyAXyZl-MyTxRzlGjrVYOQCVsst5PbfF_bw",
    authDomain: "rdpd-dbaa4.firebaseapp.com",
    projectId: "rdpd-dbaa4",
    storageBucket: "rdpd-dbaa4.appspot.com",
    messagingSenderId: "300679241652",
    appId: "1:300679241652:web:0f1e8bca99955c4b401ce1"
  };
const auth = firebase.auth();
const Google = firebase.GoogleAuthProvider();
const signInWithPopup = firebase.signInWithPopup();

export default {
  auth, Google, signInWithPopup
};