# SafeScape V2 — Project Showcase Website

Official GitHub Pages project website and research showcase for **SafeScape V2: An AI-Driven Responsive Web Portal For Fire Safety Information Dissemination**, developed in collaboration with the **Bureau of Fire Protection (BFP) – Sta. Cruz, Laguna**.

Submitted in partial fulfillment of the requirements for the degree of **Bachelor of Science in Computer Science (Major in Intelligent Systems)** at the **College of Computer Studies, Laguna State Polytechnic University (LSPU), Santa Cruz Main Campus**.

---

## Defense Rubric & Showcase Checklist

- [x] **Research Title**: *SafeScape V2: An AI-Driven Responsive Web Portal For Fire Safety Information Dissemination*
- [x] **Team Members & Adviser**:
  - **Justin Angelo A. Luzande** — Researcher
  - **Kean Gabriel E. Salvahan** — Researcher
  - **Prince Genel R. Umali** — Researcher
  - **Mia V. Villarica, DIT** — Thesis Adviser & Associate Dean, CCS
- [x] **Problem Statement & Objectives**: Verbatim alignment with Chapter I (Sections 1.1 & 1.2) of the thesis manuscript, addressing 5 core research questions and 5 specific objectives.
- [x] **Methodology**: Developmental Research Design (R&D) guided by Design Science Research Methodology (DSRM) and an Agile 6-phase Iterative & Incremental Development Model, validated by 75 external evaluators (10 IT Experts on ISO/IEC 25010:2023, 15 BFP Personnel, 50 Community End-Users) and 85 researcher test cases (100% pass rate).
- [x] **System Features & Screenshots**: 4 high-resolution screenshots in an alternating zigzag layout with an interactive click-to-zoom modal lightbox:
  1. `login_berong.png` — Secure Authentication & Multi-Role Onboarding
  2. `kids_berong.png` — Gamified Kids Learning Hub, Drills & Badge Hall
  3. `adults_berong.png` — Adults Fire Safety Articles, Simulations & Video Library
  4. `pro_berong.png` — BFP Professional Training & Emergency Dispatch Simulator
- [x] **Project Links**:
  - **Live Application**: [https://bfpscberong.app](https://bfpscberong.app)
  - **Source Code Repository**: [https://github.com/kenji0011/berong-safescape-laravel.git](https://github.com/kenji0011/berong-safescape-laravel.git)
  - **Research Manuscript**: Direct PDF [`docs/FINAL-MANUSCRIPT-V4.pdf`](./docs/FINAL-MANUSCRIPT-V4.pdf)
  - **Demo Videos**: [Google Drive Folder](https://drive.google.com/drive/folders/1Tq0PrjT9uI6AmyaltRdBYKkTBhOARB4u?usp=sharing)
- [x] **Repository Sharing**: Configured for institutional collaboration with the CCS department account **`teamccs-git`**.

---

## Key System Features & Modules

### 1. Secure Authentication & Multi-Role Onboarding
* Role-based access control tailored for **Kids**, **Adults**, **Professionals**, and **Administrators**.
* Active session conflict detection, CSRF protection, and single-device security.
* Multi-step registration wizard capturing demographic and barangay profiling data for official BFP analytics.

### 2. Gamified Kids Learning Hub, Drills & Badge Hall
* Mascot-guided interactive course lessons with multimedia storytelling and video modules.
* Interactive evacuation mini-games: *Smoke Crawl*, *Hazard Blitz*, *Memory Game*, and *Hot or Not*.
* **11-badge collectible achievement hall**, Hero Rank leveling, and downloadable fire safety completion certificates.

### 3. Adults Fire Safety Articles, Simulations & Video Library
* Practical, structured articles covering residential hazards, electrical safety, LPG handling protocols, and home evacuation planning.
* Searchable adult fire safety video library with embedded playback and progress tracking.
* Interactive simulations and AI-assisted fire safety Q&A for real-time community emergency guidance.

### 4. BFP Professional Training & Emergency Dispatch Simulator
* **"The Right Call" Dispatcher Game**: Live emergency call evaluation and correct unit dispatching simulation with handled calls and response accuracy metrics.
* **Specialized BFP Tactical Video Library**: Training modules on PPE maintenance, SCBA breathing apparatus, airway obstruction management, and hazmat protocols.
* **Officer Rank Progression & SOP Manuals**: Automated rank leveling upon video completion, alongside instant access to official BFP Standard Operating Procedures (SOP) manuals.

---

## Project Structure

```text
berong-safescape/
├── .nojekyll                   <-- Ensures GitHub Pages doesn't ignore static assets
├── index.html                  <-- Main showcase website (Figtree font, SafeScape Fire theme)
├── README.md                   <-- Repository documentation & defense checklist
├── docs/
│   └── FINAL-MANUSCRIPT-V4.pdf <-- Complete undergraduate thesis manuscript (PDF)
├── assets/
│   ├── css/
│   │   └── style.css           <-- Responsive styling, zigzag layout, and lightbox modal
│   ├── js/
│   │   └── main.js             <-- Navigation & interactive click-to-zoom lightbox
│   └── img/
│       ├── berong-logo.webp         <-- Official BFP Berong logo
│       ├── berong_mascot.png        <-- Berong mascot artwork
│       ├── login_berong.png         <-- Feature 1: Authentication screen
│       ├── kids_berong.png          <-- Feature 2: Kids learning module
│       ├── adults_berong.png        <-- Feature 3: Adults fire safety module
│       ├── pro_berong.png           <-- Feature 4: Professional training & dispatcher game
│       └── system_architecture.jpg  <-- System architecture & documentation diagram
```

---

## Deployment to GitHub Pages

1. Open PowerShell in this directory:
   ```powershell
   cd "C:\Users\Kean\OneDrive\Desktop\berong-safescape"
   ```

2. Initialize Git and commit the project:
   ```powershell
   git init
   git add .
   git commit -m "feat: complete SafeScape V2 showcase website and manuscript"
   git branch -M main
   ```

3. Connect to your GitHub repository:
   ```powershell
   git remote add origin https://github.com/kenji0011/safescape-showcase.git
   git push -u origin main
   ```
   *(Replace `safescape-showcase` with your chosen repository name)*

4. Enable GitHub Pages:
   - On GitHub, navigate to **Settings** &rarr; **Pages**.
   - Under **Build and deployment**, set **Source** to **Deploy from a branch**.
   - Choose Branch: `main` and Folder: `/ (root)`.
   - Click **Save**.

Your showcase site will be live at:
`https://kenji0011.github.io/safescape-showcase/`

---

## Institutional Submission Note
As required by the **LSPU College of Computer Studies**, this repository and the main application repository (`berong-safescape-laravel`) are shared with the department account:
- GitHub Account: **`teamccs-git`** (Added via *Settings &rarr; Collaborators*)
