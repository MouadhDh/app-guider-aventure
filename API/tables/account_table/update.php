<?php

require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Récupération des données du formulaire
    $id = $_POST['id'];
    $log = $_POST['log'];
    $mot_de_passe = $_POST['mot_de_p'];
}
?>
