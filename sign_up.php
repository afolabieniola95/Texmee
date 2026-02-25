<?php
session_start();

//Database connection
$conn = new mysqli("localhost", "root", "", "texmee");
if($conn->connect_error){
    die("Connection failed:" .$conn->connect_error);
}


if($_SERVER["REQUEST_METHOD"] === "POST"){

//Get POST data
$first_name = trim($_POST['first_name'] ?? '');
$last_name = trim($_POST['last_name'] ?? '');
$year = isset($_POST['year']) ? $_POST['year']: null;
$month = isset($_POST['month']) ? $_POST['month']: null;
$day = isset($_POST['day']) ? $_POST['day']: null;
$gender = $_POST['gender'] ?? '';
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$password = $_POST['password'] ?? '';

if(!$year || !$month || !$day){
    die("Date of birth incomplete");
};

//Combine into proper format
$dob = sprintf('%04d-%02d', $year,$month,$day);

//Validate Age
$birthDate = new DateTime($dob);
$today = new DateTime();
$age = $today->diff($birthDate)-> y;

if($age < 13){
    echo "You must be at least 13 years old.";
    exit();
}

if(empty($first_name) || empty($last_name) || empty($email) || empty($phone) || empty($password)){
    die("Required fields missing.");
}

if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
    die("Invalid email format.");
}

$check = $conn->prepare("SELECT id FROM users WHERE email = ?");
$check->bind_param("s", $email);
$check->execute();
$check->store_result();


if($check->num_rows > 0){
    die("Email already exits");
}

//Hash password
$password_hash = password_hash($password,PASSWORD_DEFAULT);





//Sanitize
$first_name = ucfirst(strtolower(trim($first_name)));
$last_name = ucfirst(strtolower(trim($last_name)));
$year = trim($year);
$year = trim($month);
$year = trim($day);
$gender = trim($gender);
$email = trim($email);
$phone = trim($phone);


//Upload profile pic
$profile_pic_path = '';

if(isset($_FILES['profile_pic']) && $_FILES['profile_pic']['error']===0){
    $target_dir = "uploads/";
    if(!is_dir($target_dir)){
        mkdir($target_dir, 0777,true);
    }

    $filename = time(). "_". basename($_FILES['profile_pic']['name']);
    $target_file = $target_dir. $filename;

    $fileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    $allowed = ['jpg','jpeg','png','gif'];

    if(!in_array($fileType,$allowed)){
        die("Invalid profile picture");
    }

    if(!move_uploaded_file($_FILES['profile_pic']['tmp_name'],$target_file)){
        die("Failed to upload profile picture");
    }

    $profile_pic_path = $target_file;
}

//Insert into database
$sql = "INSERT INTO users(
first_name,last_name,date_of_birth,gender,email,phone,password_hash,profile_pic)
VALUE(?,?,?,?,?,?,?,?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssssss",
$first_name,
$last_name,
$dob,
$gender,
$email,
$phone,
$password_hash,
$profile_pic_path
);

if($stmt->execute()){
    $new_user_id = $stmt->insert_id;

    $_SESSION['accounts'][$new_user_id] = [
      'id' => $new_user_id,
      'first_name' => $first_name,
      'last_name' => $last_name,
      'dob' => $dob,
      'gender' => $gender,
      'email' => $email,
      'phone' => $phone,
      'password' => $password_hash,
      'profile_pic_path' => $profile_pic_path
    ];
    $SESSION['active_user'] = $new_user_id;

    header("Location: home.php");
    exit;
}else{
    die("Insert error:" .$stmt->error);
}

$stmt->close();
}
$conn->close();

?>