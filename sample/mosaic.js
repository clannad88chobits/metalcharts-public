/* ---------------------------------------------------------
   HALL OF FAME — MOSAÏQUE (version JS pour Razor)
--------------------------------------------------------- */

let getRandomNumberOneRef = null;
let timeouts = [];

const INITIAL_SPAWN = 4;
const SPAWN_DELAY = 300;

/* ---------------------------------------------------------
   UTILITAIRES
--------------------------------------------------------- */

function randomSize(elem) {
    const sizes = [180, 220, 260, 300];
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    elem.style.width = size + "px";
}

function randomPosition(elem) {
    const container = document.getElementById("hof-container");
    if (!container) return;

    const width = elem.offsetWidth || 200;
    const height = elem.offsetHeight || 200;

    const zoomFactor = 1.08;
    const futureWidth = width * zoomFactor;
    const futureHeight = height * zoomFactor;

    const maxX = Math.max(0, container.clientWidth - futureWidth);
    const maxY = Math.max(0, container.clientHeight - futureHeight);

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    elem.style.left = `${x}px`;
    elem.style.top = `${y}px`;
}

/* ---------------------------------------------------------
   AFFICHAGE D’UN ALBUM
--------------------------------------------------------- */

function displayAlbum(album) {
    const zone = document.getElementById("hof-display");
    if (!zone || !album) return;

    const elem = document.createElement("div");
    elem.className = "hof-album";

    const angle = (Math.random() * 6 - 3).toFixed(2) + "deg";
    elem.style.setProperty("--tilt-angle", angle);

    elem.style.zIndex = String(Math.floor(Math.random() * 10) + 1);

    const img = document.createElement("img");
    img.src = album.cover;
    img.alt = album.title;
    elem.appendChild(img);

    const logo = document.createElement("div");
    logo.className = "hof-logo-overlay";
    logo.style.backgroundImage = "url('/assets/favicon/favicon_metalcharts.png')";
    elem.appendChild(logo);

    timeouts.push(setTimeout(() => { logo.style.opacity = "1"; }, 300));
    timeouts.push(setTimeout(() => { logo.style.opacity = "0"; }, 2000));

    zone.appendChild(elem);

    randomSize(elem);
    randomPosition(elem);

    requestAnimationFrame(() => {
        elem.style.opacity = "1";
        elem.classList.add("zoom");
    });

    timeouts.push(setTimeout(() => fadeOut(elem), 6000));
}

function fadeOut(elem) {
    elem.classList.add("hof-fadeout");
    timeouts.push(setTimeout(() => elem.remove(), 1200));
}

/* ---------------------------------------------------------
   MOSAÏQUE
--------------------------------------------------------- */

function cycle() {
    if (!getRandomNumberOneRef) return;

    const album = getRandomNumberOneRef();
    displayAlbum(album);

    timeouts.push(setTimeout(cycle, 5000));
}

function startMosaic(albums, getRandomNumberOne) {
    getRandomNumberOneRef = getRandomNumberOne;

    cycle();

    for (let i = 0; i < INITIAL_SPAWN; i++) {
        timeouts.push(setTimeout(() => cycle(), i * SPAWN_DELAY));
    }
}

function stopMosaic() {
    timeouts.forEach(id => clearTimeout(id));
    timeouts = [];
}

window.startMosaic = startMosaic;
window.stopMosaic = stopMosaic;
