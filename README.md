# Priyanka Bagri — Portfolio

A creative personal portfolio showcasing my technical skills, projects, achievements, and graphic design work, built with modern web technologies and interactive visual elements.

🌐 **Live Portfolio:** [Visit Website](https://priyanka-portfolio-owgy.vercel.app/)

💻 **GitHub Profile:** [PriyankaBagri](https://github.com/PriyankaBagri)

🎨 **Featured Work:** Explore my poster designs, development projects, and interactive portfolio experience.

## Features

- Personal introduction and academic background
- Technical skills and project showcase
- Graphic design and poster gallery
- Achievements and coding profiles
- Responsive layout for different screen sizes
- Interactive design previews

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Build Tool:** Vite
- **Version Control:** Git and GitHub
- **Deployment:** Vercel

## Run Locally

**Prerequisites:** Node.js 20.19+ or 22.12+.

1. Clone the repository:

   ```bash
   git clone https://github.com/PriyankaBagri/priyanka-portfolio.git
   cd priyanka-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Create a production build:

   ```bash
   npm run build
   ```

5. Preview the production build locally:

   ```bash
   npm run preview
   ```

## Portfolio Sections

The website is organized in this order:

1. Home
2. About
3. Designs
4. Education
5. Projects
6. Skills
7. Achievements
8. Contact

## Design Showcase

Poster information is maintained in `src/designs.js`, and the artwork is stored in `public/images/design/`.

**Important:** Preserve the existing poster artwork when making code changes. Do not replace or delete design assets unless an intentional artwork update is required.

### Figma Links

Figma links are optional. A poster displays a **View in Figma** button only when a valid Figma URL is configured in its `figmaUrl` field.

To add a link:

1. Upload the relevant design to Figma.
2. Set sharing permissions so reviewers can view it.
3. Add the share URL to the matching poster entry in `src/designs.js`.
4. Test the link from the deployed website.

Uploading a PNG to Figma displays it as a flat image; it does not recreate editable design layers.

## Deployment

This project is deployed on Vercel. Push changes to the configured deployment branch to trigger a deployment, then verify that the latest deployment succeeds.

The production build uses Vite and outputs files to `dist/`.

## Repository Maintenance

Do not commit `node_modules/` or generated build output. These directories should be excluded using `.gitignore`.

If `node_modules/` is already tracked by Git, remove it from version control without deleting your local copy:

```bash
git rm -r --cached node_modules
git commit -m "Stop tracking node_modules"
```

## License

No license has been specified for this project.
