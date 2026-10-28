# Priyanka Bagri Portfolio

Vite static site (unchanged: `npm install`, `npm run dev`, `npm run build`, output in `dist/`).

## Where content lives
- `src/projects.js` — CareerGraph case study, Document2Action, earlier projects, education, achievements, skills
- `src/designs.js` — **Design Showcase** (five posters: two Beyond the Code versions, The Internet Is Not Real, The Future Is Under Construction, Ctrl + Alt + Create). Add real pieces only; instructions at the top of the file. Each piece has an untouched `-original.png`, a 2246/1856px `.webp` for the viewer, and `-1100.webp` / `-640.webp` for the page. First entry is featured; entries sharing its `group` sit beside it; the rest fill the gallery in order, and the viewer steps through them in that order.
- `src/scene.js` — hero 2.5D house scene (SVG + CSS, three moments: arrive, desk, rest; respects reduced motion)
- `src/main.js` — page markup and behaviour (profile links and email at the top)
- CareerGraph screenshots: files in `public/images/careergraph/`, listed in `shots` in `projects.js`

## Not verified
LinkedIn could not be checked from this environment. Achievements come from details supplied earlier. School names and class ranges come from the latest brief; no school year ranges are shown because none were supplied. The AgriPulse and EduBridge repository links under github.com/PriyankaBagri were carried over and not re-checked.


## Review before publishing
- Three new posters (Internet, Future, Ctrl + Alt + Create) have an empty `status` in `designs.js` (marked `REVIEW`). Add a label once confirmed.
- The new image files carry a small sparkle mark in the bottom-right corner. The artwork was left untouched.
- Build (`npm run build`) was not run in the environment that made this update (no network to install Vite). Run `npm install && npm run build` locally.
