<?php
session_start();
include"db.php";

$user_id = $_SESSION['user_id'];

$sql = "SELECT first_name, last_name, profile_photo 
FROM users WHERE id = '$user_id'";
$result = $conn->query($sql); 
$user = $result->fetch_assoc();
?>


<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <meta http-equiv="CONTENT-TYPE" content="text/html; charset=UTF-8">
  <title>Menu</title>
  <style>
    body {
      margin: 45px 0 0 0;
      font-family: sans-serif;
    }

    .profile-photo {
      width: 70px;
      height: 70px;
      border-radius: 100%;
      border: 2px solid white;
      background-size: cover;
      background-position: center;
      background-color: gainsboro;
    }

    .profile-name {
      padding: 25px 10px;
      font-size: 20px;
      font-weight: bold;
    }

        .account {
      display: flex;
      align-items: center;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ddd;
      border-radius: 8px;
      cursor: pointer;
      justify-content: space-between;
    }
    .account-info {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .avatar {
      width: 50px;
      height: 50px;
      background-color: #ccc;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
    }
    .delete-btn {
      background: red;
      color: white;
      border: none;
      padding: 4px 8px;
      border-radius: 4px;
      cursor: pointer;
    }
	
	.logout{
    align-items: center; 
	justify-cotent: center;
	width: 50%;
	background-color: black; 
	font-weight: bold;
	font-size: 13px; 
	color: white;
	border-radius: 5px;
	padding: 6px;
	margin-top: 40px;

	}
  </style>
</head>
<body>
  <!-- Top bar -->
  <div style="display: flex; gap: 10px; position: fixed; top: 0; left: 0; width: 100%; border-bottom: 1px solid gainsboro; padding: 8px; background-color: white; box-shadow: 0px 0px 6px 1px gainsboro;">
    <div onclick="history.back()" style="background-image: url('icon/backarrow.png'); background-size: cover; background-position: center; width: 25px; height: 25px;"></div>
    <h1 style="padding-top: 3px; font-size: 22px; margin: 0px;">Menu</h1>
  </div>

  <!-- Profile info -->
  <div style="border-bottom: 1px solid gainsboro; padding: 15px 0px 10px 15px; margin-top: 60px;">
  <div style="display: flex; gap: 10px;">
   <div class="profile-photo" style="background-image: url('<?php echo $user['profile_photo'] ?: 'uploads/default-profile.jpg'; ?>');
	  background-position: center; background-size: cover;"></div>
    <div class="profile-name"><?= htmlspecialchars($user['first_name'].' '.$user['last_name']) ?></div>
    </div>
  
   <button style="margin-top: 15px; border: 1px solid gainsboro;  border-radius: 5px; display: flex; gap: 10px;">
    <div style="background-image: url('icon/switch.png'); background-size: cover; background-position: center; width: 15px; height: 15px;"></div>
    <div onclick="window.location.href = 'switch_account.php'" style="font-size: 16px;">
	Switch accounts</div>
  </button>
  </div>

  <!-- Menu options -->


  <div style="border: 1px solid gainsboro; margin: 15px 5px; border-radius: 5px; padding: 15px; display: flex;">
    <div style="background-image: url('icon/settings.png'); background-size: cover; background-position: center; width: 25px; height: 25px;"></div>
    <div style="padding: 6px 0 0 15px; font-size: 20px;">Settings</div>
  </div>

  <!-- Other options -->
  <div style="border: 1px solid gainsboro; margin: 15px 5px; border-radius: 5px; padding: 15px; display: flex;">
    <div style="background-image: url('icon/language.png'); background-size: cover; background-position: center; width: 25px; height: 25px;"></div>
    <div style="padding: 6px 0 0 15px; font-size: 20px;">Language</div>
  </div>

  <div style="border: 1px solid gainsboro; margin: 15px 5px; border-radius: 5px; padding: 15px; display: flex;">
    <div style="background-image: url('icon/aboutApp.png'); background-size: cover; background-position: center; width: 28px; height: 28px;"></div>
    <div style="padding: 6px 0 0 15px; font-size: 20px;">About</div>
  </div>

  <div style="border: 1px solid gainsboro; margin: 15px 5px; border-radius: 5px; padding: 15px; display: flex;">
    <div style="background-image: url('icon/help.png'); background-size: cover; background-position: center; width: 25px; height: 25px;"></div>
    <div style="padding: 6px 0 0 15px; font-size: 20px;">Help</div>
  </div>

   <!-- Switch Account List -->
    <div id="accountsContainer"></div>
  
  <!-- Logout button -->
  <center>
  <button onclick="Logout()" class = "logout">Log out</button>
   </center>
  <!-- Logout confirmation -->
  <div id="closeAlert" style="display: none; position: fixed; top: 0; left: 0px; bottom: 0px; right: 0px; width: 100%; background-color: rgb(0,0,0,0.1);"></div>
  <div id="openAlert" style="display: none; position: fixed; top: 40%; left: 15%; width: 50%; padding: 10px 0px 0px 70px; height: 70px; border: 1px solid gainsboro;
  background-color: white; border-radius: 9px; transition: ease-in-out 5s; opacity: 1; z-index: 2;">
    Do you want to logout?
    <div style="position: absolute; left: 12%; bottom: 6%; display: flex; gap: 150px; padding-top: 12px;">
      <div onclick="confirmLogout(true)">Yes</div>
      <div onclick="confirmLogout(false)">No</div>
    </div>
  </div>

 
  <!-- JavaScript -->
 <script>
    // Logout confirmation logic
   function Logout() {
      document.getElementById('closeAlert').style.display = 'block';
      document.getElementById('openAlert').style.display = 'block';
    }

   
</script>
</body>
</html>


  