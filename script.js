function jouer(choixJoueur) {
    let couleurs = ['rouge', 'noir'];
    let carte = couleurs[Math.floor(Math.random() * couleurs.length)];

    let resultat = document.getElementById("resultat");

    if (choixJoueur === carte) {
        resultat.innerHTML = `<h2>Bravo ! C'était ${carte.toUpperCase()} 🎉</h2>`;
    } else {
        resultat.innerHTML = `<h2>Raté... C'était ${carte.toUpperCase()} 😢</h2>`;
    }
}

