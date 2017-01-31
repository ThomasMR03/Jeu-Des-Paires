var imgbase = ["img/chacha.jpg", "img/tofu.jpg", "img/coiff-bouftou.jpg", "img/glace.jpg", "img/bouftou-blanc.jpg",
 "img/cawotte.jpg", "img/bouftou.jpg", "img/mob-leponge.jpg", "img/ogrest.png", "img/croca.jpg"] // On définie les images
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
		document.images[choixun].style.pointerEvents = 'none'; // Désactive l'évènement du clique
		clique = 1 //On passe le clique à 1
	}
	else{ //Au deuxième clique
		clique = 2 //On passe le clique à 2
		choixdeux = carte; //On attribue le numéro de la carte choisie au deuxième choix
		document.images[carte].src = img[carte]; //Affiche l'image de la carte correspondant au choix
		timer = setInterval("verif()", 500);
	}
}

function afficherimage() { // Fonction pour afficher les images au chargement de la page
	for (i=0; i<=img.length-1; i++) { // Boucle qui parcours le tableau d'images
		document.getElementById('photo').innerHTML += '<img src="img/dos.png" class="photo" onclick="choisir('+i+')" draggable="false">' //A chaque tour, on écrit dans le HTML
	}
}

afficherimage(); // Charge la fonction au chargement de la page

function verif() { // Vérifie si une paire a été faite
	clearInterval(timer);
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

var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0
function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours()-1
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
}
function chronoStart(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()
	chrono()
}
function chronoContinue(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()-diff
	start = new Date(start)
	chrono()
}
function chronoReset(){
	document.getElementById("chronotime").innerHTML = "0:00:00:000"
	start = new Date()
}
function chronoStopReset(){
	document.getElementById("chronotime").innerHTML = "0:00:00:000"
	document.chronoForm.startstop.onclick = chronoStart
}
function chronoStop(){
	document.chronoForm.startstop.value = "start!"
	document.chronoForm.startstop.onclick = chronoContinue
	document.chronoForm.reset.onclick = chronoStopReset
	clearTimeout(timerID)
}