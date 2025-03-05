function jouer(choixJoueur) {
    let couleurs = ['rouge', 'noir'];
    let cartesRouges = ['♥', '♦'];
    let cartesNoires = ['♠', '♣'];
    let valeurs = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Dame', 'Roi'];

    // Tirer une carte au hasard
    let couleurTirée = couleurs[Math.floor(Math.random() * couleurs.length)];
    let symbole = couleurTirée === 'rouge' ? 
                  cartesRouges[Math.floor(Math.random() * cartesRouges.length)] : 
                  cartesNoires[Math.floor(Math.random() * cartesNoires.length)];
    let valeur = valeurs[Math.floor(Math.random() * valeurs.length)];

    let resultat = document.getElementById("resultat");

    if (choixJoueur === couleurTirée) {
        resultat.innerHTML = `<h2>Bravo ! C'était ${valeur} ${symbole} 🎉</h2>`;
    } else {
        resultat.innerHTML = `<h2>Raté... C'était ${valeur} ${symbole} 😢</h2>`;
    }
}


