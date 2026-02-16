<?php

$conn = new mysqli("localhost", "root", "", "texmee");

if($conn->connect_error){
die("connection failed:" .$conn->connect_error);
}

echo"Connection successfully!"; 

echo phpversion();


