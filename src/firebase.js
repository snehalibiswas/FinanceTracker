import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

//finance-tracker
// const firebaseConfig = {
//     apiKey: "AIzaSyBlSGBIHLwr6-_b5aw9MQsu18Y0J47DqWI",
//     authDomain: "finance-tracker-cd88e.firebaseapp.com",
//     projectId: "finance-tracker-cd88e",
//     storageBucket: "finance-tracker-cd88e.appspot.com",
//     messagingSenderId: "842734717030",
//     appId: "1:842734717030:web:301104a6de7bcedb6a85a7",
//     measurementId: "G-1K3NW2D97X"
// };

//finance-tracker2
// const firebaseConfig = {
//     apiKey: "AIzaSyDRdUJrTUdEQ4MQSnUtDPwtWB1MN6qxsnI",
//     authDomain: "finance-tracker2-c6002.firebaseapp.com",
//     projectId: "finance-tracker2-c6002",
//     storageBucket: "finance-tracker2-c6002.appspot.com",
//     messagingSenderId: "1040691932506",
//     appId: "1:1040691932506:web:bdf1820b5c823ff7095763",
//     measurementId: "G-7H10W6JCBN"
// };

//fintrac
const firebaseConfig = {
    apiKey: "AIzaSyCO3i4LaYwSEkpQzASGF3g6XQmazWq3nMU",
    authDomain: "fintrac-38074.firebaseapp.com",
    projectId: "fintrac-38074",
    storageBucket: "fintrac-38074.appspot.com",
    messagingSenderId: "685140605729",
    appId: "1:685140605729:web:e95bbc1d4b72ef79015c60",
    measurementId: "G-D7D6S86WVM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider, storage };