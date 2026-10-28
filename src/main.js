import "./style.css";
import { careerGraph as cg, document2action as d2a, earlier, education, achievements, skills } from "./projects.js";
import { designs, designIntro } from "./designs.js";
import { sceneSVG, sceneStates } from "./scene.js";

const profile = {
  email: "bagripriyanka572@gmail.com",
  github: "https://github.com/PriyankaBagri/priyanka-portfolio",
  githubUser: "PriyankaBagri",
  linkedin: "https://www.linkedin.com/in/priyanka-bagri-192006374/",
  leetcode: "https://leetcode.com/u/priyankabagri_/",
  codeforces: "https://codeforces.com/profile/priyankacodes",
  portfolio: "https://priyanka-portfolio-owgy.vercel.app/"
};
const ext = 'target="_blank" rel="noopener noreferrer"';
const nav = [["home", "Home"], ["about", "About"], ["design", "Design"], ["education", "Education"], ["work", "Projects"], ["achievements", "Achievements"], ["contact", "Contact"]];


/* ---------- Design showcase markup (data lives in designs.js) ---------- */
const esc = v => String(v ?? "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const designBtn = (d, sizes) => `<button type="button" class="zoom" data-group="dsn" data-full="${esc(d.full || d.image)}" data-alt="${esc(d.alt || d.title)}" data-cap="${esc(d.title + (d.brief ? ": " + d.brief : ""))}" data-original="${esc(d.original || "")}" data-figma="${esc(figmaHref(d))}" aria-label="View larger: ${esc(d.title)}"><img src="${d.image}"${d.small ? ` srcset="${d.small} 640w, ${d.image} 1100w" sizes="${sizes}"` : ""} alt="${esc(d.alt || d.title)}" width="${d.width || 1200}" height="${d.height || 800}" loading="lazy" decoding="async"><span class="zoom-hint" aria-hidden="true">View larger</span></button>`;
const designTags = d => `<span class="dsn-tags">${[d.kind, d.year].filter(Boolean).map(t => `<em>${esc(t)}</em>`).join("")}${d.status ? `<em class="hl">${esc(d.status)}</em>` : ""}</span>`;
// A Figma link is shown only when designs.js holds a real https://figma.com (or www.figma.com) URL.
// Anything else (empty, a typo, an image path) is ignored, so a placeholder can never appear as a link.
const figmaHref = d => {
  const raw = String(d.figmaUrl || "").trim();
  if (!raw) return "";
  try {
    const u = new URL(raw);
    const host = u.hostname.toLowerCase();
    return u.protocol === "https:" && (host === "figma.com" || host === "www.figma.com") && u.pathname.length > 1 ? u.href : "";
  } catch { return ""; }
};
const figmaAction = d => figmaHref(d) ? `<a class="dsn-figma" href="${esc(figmaHref(d))}" ${ext} aria-label="View ${esc(d.title)} in Figma (opens in a new tab)"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false"><path fill="currentColor" d="M8 24a4 4 0 0 0 4-4v-4H8a4 4 0 0 0 0 8Zm-4-12a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4Zm0-8a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4Zm8-4h4a4 4 0 0 1 0 8h-4V0Zm8 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/></svg>View in Figma</a>` : "";
const designNotes = d => `${d.brief ? `<p>${esc(d.brief)}</p>` : ""}${d.tools && d.tools.length ? `<small>Made with ${d.tools.map(esc).join(", ")}</small>` : ""}${d.link ? `<a href="${esc(d.link)}" ${ext}>View full piece</a>` : ""}${figmaAction(d)}`;
if (import.meta.env.DEV) {
  const missing = designs.filter(d => !figmaHref(d)).map(d => d.title);
  if (missing.length) console.info(`[designs] ${missing.length} design(s) still need a Figma link in src/designs.js:\n - ${missing.join("\n - ")}`);
}
function designMarkup() {
  const [lead, ...others] = designs;
  // Pieces that share the featured piece's group sit beside it; everything else goes in the gallery wall.
  const kin = lead.group ? others.filter(d => d.group === lead.group) : [];
  const wall = others.filter(d => !kin.includes(d));
  const featured = `<div class="dsn-feature"><figure class="dsn-lead">${designBtn(lead, "(min-width:860px) 440px, 100vw")}
      <figcaption><b>${esc(lead.title)}</b>${designTags(lead)}${designNotes(lead)}</figcaption></figure>
    ${kin.map(d => `<figure class="dsn-kin">${designBtn(d, "(min-width:860px) 300px, 70vw")}
      <figcaption><span class="dsn-kin-label">Same campaign</span><b>${esc(d.title)}</b>${designTags(d)}${designNotes(d)}</figcaption></figure>`).join("")}</div>`;
  const wallHtml = wall.length ? `<ul class="dsn-wall" aria-label="More posters">${wall.map(d => `<li class="dsn-piece"><figure>${designBtn(d, "(min-width:860px) 50vw, 100vw")}
      <figcaption><b>${esc(d.title)}</b>${designTags(d)}${designNotes(d)}</figcaption></figure></li>`).join("")}</ul>` : "";
  return featured + wallHtml;
}

const app = document.querySelector("#app");
app.innerHTML = `
<a class="skip" href="#main">Skip to content</a>
<header class="nav" id="top">
  <a class="logo" href="#home" aria-label="Priyanka Bagri, home"><b>PB</b></a>
  <button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav"><span class="sr">Menu</span><i></i><i></i></button>
  <nav id="site-nav" aria-label="Primary">${nav.map(([id, l]) => `<a href="#${id}">${l}</a>`).join("")}</nav>
</header>

<main id="main">
<section id="home" class="hero" aria-labelledby="hero-title">
  <div class="hero-copy">
    <p class="hero-role">Second-year B.Tech IT student · Heritage Institute of Technology, Kolkata</p>
    <h1 id="hero-title">Priyanka Bagri</h1>
    <p class="hero-line">Building thoughtful digital experiences, one idea at a time.</p>
    <p class="hero-intro">I'm a student designer and developer. I like turning a vague idea into an interface someone can actually use, and I'm learning something new with every project.</p>
    <div class="hero-cta"><a class="btn btn-primary" href="#design">See my designs</a><a class="btn btn-ghost" href="#work">Projects</a><a class="btn btn-ghost" href="#about">My journey</a></div>
    <p class="hero-social"><a href="${profile.github}" ${ext} aria-label="Priyanka's portfolio repository on GitHub, ${profile.githubUser} (opens in a new tab)">GitHub · @${profile.githubUser}</a><a href="${profile.linkedin}" ${ext} aria-label="Priyanka's LinkedIn profile (opens in a new tab)">LinkedIn</a></p>
  </div>

  <div class="hero-scene" id="scene" data-state="arrive">
    <div class="scene-stage s-arrive">${sceneSVG()}</div>
    <div class="scene-ui">
      <div class="scene-prog" aria-hidden="true"><i id="prog"></i></div>
      <p class="scene-cap" aria-live="off"><b id="capLabel"></b><span id="capText"></span></p>
      <div class="scene-ctrl">
        <div class="chips" role="group" aria-label="Jump to a moment from the day. The story keeps looping.">
          ${Object.entries(sceneStates).map(([k, v]) => `<button type="button" class="chip" data-state="${k}" aria-pressed="false">${v.label}</button>`).join("")}
        </div>
        <button type="button" class="play" id="play" aria-pressed="false">Pause story</button>
      </div>
    </div>
  </div>
</section>

<section id="about" class="about" aria-labelledby="about-title">
  <div class="wrap about-grid">
    <figure class="about-photo">
      <picture><source srcset="/images/about-mural.webp" type="image/webp"><img src="/images/about-mural.jpg" width="900" height="1200" loading="lazy" alt="Priyanka sitting in front of a painted mural of a woman, eyes closed, smiling." ></picture>
      <figcaption>Taking a break in front of someone else's good design.</figcaption>
    </figure>
    <div class="about-text">
      <h2 id="about-title">I learn by making things people can try.</h2>
      <p class="lead">I'm in my second year of B.Tech in Information Technology. I learn best by building things I can put in front of people and seeing what works.</p>
      <p>Right now I'm working on data structures and algorithms, full-stack development and the basics of AI and machine learning. I practise problem solving on LeetCode and Codeforces, and I put what I learn into projects like CareerGraph.</p>
      <p>I care about the small decisions: what a screen asks of you first, how much text is too much, and what happens when something goes wrong. That is the part of the work I'd like to bring to GDG on Campus.</p>
      <p class="about-link"><a href="#skills">See what I work with</a> · <a href="${profile.github}" ${ext} aria-label="Priyanka's portfolio repository on GitHub, ${profile.githubUser} (opens in a new tab)">My GitHub</a></p>
      <figure class="about-strip">
        <picture><source srcset="/images/about-arch.webp" type="image/webp"><img src="/images/about-arch.jpg" width="1100" height="825" loading="lazy" alt="Priyanka smiling at the camera through an arched wooden frame in a café."></picture>
      </figure>
    </div>
  </div>
</section>

<section id="design" class="design" aria-labelledby="design-title">
  <div class="wrap">
    <h2 id="design-title">Design showcase</h2>
    <p class="section-sub">${designIntro}</p>
    ${designs.length ? designMarkup() : ""}
  </div>
</section>

<section id="education" class="education" aria-labelledby="edu-title">
  <div class="wrap">
    <h2 id="edu-title">From school to second year</h2>
    <p class="section-sub">Primary and secondary school, then college, in order.</p>
    <ol class="steps">
      ${education.map((e, i) => `<li class="step step-${i + 1}${e.current ? " now" : ""}"><span class="yrs">${e.years}</span><h3>${e.title}</h3>${e.note ? `<p>${e.note}</p>` : ""}${e.current ? `<span class="badge">Here now</span>` : ""}</li>`).join("")}
    </ol>
  </div>
</section>

<section id="work" class="work" aria-labelledby="work-title">
  <div class="wrap">
    <h2 id="work-title">Selected projects</h2>
    <p class="section-sub">One live product, one in progress, and some earlier experiments.</p>

    <article class="case cg" aria-labelledby="cg-title">
      <div class="case-head">
        <div><h3 id="cg-title">${cg.title}</h3><p class="status ok">${cg.status}</p></div>
        <div class="links"><a class="btn btn-primary" href="${cg.live}" ${ext}>Open live demo</a><a class="btn btn-ghost-d" href="${cg.github}" ${ext}>View on GitHub</a></div>
      </div>
      <div class="chain" aria-label="The CareerGraph journey: ${cg.chain.join(", then ")}">
        <ol>${cg.chain.map(c => `<li>${c}</li>`).join("")}</ol>
        <p class="chain-note">The journey the product is built around. This is a diagram, not a screenshot.</p>
      </div>
      <div class="case-cols">
        <div><h4>The problem</h4><p>${cg.problem}</p><h4>Who it's for</h4><p>${cg.users}</p></div>
        <div><h4>What it helps you do</h4><ul>${cg.helps.map(h => `<li>${h}</li>`).join("")}</ul></div>
        <div><h4>My part</h4><p>Designed and built as my own project. The code is public on GitHub, so you can check what's there.</p></div>
      </div>
      <div class="cg-walk">
        <h4>Try it in four steps</h4>
        <ol>${cg.helps.map((h, i) => `<li><span>${i + 1}</span>${h}</li>`).join("")}</ol>
      </div>
      <div class="cg-decision"><h4>The design idea</h4><p>${cg.idea}</p></div>
      ${cg.shots.length ? `<div class="cg-gallery"><h4>Inside the app</h4><p>Screenshots of the running app. Select one to view it larger.</p>
        <ul class="cg-shots">${cg.shots.map((x, i) => `<li><figure>
          <button type="button" class="zoom" data-group="cg" data-full="${x.src}" data-alt="${x.alt}" data-cap="${x.title}: ${x.caption}" aria-label="View larger: ${x.title}"><img src="${x.src}" alt="${x.alt}" width="${x.width}" height="${x.height}" loading="lazy"><span class="zoom-hint" aria-hidden="true">View larger</span></button>
          <figcaption><b><i>${i + 1}</i>${x.title}</b><span>${x.caption}</span></figcaption></figure></li>`).join("")}</ul></div>` : ""}
    </article>

    <article class="case d2a" aria-labelledby="d2a-title">
      <div class="case-head">
        <div><h3 id="d2a-title">${d2a.title}</h3><p class="status wip">${d2a.status}</p></div>
      </div>
      <p class="d2a-problem">${d2a.problem}</p>
      <ol class="flow">${d2a.flow.map(([t, d]) => `<li><b>${t}</b><span>${d}</span></li>`).join("")}</ol>
      <p class="case-note">${d2a.note}</p>
    </article>

    <h3 class="sub-h">Earlier experiments</h3>
    <ul class="earlier">
      ${earlier.map(p => `<li><div><b>${p.title}</b><span>${p.kind}</span><p>${p.text}</p></div><div class="links-sm"><a href="${p.github}" ${ext}>Code</a>${p.live ? `<a href="${p.live}" ${ext}>Live</a>` : ""}</div></li>`).join("")}
    </ul>
  </div>
</section>

<section id="skills" class="skills" aria-labelledby="skills-title">
  <div class="wrap skills-grid">
    <div><h2 id="skills-title">What I work with</h2><p class="section-sub">What I've used so far, grouped by where it sits in a project. I'm still learning all of it.</p>
      <p class="practice">I also practise on <a href="${profile.leetcode}" ${ext}>LeetCode</a> and <a href="${profile.codeforces}" ${ext}>Codeforces</a>, and I'm exploring AI and machine learning.</p></div>
    <dl class="skill-list">${skills.map(s => `<div><dt>${s.group}</dt><dd>${s.items.map(i => `<span>${i}</span>`).join("")}</dd></div>`).join("")}</dl>
  </div>
</section>

<section id="achievements" class="ach" aria-labelledby="ach-title">
  <div class="wrap">
    <h2 id="ach-title">Hackathons, competitions and certificates</h2>
    <p class="section-sub">Listed by what they are, so participation and certificates are not mistaken for awards.</p>
    ${achievements.map(g => `
    <div class="ach-group"><div class="ach-head"><h3>${g.group}</h3>${g.note ? `<p>${g.note}</p>` : ""}</div>
      <ul>${g.items.map(i => `<li><b>${i.name}</b>${i.detail ? `<span>${i.detail}</span>` : ""}${i.date ? `<time>${i.date}</time>` : ""}</li>`).join("")}</ul></div>`).join("")}
  </div>
</section>

<section id="contact" class="contact" aria-labelledby="contact-title">
  <div class="wrap contact-grid">
    <div><h2 id="contact-title">Got an idea that needs an interface? Let's talk.</h2>
      <p class="contact-sub">I'm happy to chat about design, side projects or the GDG on Campus team.</p>
      <a class="mail" href="mailto:${profile.email}">${profile.email}</a></div>
    <ul class="contact-links">
      <li><a href="${profile.linkedin}" ${ext}>LinkedIn</a></li>
      <li><a href="${profile.github}" ${ext} aria-label="Priyanka's portfolio repository on GitHub, ${profile.githubUser} (opens in a new tab)">GitHub · @${profile.githubUser}</a></li>
      <li><a href="${cg.live}" ${ext}>CareerGraph live demo</a></li>
      <li><a href="${profile.leetcode}" ${ext}>LeetCode</a></li>
      <li><a href="${profile.codeforces}" ${ext}>Codeforces</a></li>
    </ul>
  </div>
  <footer class="wrap foot"><span>Priyanka Bagri · B.Tech IT, Heritage Institute of Technology</span><span><a href="${profile.github}" ${ext} aria-label="Portfolio repository on GitHub, ${profile.githubUser} (opens in a new tab)">GitHub</a> · <a href="#top">Back to top</a></span></footer>
</section>
</main>`;

/* ---------- Navigation ---------- */
const header = document.querySelector(".nav");
const btn = document.querySelector(".menu-btn");
const siteNav = document.querySelector("#site-nav");
const setMenu = open => { header.classList.toggle("open", open); btn.setAttribute("aria-expanded", String(open)); };
btn.addEventListener("click", () => setMenu(btn.getAttribute("aria-expanded") !== "true"));
siteNav.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && header.classList.contains("open")) { setMenu(false); btn.focus(); } });

