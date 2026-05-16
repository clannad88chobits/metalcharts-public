# metalcharts-public
Public showcase of the MetalCharts project.
# MetalCharts

MetalCharts est un projet indépendant proposant des classements musicaux
spécialisés dans le Metal. Le site présente des charts d’artistes, d’albums,
des analyses par pays, labels, genres, ainsi qu’un module avancé de tri des
albums classés.

Les données utilisées sont exclusivement publiques (noms d’artistes, albums,
pays, labels, dates de sortie) et sont enrichies par des calculs internes
(points, scores cumulés, meilleures positions, semaines classées, etc.).

## Fonctionnalités principales

- Classements d’albums (MetalCharts)
- Classements d’artistes (ArtistCharts)
- Module de tri des albums (Trialbums)
- Classements par pays (CountryCharts)
- Classements par labels (LabelCharts)
- Classements par genres (GenreCharts)
- Nouveaux albums entrés dans le Top 100 (NewEntries)
- Nouvelles vidéos publiées par les artistes classés (NewVideos)
- Hall of Fame : rotation des albums ayant atteint la 1ère place
- Interface multilingue : FR, DE, PT, ES, EN
- Autocomplétion avancée (recherche d’artistes)
- Normalisation des noms (slug) compatible fichiers images
- Site statique optimisé pour la rapidité et le responsive

## Technologies utilisées

### Frontend
- Astro
- HTML5
- CSS3
- JavaScript (vanilla)

### Backend / Outils
- C# (scripts BuildXXX pour générer les fichiers JSON)

### Données
- JSON statiques
- Calculs internes (points, scores, best rank, etc.)

### Déploiement
- Netlify

## Pages principales

- **MetalCharts (Hall of Fame)** — rotation des albums n°1
- **ArtistCharts** — classement des artistes
- **MetalCharts (Albums)** — classement hebdomadaire
- **Trialbums** — module de tri des albums classés
- **CountryCharts** — classement par pays
- **LabelCharts** — classement par labels
- **GenreCharts** — classement par genres
- **NewEntries** — nouveaux albums classés
- **NewVideos** — nouvelles vidéos des artistes classés
- **About** — présentation du projet
- **Contact** — à venir

## Objectifs du projet

- Proposer une alternative moderne aux charts traditionnels
- Offrir une interface rapide, claire et accessible
- Rendre les données consultables et triables facilement
- Développer un écosystème autour de MetalCharts (site + chaîne YouTube)

## Démo

Le site est actuellement en cours de développement et déployé sur Netlify.
(Lien à ajouter lorsque le nom de domaine sera défini)

## À propos

MetalCharts est un projet personnel, non commercial, en évolution constante.

