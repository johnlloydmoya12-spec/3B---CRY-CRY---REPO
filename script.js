//LOGIN 
document.getElementById("loginbutton").addEventListener("click", function() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let savedUsername = localStorage.getItem("userName");
    let savedPassword = localStorage.getItem("Password");

if (username === "" || password === "") {
    alert("Please enter both username and password");
    return;
}
if (username === savedUsername && password === savedPassword) {
    alert("Login successful!");
}else {
    alert("Invalid username and password");
}
});


//REGISTER      
document.getElementById("registerbutton").addEventListener("click", function() {

    let firstname = document.getElementById("firstname").value.trim();
    let lastname = document.getElementById("lastname").value.trim();
    let userName = document.getElementById("userName").value.trim();
    let Password = document.getElementById("Password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

if (firstname === "" || lastname === "" || userName === "" || Password === "" || confirmPassword === "") {
    alert("Please fill in all fields");
    return;
}

let existingUser = localStorage.getItem("userName");   

if (existingUser !== null && existingUser === userName) {
    alert("Username already exists. Please choose a different username.");
    return;
}
else if (Password === confirmPassword) {
      
}
else {
    alert("Passwords do not match!");
    return;
}

    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("userName", userName);
    localStorage.setItem("Password", Password);
    alert("Registration successful!");

});