// Hero illustration: one house, three rooms, one evening.
// Pure SVG + CSS. The state ("arrive" | "desk" | "rest") is a class on the wrapper.

const Y0 = 110, Y1 = 520, INSET = 54, TOP = 58, BOT = 92;

function room(x, w, id) {
  const bx0 = x + INSET, bx1 = x + w - INSET, by0 = Y0 + TOP, by1 = Y1 - BOT;
  return `
  <g id="${id}">
    <polygon class="r-ceil" points="${x},${Y0} ${x + w},${Y0} ${bx1},${by0} ${bx0},${by0}"/>
    <polygon class="r-wl" points="${x},${Y0} ${bx0},${by0} ${bx0},${by1} ${x},${Y1}"/>
    <polygon class="r-wr" points="${x + w},${Y0} ${bx1},${by0} ${bx1},${by1} ${x + w},${Y1}"/>
    <rect class="r-back" x="${bx0}" y="${by0}" width="${bx1 - bx0}" height="${by1 - by0}"/>
    <polygon class="r-floor" points="${x},${Y1} ${x + w},${Y1} ${bx1},${by1} ${bx0},${by1}"/>
  </g>`;
}

const stars = [[70,70],[150,40],[260,85],[390,52],[520,78],[610,38],[700,66],[780,44],[860,82],[930,56],[40,150]]
  .map(([x, y], i) => `<circle class="star" cx="${x}" cy="${y}" r="${i % 3 ? 1.4 : 2}"/>`).join("");

// Standing girl, side view, facing right. Origin = feet.
const walker = `
  <g class="walker"><g class="bob">
    <ellipse class="shadow" cx="0" cy="2" rx="30" ry="6"/>
    <rect class="leg l1" x="-13" y="-72" width="11" height="72" rx="4"/>
    <rect class="leg l2" x="3" y="-72" width="11" height="72" rx="4"/>
    <path class="hair-back" d="M-18 -176 C-34 -150 -30 -104 -22 -86 L-4 -92 L8 -170 Z"/>
    <path class="top" d="M-22 -160 L16 -160 L24 -70 L-26 -70 Z"/>
    <rect class="bag" x="-34" y="-118" width="20" height="34" rx="5"/>
    <path class="skin" d="M10 -140 L30 -112 L24 -106 L4 -128 Z"/>
    <rect class="skin" x="-5" y="-176" width="11" height="18"/>
    <circle class="skin" cx="1" cy="-188" r="15"/>
    <path class="hair" d="M-16 -186 A16 16 0 0 1 16 -192 C8 -199 -5 -197 -16 -186 Z"/>
  </g></g>`;

// Seated at the desk, seen from behind. Origin = floor under the chair.
const sitter = `
  <g class="sit" transform="translate(450 490)">
    <ellipse class="shadow" cx="0" cy="2" rx="40" ry="7"/>
    <rect class="chair" x="-26" y="-132" width="52" height="64" rx="8"/>
    <rect class="chair" x="-4" y="-70" width="8" height="70"/>
    <path class="top" d="M-30 -140 C-30 -164 30 -164 30 -140 L26 -84 L-26 -84 Z"/>
    <path class="arm a1" d="M-26 -134 L-8 -108 L20 -104" />
    <path class="arm a2" d="M26 -134 L38 -110 L56 -104" />
    <rect class="skin" x="-6" y="-176" width="12" height="16"/>
    <circle class="skin" cx="0" cy="-188" r="16"/>
    <path class="hair" d="M-19 -190 C-19 -216 19 -216 19 -190 C22 -160 18 -128 12 -116 L-12 -116 C-20 -130 -22 -160 -19 -190 Z"/>
  </g>`;

