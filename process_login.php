 <?php
 session_start();
 include "db.php";

 if ($_SERVER["REQUEST_METHOD"] !== "POST") {
     header("Location: login.php");
     exit();
 }

 $username = trim($_POST["username"]);
 $password = $_POST["password"];

 if ($username === "" || $password === "") {
     $_SESSION["login_error"] = "Please enter both username and password";
     header("Location: login.php");
     exit();
 }

 // built-in admin account 
 if ($username === "KittyKat 16" && $password === "K@tSunShine 16") {
     $_SESSION["username"] = $username;
     $_SESSION["accounttype"] = "Admin";

     header("Location: index.php");
     exit();
 }
 if ($username === "admin" && $password === "admin123") {
     $_SESSION["username"] = $username;
     $_SESSION["accounttype"] = "Admin";

     header("Location: index.php");
     exit();
 }

 $usernameSafe = mysqli_real_escape_string($conn, $username);


 $result = mysqli_query($conn, "SELECT * FROM customer_info WHERE username = '$usernameSafe'");
 $accounttype = "Customer";


 if (mysqli_num_rows($result) !== 1) {
     $result = mysqli_query($conn, "SELECT * FROM employees_info WHERE username = '$usernameSafe'");
     $accounttype = "Employee";
 }

 if (mysqli_num_rows($result) === 1) {
     $user = mysqli_fetch_assoc($result);

     if (password_verify($password, $user["password"])) {
         $_SESSION["username"] = $user["username"];
         $_SESSION["accounttype"] = $accounttype;

         header("Location: index.php");
         exit();
     }
 }

 $_SESSION["login_error"] = "Invalid username or password";
 header("Location: login.php");
 exit();
 ?>