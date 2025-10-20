<?php
$servername = "mysql.inf.uct.cl";
$username = "imellado";
$password = "imellado"; 
$dbname = "imellado"; 

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
// Seleccionar la base de datos
$conn->select_db($dbname);
?>