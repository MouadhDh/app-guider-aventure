<?php
// Inclusion du fichier de configuration
require_once "config.php";

// Requête SQL pour récupérer tous les enregistrements de la table
$sql = "SELECT * FROM table_nom_de_la_table";

// Exécution de la requête
if($resultat = mysqli_query($connexion, $sql)){
    if(mysqli_num_rows($resultat) > 0){
        echo "<table>";
            echo "<thead>";
                echo "<tr>";
                    echo "<th>ID</th>";
                    // Ajouter des colonnes pour chaque champ de la table
                    echo "<th>Champ 1</th>";
                    echo "<th>Champ 2</th>";
                    echo "<th>Champ 3</th>";
                    //...
                    echo "<th>Actions</th>";
                echo "</tr>";
            echo "</thead>";
            echo "<tbody>";
            // Boucle pour parcourir tous les enregistrements
            while($row = mysqli_fetch_array($resultat)){
                echo "<tr>";
                    echo "<td>" . $row['id'] . "</td>";
                    // Afficher chaque champ de la table
                    echo "<td>" . $row['champ1'] . "</td>";
                    echo "<td>" . $row['champ2'] . "</td>";
                    echo "<td>" . $row['champ3'] . "</td>";
                    //...
                    echo "<td>";
                        // Ajouter des liens pour les actions de CRUD (éditer, supprimer)
                        echo "<a href='table_nom_de_la_table/read.php?id=". $row['id'] ."' title='Afficher' data-toggle='tooltip'><span class='glyphicon glyphicon-eye-open'></span></a>";
                        echo "<a href='table_nom_de_la_table/edit.php?id=". $row['id'] ."' title='Modifier' data-toggle='tooltip'><span class='glyphicon glyphicon-pencil'></span></a>";
                        echo "<a href='table_nom_de_la_table/delete.php?id=". $row['id'] ."' title='Supprimer' data-toggle='tooltip'><span class='glyphicon glyphicon-trash'></span></a>";
                    echo "</td>";
                echo "</tr>";
            }
            echo "</tbody>";
        echo "</table>";
        // Libération de la mémoire associée au résultat
        mysqli_free_result($resultat);
    } else{
        echo "Aucun enregistrement trouvé.";
    }
} else{
    echo "ERREUR: Impossible d'exécuter la requête: $sql. " . mysqli_error($connexion);
}

// Fermeture de la connexion
mysqli_close($connexion);
?>
