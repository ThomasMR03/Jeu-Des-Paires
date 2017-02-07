<?php
    $imgbase = ["img/chacha.jpg", "img/tofu.jpg", "img/coiff-bouftou.jpg", "img/glace.jpg", "img/bouftou-blanc.jpg",
    "img/cawotte.jpg", "img/bouftou.jpg", "img/mob-leponge.jpg", "img/ogrest.png", "img/croca.jpg", "img/gelano.jpg", "img/tronko.jpeg",
    "img/Piou.jpg", "img/caline.jpeg"]; // On définie les images.
    $dos = 'img/dos.jpg';  // On définie l'image de dos.
    shuffle($imgbase); //On attribu un mélange au tableau à chaque refresh de la page.
    //var_dump($imgbase) //Console Log ^^
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
            if ($casetabimg != 27){
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
            for ($i=0; $i<=27; $i++) { // Boucle qui parcours le tableau d'images
           echo '<img src="img/dos.jpg" class="photo" onclick="choisir('.$i.')" draggable="false">'; //A chaque tour, on écrit dans le HTML
        }
        ?>
        </div>
        
        <script type="text/javascript" src="javascript.js"></script> <!-- Liaison avec JavaScript -->
    </body>
</html>