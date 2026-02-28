<?php 
session_start();

$upload_dir = "temp_uploads/";

if(!is_dir($upload_dir)){
    mkdir($upload_dir, 0755, true);
}

$filename = bin2hex(random_bytes(8)) . ".jpg";
$target_file = $upload_dir . $filename;
move_uploaded_file($_FILES["post_image"]["tmp_name"], $target_file);

echo $filename;