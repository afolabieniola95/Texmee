<?php
session_start();
$image = $_GET['image'] ?? '';
?>


<!DOCTYPE html>  
<html>  
<head>  
<meta name="viewport" content="width=device-width,  initial-scale= 1.0, user-scalable=no">  
<link rel="stylesheet" href="create-posts.css">
</head>  
<body> 
 
 

  <div id="music-panel-close"></div>

  <div class="music-panel" id="music-panel">
   <div style="padding: 10px; display: flex; align-items: center; justify-content: center;">
    <div class="drag-handle"></div>
    </div>

    <div class="header">
   <div class="header-nav" id="popular">popular</div>
   <div class="header-nav" id="trending">trending</div>
   <div class="header-nav" id="storage">Storage</div>
   </div>

    <div class="music-container">
 <div id="popular-container">popular coming soon</div>
 <div id="trending-container">trending coming soon</div>
 <div id="storage-container">Storage coming soon</div>

    </div>
</div>


  <div id="effect-panel-close"></div>

  <div id="effect-panel" class="effect-panel">
  <div style="padding: 10px; display: flex; align-items: center; justify-content: center;">
    <div class="drag-handle"></div>
    </div>
    
    <div class="effect-container">
    <img class="effect" src="effect/effect1.gif">
    </div>
  </div>

    <div id="close-overlay">

      <div class="overlay-color">

        <div style="width: 50px; height: 50px; border-radius: 9px;  background: red;"></div>

        <div style="width: 50px; height: 50px; border-radius: 9px; background: green;"></div>

        <div style="width: 50px; height: 50px; border-radius: 9px; background: blue;"></div>
      </div>

    </div>

   <p id="overlay-text"></p>


  <div class="media-preview" id="preview"></div>
    
  
  

<form id="postForm" method="POST" action="submit_post.php" enctype="multipart/form-data">
  <input type="file" name="image" id="realImageInput" hidden>

    <div class="media-nav" id="media-nav">
       
      <div class="m-nav" id="text">
     <img  src="icon/text.png">
    <span>Text</span>
     <input type="text" id="text-input" name="overlay-input">
      </div> 
     
    <div class="m-nav" id="media">
     <img  src="icon/add-media1.png">
    <span>Media</span>
     <input type="file" id="fileInput" accept="image/*,video/*">
      </div> 

    <div class="m-nav" id="music">
     <img  src="icon/music.png">
    <span>Music</span>
      </div> 

    <div class="m-nav" id="effect">
     <img  src="icon/effect.png">
    <span>Effect</span>
      </div> 

    <div class="m-nav" id="voice">
     <img  src="icon/voice-record.png">
    <span>Voice</span>
      </div> 

  </div>


  
   <center>  
  <button class="post-btn" type="submit">Post</button>
   </center>

    </form>
    
   <p id="btn-alert">Add media first.</p>

    <script src="create-posts.js"></script>
  
 </body>  
</html>  
