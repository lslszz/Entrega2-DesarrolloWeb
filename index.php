<?php
include("conex.php");

// Insertar datos del formulario de forma SEGURA
$titulo   = $conn->real_escape_string($_POST['titulo']);
$director = $conn->real_escape_string($_POST['director']);
$year     = intval($_POST['year']);
$email    = $conn->real_escape_string($_POST['email']);
$motivo   = $conn->real_escape_string($_POST['porque']);

$sql_insert = "INSERT INTO peliculas (titulo, director, year, email, motivo) 
               VALUES ('$titulo', '$director', $year, '$email', '$motivo')";

if ($conn->query($sql_insert)) {
    echo "¡Sugerencia guardada correctamente!<br><br>";
} else {
    echo "Error al guardar: " . $conn->error;
}

// Mostrar toda la tabla
$result = $conn->query("SELECT * FROM peliculas");

if ($result->num_rows > 0) {
    echo "<h2>Listado de películas:</h2>";
    echo "<table border='1' cellpadding='5'>";
    echo "<tr><th>ID</th><th>Título</th><th>Director</th><th>Año</th><th>Email</th><th>Motivo</th></tr>";
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['id']}</td>
                <td>{$row['titulo']}</td>
                <td>{$row['director']}</td>
                <td>{$row['year']}</td>
                <td>{$row['email']}</td>
                <td>{$row['motivo']}</td>
              </tr>";
    }
    echo "</table>";
}

echo "<br><br><a href='index.html'>Volver al formulario</a>";

$conn->close();
?>