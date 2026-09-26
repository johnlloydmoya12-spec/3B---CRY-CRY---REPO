// REGISTER     

let accounttype = document.getElementById("accounttype");

if (accounttype) {

    let departmentField = document.getElementById("departmentField");
    let customerForm = document.getElementById("customerForm");
    let registrationTitle = document.getElementById("registrationTitle");

    // CONTINUE BUTTON

    document.getElementById("continuebutton").addEventListener("click", function() {

        if (accounttype.value === "Select") {
            alert("Please select an account type");
            return;
        }

        customerForm.style.display = "block";
        registrationTitle.style.display = "block";

        if (accounttype.value === "Employee") {
            departmentField.style.display = "block";
        } else {
            departmentField.style.display = "none";
        }

        if (accounttype.value === "Customer") {
            registrationTitle.textContent = "Customer Registration";
        } else if (accounttype.value === "Employee") {
            registrationTitle.textContent = "Employee Registration";
        }

    });

    // PASSWORD REMINDER

    document.getElementById("Password").addEventListener("input", function() {

        let Password = this.value;
        let passwordReminder = document.getElementById("passwordReminder");

        let character = "[X]";
        let uppercase = "[X]";
        let number = "[X]";
        let special = "[X]";

        if (Password.length >= 8 && Password.length <= 16) {
            character = "[✓]";
        }

        if (Password !== Password.toLowerCase()) {
            uppercase = "[✓]";
        }

        if (Password.includes("1") || Password.includes("2") || Password.includes("3") || Password.includes("4") || Password.includes("5") || Password.includes("6") || Password.includes("7") || Password.includes("8") || Password.includes("9") || Password.includes("0")) {
            number = "[✓]";
        }

        if (Password.includes("!") || Password.includes("@") || Password.includes("#") || Password.includes("$") || Password.includes("%")) {
            special = "[✓]";
        }

        passwordReminder.innerHTML =
            "Password Requirements:<br>" +
            character + " 8-16 characters<br>" +
            uppercase + " 1 uppercase letter (A-Z)<br>" +
            number + " 1 number (0-9)<br>" +
            special + " 1 special character (! @ # $ %)";
    });

    // REGISTER

    document.getElementById("registerForm").addEventListener("submit", function(e) {

        let firstname = document.getElementById("firstname").value.trim();
        let lastname = document.getElementById("lastname").value.trim();
        let middlename = document.getElementById("middlename").value.trim();
        let gender = document.getElementById("gender").value;
        let birthdate = document.getElementById("birthdate").value;
        let contactnumber = document.getElementById("contactnumber").value.trim();
        let email = document.getElementById("email").value.trim();
        let address = document.getElementById("address").value.trim();
        let department = document.getElementById("department").value.trim();
        let userName = document.getElementById("userName").value.trim();
        let Password = document.getElementById("Password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        let missingFields = [];

        if (firstname === "") missingFields.push("First Name");
        if (lastname === "") missingFields.push("Last Name");
        if (middlename === "") missingFields.push("Middle Name");
        if (gender === "Select") missingFields.push("Gender");
        if (birthdate === "") missingFields.push("Birth Date");
        if (contactnumber === "") missingFields.push("Contact Number");
        if (email === "") missingFields.push("Email");
        if (address === "") missingFields.push("Address");
        if (userName === "") missingFields.push("Username");
        if (Password === "") missingFields.push("Password");
        if (confirmPassword === "") missingFields.push("Confirm Password");
        if (accounttype.value === "Employee" && department === "") missingFields.push("Department");

        if (missingFields.length > 0) {
            e.preventDefault();
            alert("Please complete the following fields:\n\n" + missingFields.join("\n"));
            return;
        }

        if (contactnumber.length !== 11) {
            e.preventDefault();
            alert("Contact number must be exactly 11 numbers");
            return;
        }

        if (!email.endsWith("@gmail.com") && !email.endsWith("@yahoo.com") && !email.endsWith("@outlook.com")) {
            e.preventDefault();
            alert("Please input a correct email address");
            return;
        }

        if (Password.length < 8 || Password.length > 16) {
            e.preventDefault();
            alert("Password must be 8-16 characters long");
            return;
        }

        if (Password === Password.toLowerCase()) {
            e.preventDefault();
            alert("Password must contain at least 1 uppercase letter");
            return;
        }

        if (!/[0-9]/.test(Password)) {
            e.preventDefault();
            alert("Password must contain at least 1 number");
            return;
        }

        if (!Password.includes("!") && !Password.includes("@") && !Password.includes("#") && !Password.includes("$") && !Password.includes("%")) {
            e.preventDefault();
            alert("Password must contain at least 1 special character");
            return;
        }

        if (Password !== confirmPassword) {
            e.preventDefault();
            alert("Passwords do not match!");
            return;
        }

        
    });
}


// LOGIN 

let loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(e) {

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value;

        if (username === "" || password === "") {
            e.preventDefault();
            alert("Please enter both username and password");
            return;
        }

    });
}





//ETO UNG PANGALAWANG SCRIPT SA ORGINAL SAKEN

