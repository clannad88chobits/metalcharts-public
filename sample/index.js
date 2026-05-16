document.addEventListener("DOMContentLoaded", async () => {

    // Si on n'est PAS sur la page Hall of Fame, on fait le code normal
    if (!window.location.pathname.includes("halloffame")) {
        const albums = await fetch("/mc-data/albums").then(r => r.json());
        initHallOfFame(albums);
    }

    // Navigation vers MetalCharts
    const entry = document.getElementById("entry-banner");
    if (entry) {
        entry.addEventListener("click", () => {
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = "/metalcharts";
            }, 800);
        });
    }
});