const links = [...siteNav.querySelectorAll("a")];
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.toggleAttribute("aria-current", a.getAttribute("href") === `#${e.target.id}`));
}), { rootMargin: "-45% 0px -50% 0px" });
nav.forEach(([id]) => { const s = document.getElementById(id); if (s) spy.observe(s); });

/* ---------- Hero story ---------- */
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const scene = document.querySelector("#scene");
const stage = scene.querySelector(".scene-stage");
const svg = scene.querySelector("svg");
const chips = [...scene.querySelectorAll(".chip")];
const playBtn = document.querySelector("#play");
const prog = document.querySelector("#prog");
const order = ["arrive", "desk", "rest"];
const DWELL = 7000; // ms per moment; matches the progress bar animation
// Autoplay is the default. Only prefers-reduced-motion or the Pause button stops the loop.
let idx = reduce ? 1 : 0, timer = null, paused = reduce, onscreen = true;

function setState(k) {
  idx = order.indexOf(k);
  stage.className = `scene-stage s-${k}`;
  scene.dataset.state = k;
  chips.forEach(c => c.setAttribute("aria-pressed", String(c.dataset.state === k)));
  document.querySelector("#capLabel").textContent = sceneStates[k].label;
  document.querySelector("#capText").textContent = sceneStates[k].text;
}
function restartProgress() { prog.style.animation = "none"; void prog.offsetWidth; prog.style.animation = ""; }
function tick() { setState(order[(idx + 1) % order.length]); restartProgress(); }
function stop() { clearInterval(timer); timer = null; }
function run() {
  stop();
  const active = !paused && onscreen && !document.hidden;
  scene.dataset.idle = String(!onscreen || document.hidden);
  if (active) { restartProgress(); timer = setInterval(tick, DWELL); }
}
function syncPlay() {
  scene.dataset.paused = String(paused);
  playBtn.textContent = paused ? "Play story" : "Pause story";
  playBtn.setAttribute("aria-pressed", String(paused));
}

