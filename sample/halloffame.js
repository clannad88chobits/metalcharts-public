async function loadHallOfFame() {
    try {
        const response = await fetch("mc-data/hof/hof.json");
        if (!response.ok) {
            console.error("Erreur de chargement du JSON Hall of Fame :", response.status);
            return [];
        }

        const albums = await response.json();
        console.log("Hall of Fame chargé :", albums.length, "albums");
        return albums;

    } catch (err) {
        console.error("Erreur JSON :", err);
        return [];
    }
}

function spawnInstantCovers() {
    const zone = document.getElementById("hof-display");
    const container = document.getElementById("hof-container");
    if (!zone || !container) return;

    const instantCovers = [
        "/assets/albums/thornstar.jpg",
        "/assets/albums/fegefeuer.jpg",
        "/assets/albums/unbroken.jpg",
    ];

    instantCovers.forEach((src, index) => {
        const elem = document.createElement("div");
        elem.className = "hof-album";

        const size = 250 + Math.random() * 20;
        elem.style.width = `${size}px`;
        elem.style.height = `${size}px`;

        const angle = (Math.random() * 6 - 3).toFixed(2) + "deg";
        elem.style.setProperty("--tilt-angle", angle);

        const maxX = container.clientWidth - size;
        const maxY = container.clientHeight - size;
        elem.style.left = `${Math.random() * maxX}px`;
        elem.style.top = `${Math.random() * maxY}px`;

        const imgElem = document.createElement("img");
        imgElem.src = src;
        imgElem.alt = "MetalCharts";
        elem.appendChild(imgElem);

        zone.appendChild(elem);

        requestAnimationFrame(() => {
            elem.style.opacity = "1";
            elem.classList.add("zoom");
        });

        setTimeout(() => {
            elem.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            elem.style.opacity = "0";
            elem.style.transform = "scale(0.7) rotate(var(--tilt-angle))";
            setTimeout(() => elem.remove(), 900);
        }, 6000 + index * 150);
    });
}

function initHallOfFame(albums) {
    spawnInstantCovers();

    startMosaic(albums, () => {
        return albums[Math.floor(Math.random() * albums.length)];
    });

    window.addEventListener("beforeunload", () => {
        stopMosaic();
    });
}

loadHallOfFame().then(albums => {
    if (!albums.length) {
        console.warn("Aucun album chargé pour le Hall of Fame.");
        return;
    }

    initHallOfFame(albums);
});
