function addUser(){
    user = document.getElementById("username").value;

    localStorage.setItem("usernamekey", user);

    window.location = "Let's Chat.html";
}