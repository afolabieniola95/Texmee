<?php
session_start();

// initialize error variables so they don’t throw "undefined variable"
$emailError = "";
$passwordError = "";

// Handle login form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';

    // basic checks before database
    if (empty($email)) {
        $emailError = "Email is required";
    }
    if (empty($password)) {
        $passwordError = "Password is required";
    }

    if (empty($emailError) && empty($passwordError)) {
        $conn = new mysqli("localhost", "root", "", "textmee_db");
        if ($conn->connect_error) {
            die("DB connection failed: " . $conn->connect_error);
        }

        // lookup user by email
        $stmt = $conn->prepare("SELECT id, first_name, last_name, password, profile_photo FROM users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($row = $result->fetch_assoc()) {
            // verify password
            if (password_verify($password, $row['password'])) {
                // store user session
                $_SESSION['user_id'] = $row['id'];
                $_SESSION['first_name'] = $row['first_name'];
                $_SESSION['last_name'] = $row['last_name'];
                $_SESSION['profile_photo'] = $row['profile_photo'];
                $_SESSION['cover_photo'] = $row['cover_photo'];
                header("Location: home_page.php"); 
                exit();
            } else {
                $passwordError = "Invalid password.";
            }
        } else {
            $emailError = "No account found with that email.";
        }

        $stmt->close();
        $conn->close();
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <style>
        body {
            font-family: Arial, sans-serif;
			padding: 10px;
            align-items: center;
			justify-content: center;
        }
        input{
            
        }

        .password-input{
            display: flex;
            margin-bottom: 20px; 
            width: 90%;   
            padding: 5px;
            height: 40px;
            font-size: 14px; 
            border-radius: 5px; 
            border: 1.5px solid gray;
            outline: none;
            box-sizing: border-box;
			background-color: whitesmoke;
        }

        button {
            background-color: black; 
            color: white; 
            border: none;
            font-size: 14rpx;
            font-weight: bold;
            width: 60%;
            height: 35px;
            border-radius: 9px;
            margin-top: 50px;
        }
        .error {
            color: red;
            font-size: 12px;
            margin-bottom: 10px;
            display: block;
        }
		
	.toggle {
      cursor: pointer;
      font-size: 11px;
      color: grey;
      user-select: none;
	  padding: 10px 5px 0px 5px;
	  text-align: right;
    }
    </style>
</head>
<body>

    
    <div style = "padding: 10px; display: flex; align-items: center; justify-content: center;">
      <img src = "icon/texmee-logo.png" style = "width: 70px; height: 70px;">
      <div style = "padding: 15px 0px; font-size: 20px; color: black; font-weight: bold; text-align: left;">TexMee</div>

    </div>


     <form method="POST">
	<center>
        <input type="email" name="email" style = "width: 90%;
            margin: 10px auto; 
            padding: 11px;
            font-size: 13px; 
            border-radius: 5px; 
            border: 1.5px solid gray;
            outline: none;
            box-sizing: border-box;
			background-color: whitesmoke;" placeholder = "Email or Username" required value="<?= htmlspecialchars($email ?? '') ?>">
        <div class="error" style="<?= !empty($emailError) ? 'display:block;' : 'display:none;' ?>">
            <?= $emailError ?>
        </div><br></br>

      <label>
        <div class = "password-input">
        <input type="password" name="password" id="passwordInput" style = "width: 100%; border: none; background-color: whitesmoke; outline: none;  " placeholder = "Password" required>
		<div class="toggle" onclick="togglePassword()">Show</div>
</div>
		</label>

        <div class="error" style="<?= !empty($passwordError) ? 'display:block;' : 'display:none;' ?>">
            <?= $passwordError ?>
        </div>
       <a href = "Forgotten_password.html" style = "text-decoration: none; color: black;">
      <div style="text-align: center; font-size: 14px;">Forgotten password?</div>
       </a> 

            <button type="submit">Login</button>
        </center>
    </form>
 
 <script>
    // Toggle password visibility
    function togglePassword() {
      const input = document.getElementById("passwordInput");
      const toggle = document.querySelector(".toggle");
      if (input.type === "password") {
        input.type = "text";
        toggle.textContent = "Hide";
      } else {
        input.type = "password";
        toggle.textContent = "Show";
      }
    }
  </script>
  
  
    <p style="margin-top: 30px; text-align: center; font-size: 15px;">
	Don't have an account yet?
	<a href="create_account.html">Sign up</a></p>
	
	<div style = "align-items: center; justify-content: center; display: flex; gap: 20px; padding-top: 16px;">
	  <div style = "border-bottom: 1px solid grey; width: 100px; margin: 10px;"></div>  
	 <div style = "font-size: 15px;">Or continue with</div>
	 <div style = "border-bottom: 1px solid grey; width: 100px; margin: 10px;"></div>
  </div>
     
   <table style = "padding: 30px; width: 100%;">
	<tr>
	<th>
   <img src ="icon/chrome.png" style = "background-color: white; width: 40px; height: 40px;">
	</th>

   <th>
	 <img src ="icon/facebook.jpeg" style = "width: 33px; height: 33px;">
	</th>
	</tr>
	</table>

	
</body>
</html>