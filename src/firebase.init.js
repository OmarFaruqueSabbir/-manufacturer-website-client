// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyB7J9qh9rYfovK8ZmhUXuM2GTpkcQjVMio",
//   authDomain: "manufacturer-eea84.firebaseapp.com",
//   projectId: "manufacturer-eea84",
//   storageBucket: "manufacturer-eea84.appspot.com",
//   messagingSenderId: "943440259802",
//   appId: "1:943440259802:web:8da3bfe7d77737309153e3"

    apiKey:process.env.REACT_APP_apiKey ,
    authDomain:process.env.REACT_APP_authDomain,
    projectId:process.env.REACT_APP_projectId,
    storageBucket:process.env.REACT_APP_storageBucket,
    messagingSenderId:process.env.REACT_APP_messagingSenderId,
    appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;