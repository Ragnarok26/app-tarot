const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyD6vgKCxLh2MjkJcneBmca4Nfg0pKdYyFg",
    authDomain: "tarot-static-web.firebaseapp.com",
    projectId: "tarot-static-web",
    storageBucket: "tarot-static-web.appspot.com",
})

const db = firebase.firestore();
const content = require("../content/es.json");

debugger;

content &&
    firebase
        .firestore()
        .collection("es")
        .doc("web")
        .set(content);
