//LOGIN 
document.getElementById("loginbutton").addEventListener("click", function() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let savedusername = localStorage.getItem("username");
    let savedpassword = localStorage.getItem("password");

if (username === "" || password === "") {
    alert("Please enter both username and password");
    return;
}
if (username === savedusername && password === savedpassword) {
    alert("Login successful!");
}else {
    alert("Invalid username and password");
}
});


//REGISTER      
document.getElementById("registerbutton").addEventListener("click", function() {

    let firstname = document.getElementById("firstname").value.trim();
    let lastname = document.getElementById("lastname").value.trim();
    let middlename = document.getElementById("middlename").value.trim();
    let gender = document.getElementById("gender").value.trim();
    let birthdate = document.getElementById("birthdate").value.trim();
    let contactnumber = document.getElementById("contactnumber").value.trim();
    let email = document.getElementById("email").value.trim();
    let address = document.getElementById("address").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;

if (firstname === "" || lastname === "" || middlename === "" || gender === "" || birthdate == "" || contactnumber == "" || email == "" || address == "" || username === "" || password === "" || confirmpassword === "") {
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
    localStorage.setItem("middlename", middlename);
    localStorage.setItem("gender", gender);
    localStorage.setItem("birthdate", birthdate);
    localStorage.setItem("contactnumber", contactnumber);
    localStorage.setItem("email", email);
    localStorage.setItem("address", address);
    localStorage.setItem("userName", userName);
    localStorage.setItem("Password", Password);
    alert("Registration successful!");

});
