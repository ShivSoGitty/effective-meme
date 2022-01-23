// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNuTlgvYuFqaxOGsyTcjSUyHptLQl1nWo",
    authDomain: "poggers-a64b1.firebaseapp.com",
    projectId: "poggers-a64b1",
    storageBucket: "poggers-a64b1.appspot.com",
    messagingSenderId: "393542996825",
    appId: "1:393542996825:web:6ed2be93ef9e98dcfcf248"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addRoom(){
    servername = document.getElementById("servername").value;
    firebase.database().ref("/").child(servername).update({
          purpose : "adding room name"
    });

    localStorage.setItem("servername", servername);

    window.location = "Let's Chat Page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class = 'servernames' id = "+ Room_names +" onclick = 'redirectToServerName(this.id)'>#" + Room_names +"</div><hr>";
//End code
});});}
getData();
function redirectToServerName(name){
  console.log(name);
  localStorage.setItem("name", name);
  window.location = "Let's Chat Page.html";
}
function logout(){
  window.location = ("Let's Login.html");
  localStorage.removeItem("servername");
  localStorage.removeItem("usernamekey");
}
username = localStorage.getItem("usernamekey");
document.getElementById("usernamedisplay").innerHTML = "Welcome " + username + "!";