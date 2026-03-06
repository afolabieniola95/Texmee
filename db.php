<?php
$host = "localhost";
$db = "texmee";
$user = "root";
$pass = "";

try{
    $pdo = new PDO(
        "mysql: hos t= $host; 
        dbname = $db;
        charset = utf8mb4",
        $user,
        $pass,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );

} catch (PDOException $e){
    die("Database connection failed");
}