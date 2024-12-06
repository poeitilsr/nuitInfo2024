const badgesState = {
    corsola: false,
    quagsire: false,
    gyarados: false,
    kyogre: false
};

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

function updateBadges() {
    Object.keys(badgesState).forEach(badgeId => {
        const badgeElement = document.getElementById(badgeId);
        const isUnlocked = badgesState[badgeId];
        badgeElement.src = isUnlocked ? badgesImages[badgeId].unlocked : badgesImages[badgeId].locked;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    updateBadges();
    console.log("Les badges ont été initialisés.");
});

function unlockBadge(badgeId) {
    if (badgesState.hasOwnProperty(badgeId)) {
        badgesState[badgeId] = true;
        updateBadges();
        console.log(`${badgeId} a été débloqué !`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.movable');
    const badges = document.querySelectorAll('.badge img');
    const qrcode = document.getElementById('qrcode');
    let intervalId;

    function moveImage(image) {
        const maxX = window.innerWidth - image.width;
        const maxY = window.innerHeight - image.height;
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;
        image.style.left = `${x}px`;
        image.style.top = `${y}px`;
    }

    function startMovingImages() {
        intervalId = setInterval(() => {
            images.forEach(moveImage);
        }, 2000);
    }

    function stopMovingImages() {
        clearInterval(intervalId);
    }

    function showQRCodeAndHideImages() {
        qrcode.classList.remove('hidden');
        stopMovingImages();

        images.forEach(img => {
            if (!img.classList.contains('hidden')) {
                img.classList.add('hidden');
            }
        });
    }

    images.forEach(image => {
        image.style.position = 'absolute';
        image.addEventListener('click', (event) => {
            event.stopPropagation();
            moveImage(image);

            const badgeId = image.alt.toLowerCase();
            if (badgesState.hasOwnProperty(badgeId)) {
                unlockBadge(badgeId);
                image.classList.add('hidden');
            }

            showQRCodeAndHideImages();
        });
    });

    badges.forEach(badge => {
        badge.addEventListener('click', (event) => {
            event.stopPropagation();
            const badgeId = badge.id.toLowerCase();
            if (badgesState[badgeId]) {
                showQRCodeAndHideImages();
            }
        });
    });

    document.addEventListener('click', () => {
        qrcode.classList.add('hidden');
        startMovingImages();

        images.forEach(image => {
            if (!badgesState[image.alt.toLowerCase()]) {
                image.classList.remove('hidden');
            }
        });
    });

    startMovingImages();
});