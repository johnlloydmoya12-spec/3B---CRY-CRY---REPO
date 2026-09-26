
//REGISTER PAGE

let accounttype = document.getElementById("accounttype");

if (accounttype) {

    let continuebutton = document.getElementById("continuebutton");
    let personalsubmit = document.getElementById("personalsubmit");

    let customerForm = document.getElementById("customerForm");
    let accountForm = document.getElementById("accountForm");

    let departmentField = document.getElementById("departmentField");
    let registrationTitle = document.getElementById("registrationTitle");

    // CONTINUE BUTTON
    continuebutton.addEventListener("click", function() {

        if (accounttype.value === "Select") {
            alert("Please select an account type");
            return;
        }
        customerForm.style.display = "block";
        if (accounttype.value === "Customer") {
            registrationTitle.textContent = "Customer Registration";
            departmentField.style.display = "none";
        }
        else if (accounttype.value === "Employee") {
            registrationTitle.textContent = "Employee Registration";
            departmentField.style.display = "block";
        }
    });


   
    // PERSONAL INFORMATION
    personalsubmit.addEventListener("click", function() {
        let firstname = document.getElementById("firstname").value.trim();
        let lastname = document.getElementById("lastname").value.trim();
        let middlename =document.getElementById("middlename").value.trim();
        let gender = document.getElementById("gender").value;
        let birthdate = document.getElementById("birthdate").value;
        let contactnumber = document.getElementById("contactnumber").value.trim();
        let email = document.getElementById("email").value.trim();
        let address = document.getElementById("address").value.trim();
        let department = document.getElementById("department").value.trim();
        let missingFields = [];

        if (firstname === "") {
            missingFields.push("First Name");
        }
        if (lastname === "") {
            missingFields.push("Last Name");
        }
        if (middlename === "") {
            missingFields.push("Middle Name");
        }
        if (gender === "Select") {
            missingFields.push("Gender");
        }
        if (birthdate === "") {
            missingFields.push("Birth Date");
        }
        if (contactnumber === "") {
            missingFields.push("Contact Number");
        }
        if (email === "") {
            missingFields.push("Email");
        }
        if (address === "") {
            missingFields.push("Address");
        }
        if (accounttype.value === "Employee" &&department === "" ) {
            missingFields.push("Company");
        }
        if (missingFields.length > 0) {
         alert("Please complete the following fields:\n\n" + missingFields.join("\n")
            );
            return;
        }
        // CONTACT NUMBER
        if (!/^[0-9]{11}$/.test(contactnumber)) {
            alert("Contact number must be exactly 11 numbers");
            return;
        }
        // EMAIL
        if (
            !email.endsWith("@gmail.com") &&
            !email.endsWith("@yahoo.com") &&
            !email.endsWith("@outlook.com")
        ) {
            alert("Please input a correct email address");
            return;
        }
        // SHOW ACCOUNT FORM
        accountForm.style.display = "block";
        personalsubmit.style.display = "none";

    });
    // PASSWORD REMINDER

    let passwordInput =document.getElementById("Password");
    passwordInput.addEventListener("input", function() {

        let Password = this.value;
        let passwordReminder =
            document.getElementById("passwordReminder");

        let character = "[X]";
        let uppercase = "[X]";
        let number = "[X]";
        let special = "[X]";

        if (Password.length >= 8 &&
            Password.length <= 16
        ) {
            character = "[✓]";
        }
        if (/[A-Z]/.test(Password)) {
            uppercase = "[✓]";

        }
        if (/[0-9]/.test(Password)) {
            number = "[✓]";
        }
        if (/[!@#$%]/.test(Password)) {
            special = "[✓]";
        }
        passwordReminder.innerHTML ="Password Requirements:<br>" + character +" 8-16 characters<br>" + uppercase + " 1 uppercase letter (A-Z)<br>" +  number + " 1 number (0-9)<br>" +special + " 1 special character (! @ # $ %)";
    });

    // FINAL REGISTER VALIDATION
    let registerForm =
        document.getElementById("registerForm");
    registerForm.addEventListener("submit", function(e) {
        let username =
            document.getElementById("userName").value.trim();

        let Password =
            document.getElementById("Password").value;

        let confirmPassword =
            document.getElementById("confirmPassword").value;


        if (username === "") {

            e.preventDefault();

            alert("Please enter a username");

            return;

        }


        if (Password === "") {

            e.preventDefault();

            alert("Please enter a password");

            return;

        }


        if (confirmPassword === "") {

            e.preventDefault();

            alert("Please confirm your password");

            return;

        }


        if (
            Password.length < 8 ||
            Password.length > 16
        ) {

            e.preventDefault();

            alert(
                "Password must be 8-16 characters long"
            );

            return;

        }


        if (!/[A-Z]/.test(Password)) {

            e.preventDefault();

            alert(
                "Password must contain at least 1 uppercase letter"
            );

            return;

        }


        if (!/[0-9]/.test(Password)) {

            e.preventDefault();

            alert(
                "Password must contain at least 1 number"
            );

            return;

        }


        if (!/[!@#$%]/.test(Password)) {

            e.preventDefault();

            alert(
                "Password must contain at least 1 special character"
            );

            return;

        }


        if (Password !== confirmPassword) {

            e.preventDefault();

            alert("Passwords do not match!");

            return;

        }

    });

}

// LOGIN PAGE

let loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(e) {

        let username =
            document.getElementById("username").value.trim();

        let password =
            document.getElementById("password").value;


        if (username === "" || password === "") {

            e.preventDefault();

            alert(
                "Please enter both username and password"
            );

            return;

        }

    });

}
// HOMEPAGE IMAGE SLIDESHOW
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
];


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


if (
    document.getElementById("house") &&
    document.getElementById("panel") &&
    document.getElementById("service") &&
    document.getElementById("solar")
) {

    setInterval(function() {

        housenumber++;
        panelnumber++;
        servicenumber++;
        solarnumber++;


        if (housenumber >= housephotos.length) {
            housenumber = 0;
        }


        if (panelnumber >= panelphotos.length) {
            panelnumber = 0;
        }


        if (servicenumber >= servicephotos.length) {
            servicenumber = 0;
        }


        if (solarnumber >= solarphotos.length) {
            solarnumber = 0;
        }


        function changephoto(id, photos, number) {

            let image =
                document.getElementById(id);

            image.style.opacity = 0;


            setTimeout(function() {

                image.src = photos[number];

                image.style.opacity = 1;

            }, 400);

        }


        changephoto(
            "house",
            housephotos,
            housenumber
        );


        changephoto(
            "panel",
            panelphotos,
            panelnumber
        );


        changephoto(
            "service",
            servicephotos,
            servicenumber
        );


        changephoto(
            "solar",
            solarphotos,
            solarnumber
        );


    }, 4000);

}