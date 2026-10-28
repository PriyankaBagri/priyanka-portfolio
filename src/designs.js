// DESIGN SHOWCASE — real work only. Add a new piece by putting its files in
// public/images/design/ and adding an object to `designs` (newest or best first).
//
//   {
//     title: "Name of the piece",
//     kind: "Poster | UI | Logo | Social | Other",   // shown as a label
//     year: "",                                      // optional, leave empty if unsure
//     image: "/images/design/x-1100.webp",           // size used in the page
//     full:  "/images/design/x.webp",                // larger version for the preview
//     original: "/images/design/x-original.png",     // optional untouched file, linked from the preview
//     alt: "Describe what the image shows, for screen readers",
//     width: 1100, height: 1554,                     // pixel size of `image`, avoids layout shift
//     brief: "One or two honest sentences about what it is.",
//     status: "Personal concept",                    // be honest: personal / coursework / client
//     tools: [],                                     // only tools you really used
//     link: "",                                      // optional Behance / Figma / live URL
//     small: "/images/design/x-640.webp",           // optional 640px copy, used for phones (srcset)
//     group: "Campaign name"                         // optional: pieces sharing a group as the FIRST piece
//                                                    // are shown together in the featured block
//   }
//
// Order matters: the first piece is the featured one, the rest fill the gallery in order,
// and the preview (lightbox) steps through them in the same order.
// Pieces marked REVIEW below have no status label on purpose: add one when you confirm what it is.
export const designs = [
  {
    title: "Beyond the Code",
    kind: "Poster",
    year: "",
    image: "/images/design/beyond-the-code-poster-1100.webp",
    full: "/images/design/beyond-the-code-poster.webp",
    original: "/images/design/beyond-the-code-poster-original.png",
    alt: "Poster on a deep maroon background with the headline BEYOND THE CODE in large cream capitals and an orange full stop. An isometric platform holds an orange archway, a laptop on a round table and small blocks. Text reads Great ideas don't build themselves. People do. Build. Experiment. Connect.",
    small: "/images/design/beyond-the-code-poster-1100.webp",
    group: "Beyond the Code",
    width: 1100, height: 1554,
    brief: "An A3 poster for a student developer meetup. The piece itself is labelled an independent campaign concept: a bold type-led headline over an isometric desk scene, with the line \u201cBuild. Experiment. Connect.\u201d",
    status: "Personal concept",
    tools: [],
    link: ""
  },
  {
    title: "Beyond the Code, second version",
    kind: "Poster",
    year: "",
    image: "/images/design/beyond-the-code-stone-1100.webp",
    small: "/images/design/beyond-the-code-stone-640.webp",
    full: "/images/design/beyond-the-code-stone.webp",
    original: "/images/design/beyond-the-code-stone-original.png",
    alt: "Poster with the headline BEYOND THE CODE in large cream capitals over a dark cracked stone monolith. Inside the crack, a glowing red and cream architectural model. Text reads Great ideas don\u2019t build themselves. People do. Build. Experiment. Connect. Student Developer Meetup. Independent campaign concept.",
    width: 1100, height: 1366,
    brief: "A second take on the same meetup campaign: the idea is shown as a glowing structure inside a split stone block. The poster is labelled an independent campaign concept.",
    status: "Personal concept",
    tools: [],
    link: "",
    group: "Beyond the Code"
  },
  {
    title: "The Internet Is Not Real",
    kind: "Poster",
    year: "",
    image: "/images/design/internet-is-not-real-1100.webp",
    small: "/images/design/internet-is-not-real-640.webp",
    full: "/images/design/internet-is-not-real.webp",
    original: "/images/design/internet-is-not-real-original.png",
    alt: "Pale poster with the headline THE INTERNET IS NOT REAL in heavy black capitals. A bent phone holds a staircase, a tiny figure walks toward it, and a glossy red ribbon winds across blue and red glass panels. Small text reads We scroll through worlds we cannot touch. and An experiment in perception.",
    width: 1100, height: 1366,
    brief: "A type-led poster about screens and perception, with a tiny figure climbing a staircase that runs out of a phone. The poster calls itself an experiment in perception.",
    status: "", // REVIEW: add a label (personal / coursework / client) once confirmed
    tools: [],
    link: ""
  },
  {
    title: "The Future Is Under Construction",
    kind: "Poster",
    year: "",
    image: "/images/design/future-under-construction-1100.webp",
    small: "/images/design/future-under-construction-640.webp",
    full: "/images/design/future-under-construction.webp",
    original: "/images/design/future-under-construction-original.png",
    alt: "Blue and orange poster with the headline THE FUTURE IS UNDER CONSTRUCTION in glossy orange 3D letters in front of a lime glass cube. Tiny workers in orange climb ladders and ropes around blue towers and an orange slab. Text reads Don\u2019t wait for tomorrow. Build it. Student builders, developers, creators. Ideas in progress. Future in motion.",
    width: 1100, height: 1366,
    brief: "A poster for student builders, developers and creators: glossy 3D lettering with tiny construction workers still assembling the future.",
    status: "", // REVIEW: add a label (personal / coursework / client) once confirmed
    tools: [],
    link: ""
  },
  {
    title: "Ctrl + Alt + Create",
    kind: "Poster",
    year: "",
    image: "/images/design/ctrl-alt-create-1100.webp",
    small: "/images/design/ctrl-alt-create-640.webp",
    full: "/images/design/ctrl-alt-create.webp",
    original: "/images/design/ctrl-alt-create-original.png",
    alt: "Yellow poster with the headline CTRL ALT CREATE in dark capitals above a blue keyboard with cream and pink keys. One key marked CREATE is open, revealing a tiny colourful city with an orange road winding out, and small people walk across the keys. Text reads Press a key. Change a world. Creative technology meetup. Imagine more. Build differently.",
    width: 1100, height: 1366,
    brief: "A poster for a creative technology meetup: one keyboard key opens onto a tiny city, with the line \u201cPress a key. Change a world.\u201d",
    status: "", // REVIEW: add a label (personal / coursework / client) once confirmed
    tools: [],
    link: ""
  }
];

export const designIntro =
  "Posters, interface work and other visual design. I only show work I made, and I label what each piece is. Select any poster to see it larger.";
