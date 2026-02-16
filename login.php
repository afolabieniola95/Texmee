<?php
session_start();

$conn = new mysqli("localhost", "root", "", "texmee");

if($conn->connect_error){
    die("Connection failed:" .$conn->connect_error);
}

$email = trim($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';

if(empty($email) || empty($password)){
    die("All fields required.");
}

//Get user by email
$stmt = $conn->prepare("SELECT id, password_hash FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if($result->num_rows === 0){
    die("Invalid email or password.");
}

$user = $result->fetch_assoc();

//Verify password
if(password_verify($password, $user['password_hash'])){
    $_SESSION['user_id'] = $user['id'];
    header("Location: home.php");
    exit;
}else{
    die("Invalid email or password.");
}

?>