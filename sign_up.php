<?php 
include "dp.php";

if($_SERVER["REQUEST_METHOD"]!== "POST"){
exit;
}

$first = trim($_POST["first_name"]);
$last = trim($_POST["last_name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"] ?? "");
$gender = $_POST["gender"] ?? null;
$dob = $_POST["dob"] ?? null;
$location = trim($_POST["location"] ?? "");
$password = $_POST["password"];

// validate
if(!$first || !$last || !$email || !$password){
    die("Missing required fields");
}

// Hash password 
$passwordHash = password_hash($password, PASSWORD_DEFAULT);


//Picture uploads
$profilePath = "uploads/default-avater.png";

if(!empty($_FILES["profile_pic"] ["name"])){
    $exit = pathinfo($_FILES["profile_pic"] ["name"], PATHINFO_EXTENSION);
    $newName = uniqid("user_",true) .".". $exit;
    $target = "uploads/". $newName;

    if(move_uploaded_file($_FILES["profile_pic"]["tmp_name"],
    $target)){
        $profilePath = $target;
    }
}