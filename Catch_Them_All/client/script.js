const pokemonlist = [
    "amonistar.png",
    "carabaffe.png",
    "carapuce.png",
    "dofin.png",
    "flotajou.png",
    "gobou.png",
    "greninja.png",
    "kyogre.png",
    "hypocean.png",
    "leviator.png",
    "lokhlass.png",
    "loupio.png",
    "phione.png",
    "stari.png",
    "volcanion.png",
    "wailmer.png",
];

document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("closeModal");
    const modal = document.getElementById("modal");
    const form = document.getElementById("addPokemonForm");
    const badgeContainer = document.querySelector(".badge");
    const pokemonImageSelect = document.getElementById("pokemonImage");

    pokemonlist.forEach(pokemon => {
        const option = document.createElement("option");
        option.value = `assets/images/${pokemon}`;
        option.textContent = pokemon.replace(".png", "");
        pokemonImageSelect.appendChild(option);
    });

    openModalBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const link = document.getElementById("pokemonLink").value;
        form.reset();
        modal.style.display = "none";
    });

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

    updateBadges();

    function unlockBadge(badgeId) {
        if (badgesState.hasOwnProperty(badgeId)) {
            badgesState[badgeId] = true;
            updateBadges();
            console.log(`${badgeId} a été débloqué !`);
        }
    }

    const images = document.querySelectorAll('.movable');
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

    const carouselImages = document.getElementById("carouselImages");
    const totalImages = carouselImages.children.length;
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }, 3000);
});
