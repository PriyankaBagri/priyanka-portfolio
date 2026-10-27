import { projects } from "./projects.js";
import "./style.css";

const profile = {
  name: "Priyanka Bagri",
  email: "bagripriyanka572@gmail.com",
  github: "https://github.com/PriyankaBagri",
  linkedin: "https://www.linkedin.com/in/priyanka-bagri-192006374/",
  leetcode: "https://leetcode.com/u/priyankabagri_/",
  codeforces: "https://codeforces.com/profile/PriyankaBagri_"
};

const app = document.querySelector("#app");

app.innerHTML = `
<div class="cursor-glow"></div>
<header class="nav">
  <a class="logo" href="#home"><b>PB</b><span></span></a>
  <nav>${["home","about","work","skills","contact"].map(x=>`<a href="#${x}">${x}</a>`).join("")}</nav>
  <a class="talk" href="mailto:${profile.email}">LET'S TALK ↗</a>
</header>

<main>
<section id="home" class="hero story-section">
  <div class="hero-copy">
    <div class="eyebrow"><i></i> SECOND YEAR · IT · INDIA</div>
    <h1>PRIYANKA <em>BAGRI</em></h1>
    <p class="hero-intro">I’m a B.Tech IT student building for the web, solving problems with DSA, and exploring AI/ML one project at a time.</p>
    <div class="hero-buttons"><a class="primary" href="#work">EXPLORE MY WORK ↓</a><a href="${profile.github}" target="_blank">GITHUB ↗</a></div>
  </div>

  <div class="night-scene" id="nightScene">
    <div class="stars"></div>
    <div class="moon"></div>
    <div class="house back-layer">
      <div class="roof"></div><div class="wall"></div>
      <div class="window window-a"></div><div class="window window-b"></div>
      <div class="door"><span class="door-light"></span></div>
      <div class="house-sign">P / 01</div>
    </div>
    <div class="path"></div>
    <div class="lamp"><i></i><b></b></div>
    <div class="scene-person">
      <div class="head"></div><div class="hair"></div><div class="torso"></div>
      <div class="arm arm-left"></div><div class="arm arm-right"></div>
      <div class="leg leg-left"></div><div class="leg leg-right"></div>
      <div class="bag"></div>
    </div>
    <div class="desk">
      <div class="desk-top"></div><div class="desk-leg dl"></div><div class="desk-leg dr"></div>
      <div class="monitor"><div class="monitor-screen"><span>while</span> (learning) {<br>&nbsp;&nbsp;build();<br>&nbsp;&nbsp;solve();<br>&nbsp;&nbsp;repeat();<br>}</div></div>
      <div class="keyboard"></div><div class="coffee"></div>
    </div>
    <div class="scene-label">NIGHT SHIFT<br><b>BUILDING IN PROGRESS</b></div>
    <div class="scene-hint">MOVE YOUR CURSOR<br><b>ROTATE THE ROOM</b></div>
  </div>
  <div class="scroll-note">SCROLL · THE STORY CONTINUES ↓</div>
</section>

<section id="about" class="about section">
  <div class="section-no">01 / ABOUT</div>
  <div class="about-grid">
    <div class="portrait-card">
      <div class="portrait-frame"><img src="/images/profile.jpg" alt="Priyanka Bagri"></div>
      <div class="portrait-label">PRIYANKA / 2026</div>
      <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
    </div>
    <div class="about-text">
      <div class="eyebrow">THE PERSON BEHIND THE CODE</div>
      <h2>CURIOUS.<br><span>CONSISTENT.</span><br>CURIOUS AGAIN.</h2>
      <p class="lead">I’m currently learning DSA and full-stack development while exploring AI/ML. I like learning by building — taking an idea from a blank screen to something people can actually interact with.</p>
      <p>I actively practice problem solving on LeetCode and Codeforces, and I’m continuously adding projects, experiments and new technologies to my toolkit.</p>
      <div class="facts"><div><small>EDUCATION</small><b>B.Tech · Information Technology</b><span>Heritage Institute of Technology</span></div><div><small>FOCUS</small><b>DSA · Full Stack · AI/ML</b><span>Learning by building</span></div></div>
    </div>
  </div>
</section>

<section id="work" class="work section">
  <div class="section-no">02 / SELECTED WORK</div>
  <div class="work-intro"><h2>BUILT<br><span>SO FAR.</span></h2><p>Projects will keep growing here. The page is intentionally powered by a simple project data file so your next build takes minutes to add.</p></div>
  <div class="project-grid">
    ${projects.map(p=>`
    <article class="project ${p.tone}" data-tilt>
      <div class="project-visual">
        <div class="visual-depth depth-a"></div><div class="visual-depth depth-b"></div>
        <div class="browser"><div class="browser-bar"><i></i><i></i><i></i></div><strong>${p.title.toUpperCase()}</strong><div class="browser-ui"><b></b><b></b><b></b></div></div>
        <span class="project-number">${p.number}</span><span class="project-orbit"></span>
      </div>
      <div class="project-body"><small>${p.category}</small><h3>${p.title}</h3><p>${p.description}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join("")}</div><div class="actions"><a href="${p.github}" target="_blank">GITHUB ↗</a>${p.live?`<a href="${p.live}" target="_blank">LIVE DEMO ↗</a>`:`<span>DEMO COMING</span>`}</div></div>
    </article>`).join("")}
  </div>
  <div class="future"><span>03+</span><div><small>NEXT BUILD</small><b>YOUR NEXT PROJECT<br><em>GOES HERE.</em></b></div><strong>+</strong></div>
</section>

<section class="interlude section">
  <div class="code-room" id="codeRoom">
    <div class="floating-code c1">git commit -m "keep building"</div>
    <div class="floating-code c2">DSA → PRACTICE → PROGRESS</div>
    <div class="floating-code c3">AI / ML</div>
    <div class="code-monitor"><div class="cm-screen"><span>&gt; priya@workspace:~$</span><br>learning --today<br><i>DSA</i> / <i>FULLSTACK</i> / <i>AI</i><br><br><span>&gt; status: BUILDING...</span></div></div>
    <div class="desk-floor"></div>
    <p>THE WORK<br><b>ISN'T FINISHED.</b></p>
  </div>
</section>

<section id="skills" class="skills section">
  <div class="section-no">03 / TOOLKIT</div>
  <div class="skills-grid"><div><div class="eyebrow">CURRENTLY USING + LEARNING</div><h2>TOOLS<br><span>OF THE TRADE.</span></h2></div><div class="skill-list">${["C++","Java","Python","JavaScript","HTML / CSS","React","Node.js","Express","MySQL","MongoDB","Git / GitHub","DSA","AI / ML"].map((s,i)=>`<div><small>${String(i+1).padStart(2,"0")}</small><b>${s}</b><i>↗</i></div>`).join("")}</div></div>
  <div class="coding-links">
    <a href="${profile.leetcode}" target="_blank"><small>PROBLEM SOLVING</small><b>LEETCODE ↗</b></a>
    <a href="${profile.codeforces}" target="_blank"><small>COMPETITIVE PROGRAMMING</small><b>CODEFORCES ↗</b></a>
    <a href="${profile.github}" target="_blank"><small>OPEN SOURCE / PROJECTS</small><b>GITHUB ↗</b></a>
  </div>
  <div class="github-calendar"><div><small>OPEN SOURCE / CONSISTENCY</small><h3>MY GITHUB ACTIVITY</h3></div><img src="https://ghchart.rshah.org/111015/PriyankaBagri" alt="GitHub contribution calendar" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><div class="calendar-fallback">GITHUB CONTRIBUTION CALENDAR<br><span>Open my GitHub profile to explore activity ↗</span></div></div>
</section>

<section class="hack section"><div class="hack-card"><div><small>HACKATHONS / BUILD SPRINTS</small><h2>BUILD.<br><span>LEARN.</span><br>REPEAT.</h2></div><p>I’ve participated in multiple hackathons and collaborative build experiences. They’re part of the journey — but problem solving and building useful things remain the focus.</p><div class="hack-mark">∞</div></div></section>

<section id="contact" class="contact section">
  <div class="contact-3d"><div class="pink-sphere"></div><div class="ring r1"></div><div class="ring r2"></div><div class="ring r3"></div><div class="mini-laptop"><div></div></div></div>
  <div class="section-no">04 / CONTACT</div><div class="contact-content"><small>LET'S BUILD SOMETHING</small><h2>MAKE IT<br><span>REAL.</span></h2><a class="email" href="mailto:${profile.email}">${profile.email} ↗</a><div class="socials"><a href="${profile.github}" target="_blank">GITHUB</a><a href="${profile.linkedin}" target="_blank">LINKEDIN</a><a href="${profile.leetcode}" target="_blank">LEETCODE</a><a href="${profile.codeforces}" target="_blank">CODEFORCES</a></div></div>
  <footer><span>PRIYANKA BAGRI</span><span>B.Tech IT · 2026</span><span>KEEP BUILDING ↗</span></footer>
</section>
</main>`;

const root = document.documentElement;
const scene = document.querySelector("#nightScene");
const glow = document.querySelector(".cursor-glow");

window.addEventListener("pointermove", e => {
  const x = (e.clientX / innerWidth - .5) * 2;
  const y = (e.clientY / innerHeight - .5) * 2;
  root.style.setProperty("--mx", `${x * 18}px`);
  root.style.setProperty("--my", `${y * 14}px`);
  root.style.setProperty("--rx", `${y * -4}deg`);
  root.style.setProperty("--ry", `${x * 6}deg`);
  glow.style.transform = `translate(${e.clientX-110}px,${e.clientY-110}px)`;
});

document.querySelectorAll("[data-tilt]").forEach(card=>{
  card.addEventListener("pointermove", e=>{
    const r=card.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(900px) rotateX(${y*-5}deg) rotateY(${x*7}deg) translateZ(4px)`;
  });
  card.addEventListener("pointerleave",()=>card.style.transform="");
});

const io = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("seen")}),{threshold:.12});
document.querySelectorAll(".section,.project,.future").forEach(x=>io.observe(x));