// Jumping to a moment never ends the loop: it just restarts the timer from there.
chips.forEach(c => c.addEventListener("click", () => { setState(c.dataset.state); run(); }));
playBtn.addEventListener("click", () => { paused = !paused; syncPlay(); run(); });
document.addEventListener("visibilitychange", run);
new IntersectionObserver(es => es.forEach(e => { onscreen = e.isIntersecting; run(); }), { threshold: 0.2 }).observe(scene);

// On narrow screens show one room at a time instead of shrinking the whole house.
const mq = matchMedia("(max-width: 720px)");
const fit = () => svg.setAttribute("viewBox", mq.matches ? "30 120 900 400" : "0 40 960 520");
mq.addEventListener("change", fit); fit();

// A very light tilt on pointer devices only.
if (!reduce && matchMedia("(hover: hover) and (pointer: fine)").matches) {
  scene.addEventListener("pointermove", e => {
    const r = scene.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    svg.style.setProperty("--ry", `${x * 4}deg`); svg.style.setProperty("--rx", `${y * -3}deg`);
    stage.style.setProperty("--px", `${x * 14}px`);
  });
  scene.addEventListener("pointerleave", () => { svg.style.setProperty("--ry", "0deg"); svg.style.setProperty("--rx", "0deg"); stage.style.setProperty("--px", "0px"); });
}

