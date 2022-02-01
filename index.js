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
<<<<<<< HEAD

// Registration


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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


    document.getElementById('regform').addEventListener("submit", formSubmit);

    function formSubmit(e) {
        e.preventDefault();
        let name = document.querySelector("#name").value;
        let username = document.querySelector("#username").value;
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
        let repassword = document.querySelector("#repassword").value;
    }


   

 
    

    document.querySelector(".alert").style.display = "block";
    setTimeout(function() {document.querySelector(".alert").style.display = 'none';}, 7000);
=======
>>>>>>> parent of dc83888 (adding firebase pt 1)
