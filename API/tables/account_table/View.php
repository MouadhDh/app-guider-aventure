<?php

require_once 'config.php';

// Récupération des comptes
$query = 'SELECT * FROM Compte';
$result = $mysqli->query($query);
if ($result){
    //convert data to json 
		$data = array();
		while ($row = mysqli_fetch_assoc($result)) {
			$data[] = $row;
        }
        echo json_encode($data);
}else{
    die 
}
?>

