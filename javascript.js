var imgbase = ["img/ane.jpg", "img/chat.jpg", "img/chien.jpg", "img/lama.jpg", "img/lapins.jpg",
 "img/lionne.jpg", "img/ours.jpg"] // On définie les images
 var img = imgbase.concat(imgbase); // On copie le tableau pour avoir les images en double.
 var dos = 'img/dos.png'; // On définie l'image de dos.


  function random(tab){ //fonction qui permet de melanger les images
    var j, x, i;
    for(i = tab.length; i; i--) { //pour i=longueur totale du tableau, i toujours vrai(sup a zero), on decremente i(on lui enleve 1).
        j = Math.floor(Math.random() * i);//Math.floor arondie a la valeur superieure,Math.random donne un nombre aleatoire (entre 0 et 1)le tout * i
        x = tab[i-1];  //decale de 1 à l'interrieur du tableau(ex:si i=13 X deviendra lionne)
        tab[i-1] = tab[j]; //si i= 13 tab 12(i-1) deviendras J(j=nombre aleatoire)
        tab[j] = x; //j deviens X(pour cette exemple x=lionne)
    }
}
random(img);

var clique = 0; //Nombre de cliques
var paires = 0; //Nombre de paires
var choixun; //Choix de la 1ère carte
var choixdeux; //Choix de la 2ème carte

function choisir(carte) { //Choix des cartes quand l'user clique

	if (clique == 2) { //Au delà du deuxième clique
		return; //On affiche rien
	}

	if (clique == 0) { //Au premier clique
		choixun = carte; //On attribue le numéro de la carte choisie au premier choix
		document.images[carte].src = img[carte]; //Affiche l'image de la carte correspondant au choix
		clique = 1 //On passe le clique à 1
	}
	else{ //Au deuxième clique
		clique = 2 //On passe le clique à 2
		choixdeux = carte; //On attribue le numéro de la carte choisie au deuxième choix
		document.images[carte].src = img[carte]; //Affiche l'image de la carte correspondant au choix
		timer = setInterval("verif()", 500);
	}
}

function verif() { // Vérifie si une paire a été faite
	clearInterval(timer);
	clique = 0;
	if (img[choixdeux] == img[choixun]) {
		paires++;
		document.getElementById("paires").innerHTML = paires;
		document.images[choixun].removeAttribute('onlick');
		document.images[choixun].style.opacity = '0.3';
		document.images[choixun].style.cursor = 'not-allowed';
		document.images[choixdeux].removeAttribute('onlick');
		document.images[choixdeux].style.opacity = '0.3';
		document.images[choixdeux].style.cursor = 'not-allowed';
	} else {
		//alert('Les 2 images sont différentes...');
		document.images[choixun].src = dos;
		document.images[choixdeux].src = dos;
		return;
	}
	if (paires==7) {
		document.getElementById('photo').style.display = 'block';
		document.getElementById('photo').style.flexDirection = 'column';
		document.getElementById('photo').innerHTML = '<h1> Vous avez gagné !</h1><br /><input type="button" class="restart" value="Recommencer" onClick="window.location.reload()">';
	}
}

function random() { // Fonction pour mélanger les cartes au début
	for(var i=img.length; i; i--) { //pour i=longueur totale du tableau, i toujours vrai(sup a zero), on decremente i(on lui enleve 1).
		j = Math.floor(Math.random() * i);//Math.floor arondie a la valeur superieure,Math.random donne un nombre aleatoire (entre 0 et 1)le tout * i
		x = img[i-1];  //decale de 1 à l'interrieur du tableau(ex:si i=13 X deviendra lionne)
		img[i-1] = img[j]; //si i= 13 img 12(i-1) deviendras J(j=nombre aleatoire)
		img[j] = x; //j deviens X(pour cette exemple x=lionne)
	}
}