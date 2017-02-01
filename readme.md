##JEU DES PAIRES

Déclaration des variables
var tab : Toutes les images dans un tableau

Dans un premier temps :

- Affichage des images dans le HTML et du dos superposé (Via le JavaScript) 

//Exemple : var dos ='img/dos.png';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Dans un second temps la fonction random mélange les cartes aléatoirement.

//Exemple : function random(tab){ //fonction qui permet de melanger les images
    var j, x, i;
    for(i = tab.length; i; i--) { //pour i=longueur totale du tableau, i toujours vrai(sup a zero), on decremente i(on lui enleve 1).
        j = Math.floor(Math.random() * i);//Math.floor arondie a la valeur superieure,Math.random donne un nombre aleatoire (entre 0 et 1)le tout * i
        x = tab[i-1];  //decale de 1 à l'interrieur du tableau(ex:si i=13 X deviendra lionne)
        tab[i-1] = tab[j]; //si i= 13 tab 12(i-1) deviendras J(j=nombre aleatoire)
        tab[j] = x; //j deviens X(pour cette exemple x=lionne)
    }
}
random(img);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

La fonction choisir nous permet de cliquer sur deux cartes afin de constituer une paire.
Dans cette fonction se trouve aussi des paramètres empêchant la triche via le double clique sur une même image.

//Exemple : 

	function choisir(carte) { //Choix des cartes quand l'user clique

		if (norepeat == true) { //Empêche le chrono de se répèter.
			timerID = setInterval("chrono()", 1000);
			norepeat = false;
		}

		if (clique == 2) { //Au delà du deuxième clique
			return; //On affiche rien
		}

		if (clique == 0) { //Au premier clique
			choixun = carte; //On attribue le numéro de la carte choisie au premier choix
			document.images[carte].src = img[carte]; //Affiche l'image de la carte correspondant au choix
			document.images[choixun].style.pointerEvents = 'none'; // Désactive l'évènement du clique
			clique = 1 //On passe le clique à 1
		}
		else{ //Au deuxième clique
			clique = 2 //On passe le clique à 2
			choixdeux = carte; //On attribue le numéro de la carte choisie au deuxième choix
			document.images[carte].src = img[carte]; //Affiche l'image de la carte correspondant au choix
			timer = setTimeout("verif()", 500);
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

La fonction vérif qui est associé à la fonction choisir, permet au JavaScript de reconnaître si deux cartes sont identique, les laisse retournés et applique une légère opacitée.

//Exemple : 

	function verif() { // Vérifie si une paire a été faite
		clique = 0;
		if (img[choixdeux] == img[choixun]) {
			paires++;
			document.getElementById("paires").innerHTML = paires;
			document.images[choixun].style.opacity = '0.3';
			document.images[choixun].style.pointerEvents = 'none';
			document.images[choixdeux].style.opacity = '0.3';
			document.images[choixdeux].style.pointerEvents = 'none';
		} else {
			//alert('Les 2 images sont différentes...');
			document.images[choixun].src = dos;
			document.images[choixun].style.pointerEvents = 'auto';
			document.images[choixdeux].src = dos;
			return;
		}
		if (paires==14) {
			clearInterval(timerID); //Arrête le chrono quand toutes les paires sont trouvées.
			document.getElementById('photo').style.display = 'block';
			document.getElementById('photo').style.flexDirection = 'column';
			document.getElementById('photo').innerHTML = '<h1> Vous avez gagné !</h1><br /><input type="button" class="restart" value="Recommencer" onClick="window.location.reload()">';
		}
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Pour l'ajout du chronomètre, nous avons codé une fonction qui démarre au premier clique sur une image, puis l'arrête quand toutes les paires sont trouvées.

//Exemple :

	var timerID = 0;
	var sec = 0;
	var min = 0;

	function chrono(){ //Fonction chrono
		if (sec<59){
			sec++;
			if(sec<10){
				sec = "0" +sec;//Affiche 00 avant la première seconde
			}
		}
		else if (sec=59){
			min++;
			sec = "0" + 0;
		}
		document.getElementById("chronotime").innerHTML = min + ":" + sec + "";
	}

A la fin du jeu, le joueur à la possibilité de recommencer une nouvelle partie grâce au boutton "Recommencer".