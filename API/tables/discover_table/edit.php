<?php
require_once 'config.php';

if(isset($_POST['update'])) {
  $id = $_POST['id'];
  $aventure = $_POST['aventure'];
  $date_av = $_POST['date_av'];
  $emplacement = $_POST['emplacement'];
  $choix = $_POST['choix'];

  $sql = "UPDATE discover SET aventure=:aventure, date_av=:date_av, emplacement=:emplacement, choix=:choix WHERE id_D=:id";
  $stmt = $pdo->prepare($sql);
  $stmt->execute(['aventure' => $aventure, 'date_av' => $date_av, 'emplacement' => $emplacement, 'choix' => $choix, 'id' => $id]);

  header("Location: index.php");
}

$id = $_GET['id'];
$sql = "SELECT * FROM discover WHERE id_D=:id";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => $id]);
$row = $stmt->fetch();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Discover/title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
</head>
<body>
  <h2>Edit Discover</h2>
  <form method="post">
    <input type="hidden" name="id" value="<?php echo $row['id_D']; ?>">
    <label>Aventure</label>
    <input type="text" name="aventure" value="<?php echo $row['aventure']; ?>"><br><br>
    <label>Date</label>
    <input type="date" name="date_av" value="<?php echo $row['date_av']; ?>"><br><br>
    <label>Emplacement</label>
    <input type="text" name="emplacement" value="<?php echo $row['emplacement']; ?>"><br><br>
    <label>Choix</label>
    <input type="text" name="choix" value="<?php echo $row['choix']; ?>"><br><br>
    <input type="submit" name="update" value="Update">
  </form>
</body>
</html>
