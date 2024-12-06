// État initial des badges (false = non débloqué, true = débloqué)
const badgesState = {
    corsola: false,
    quagsire: false,
    gyarados: false,
    kyogre: true
};

// Images pour chaque badge
const badgesImages = {
    corsola: {
        locked: "https://img.pokemondb.net/sprites/sword-shield/normal/corsola-galarian.png",
        unlocked: "https://img.pokemondb.net/sprites/sword-shield/normal/corsola.png"
    },
    quagsire: {
        locked: "https://img.pokemondb.net/sprites/crystal/shiny/quagsire.png",
        unlocked: "https://img.pokemondb.net/sprites/crystal/normal/quagsire.png"
    },
    gyarados: {
        locked: "https://img.pokemondb.net/sprites/yellow/normal/gyarados.png",
        unlocked: "https://img.pokemondb.net/sprites/yellow/normal/gyarados-color.png"
    },
    kyogre: {
        locked: "https://img.pokemondb.net/sprites/emerald/normal/kyogre.png",
        unlocked: "https://img.pokemondb.net/sprites/emerald/shiny/kyogre.png"
    }
};

// Fonction pour mettre à jour les images selon l'état des badges
function updateBadges() {
    Object.keys(badgesState).forEach(badgeId => {
        const badgeElement = document.getElementById(badgeId);
        const isUnlocked = badgesState[badgeId];
        badgeElement.src = isUnlocked ? badgesImages[badgeId].unlocked : badgesImages[badgeId].locked;
    });
}

// Initialisation des badges au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    updateBadges();
    console.log("Les badges ont été initialisés.");
});

// Exemple : Débloquer un badge (vous pouvez appeler cette fonction lorsque nécessaire)
function unlockBadge(badgeId) {
    if (badgesState.hasOwnProperty(badgeId)) {
        badgesState[badgeId] = true;
        updateBadges();
        console.log(`${badgeId} a été débloqué !`);
    }
}
