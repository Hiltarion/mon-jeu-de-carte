function jouer(choixJoueur) {
    let couleurs = ['rouge', 'noir'];
    let cartesRouges = ['H', 'D'];  // ♥ ♦
    let cartesNoires = ['S', 'C'];  // ♠ ♣
    let valeurs = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];

    // Tirer une carte au hasard
    let couleurTirée = couleurs[Math.floor(Math.random() * couleurs.length)];
    let symbole = couleurTirée === 'rouge' ? 
                  cartesRouges[Math.floor(Math.random() * cartesRouges.length)] : 
                  cartesNoires[Math.floor(Math.random() * cartesNoires.length)];
    let valeur = valeurs[Math.floor(Math.random() * valeurs.length)];

    let resultat = document.getElementById("resultat");
    let imageCarte = document.getElementById("imageCarte");

    // Construire le nom du fichier image (ex: 10_hearts.png)
    let nomImage = `images/${valeur}${symbole}.svg`;

    // Affichage du résultat
    if (choixJoueur === couleurTirée) {
        resultat.innerHTML = `<h2>Bravo ! tu donne ${valeur.toUpperCase()} gorgées ! 🎉</h2>`;
    } else {
        resultat.innerHTML = `<h2>Raté... tu bois ${valeur.toUpperCase()} gorgées ! 😢</h2>`;
    }

    // Afficher l’image de la carte
    imageCarte.src = nomImage;
    imageCarte.style.display = "block";
}
