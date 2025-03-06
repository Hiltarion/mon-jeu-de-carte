  //afficher le dos de carte
    window.onload = function() {
    let imageCarte = document.getElementById("imageCarte");
    imageCarte.src = "images/back.svg"; // Afficher le dos de la carte au départ
    imageCarte.style.display = "block";
};

function jouer(choixJoueur) {
    let couleurs = ['rouge', 'noir'];
    let cartesRouges = ['coeur', 'carreau'];  // ♥ ♦
    let cartesNoires = ['pique', 'trefle'];  // ♠ ♣
    let valeurs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    // Tirer une carte au hasard
    let couleurTirée = couleurs[Math.floor(Math.random() * couleurs.length)];
    let symbole = couleurTirée === 'rouge' ? 
                  cartesRouges[Math.floor(Math.random() * cartesRouges.length)] : 
                  cartesNoires[Math.floor(Math.random() * cartesNoires.length)];
    let valeur = valeurs[Math.floor(Math.random() * valeurs.length)];

    let resultat = document.getElementById("resultat");
    let imageCarte = document.getElementById("imageCarte");
    let etape2 = document.getElementById("etape2");

    // Construire le nom du fichier image (ex: 10_coeur.svg)
    let nomImage = `images/${valeur}_${symbole}.svg`;

    // Affichage du résultat
    if (choixJoueur === couleurTirée) {
        resultat.innerHTML = `<h2>Bravo ! tu donnes 1 gorgée ! 🎉</h2>`;
    } else {
        resultat.innerHTML = `<h2>Raté... tu bois 1 gorgée ! 😢</h2>`;
    }

    // Afficher l’image de la carte
    imageCarte.src = nomImage;
    imageCarte.style.display = "block";

    // Sauvegarder la famille de la carte pour l'étape 2
    imageCarte.setAttribute("data-famille", symbole);

    // Afficher l'étape 2
    etape2.style.display = "block";
}


  
