import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCr_bpEii44XEsx7r1rW5GUJMf-5k3f_Zc",
    authDomain: "my-size-a4133.firebaseapp.com",
    databaseURL: "https://my-size-a4133.firebaseio.com",
    projectId: "my-size-a4133",
    storageBucket: "my-size-a4133.appspot.com",
    messagingSenderId: "856926258227"
};
firebase.initializeApp(config);

window.firebase = firebase;
