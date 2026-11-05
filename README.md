# Berong SafeEscape - GitHub Pages Website

This repository contains the project showcase website for **Berong SafeEscape**, structured according to the research showcase requirements:

- [x] **Research title**: Featured in the hero header.
- [x] **Team members and adviser**: Detailed contributor and adviser cards with contact details.
- [x] **Problem statement and objectives**: Structured context and bulleted objectives.
- [x] **Methodology**: 4-phase system architecture and workflow.
- [x] **System features and screenshots**: Descriptive module highlights with mockup viewports.
- [x] **Links**: Direct access cards for the live system, repository, and documentation.

## Project Structure

```text
berong-safescape/
├── .nojekyll              <-- Ensures GitHub Pages doesn't ignore assets
├── index.html             <-- Main website markup with all sections
├── assets/
│   ├── css/
│   │   └── style.css      <-- Modern, responsive styling
│   ├── js/
│   │   └── main.js        <-- Mobile menu & scroll behaviors
│   └── img/
│       ├── screenshot1.svg <-- Replace with screenshot1.png
│       └── screenshot2.svg <-- Replace with screenshot2.png
└── README.md
```

## How to Customize

1. **Replace Text & Titles**: Open `index.html` in your editor (e.g., VS Code or Notepad) and update the placeholder names, adviser, problem statements, and links.
2. **Add Your Screenshots**: Save your real system screenshots into `assets/img/` (for instance `screenshot1.png`) and update the `src` attribute in `index.html`.
3. **Update URLs**: Update the `href` in the **Links** section with your actual demo URL, repository URL, and manuscript link.

## How to Deploy to GitHub Pages

1. Open your terminal in this directory:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of SafeEscape project website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/berong-safescape.git
   git push -u origin main
   ```
2. On GitHub, go to your repository **Settings** &rarr; **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch** &rarr; Branch: `main` &rarr; Folder: `/ (root)`.
4. Click **Save**. Your site will be published at `https://<your-username>.github.io/berong-safescape/`.

