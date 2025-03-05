function jouer(choixJoueur) {
    let couleurs = ['rouge', 'noir'];
    let cartesRouges = ['hearts', 'diamonds'];  // ♥ ♦
    let cartesNoires = ['spades', 'clubs'];  // ♠ ♣
    let valeurs = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];

    // Tirer une carte au hasard
    let couleurTirée = couleurs[Math.floor(Math.random() * couleurs.length)];
    let symbole = couleurTirée === 'rouge' ? 
                  cartesRouges[Math.floor(Math.random() * cartesRouges.length)] : 
                  cartesNoires[Math.floor(Math.random() * cartesNoires.length)];
    let valeur = valeurs[Math.floor(Math.random() * valeurs.length)];

    let resultat = document.getElementById("resultat");
    let imageCarte = document.getElementById("imageCarte");

    // Construire le nom du fichier image (ex: 10_hearts.png)
    let nomImage = `images/${valeur}_${symbole}.png`;

    // Affichage du résultat
    if (choixJoueur === couleurTirée) {
        resultat.innerHTML = `<h2>Bravo ! C'était ${valeur.toUpperCase()} ${symbole.toUpperCase()} 🎉</h2>`;
    } else {
        resultat.innerHTML = `<h2>Raté... C'était ${valeur.toUpperCase()} ${symbole.toUpperCase()} 😢</h2>`;
    }

    // Afficher l’image de la carte
    imageCarte.src = nomImage;
    imageCarte.style.display = "block";
}
