<?php

// Configuration de la base de données
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'votre_nom_d_utilisateur');
define('DB_PASSWORD', 'votre_mot_de_passe');
define('DB_NAME', 'nom_de_votre_base_de_donnees');

// Connexion à la base de données MySQL
$connexion = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Vérification de la connexion
if($connexion === false){
    die("ERREUR : Impossible de se connecter. " . mysqli_connect_error());
}

?>
