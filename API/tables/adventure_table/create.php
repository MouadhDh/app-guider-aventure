<?php
// Include config file
require_once "config.php";
 
// Define variables and initialize with empty values
$naventure = $prix = "";
$naventure_err = $prix_err = "";
 
// Processing form data when form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST"){
    // Validate name of adventure
    $input_naventure = trim($_POST["naventure"]);
    if(empty($input_naventure)){
        $naventure_err = "Please enter a name of adventure.";
    } else{
        $naventure = $input_naventure;
    }
    
    // Validate price
    $input_prix = trim($_POST["prix"]);
    if(empty($input_prix)){
        $prix_err = "Please enter the price of adventure.";     
    } elseif(!ctype_digit($input_prix)){
        $prix_err = "Please enter a positive integer value.";
    } else{
        $prix = $input_prix;
    }
    
    // Check input errors before inserting in database
    if(empty($naventure_err) && empty($prix_err)){
        // Prepare an insert statement
        $sql = "INSERT INTO aventure (naventure, prix) VALUES (?, ?)";
 
        if($stmt = mysqli_prepare($link, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "si", $param_naventure, $param_prix);
            
            // Set parameters
            $param_naventure = $naventure;
            $param_prix = $prix;
            
            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                // Records created successfully. Redirect to landing page
                header("location: index.php");
                exit();
            } else{
                echo "Something went wrong. Please try again later.";
            }
        }
         
        // Close statement
        mysqli_stmt_close($stmt);
    }
    
    // Close connection
    mysqli_close($link);
}
?>
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Create New Adventure</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
    <style type="text/css">
        .wrapper{
            width: 500px;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="page-header">
                        <h2>Create New Adventure</h2>
                    </div>
                    <p>Please fill this form and submit to add a new adventure to the database.</p>
                    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
                        <div class="form-group <?php echo (!empty($naventure_err)) ? 'has-error' : ''; ?>">
                            <label>Name of Adventure</label>
                            <input type="text" name="naventure" class="form-control" value="<?php echo $naventure; ?>">
                            <span class="help-block"><?php echo $naventure_err;?></span>
                        </div>
                        <div class="form-group <?php echo (!empty($prix_err)) ? 'has-error' : ''; ?>">
                            <label>Price of Adventure</label>
                            <input type="text" name="prix" class="form-control" value="<?php echo $prix; ?>">
                            <span class="help-block"><?php echo $prix_err;?></span>
                        </div>
                    </form>
