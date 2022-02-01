document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    console.log(app);

})
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
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);

  function writeUserData( ) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
    });
  }