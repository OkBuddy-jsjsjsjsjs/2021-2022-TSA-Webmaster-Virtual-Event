// Countdown for the home page ------------------------------------------------------

    var countDownDate = new Date("Mar 15, 2022 12:00:00").getTime();

    var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("clock").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s:" + " Until Event"})

// Registration

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHWI-peAX4h9garTvInmERXHeYI6vHhMY",
  authDomain: "shogidatabase.firebaseapp.com",
  databaseURL: "https://shogidatabase-default-rtdb.firebaseio.com",
  projectId: "shogidatabase",
  storageBucket: "shogidatabase.appspot.com",
  messagingSenderId: "1028861476920",
  appId: "1:1028861476920:web:1cd9b30aab2583d712a6cd",
  measurementId: "G-NJJ9JXGL88"
};

// Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var repassword = document.getElementById("repassword");


    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
        })

    document.querySelector(".alert").style.display = "block";
    setTimeout(function() {document.querySelector(".alert").style.display = 'none';}, 7000);
