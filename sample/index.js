document.addEventListener("DOMContentLoaded", async () => {
  if (!window.location.pathname.includes("halloffame")) {
    const albums = await fetch("/mc-data/albums").then(r => r.json());
    initHallOfFame(albums);
  }
});
