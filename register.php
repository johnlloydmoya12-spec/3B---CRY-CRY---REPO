<?php
session_start();

$errors = [];
if (isset($_SESSION["register_errors"])) {
    $errors = $_SESSION["register_errors"];
    unset($_SESSION["register_errors"]);
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
</head>
<body>
    <h1>Register</h1>

    <?php if (count($errors) > 0) { ?>
        <div style="color: red;">
            <?php foreach ($errors as $error) { ?>
                <p><?php echo $error; ?></p>
            <?php } ?>
        </div>
    <?php } ?>

    <form id="registerForm" method="POST" action="process_register.php">

        <label for="accounttype">Account Type:</label>
        <select name="accounttype" id="accounttype">
            <option value="Select">Select</option>
            <option value="Customer">Customer</option>
            <option value="Employee">Employee</option>
        </select><br><p></p>
        <button type="button" id="continuebutton">Continue</button><br><p></p>

        <h2 id="registrationTitle" style="display: none;"></h2>
        <div id="customerForm" style="display: none;">
            <label>First Name: <input type="text" name="firstname" id="firstname" placeholder="Enter your First Name" required></label><br><p></p>
            <label>Last Name: <input type="text" name="lastname" id="lastname" placeholder="Enter your Last Name" required></label><br><p></p>
            <label>Middle Name: <input type="text" name="middlename" id="middlename" placeholder="Enter your Middle Name" required></label><br><p></p>

            <label for="gender"> Gender:</label>
            <select name="gender" id="gender">
                <option value="Select">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
            </select><br><p></p>

            <label>Birthdate: <input type="date" name="birthdate" id="birthdate" required></label><br><p></p>
            <label>Contact Number: <input type="text" name="contactnumber" id="contactnumber" placeholder="09XXXXXXXX" maxlength="11" required></label><br><p></p>
            <label>Email: <input type="text" name="email" id="email" placeholder="name@email.com" required></label><br><p></p>
            <label>Address: <input type="text" name="address" id="address" placeholder="Enter your Address" required></label><br><p></p>

            <div id="departmentField" style="display: none;">
                <label>Department: <input type="text" name="department" id="department" placeholder="Enter your Department"></label><br><p></p>
            </div>

            <label>Username: <input type="text" name="userName" id="userName" required></label><br><p></p>
            <label>Password: <input type="password" name="Password" id="Password" required></label><br><p id="passwordReminder"></p>
            <label>Confirm Password: <input type="password" name="confirmPassword" id="confirmPassword" required></label><br><p></p>
            <button type="submit" id="registerbutton">Register</button>
        </div>

    </form>

    <script src="script.js"></script>
</body>
</html>