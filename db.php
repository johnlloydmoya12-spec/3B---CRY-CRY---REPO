<?php

$host = "localhost";
$dbUsername = "root";   // default XAMPP username
$dbPassword = "";        // default XAMPP password is blank
$dbName = "sunsonsolar";

$conn = mysqli_connect($host, $dbUsername, $dbPassword, $dbName);

if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
}
?>
