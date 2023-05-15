<?php

$host = 'localhost';
$user = 'root';
$password = '';
$database = 'my_data_base';

// Connexion à la base de données
$mysqli = new mysqli($host, $user, $password, $database);

// Vérification de la connexion
if ($mysqli->connect_error) {
    die('Erreur de connexion (' . $mysqli->connect_errno . ') '
            . $mysqli->connect_error);
}

?>