//FRONTPAGE
let housephotos = [
    "images/House/house1.webp",
    "images/House/house2.avif",
    "images/House/house3.webp",
    "images/House/house4.avif",
    "images/House/house5.jpg"
];
let panelphotos = [
    "images/Panel/panel1.webp",
    "images/Panel/panel2.webp",
    "images/Panel/panel3.jpg",
    "images/Panel/panel4.avif",
    "images/Panel/panel5.webp"
]
let servicephotos = [
    "images/Service/service1.jpg",
    "images/Service/service2.avif",
    "images/Service/service3.jpeg",
    "images/Service/service4.webp",
    "images/Service/service5.webp"
];
let solarphotos = [
    "images/Solar/solar1.webp",
    "images/Solar/solar2.webp",
    "images/Solar/solar3.webp",
    "images/Solar/solar4.webp",
    "images/Solar/solar5.webp"
];

let housenumber = 0;
let panelnumber = 0;
let servicenumber = 0;
let solarnumber = 0;

setInterval(function(){

    housenumber++;
    panelnumber++;
    servicenumber++;
    solarnumber++;

    if(housenumber >= housephotos.length){
        housenumber = 0;}
    if(panelnumber >= panelphotos.length){
        panelnumber = 0;}
    if(servicenumber >= servicephotos.length){
        servicenumber = 0;}
    if(solarnumber >= solarphotos.length){
        solarnumber = 0;}

        function changephoto(id, photos, number){
            let image = document.getElementById(id);

            image.style.opacity = 0;

            setTimeout(function(){
                image.src = photos[number];
                image.style.opacity = 1;
            }, 400);
        }
        changephoto("house", housephotos, housenumber);
        changephoto("panel", panelphotos, panelnumber);
        changephoto("service", servicephotos, servicenumber);
        changephoto("solar", solarphotos, solarnumber);
}, 4000);

//LOGIN 

let loginbutton = document.getElementById("loginbutton");

if (loginbutton) {

    loginbutton.addEventListener("click", function() {

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
        }
        else {
            alert("Invalid username and password");
        }

    });

}

//REGISTER      

let registerbutton = document.getElementById("registerbutton");

if (registerbutton) {

    let accounttype = document.getElementById("accounttype");
    let departmentField = document.getElementById("departmentField");
    let customerForm = document.getElementById("customerForm");
    let registrationTitle = document.getElementById("registrationTitle");


    customerForm.style.display = "none";
    registrationTitle.style.display = "none";
    departmentField.style.display = "none";


    //CONTINUE BUTTON 

    document.getElementById("continuebutton").addEventListener("click", function() {

        if (accounttype.value === "Select") {
            alert("Please select an account type");
            return;
        }

        document.querySelector(".register-box").classList.add("expanded");

        customerForm.style.display = "block";
        registrationTitle.style.display = "block";

        if (accounttype.value === "Employee") {
            departmentField.style.display = "block";
        }
        else {
            departmentField.style.display = "none";
        }

        if (accounttype.value === "Customer") {
            registrationTitle.textContent = "Customer Registration";
        }
        else if (accounttype.value === "Employee") {
            registrationTitle.textContent = "Employee Registration";
        }

    });


    //CONTACT NUMBER

    document.getElementById("contactnumber").addEventListener("input", function() {

        this.value = this.value.replace(/[^0-9]/g, "");

    });


    //REGISTER BUTTON

    registerbutton.addEventListener("click", function() {

        let accounttype = document.getElementById("accounttype").value;
        let firstname = document.getElementById("firstname").value.trim();
        let lastname = document.getElementById("lastname").value.trim();
        let middlename = document.getElementById("middlename").value.trim();
        let gender = document.getElementById("gender").value;
        let birthdate = document.getElementById("birthdate").value;
        let contactnumber = document.getElementById("contactnumber").value.trim();
        let email = document.getElementById("email").value.trim();
        let address = document.getElementById("address").value.trim();
        let department = document.getElementById("department").value.trim();
        let userName = document.getElementById("userName").value.trim();
        let Password = document.getElementById("Password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (accounttype === "Select") {
            alert("Please select an account type");
            return;
        }
        if (firstname === "" || lastname === "" || middlename === "" || gender === "Select" || birthdate === "" || contactnumber === "" || email === "" || address === "" || userName === "" || Password === "" || confirmPassword === "") {
            alert("Please fill in all fields");
            return;
        }
        if (accounttype === "Employee" && department === "") {
            alert("Please enter your department");
            return;
        }
        if (contactnumber.length !== 11) {
            alert("Contact number must be exactly 11 numbers");
            return;
        }
        if (!email.endsWith("@gmail.com")) {
            alert("Please input a correct email address");
            return;
        }

        let existingUser = localStorage.getItem("userName");

        if (existingUser !== null && existingUser === userName) {
            alert("Username already exists. Please choose a different username.");
            return;
        }
        if (Password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }


        localStorage.setItem("accounttype", accounttype);
        localStorage.setItem("firstname", firstname);
        localStorage.setItem("lastname", lastname);
        localStorage.setItem("middlename", middlename);
        localStorage.setItem("gender", gender);
        localStorage.setItem("birthdate", birthdate);
        localStorage.setItem("contactnumber", contactnumber);
        localStorage.setItem("email", email);
        localStorage.setItem("address", address);
        localStorage.setItem("department", department);
        localStorage.setItem("userName", userName);
        localStorage.setItem("Password", Password);

        alert("Registration successful!");

    });
}
