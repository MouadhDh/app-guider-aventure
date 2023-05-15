
<?php

require_once 'config.php';

// Récupération des comptes
$sql = "SELECT * FROM discover";
$result = $mysqli->query($query);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Discover/title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
</head>
<body>
    <div class="container my-5">
        <h2>Discover List</h2>
        <a class='btn btn-primary' href='/API/discover/creat.php' role='button'>Add New Discover</a>
        <br>
          <table class="table">
            <thead>
                <tr>
                    <th>id_d</th>
                    <th>aventure</th>
                    <th>date_av</th>
                    <th>emplacement</th>
                    <th>choix</th>
                </tr>
            </thead>
            <tbody>
                     
               //read data of each row 
               while($row = $result->fetch_assoc()) {
                echo "
                <tr>
                    <td>$row[id_d]</td>
                    <td>$row[aventure]</td>
                    <td>$row[date_av]</td>
                    <td>$row[emplacement]</td>
                    <td>$row[choix]</td>
                    <td>
                        <a class='btn btn-primary btn-sm' href='/API/discover/edit.php?id=$row[id_d]'>Edit</a>
                        <a class='btn btn-danger btn-sm' href='/API/discover/delete.php?id=$row[id_d]'>Delete</a>
                    </td>
                </tr>
                ";
                }
                $conn->close();
                ?>

                



                

                

                    
</body>
</html>