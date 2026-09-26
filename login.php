<!DOCTYPE html>
<html>

<head>

    <title>Login</title>

    <link rel="stylesheet" href="login_style.css">

    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Kaushan+Script&family=Quattrocento:wght@400;700&display=swap" rel="stylesheet">

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


    <div class="login-box">

        <div class="login-content">

            <div class="login-form">

                <h1>Login</h1>


                <form id="loginForm" action="process_login.php" method="POST">

                    <label>
                        Username:

                        <input
                            type="text"
                            id="username"
                            name="username">
                    </label>

                    <br>


                    <div class="password-box">

                        <label>
                            Password:

                            <input
                                type="password"
                                id="password"
                                name="password">
                        </label>

                        <br>

                        <button
                            type="submit"
                            id="loginbutton">

                            Login

                        </button>

                    </div>

                </form>


                <p class="register-text">

                    Don't have an account?

                    <a href="register.php">
                        Register here
                    </a>

                </p>

            </div>


            <div class="login-logo">

                <img src="images/logo.png">

            </div>

        </div>

    </div>


    <script src="script.js"></script>

</body>

</html>