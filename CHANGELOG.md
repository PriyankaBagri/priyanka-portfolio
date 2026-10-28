# Changelog

## Corrections after review (October 2026)

- **Section order:** Hero, About, **Design**, Education, Projects, Skills, Achievements, Contact. The Design section now follows About (it previously followed the hero). Nav order matches. Section IDs are unchanged. The extra top-padding tweak that tucked Design under the hero was removed.
- **Poster images:** replaced with the supplied watermark-free files for four posters: Beyond the Code (second version), The Internet Is Not Real, The Future Is Under Construction, Ctrl + Alt + Create. For each, `<name>-original.png` is the supplied PNG, byte for byte. `<name>.webp`, `<name>-1100.webp` and `<name>-640.webp` were generated from that PNG at the existing display sizes (the lightbox copy is the supplied 1125x1398 size). The first poster, Beyond the Code, was not supplied and is unchanged. Filenames, paths and card order are unchanged.
- **Profile links:** GitHub buttons now go to `https://github.com/PriyankaBagri/priyanka-portfolio` (the old value used the Codeforces handle). Codeforces links now go to `https://codeforces.com/profile/priyankacodes`. The visible GitHub label now shows `@PriyankaBagri`. Project repository links were already correct and are unchanged.

## Portfolio refinement (October 2026)

### Changed files
| File | Change |
|------|--------|
| `src/main.js` | Design section moved directly after the hero; Design placed right after Home in the nav; hero buttons now "See my designs", "Projects", "My journey"; optional, validated "View in Figma" action (page and lightbox); scroll reveal for the design gallery; dev-only console list of designs missing a Figma link |
| `src/designs.js` | Added an empty `figmaUrl: ""` to each of the 5 items and documented it in the header. No other poster data changed |
| `src/style.css` | Shorter hero, less space above Designs, "View in Figma" button style, hero entrance and scroll animations (all disabled for `prefers-reduced-motion`) |
| `README.md` | Figma upload checklist, list of designs still needing links, run and deploy notes |
| `.gitignore` | **New.** Ignores `node_modules/`, `dist/`, `.vercel/`, `.env*`, logs |
| `CHANGELOG.md` | **New.** This file |

### Not changed
- Everything in `public/images/` (all 27 image files are byte-identical to the repository).
- `package.json` and `package-lock.json` are identical to the repository's current versions. Vite stays at the repository's `^7.3.6` (locked to 7.3.6). No dependency was upgraded or downgraded.
- `index.html`, `src/projects.js`, `src/scene.js`.
- No `vercel.json` exists and none was added.

### Vercel build problem
The repository tracks 231 files of `node_modules` committed from Windows (Windows-only esbuild and Rollup binaries, all mode 100644). On Linux this fails: a build of the original files fails with `Cannot find module '@rollup/rollup-linux-x64-gnu'`. The remedy is to stop tracking `node_modules` (steps below) so Vercel installs the correct binaries from `package-lock.json`. The existing build script (`node ./node_modules/vite/bin/vite.js build`) was left as is.

**Status: unverified.** A clean `npm ci` and `npm run build` could not be run where this was prepared. Treat the Vercel fix as unconfirmed until your own build and deployment succeed.

## How to apply this ZIP to your repository

This ZIP does **not** contain `public/images/design/`. Do not delete, replace or empty that folder.

1. Work in a local clone of `https://github.com/PriyankaBagri/priyanka-portfolio` with a clean working tree. Create a branch: `git switch -c portfolio-refinement`.
2. Copy only these files from the ZIP over the clone, replacing the old ones: `src/main.js`, `src/designs.js`, `src/style.css`, `README.md`, `.gitignore`, `CHANGELOG.md`.
   - Do not copy over `public/`. The images there are unchanged.
   - `package.json` and `package-lock.json` match the repository, so there is nothing to copy. If your local files differ from GitHub (for example a different Vite version), keep yours and tell me.
3. Stop tracking the committed `node_modules` (adding it to `.gitignore` alone does not do this). This keeps your local folder:
   ```bash
   git rm -r --cached node_modules
   ```
4. Check before committing:
   ```bash
   git status --short | grep -v '^D  node_modules/'   # expect only the 6 files above
   git status --short -- public                        # expect no output
   ```
5. Do a clean install and build on your machine (Node 20.19+ or 22.12+):
   ```bash
   rm -rf node_modules dist
   npm ci
   npm run build
   ```
   Fix anything that fails before continuing.
6. Commit and push the branch. Check the Vercel preview deployment, and only merge once it builds and the site loads.
7. Open the site and check: Design section right after the hero, the lightbox, and that no "View in Figma" button shows until you add real links.
