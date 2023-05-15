
<?php

require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Récupération des données du formulaire
    $log = $_POST['log'];
    $mot_de_passe = $_POST['mot_de_passe'];

    do{
      if ( empty($id_c) || empty($log) || empty($mot_de_passe) ) {
        $errorMessage = "All the fields are required";
        break;
      }

      // add new account to database

      $id_c = "";
      $log = "";
      $mot_de_passe = "";
      $errorMessage="";
      $successMessage="";

      $successMessage = "Account added correctly";

    } while(false);

    // Insertion des données dans la table "Compte"
    $query = "INSERT INTO Compte (log, mot_de_passe) VALUES ('$log', '$mot_de_passe')";
    $result = $mysqli->query($query);

    // Redirection vers la page d'accueil
    header('Location: index.php');
    exit();
}

?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ajouter un compte</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
</head>
<body>

    <h1>Ajouter un compte</h1>

    <form method="POST" action="index.php">
      <div class="row mb-3">
        <label for="id_c">ID_Compte:</label>
        <div class="col-sm-6">
          <input type="number" id="id_c" name="id_c" class="form-control" required{11}>
        </div>
      </div>
      <div class="row mb-3">
        <label for="log">Nom d'utilisateur :</label>
        <div class="col-sm-6">
          <input type="text" name="log" id="log" required>
        </div>
      </div>
      <div class="row mb-3">
        <label for="mot_de_passe">Mot de passe :</label>
        <div class="col-sm-6">
          <input type="password" name="mot_de_passe" id="mot_de_passe" required>
        </div>
      </div>
      <div class="row mb-3">
        <div class="offser-sm-3 col-sm-3 d-grid">
          <button type="Submit" class="btn btn-success">Submit</button>
        </div>
        <div class="offser-sm-3 col-sm-3 d-grid">
          <a class="btn btn-primary" href="/localhost/API/compte/index.php" role="button">Retour à la liste des comptes</a>
        </div>
      </div>
    </form>


</body>
</html>
