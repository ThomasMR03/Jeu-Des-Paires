<?php
    $imgbase = ["img/chacha.jpg", "img/tofu.jpg", "img/coiff-bouftou.jpg", "img/glace.jpg", "img/bouftou-blanc.jpg",
    "img/cawotte.jpg", "img/bouftou.jpg", "img/chacha.jpg", "img/tofu.jpg", "img/coiff-bouftou.jpg", "img/glace.jpg", "img/bouftou-blanc.jpg", "img/cawotte.jpg", "img/bouftou.jpg"]; // On définie les images.
    $dos = 'img/dos.jpg';  // On définie l'image de dos.
    shuffle($imgbase); //On attribu un mélange au tableau à chaque refresh de la page.
    //var_dump($imgbase) //Console Log ^^
 ?>
    <?php
    
        if(isset($_GET["pseudo"],$_GET["min"],$_GET["sec"])){
            $victoire = true;
            $nomDuJoueur = $_GET["pseudo"];
            $tempsM = $_GET["min"];
            $tempsS = $_GET["sec"];
        }else {
            $victoire = false;
        }
    ?>
<!DOCTYPE html>
<html lang="fr">
<head>
<link href="css/bootstrap.css" rel="stylesheet"> <!-- Link Bootstrap -->
<link rel="stylesheet" type="text/css" href="style.css"> <!-- Link CSS -->

    <title>Jeux-des-paires</title>
    <meta charset="utf-8">
    <meta name="description" content="Jeux des paires">
    <meta name="keywords" content="Jeux Paires Cartes Random Tableau">
    <meta name="viewport" content="width=device-width initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Kumar+One" rel="stylesheet">

    <script type="text/javascript">
        var img = [<?php foreach ($imgbase as $casetabimg => $image){
            echo '"'.$image.'"';
            if ($casetabimg != 13){
                echo ",";
            }
       } ?>];
    </script>

</head>

    <body>
        <div id="titre">
        <h1>JEU DES PAIRES</h1>
        </div>
        <p>Règles du jeu: Afficher toutes les paires pour gagner</p>
        <strong><p style="color:red;">Nombre de paire(s): <span id="paires">0</span></p></strong>
        <span id="chronotime">00:00</span>
        <form name="chronoForm">
        </form>
            
        
         <div id="photo">
        <?php
            if($victoire == true){
                echo "<h3>WIN! Voulez vous recommencer ? <a href='./index.php'> <button>RECOMMENCER</button> </a></h3>";
                echo "<h4>Bien jouer $nomDuJoueur, vous avez gagné en $tempsM : $tempsS !</h4>";
            }else{
                for($i=0; $i <= 13; $i++) { //Function afficher les images + onclick
                echo '<img src="img/dos.jpg" class="photo" onclick="choisir('.$i.')" draggable="false">';
                }
            }
        ?>
        </div>
        
        <script type="text/javascript" src="javascript.js"></script> <!-- Liaison avec JavaScript -->
    </body>
</html>