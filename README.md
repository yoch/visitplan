# VisitPlan

Carte Leaflet statique et mobile-first pour organiser plusieurs journées de voyage.

## Structure

- `index.html` : coquille de l'application
- `src/app.js` : moteur générique
- `src/styles.css` : interface mobile
- `src/days/` : une définition de données par journée
- `src/days/index.js` : registre des journées

## Ajouter une journée

1. Copier `src/days/2026-07-21.js`.
2. Modifier les points, routes et étapes.
3. Importer la nouvelle journée dans `src/days/index.js`.
4. Ouvrir avec `?day=AAAA-MM-JJ`.

Exemple :

```text
https://yoch.github.io/visitplan/?day=2026-07-21
```

## Lancer localement

```bash
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Publication

Le workflow `.github/workflows/pages.yml` publie automatiquement le contenu de `main` sur GitHub Pages.
