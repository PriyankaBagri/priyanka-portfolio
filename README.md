# Priyanka Bagri Portfolio — Interactive 3D v3

## Run
Node.js 18+ recommended.

```bash
npm install
npm run dev
```

Open the URL Vite prints (for example `http://localhost:5173/`).

## Add a project
Open `src/projects.js` and add another object to the `projects` array. The website automatically renders the new project card.

Required fields:
- number
- title
- category
- description
- tags
- github
- live
- tone (`pink` or `blue`)

## Replace your profile photo
Replace:
`public/images/profile.jpg`

Keep the filename the same.

## Design
This version uses CSS 3D transforms rather than a heavy 3D library:
- Cursor-responsive night workspace
- Character walking into the scene
- House windows / light / desk / coding monitor
- Perspective project cards
- Interactive coding-room section
- Interactive closing 3D sphere / orbit scene
- Responsive layout

## GitHub activity
The contribution chart uses the public `ghchart.rshah.org` image service with a fallback message if it cannot load.
