<?php
$servername = "localhost";  // Replace with your database server
$username = "root";         // Replace with your MySQL username
$password = "";             // Replace with your MySQL password
$dbname = "sbi_connect";    // The name of your database

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
