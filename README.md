# 🎓 Rajadhani Group of Institution (RGI) — Official Web Portal

[![Website Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge&logo=googlechrome&logoColor=white)](https://github.com)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Design-Fully_Responsive-blueviolet?style=for-the-badge)](#-responsive-design--accessibility)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

> **"Education for Excellence • Every Problem Has a Solution"**  
> Official responsive web platform for **Rajadhani Group of Institution, Bengaluru** (Established 2015), offering comprehensive academic programs across Pre-University (PUC) and Undergraduate (UG) disciplines.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Academic Offerings](#-academic-offerings)
- [Tech Stack & Design System](#-tech-stack--design-system)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Running Locally](#running-locally)
  - [Deployment to GitHub Pages](#deployment-to-github-pages)
- [Interactive Features & Code Highlights](#-interactive-features--code-highlights)
- [Responsive Design & Accessibility](#-responsive-design--accessibility)
- [Institutional Information](#-institutional-information)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🏛️ Overview

Founded in **2015** on ITPL Main Road, Krishnarajapura, Bengaluru, the **Rajadhani Group of Institution** is dedicated to fostering academic excellence, practical capability, and ethical leadership. 

This repository houses the modern, high-performance, single-page informational portal designed to showcase the institution's legacy, state-of-the-art laboratory infrastructure, esteemed faculty, student life, and digital admission workflows for prospective students and parents.

---

## ✨ Key Features

- **⚡ Fast & Dependency-Free:** Built with pure Vanilla HTML5, CSS3, and modern JavaScript (ES6+). Zero external frameworks or heavy runtime libraries required.
- **🧭 Dynamic Navigation & Scrollspy:** Sticky header with active section tracking as the user scrolls, combined with a smooth-sliding mobile navigation drawer.
- **📚 Interactive Program Modal System:** Deep-dive cards for PU Science, PU Commerce, BCA, B.Com, and BBA dynamically render curricula, combinations, eligibility criteria, and career pathways into an accessible modal dialog.
- **👥 Dynamic Faculty Directory Filter:** Interactive client-side filtering system categorizing teaching faculty across Science, Commerce, Computer Applications, Management, and Humanities.
- **📝 Online Admissions & Inquiry Workflows:**
  - Accessible modal application form with custom client-side validation.
  - Quick academic inquiry desk with instant input feedback.
  - Floating toast notification system with animated status confirmations.
- **🔬 Facilities & Laboratory Showcase:** Dedicated highlight modules for Physics, Chemistry, Biology, Computing, and Commerce laboratories.
- **🗣️ Principal's Desk & Vision-Mission:** Official welcome address and institutional pedagogical pillars (*Teaching & Rigor*, *Skill Development*, *Character Building*, and *Personality Growth*).

---

## 🎓 Academic Offerings

| Program | Stream / Category | Duration | Combinations / Core Focus |
| :--- | :--- | :--- | :--- |
| **PU Science** | Pre-University (Karnataka PU Board) | 2 Years | **PCMB** (Physics, Chem, Math, Bio)<br>**PCMC** (Physics, Chem, Math, CS)<br>**PCME** (Physics, Chem, Math, Electronics) |
| **PU Commerce** | Pre-University (Karnataka PU Board) | 2 Years | **EBAC** (Econ, Bus Studies, Acct, CS)<br>**CEBA** (CS, Econ, Bus Studies, Acct)<br>**HEBA** (Hist, Econ, Bus Studies, Acct) |
| **BCA** | Undergraduate Degree | 3 Years (6 Sems) | Software Development, Data Structures, Cloud Computing, Web Technologies & Database Systems |
| **B.Com** | Undergraduate Degree | 3 Years (6 Sems) | Financial Accounting, Corporate Law, Direct & Indirect Taxation, GST & Banking Operations |
| **BBA** | Undergraduate Degree | 3 Years (6 Sems) | Principles of Management, Human Resource Management, Strategic Marketing & Entrepreneurship |

---

## 🎨 Tech Stack & Design System

### Technology Stack
- **Markup:** HTML5 (Semantic landmarks, WAI-ARIA accessible dialogs and controls)
- **Styling:** Vanilla CSS3 (Custom properties, CSS Grid, Flexbox, smooth transitions)
- **Scripting:** Pure JavaScript (ES6+ DOM manipulation, IntersectionObserver API, keyboard navigation)
- **Typography:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Headings & UI), [Inter](https://fonts.google.com/specimen/Inter) (Body copy), and [Newsreader](https://fonts.google.com/specimen/Newsreader) (Editorial accents)

### Design Palette
```css
/* Core Palette Tokens */
--navy-950: #040d1e;       /* Deep Midnight Navy */
--navy-900: #071633;       /* Royal Oxford Navy (Primary Brand) */
--gold-500: #d97706;       /* Warm Amber Gold */
--gold-400: #f59e0b;       /* Lustrous Accent Gold */
--bg-secondary: #f8fafc;   /* Crisp Soft Background */
--text-main: #07152f;      /* High-contrast Title Slate */
--text-body: #334155;      /* Accessible Body Text */
```

---

## 📂 Project Directory Structure

```text
RGI web/
├── 📄 index.html          # Main application markup (All sections, modals, topbar & footer)
├── 🎨 style.css           # Design system tokens, responsive grid, animations & utility classes
├── ⚙️ script.js           # Navigation logic, scrollspy, modal handlers, faculty filters & toast notifications
├── 🖼️ logo.png            # Official institutional insignia & brand logo
├── 🖼️ principal.jpg       # Portrait of Principal Prof. Swami M.M
├── 🖼️ Deeksha.png         # Associated program / partner branding asset
└── 📖 README.md           # Comprehensive repository documentation
```

---

## 🚀 Getting Started

### Prerequisites
All you need is a modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Brave).

### Running Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```

2. **Open directly in your browser:**
   - Simply double-click `index.html`, or
   - Right-click `index.html` and choose **Open with** -> **Google Chrome** (or your browser of choice).

3. **Or run with a local development server:**
   - **Using Python 3:**
     ```bash
     python -m http.server 8000
     ```
     Open `http://localhost:8000` in your browser.
   - **Using Node.js (`npx serve`):**
     ```bash
     npx serve .
     ```
   - **Using VS Code Live Server:**
     Right-click `index.html` inside VS Code and click **"Open with Live Server"**.

### Deployment to GitHub Pages

To make the website live on GitHub Pages:
1. Push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: initial commit with complete institutional website and documentation"
   git branch -M main
   git push -u origin main
   ```
2. Navigate to your repository on GitHub.
3. Go to **Settings** > **Pages** (in the left sidebar).
4. Under **Branch**, select `main` (or `master`) branch and `/ (root)` folder.
5. Click **Save**. Your site will be published at `https://<your-username>.github.io/<repo-name>/`.

---

## 💡 Interactive Features & Code Highlights

### 1. Dynamic Program Detail Modal
Clicking *"Explore Syllabus & Details"* triggers `showProgramModal(programId)`. Content is populated dynamically from a modular dataset, eliminating duplicated DOM structures.

### 2. Live Faculty Filtering
Department buttons filter faculty profile cards on the fly with smooth opacity and transform animations:
```javascript
// Example: instant category toggle
facultyCards.forEach(card => {
  const dept = card.getAttribute('data-dept');
  if (targetFilter === 'all' || dept === targetFilter) {
    card.style.display = 'flex';
  } else {
    card.style.display = 'none';
  }
});
```

### 3. Accessible Modal Controller with Keyboard Trapping & ESC Listener
All dialogs close gracefully on backdrop click or when pressing the `Escape` key, restoring scroll flow to `document.body`.

### 4. Non-Intrusive Toast Notification System
Form submissions trigger floating, auto-dismissing toast alerts to give feedback without disruptive browser `alert()` popups.

---

## 📱 Responsive Design & Accessibility

- **Mobile First Approach:** Fluid typography using `clamp()`, flexible grids with `auto-fit`/`minmax`, and a touch-friendly mobile menu drawer.
- **A11y Friendly:** Includes keyboard skip-to-content link (`#main-content`), proper `aria-expanded` and `aria-controls` states on interactive widgets, and semantic HTML5 heading hierarchies.
- **Scroll-Reveal Animations:** Utilizes native `IntersectionObserver` with fallback for browsers without observer support.

---

## 📍 Institutional Information

- **Institution:** Rajadhani Group of Institution
- **Established:** 2015
- **Address:** ITPL Main Road, Krishnarajapura, Bengaluru, Karnataka — 560036
- **Phone:** `080 2853 1770` / `+91 78925 33216`
- **Email:** [principal.rgi@gmail.com](mailto:principal.rgi@gmail.com)
- **Principal:** Prof. Swami M.M (*M.A, B.Ed, M.Phil*)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to use it for academic and institutional web development projects.

---

<p align="center">
  Made with ❤️ for <strong>Rajadhani Group of Institution, Bengaluru</strong>
</p>
