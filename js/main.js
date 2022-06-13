const firebaseConfig = {
    apiKey: "AIzaSyBq6p4ti0cCzcsnZ2LHSVyg4ulCjyift0I",
    authDomain: "blog-2022-c1704.firebaseapp.com",
    projectId: "blog-2022-c1704",
    storageBucket: "blog-2022-c1704.appspot.com",
    messagingSenderId: "1025293040683",
    appId: "1:1025293040683:web:7c3fd243937010167bbe6e",
    measurementId: "G-KM791EN5S8"
  };

function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "") {
        x.className = "mobile";
    } else {
        x.className = "";
    }
}

const yearElement = document.getElementById('year');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const postareBtn = document.getElementById('postare-btn');
const salutare = document.getElementById('username');

let user = null;
let admins = ["u3JjqqFS03Uaq05o4usYfx4TGJZ2"];

// setam bazele firebase, ne conectam la serviciu
firebase.initializeApp(firebaseConfig);

// referinta la serviciul de autentificare
const auth = firebase.auth();

// referinta la baza de date
const db = firebase.firestore();

//referinta la colectie de postari din BD
const postariDb = db.collection('postari');

// alegem providerul de logare -> Google
const provider = new firebase.auth.GoogleAuthProvider();

loginBtn.onclick = function() {
    console.log("logare...");
    auth.signInWithPopup(provider).then(function() { window.location.reload(); });
}

logoutBtn.onclick = function() {
    auth.signOut();
    window.location.reload();
}

function isAdmin() {
    let admin;

    if (user == null)
        return false;
    
    admin = admins.includes(user.uid); // true or false

    return admin;
}


function formatDate(time) {
    let date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let result = day + "-" + month + "-" + year;

    return result; 
}


auth.onAuthStateChanged(function(fuser) {
    user = fuser;
    console.log(user);
    if (user != null) {
        // logat in sistem
        logoutBtn.style.display = "block";
        loginBtn.style.display = "none";

        salutare.innerHTML = "Salutare, " +  user.displayName;

        if (isAdmin() == true) {
            postareBtn.style.display = 'block';
        }
        else {
            postareBtn.style.display = 'none';
        }
    }
    else {
        // nu e logat in sistem
        logoutBtn.style.display = "none";
        loginBtn.style.display = "block";
        postareBtn.style.display = 'none';
    }

    document.querySelector('body').style.display = "block";
})


if (yearElement) {
    let date = new Date();
    
    yearElement.innerHTML = date.getFullYear() + " ©";
}

