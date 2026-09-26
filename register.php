<!DOCTYPE html>
<html>
<head>
    <title>Register</title>

    <link rel="stylesheet" href="register_style.css">

    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Quattrocento:wght@400;700&display=swap" rel="stylesheet">
</head>

<body>

    <div class="top-box">

        <h2>SUN SON SOLAR</h2>

        <div class="navigation">
            <a href="register.php">REGISTER</a>
            <a href="login.php">LOGIN</a>
            <a href="index.php">HOME</a>
        </div>

    </div>


    <div class="register-box">

        <div class="register-form">

            <form id="registerForm" action="process_register.php" method="POST">

                <!-- ACCOUNT TYPE -->

                <div id="accountStep">

                    <h1>REGISTER</h1>

                    <div class="account-select">

                        <label for="accounttype">
                            Account Type
                        </label>

                        <select name="accounttype" id="accounttype">

                            <option value="Select">Select</option>

                            <option value="Customer">
                                Customer
                            </option>

                            <option value="Employee">
                                Employee
                            </option>

                        </select>

                        <button type="button" id="continuebutton">
                            Continue
                        </button>

                    </div>


                    <div class="register-logo">
                        <img src="images/logo.png">
                    </div>

                </div>


                <!-- PERSONAL INFORMATION -->

                <div id="customerForm" style="display: none;">

                    <h2 id="registrationTitle"></h2>


                    <div class="personal-form">

                        <div>
                            <label for="firstname">
                                First Name
                            </label>

                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                placeholder="Enter your First Name">
                        </div>


                        <div>
                            <label for="gender">
                                Gender
                            </label>

                            <select id="gender" name="gender">

                                <option value="Select">
                                    Select
                                </option>

                                <option value="Male">
                                    Male
                                </option>

                                <option value="Female">
                                    Female
                                </option>

                                <option value="Prefer not to say">
                                    Prefer not to say
                                </option>

                            </select>
                        </div>


                        <div>
                            <label for="middlename">
                                Middle Name
                            </label>

                            <input
                                type="text"
                                id="middlename"
                                name="middlename"
                                placeholder="Enter your Middle Name">
                        </div>


                        <div>
                            <label for="birthdate">
                                Birthdate
                            </label>

                            <input
                                type="date"
                                id="birthdate"
                                name="birthdate">
                        </div>


                        <div>
                            <label for="lastname">
                                Last Name
                            </label>

                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                placeholder="Enter your Last Name">
                        </div>


                        <div>
                            <label for="address">
                                Address
                            </label>

                            <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Enter your Address">
                        </div>


                        <div>
                            <label for="contactnumber">
                                Contact Number
                            </label>

                            <input
                                type="text"
                                id="contactnumber"
                                name="contactnumber"
                                placeholder="09XXXXXXXX"
                                maxlength="11">
                        </div>


                        <div>
                            <label for="email">
                                Email
                            </label>

                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Example@email.com">
                        </div>


                        <div id="departmentField" style="display: none;">

                            <label for="department">
                                Company
                            </label>

                            <input
                                type="text"
                                id="department"
                                name="department"
                                placeholder="Enter your Company">

                        </div>

                    </div>


                    <button type="button" id="personalsubmit">
                        Submit
                    </button>

                </div>


                <!-- ACCOUNT INFORMATION -->

                <div id="accountForm" style="display: none;">

                    <label for="userName">
                        Username
                    </label>

                    <input
                        type="text"
                        id="userName"
                        name="userName">


                    <label for="Password">
                        Password
                    </label>

                    <input
                        type="password"
                        id="Password"
                        name="Password">


                    <p id="passwordReminder"></p>


                    <label for="confirmPassword">
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword">


                    <button type="submit" id="registerbutton">
                        Register
                    </button>

                </div>

            </form>

        </div>

    </div>


    <script src="script.js"></script>

</body>
</html>