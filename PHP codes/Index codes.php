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