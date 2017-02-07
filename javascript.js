var dos = 'img/dos.jpg'; // On définie l'image de dos.
var clique = 0; //Nombre de cliques
var paires = 0; //Nombre de paires
var choixun; //Choix de la 1ère carte
var choixdeux; //Choix de la 2ème carte
var norepeat = true; //Empeche le chrono de se répéter.

//////////////////////////////////////////////////////////////////Choix des cartes\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

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



//////////////////////////////////////////////////////////////////Vérifie les cartes\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

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
	if (paires==7) {
		document.location.href = "./index.php?pseudo="+prompt("Quel est votre pseudo")+"&min="+min+"&sec="+sec;
	}
}

//////////////////////////////////////////////////////////////////Chrono\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

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