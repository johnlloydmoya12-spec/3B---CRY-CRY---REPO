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