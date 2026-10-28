
# Priyanka's Portfolio

A creative personal portfolio showcasing my projects, technical skills, and graphic design work.

🌐 **Live Portfolio:** https://priyanka-portfolio-owgy.vercel.app/

💻 **GitHub:** https://github.com/PriyankaBagri

🎨 **Featured Work:** Explore my poster designs, projects, and interactive 3D portfolio.

## Run it locally

```bash
npm install
npm run dev      # development server
npm run build    # production build into dist/
npm run preview  # serve the production build
```

Requires Node 20.19 or newer (or Node 22.12+), as required by Vite 7. While `npm run dev` is running, the browser console lists any design that still has no Figma link.

## Page order

Home, **Design**, About, Education, Projects, Skills, Achievements, Contact. The Design showcase sits directly after the hero so the poster work is the first thing a reviewer reaches. The order is set in `src/main.js` (the `nav` list and the section order inside `app.innerHTML`).

## Design showcase and Figma links

> **Poster files are never to be edited, replaced or deleted.** Everything in `public/images/design/` is finished artwork. When applying code updates to this repository, leave that folder exactly as it is.

All poster data lives in one file: **`src/designs.js`**. Posters are shown from their existing local files in `public/images/design/`. These files are the finished artwork and are never edited by the site code.

Each item has an optional `figmaUrl` field:

```js
figmaUrl: "",   // empty = no Figma button is shown for this poster
```

When `figmaUrl` holds a real `https://www.figma.com/...` link, that poster gets a **View in Figma** button (also shown in the poster preview). The link opens in a new tab with `noopener noreferrer`. Anything that is not an `https://figma.com` or `https://www.figma.com` address (an empty string, a typo, an image path) is ignored, so a placeholder can never appear as a link.

### Designs that still need a Figma link

No Figma links are configured yet. Every poster below still needs to be uploaded to Figma:

| # | Poster | File to upload | Status |
|---|--------|----------------|--------|
| 1 | Beyond the Code | `public/images/design/beyond-the-code-poster-original.png` | Needs upload |
| 2 | Beyond the Code, second version | `public/images/design/beyond-the-code-stone-original.png` | Needs upload |
| 3 | The Internet Is Not Real | `public/images/design/internet-is-not-real-original.png` | Needs upload |
| 4 | The Future Is Under Construction | `public/images/design/future-under-construction-original.png` | Needs upload |
| 5 | Ctrl + Alt + Create | `public/images/design/ctrl-alt-create-original.png` | Needs upload |

If you still have the working file the poster was made in (Figma, Illustrator, Photoshop, Canva), upload that instead. The PNGs above are flat images, so Figma will show them as a single picture, not editable layers.

### Checklist: upload a poster and add its link

1. Open Figma and create a new Design file (one file per poster is simplest). Name it after the poster.
2. Drag the poster file from the table above onto the canvas, or use **File > Place image**. Keep it at 100% size.
3. Click **Share**, and set general access to **Anyone with the link can view**. Without this, reviewers see a "request access" page.
4. Click **Copy link**.
5. Open the link in a private or incognito window and check that it shows the right poster without asking you to sign in.
6. Paste the link between the quotes of `figmaUrl` for that poster in `src/designs.js`.
7. Commit and push. Vercel redeploys, and the **View in Figma** button appears on that poster.
8. On the live site, click the button and confirm it opens the correct Figma file.

Repeat for each poster. The table above can be updated as links are added.

## Deploying on Vercel

Vercel installs dependencies from `package-lock.json` and runs `npm run build` (Vite, output directory `dist`). Do not commit `node_modules`: it must stay out of git (see `.gitignore`). A `node_modules` folder committed from Windows contains Windows-only binaries without execute permission, which breaks the Linux build on Vercel.

If `node_modules` is still tracked in your repository, remove it from git once (this keeps your local copy):

```bash
git rm -r --cached node_modules
git commit -m "Stop tracking node_modules"
```
