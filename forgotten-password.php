<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$conn = new mysqli("localhost", "root", "", "texmee");

if($conn->connect_error){
    die("Connection failed: ".$conn->connect_error);
}

if(isset($_POST['email'])){

$email = $_POST['email'];

$stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
$stmt->bind_param("s", $email);
$stmt->execute();

$result = $stmt->get_result();
$user = $result->fetch_assoc();

if(!$user){
    echo "If email exists, a reset link has been sent.";
    exit();
}

if($user['reset_attempts'] >= 3 && strtotime($user['locked_until']) > time()){
    echo "Too many requests. Try later.";
    exit();
}

$token = bin2hex(random_bytes(50));
$expires = date("Y-m-d H:i:s", strtotime("+15 minutes"));

$stmt = $conn->prepare("UPDATE users SET reset_token=?, reset_expires=?, reset_attempts=reset_attempts+1 WHERE email=?");
$stmt->bind_param("sss", $token, $expires, $email);
$stmt->execute();

echo "Reset link (simulate email): 
<a href='reset_password.php?token=$token'>Click to reset password</a>";

}
?>