// Asleep, bedside view. Origin = bed.
const sleeper = `
  <g class="lie" transform="translate(0 0)">
    <ellipse class="pillow" cx="724" cy="368" rx="30" ry="12"/>
    <path class="hair" d="M700 366 C704 346 740 346 744 366 C746 376 706 380 700 366 Z"/>
    <circle class="skin" cx="728" cy="364" r="11"/>
    <path class="hair" d="M716 360 C720 350 738 350 740 360 C734 358 724 358 716 364 Z"/>
    <g class="breathe"><path class="blanket" d="M742 372 C770 352 830 352 872 366 L872 392 L736 392 Z"/>
    <path class="blanket-fold" d="M760 366 C800 358 840 360 872 374"/></g>
    <g class="zz"><text x="754" y="322">z</text><text x="774" y="300">z</text><text x="798" y="274">Z</text></g>
  </g>`;

export function sceneSVG() {
  return `
<svg class="scene-svg" viewBox="0 40 960 520" role="img" aria-labelledby="scene-title" focusable="false" xmlns="http://www.w3.org/2000/svg">
  <title id="scene-title">An illustrated cutaway of a house with three rooms: an entrance, a desk where Priyanka codes, and a bedroom. The scene changes automatically.</title>
  <defs>
    <radialGradient id="gPool"><stop offset="0" stop-color="#ff9cc2" stop-opacity=".5"/><stop offset="1" stop-color="#ff3d8b" stop-opacity="0"/></radialGradient>
    <linearGradient id="gBeam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd1e3" stop-opacity=".55"/><stop offset="1" stop-color="#ff9cc2" stop-opacity="0"/></linearGradient>
    <linearGradient id="gMoon" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9e4ff" stop-opacity=".34"/><stop offset="1" stop-color="#d9e4ff" stop-opacity="0"/></linearGradient>
    <radialGradient id="gHalo"><stop offset="0" stop-color="#ffe6ef" stop-opacity=".28"/><stop offset="1" stop-color="#ffe6ef" stop-opacity="0"/></radialGradient>
  </defs>
  <g class="layer far"><g class="sky">${stars}<circle class="moon-halo" cx="900" cy="120" r="64"/><circle class="moon" cx="900" cy="120" r="26"/><circle class="moon-cut" cx="912" cy="112" r="24"/>
    <g class="clouds"><ellipse class="cloud c1" cx="210" cy="66" rx="62" ry="9"/><ellipse class="cloud c1" cx="246" cy="58" rx="36" ry="8"/><ellipse class="cloud c2" cx="640" cy="40" rx="70" ry="9"/><ellipse class="cloud c2" cx="676" cy="32" rx="40" ry="7"/></g></g></g>
  <rect class="ground" x="0" y="520" width="960" height="60"/>
  <g class="house">
  <polygon class="roof" points="20,112 940,112 930,92 30,92"/>
  <rect class="chimney" x="820" y="62" width="30" height="32"/>
  ${room(30, 300, "roomA")}${room(330, 300, "roomB")}${room(630, 300, "roomC")}

  <!-- Room A: entrance -->
  <g class="furn">
    <rect class="door" x="146" y="236" width="68" height="192"/>
    <rect class="door-glow" x="152" y="242" width="56" height="180"/>
    <circle class="knob" cx="201" cy="336" r="3.5"/>
    <circle class="wall-lamp" cx="180" cy="206" r="9"/>
    <polygon class="mat" points="120,470 240,470 252,500 108,500"/>
    <rect class="pot" x="244" y="396" width="22" height="32" rx="3"/>
    <path class="leaf" d="M255 396 C240 366 236 350 246 340 C254 360 258 376 255 396 Z M255 396 C262 370 276 360 284 358 C278 376 268 388 255 396 Z"/>
    <rect class="hook" x="96" y="276" width="34" height="4" rx="2"/>
  </g>

  <!-- Room B: workspace -->
  <g class="furn">
    <rect class="frame" x="396" y="200" width="46" height="58" rx="2"/>
    <rect class="frame-art" x="402" y="206" width="34" height="46"/>
    <rect class="shelf" x="470" y="212" width="96" height="6" rx="2"/>
    <rect class="book b1" x="478" y="190" width="9" height="22"/><rect class="book b2" x="489" y="196" width="9" height="16"/><rect class="book b3" x="500" y="188" width="9" height="24"/>
    <rect class="monitor" x="478" y="238" width="92" height="66" rx="4"/>
    <g class="code">
      <rect x="488" y="250" width="40" height="4" rx="2"/><rect x="494" y="260" width="52" height="4" rx="2"/>
      <rect x="494" y="270" width="30" height="4" rx="2"/><rect x="488" y="280" width="46" height="4" rx="2"/>
      <rect class="caret" x="538" y="280" width="5" height="4"/>
    </g>
    <rect class="stand" x="518" y="304" width="12" height="24"/>
    <polygon class="desk-top" points="418,332 580,332 596,352 402,352"/>
    <rect class="desk-front" x="402" y="352" width="194" height="10"/>
    <rect class="desk-leg" x="410" y="362" width="9" height="78"/><rect class="desk-leg" x="580" y="362" width="9" height="78"/>
    <rect class="keyboard" x="470" y="340" width="70" height="7" rx="2"/>
    <rect class="lamp-arm" x="428" y="288" width="5" height="44"/><path class="lamp-head" d="M418 290 L446 290 L438 276 L426 276 Z"/>
    <path class="mug" d="M556 322 h14 v10 h-14 z"/>
  </g>

  <!-- Room C: bedroom -->
  <g class="furn">
    <rect class="window" x="738" y="196" width="96" height="84" rx="2"/>
    <circle class="win-moon" cx="806" cy="222" r="9"/>
    <path class="curtain" d="M732 190 h16 v100 h-16 z M826 190 h16 v100 h-16 z"/>
    <rect class="bed-frame" x="694" y="388" width="186" height="42" rx="3"/>
    <rect class="mattress" x="696" y="360" width="182" height="30" rx="6"/>
    <rect class="stand-t" x="650" y="420" width="28" height="48"/>
    <rect class="lamp-arm" x="662" y="388" width="4" height="32"/><path class="lamp-head" d="M654 390 L674 390 L670 374 L658 374 Z"/>
  </g>
  <ellipse class="pool pA" cx="180" cy="468" rx="150" ry="30"/>
  <ellipse class="pool pB" cx="490" cy="470" rx="160" ry="30"/>
  <ellipse class="pool pC" cx="780" cy="470" rx="150" ry="30"/>
  <polygon class="cone" points="428,292 442,292 566,352 412,352"/>
  <ellipse class="mglow" cx="524" cy="300" rx="110" ry="74"/>
  <polygon class="moonbeam" points="738,282 834,282 886,392 694,392"/>
  ${sleeper}
  ${sitter}
  ${walker}

  <rect class="shade sA" x="30" y="${Y0}" width="300" height="${Y1 - Y0}"/>
  <rect class="shade sB" x="330" y="${Y0}" width="300" height="${Y1 - Y0}"/>
  <rect class="shade sC" x="630" y="${Y0}" width="300" height="${Y1 - Y0}"/>
  </g>
  <g class="layer near" aria-hidden="true">
    <ellipse class="bush" cx="8" cy="528" rx="46" ry="26"/><ellipse class="bush" cx="52" cy="538" rx="34" ry="18"/>
    <ellipse class="bush" cx="954" cy="528" rx="46" ry="26"/><ellipse class="bush" cx="910" cy="538" rx="34" ry="18"/>
  </g>
</svg>`;
}

export const sceneStates = {
  arrive: { label: "Back home", text: "Bag down, lights on. The day gets quiet at the door." },
  desk: { label: "At the desk", text: "Screen on. This is where interfaces and half-built ideas get made." },
  rest: { label: "Winding down", text: "Laptop closed. Tomorrow's bug can wait until morning." }
};
