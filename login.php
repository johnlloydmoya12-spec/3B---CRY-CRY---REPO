<?php
session_start();

$justRegistered = isset($_GET["registered"]);


$error = "";
if (isset($_SESSION["login_error"])) {
    $error = $_SESSION["login_error"];
    unset($_SESSION["login_error"]);
}

if (isset($_GET["logout"])) {
    session_unset();
    session_destroy();
    header("Location: login.php");
    exit();
}

$isLoggedIn = isset($_SESSION["username"]);
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>

    <?php if ($isLoggedIn) { ?>

        <h1>Welcome, <?php echo htmlspecialchars($_SESSION["username"]); ?>!</h1>
        <p>You are logged in as: <?php echo htmlspecialchars($_SESSION["accounttype"]); ?></p>
        <a href="login.php?logout=1">Logout</a>

    <?php } else { ?>

        <h1>Login</h1>

        <?php if ($justRegistered) { ?>
            <p style="color: green;">Registration successful! You can now log in.</p>
        <?php } ?>

        <?php if ($error !== "") { ?>
            <p style="color: red;"><?php echo $error; ?></p>
        <?php } ?>

        <form id="loginForm" method="POST" action="process_login.php">
            <label>Username: <input type="text" name="username" id="username"></label><br>
            <label>Password: <input type="password" name="password" id="password"></label><br>
            <button type="submit" id="loginbutton">Login</button>
        </form>
        <label>Don't have an account? <a href="register.php">Register here</a></label>

    <?php } ?>

    <script src="script.js"></script>
</body>
</html>