syncPlay(); setState(order[idx]); run();
if (!reduce) document.querySelector(".steps").classList.add("rise");
new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("seen"); o.unobserve(e.target); } }), { threshold: 0.25 })
  .observe(document.querySelector(".steps"));

/* ---------- Scroll reveal for the design gallery (wrappers only, never the poster files) ---------- */
if (!reduce && "IntersectionObserver" in window) {
  const designSection = document.querySelector("#design");
  const items = [...designSection.querySelectorAll(".dsn-feature figure, .dsn-piece")];
  const seenOnce = (es, o) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("seen"); o.unobserve(e.target); } });
  const io = new IntersectionObserver(seenOnce, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  items.forEach(el => { el.classList.add("reveal"); io.observe(el); });
  new IntersectionObserver(seenOnce, { threshold: 0.15 }).observe(designSection);
}

/* ---------- Image preview (CareerGraph screens and design work) ---------- */
const dlg = document.createElement("dialog");
dlg.className = "lightbox";
dlg.setAttribute("aria-label", "Image preview");
dlg.innerHTML = `<div class="lb-in"><img alt=""><p class="lb-cap"></p></div><div class="lb-bar"><button type="button" class="lb-prev" aria-label="Previous image">Previous</button><button type="button" class="lb-next" aria-label="Next image">Next</button><a class="lb-orig" target="_blank" rel="noopener noreferrer" hidden>Open original file</a><a class="lb-figma" target="_blank" rel="noopener noreferrer" hidden>View in Figma</a><button type="button" class="lb-close">Close</button></div>`;
document.body.append(dlg);
const lbImg = dlg.querySelector("img"), lbCap = dlg.querySelector(".lb-cap"), lbOrig = dlg.querySelector(".lb-orig"), lbFigma = dlg.querySelector(".lb-figma");
let group = [], gi = 0, opener = null;
function showImg(i) {
  gi = (i + group.length) % group.length;
  const b = group[gi];
  lbImg.src = b.dataset.full; lbImg.alt = b.dataset.alt; lbCap.textContent = (group.length > 1 ? `${gi + 1} of ${group.length}. ` : "") + b.dataset.cap;
  dlg.querySelector(".lb-prev").hidden = dlg.querySelector(".lb-next").hidden = group.length < 2;
  if (group.length > 1) [group[(gi + 1) % group.length], group[(gi - 1 + group.length) % group.length]].forEach(n => { new Image().src = n.dataset.full; });
  lbOrig.hidden = !b.dataset.original; if (b.dataset.original) lbOrig.href = b.dataset.original;
  lbFigma.hidden = !b.dataset.figma; if (b.dataset.figma) lbFigma.href = b.dataset.figma; else lbFigma.removeAttribute("href");
}
document.addEventListener("click", e => {
  const b = e.target.closest(".zoom");
  if (b) { opener = b; group = [...document.querySelectorAll(`.zoom[data-group="${b.dataset.group}"]`)]; showImg(group.indexOf(b)); dlg.showModal(); return; }
  if (e.target === dlg || e.target.closest(".lb-close")) dlg.close();
  else if (e.target.closest(".lb-prev")) showImg(gi - 1);
  else if (e.target.closest(".lb-next")) showImg(gi + 1);
});
dlg.addEventListener("keydown", e => { if (group.length > 1 && e.key === "ArrowLeft") showImg(gi - 1); if (group.length > 1 && e.key === "ArrowRight") showImg(gi + 1); });
dlg.addEventListener("close", () => { lbImg.removeAttribute("src"); if (opener) opener.focus(); });
