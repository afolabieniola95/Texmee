<?php

ini_set('display_errors', 0);
error_reporting (E_ALL);
header('Content-Type: application/json');

session_start();

$conn = new mysqli("localhost", "root", "", "texmee");

if($conn->connect_error){
    die("Connection failed:" .$conn->connect_error);
}

$data = json_decode(file_get_contents('php://input'), true);
$email = trim($data['email'] ?? '');
$password = $data['password'] ?? '';

if(empty($email) || empty($password)){
    echo json_encode(["status" => "error", "message" => "All fields required."]);
    exit;
}

//Fetch user from DB
$stmt = $conn->prepare("SELECT id, password_hash, failed_attempts, lock_until, first_name FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if($result->num_rows !== 1){
    echo json_encode(["status" => "error", "message" => "Invalid email or password."]);
    exit;
}

$user = $result->fetch_assoc();

//Check if account is temporily locked
$now = new DateTime();
if(!empty($user['lock_until'])){
$lock_until = new DateTime($user['lock_until']);

if($now < $lock_until){
   echo json_encode([
    "status" => "error",
    "message" => "Account temporarily  locked. Try again later."
   ]);
   exit;
}
}

//Verify password
if(password_verify($password, $user['password_hash'])){
    //Reset failed attempt on successful login
    $stmt = $conn->prepare("UPDATE users SET failed_attempts = 0, lock_until = NULL WHERE id = ?");
    $stmt -> bind_param("i", $user['id']);
    $stmt ->execute();

    $_SESSION['user_id'] = $user['id'];
    echo json_encode([
        "status" => "success",
        "username" => $user['first_name']
        ]);
}else{

    //Password wrong: increment failed  attempts
    $failed_attempts = $user['failed_attempts'] + 1;
    $lock_until = null;
    $remaining = 5 - $failed_attempts;


    if($failed_attempts >= 5){
        //Lock account for 15 minutes
        $lock_dt = new DateTime();
        $lock_dt->modify("+15 minutes");
        $lock_until = $lock_dt-> format("Y-m-d H:i:s");

    }
    $stmt = $conn->prepare("UPDATE users SET failed_attempts = ?, lock_until = ? WHERE id = ?");
    $stmt->bind_param("isi", $failed_attempts, $lock_until, $user['id']);
    $stmt->execute();
    echo json_encode([
        "status" => "locked", 
        "message" => "Account temporarily locked for 15 minutes."
        ]);
        exit;
}

    $stmt = $conn->prepare("UPDATE users SET failed_attempts = ?, lock_until = ? WHERE id = ?");
    $stmt->bind_param("ii", $failed_attempts, $lock_until, $user['id']);
    $stmt->execute();
    echo json_encode([
        "status" => "error", 
        "message" => "Account temporarily locked for 15 minutes.",
        "remaining" => $remaining
        ]);
        exit;
    
   $stmt->close();

?>