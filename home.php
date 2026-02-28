<?php
session_start();

if(!isset($_SESSION['user_id'])){
  header("Location: index.html");
  exit;
}

$conn = new mysqli("localhost", "root", "", "texmee");

$stmt = $conn->prepare("SELECT first_name, last_name, email, profile_pic FROM users WHERE id=?");
$stmt->bind_param("i", $_SESSION['user_id']);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();
?>


<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" charset="UTF-8">
  <script src="https://kit.fontawesome.com/188355e36e.js" crossorigin="anonymous"></script>
  <title>TexMee - clean</title>
  <link rel="stylesheet" href="home.css">
</head>
<body>

  <!-- Top fixed header (kept visually same) -->
  <div style="display: flex; justify-content: space-between; align-items: center; padding: 5px 0 0 10px; position: fixed; top: 0; left: 0; background-color: white; width: 100%; z-index: 2;">
    <div style="font-size: 18px; color: black; font-weight: bold; text-align: left;">TexMee</div>

    <div style="padding-top: 5px; display: flex; gap: 15px; margin-right: 20px;">
      <a href="search.html">
        <img src="icon/search.png" alt="Search" style="width: 20px; height: 20px;">
      </a>

      <a href="menu.php">
        <img src="icon/menu.png" alt="Menu" style="width: 23px; height: 23px;">
      </a>
    </div>
  </div>

  
  
  <!-- Feed container where JS will insert posts -->
  <div class="feed" id="feed">
    <!-- posts will be injected here by JavaScript -->
  </div>

  <!-- bottom nav (kept same) -->
  <div class="bottom-nav">
    <a href="home_page.html" style="text-decoration: none; color: black;">
      <div class="nav-item">
        <img src="icon/home-active.png" alt="Home">
        <span>Home</span>
      </div>
    </a>

    <a href="message-area.html" style="text-decoration: none">
      <div class="nav-item">
        <img src="icon/chat-page.png" alt="Chat">
        <span>Chat</span>
      </div>
    </a>

  
      <div class="nav-item">
        <div style="box-shadow: 1px 1px 2px 1px black; border: 1px solid black; width: 30px; height: 30px; border-radius: 100px;">
      
        <img onclick="openPostPicker()"src="icon/add-friends.png" alt="Post" style="width: 100%; height: 100%; border-radius: 100px;">
       <input type="file" id="post-image-input" accept="image/* video/*" style="display: none;">
</div>     
</div>

    <a href="video_page.html" style="text-decoration: none;">
      <div class="nav-item">
        <img src="icon/video-page.png" alt="Video">
        <span>Video</span>
      </div>
    </a>

    <a href="profile.php" style="text-decoration: none;">
      <div class="nav-item">
        <div class="profile-photo" style="background-image: url('<?php echo htmlspecialchars($user['profile_pic'] ? : 'default-avater.png'); ?>');"></div>
        <span style="padding-bottom: 5px;">You</span>
      </div>
    </a>
  </div>

  <!-- Overlays & sheets: dot menu, share, report -->
  

  <!--Panel Template--//-->
<template id="comment-template">
  <div class="back-drop"></div>

  <div class="comment-panel">
    <div class="close-panel"></div>

    <div class="drag-handle">
      <div style="width: 40px; height: 10px; border-radius: 10px; background-color: gainsboro;"></div>
    </div>

    <div class="panel-header">Comments</div>
         
   
    <div class="comment-container"></div>

    <div class="panel-footer">
      <div class="panel-footer-nav">
        <div style="width: 100%; display: flex; align-items: center; gap: 5px;">
        <div style="background-image: url('image/image1.jpg'); width: 35px; height: 35px; background-position: center; background-size: cover; background-repeat: no-repeat; border-radius: 100px;"></div>
       <div class="input-nav">
         <img src="icon/stickers pack.png" style="width: 35px; height: 35px;">
       <input class="comment-input" type="text" placeholder="Write a comment">
        </div>
     </div>


    <button class="send-comment" style="border: none; background: white;">
      <img src="icon/send.png" style="width: 25px; height: 25px;">
    </button>
      </div>  
  </div>
</div>
</template>



<div id="react-tab">
<div data-react="faceLove">😍</div>
<div data-react="laugh">😁</div>
<div data-react="ok">👌</div>
<div>👌</div>
<div>👌</div>
<div>👌</div>
</div>
  
  <button id="followingAlert"></button>
  
  
  <script src="home.js"></script>
</body>
</html>