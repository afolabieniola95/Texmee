<?php 

//--Database connection ---

$host = "localhost";
$user = "root";
$password = ""; //DB password
$dbname = "texmee"; // DB name

$conn = new mysqli($host, $user, $password, $dbname);
if($conn->connect_error){
    die("Connection failed:" .$conn->connect_error);
}

//--Get Post Data ---
$first_name = $_POST['first_name'] ?? "";
$last_name = $_POST['last_name'] ?? "";
$email = $_POST['email'] ?? "";
$phone = $_POST['phone'] ?? "";
$gender = $_POST['gender'] ?? "";
$dob = $_POST['dob'] ?? "";
$password = $_POST['password'] ?? "";
$location = $_POST['location'] ?? "";

//-- Sanitize and format--
$first_name = ucfirst(strtolower(trim($first_name)));
$last_name = ucfirst(strtolower(trim($last_name)));
$email = strtolower(trim($email));
$phone = trim($phone);
$gender = trim($gender);
$dob = trim($dob);
$location = trim($location);

// Hash password 
$passwordHash = password_hash($password, PASSWORD_DEFAULT);

//Picture uploads
$profile_pic_path = "";

if(isset($_FILES['profile_pic']) && $_FILES['profile_pic']['error'] === 0){
    $target_dir = "uploads/";
    $filename = time() ."_".basename($FILES["profile_pic"]["name"]);
    $target_file = $target_dir .$filename;

    $fileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    $allowed = ['jpg','jpeg','phg','gif'];

    if(in_array($fileType,$allowed)){
        if(move_uploaded_file($_FILES["profile_pic"]["tmp_name"], $target_file)){
            $profile_pic_path = $target_file;
        }else{
            die("Failed to upload profile picture.");
        }
        }else{
            die("invalid profile picture type.");
        }
    }
    
    //--Insert into database--
    $sql = "INSERT INTO users
    (first_name,last_name,email,phone,dob,gender,password,location,profile_pic)
    VALUE(?,?,?,?,?,?,?,?,?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssssss", $first_name,$last_name,$email,$phone,$gender,$dob,$location,$passwordHash,$profile_pic_path
    );

    if($stmt->execute()){
        echo"Account created successfully!";
        //Redirect to login page --
        header("Location: home.html");
    }else{
        echo"Error".$stmt->error;
    }

    $stmt->close();
    $conn->close();

    ?>





