<?php

session_start();

include "db.php";


if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    header("Location: register.php");
    exit();

}


$errors = [];


$accounttype = $_POST["accounttype"] ?? "";

$firstname = trim($_POST["firstname"] ?? "");
$lastname = trim($_POST["lastname"] ?? "");
$middlename = trim($_POST["middlename"] ?? "");

$gender = $_POST["gender"] ?? "";

$birthdate = $_POST["birthdate"] ?? "";

$contactnumber = trim($_POST["contactnumber"] ?? "");

$email = trim($_POST["email"] ?? "");

$address = trim($_POST["address"] ?? "");

$department = trim($_POST["department"] ?? "");

$userName = trim($_POST["userName"] ?? "");

$Password = $_POST["Password"] ?? "";

$confirmPassword = $_POST["confirmPassword"] ?? "";


// ========================================
// PASSWORD CONFIRMATION
// ========================================

if ($Password !== $confirmPassword) {

    $errors[] = "Passwords do not match.";

}


// ========================================
// CHECK USERNAME
// ========================================

$userNameSafe =
    mysqli_real_escape_string($conn, $userName);


$checkCustomer = mysqli_query(
    $conn,
    "SELECT customer_id
     FROM customer_info
     WHERE username = '$userNameSafe'"
);


$checkEmployee = mysqli_query(
    $conn,
    "SELECT employee_id
     FROM employees_info
     WHERE username = '$userNameSafe'"
);


if (
    mysqli_num_rows($checkCustomer) > 0 ||
    mysqli_num_rows($checkEmployee) > 0
) {

    $errors[] =
        "Username already exists. Please choose a different username.";

}

if (count($errors) > 0) {

    $_SESSION["register_errors"] = $errors;

    header("Location: register.php");

    exit();

}

$hashedPassword =
    password_hash($Password, PASSWORD_DEFAULT);

$firstname =
    mysqli_real_escape_string($conn, $firstname);

$lastname =
    mysqli_real_escape_string($conn, $lastname);

$middlename =
    mysqli_real_escape_string($conn, $middlename);

$gender =
    mysqli_real_escape_string($conn, $gender);

$birthdate =
    mysqli_real_escape_string($conn, $birthdate);

$contactnumber =
    mysqli_real_escape_string($conn, $contactnumber);

$email =
    mysqli_real_escape_string($conn, $email);

$address =
    mysqli_real_escape_string($conn, $address);

$department =
    mysqli_real_escape_string($conn, $department);

// CUSTOMER

if ($accounttype === "Customer") {

    $insertQuery =

        "INSERT INTO customer_info
        (
            first_name,
            last_name,
            middle_name,
            birthdate,
            gender,
            email,
            phone_number,
            address,
            username,
            password
        )

        VALUES

        (
            '$firstname',
            '$lastname',
            '$middlename',
            '$birthdate',
            '$gender',
            '$email',
            '$contactnumber',
            '$address',
            '$userNameSafe',
            '$hashedPassword'
        )";

}

// EMPLOYEE


else if ($accounttype === "Employee") {

    $insertQuery =

        "INSERT INTO employees_info
        (
            first_name,
            last_name,
            middle_name,
            birthdate,
            gender,
            email,
            phone_number,
            address,
            username,
            password,
            department
        )

        VALUES

        (
            '$firstname',
            '$lastname',
            '$middlename',
            '$birthdate',
            '$gender',
            '$email',
            '$contactnumber',
            '$address',
            '$userNameSafe',
            '$hashedPassword',
            '$department'
        )";

}

else {

    $_SESSION["register_errors"] =
        ["Invalid account type."];

    header("Location: register.php");

    exit();

}
// INSERT INTO DATABASE


if (mysqli_query($conn, $insertQuery)) {

    header("Location: login.php?registered=1");

    exit();

}

else {

    $_SESSION["register_errors"] =
        ["Something went wrong: " . mysqli_error($conn)];

    header("Location: register.php");

    exit();

}

?>