const slides = [
  {
    eyebrow: "Find your next big idea",
    first: "A brighter way",
    lead: "to ",
    highlight: "learn.",
    description: "Build confidence, prepare for what is next, and find the study guides and textbooks that make every new idea click.",
    action: "Browse study books",
    filter: "study",
    covers: ["#315a45", "#d7a67f", "#637b54"],
    titles: ["LEARN EVERY DAY", "A WORLD OF IDEAS", "YOUR NEXT CHAPTER"],
    symbols: ["✳", "✦", "✺"],
  },
  {
    eyebrow: "A world between the pages",
    first: "Get lost in",
    lead: "a good ",
    highlight: "story.",
    description: "Meet unforgettable characters, wander through new worlds, and find a story worth staying up late for.",
    action: "Browse storybooks",
    filter: "story",
    covers: ["#8b5e6b", "#5e7fa0", "#c98a5e"],
    titles: ["STORIES TO KEEP", "WANDER A LITTLE", "MEET YOUR NEXT HERO"],
    symbols: ["✿", "◌", "✳"],
  },
  {
    eyebrow: "Wisdom passed down",
    first: "Stories that",
    lead: "stay with ",
    highlight: "us.",
    description: "Explore timeless epics, cherished scriptures, and folk tales that bring generations together.",
    action: "Browse traditional books",
    filter: "traditional",
    covers: ["#c4733e", "#6b4a3a", "#7b8c49"],
    titles: ["TIMELESS WISDOM", "TALES TO SHARE", "ROOTED IN STORY"],
    symbols: ["☼", "✳", "✺"],
  },
  {
    eyebrow: "Make your next move count",
    first: "Build a business",
    lead: "that ",
    highlight: "thrives.",
    description: "Explore practical reads on profit, money, and entrepreneurship to help you turn good ideas into a stronger business.",
    action: "Browse business books",
    filter: "business",
    covers: ["#47736a", "#668090", "#92704d"],
    titles: ["MAKE PROFIT FIRST", "THINK ABOUT MONEY", "GROW WITH PURPOSE"],
    symbols: ["₹", "↗", "✳"],
  },
];

const heroArt = document.querySelector(".hero-art");
const canvas = document.querySelector(".hero-canvas");
const eyebrow = document.getElementById("hero-eyebrow");
const titleFirst = document.getElementById("hero-title-first");
const titleLead = document.getElementById("hero-title-lead");
const titleHighlight = document.getElementById("hero-title-highlight");
const description = document.getElementById("hero-description");
const action = document.getElementById("hero-cta");
const status = document.getElementById("hero-slide-status");
const autoplayToggle = document.querySelector(".hero-slider-toggle");
const dots = [...document.querySelectorAll(".hero-slider-dot")];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let activeSlide = 0;
let autoplay = !reducedMotion.matches;
let THREE;
let sceneBooks = [];
let targetPointerX = 0;
let targetPointerY = 0;
let renderer;

function updateSlide(index, announce = true) {
  activeSlide = (index + slides.length) % slides.length;
  const slide = slides[activeSlide];

  eyebrow.textContent = slide.eyebrow;
  titleFirst.textContent = slide.first;
  titleLead.textContent = slide.lead;
  titleHighlight.textContent = slide.highlight;
  description.textContent = slide.description;
  action.firstChild.textContent = `${slide.action} `;
  action.dataset.filter = slide.filter;

  dots.forEach((dot, dotIndex) => {
    dot.setAttribute("aria-pressed", String(dotIndex === activeSlide));
  });

  if (announce) status.textContent = `${slide.eyebrow}. ${slide.action}.`;

  slide.covers.forEach((color, index) => {
    const fallbackBook = document.querySelector(`.book-${["top", "middle", "bottom"][index]}`);
    fallbackBook.style.background = color;
    fallbackBook.querySelector("span").textContent = slide.titles[index];
    fallbackBook.querySelector("i").textContent = slide.symbols[index];
  });

  sceneBooks.forEach((book, bookIndex) => {
    book.cover.color.set(slide.covers[bookIndex]);
    book.label.material.map.dispose();
    book.label.material.map = createCoverTexture(slide.titles[bookIndex], slide.symbols[bookIndex], slide.covers[bookIndex]);
    book.label.material.needsUpdate = true;
  });
}

document.querySelectorAll(".hero-slider-arrow[data-direction]").forEach((button) => {
  button.addEventListener("click", () => updateSlide(activeSlide + Number(button.dataset.direction)));
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => updateSlide(Number(dot.dataset.slideIndex)));
});

function updateAutoplayControl() {
  autoplayToggle.setAttribute("aria-pressed", String(!autoplay));
  autoplayToggle.setAttribute(
    "aria-label",
    autoplay ? "Pause automatic slide changes" : "Resume automatic slide changes",
  );
  autoplayToggle.textContent = autoplay ? "Ⅱ" : "▶";
}

autoplayToggle.addEventListener("click", () => {
  autoplay = !autoplay;
  updateAutoplayControl();
});

reducedMotion.addEventListener("change", (event) => {
  autoplay = !event.matches;
  updateAutoplayControl();
});

updateAutoplayControl();
updateSlide(0, false);

action.addEventListener("click", () => {
  const filterTab = document.querySelector(`.filter-tab[data-filter="${action.dataset.filter}"]`);
  if (filterTab) filterTab.click();
});

heroArt.addEventListener("pointermove", (event) => {
  const bounds = heroArt.getBoundingClientRect();
  targetPointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.32;
  targetPointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.2;
});

heroArt.addEventListener("pointerleave", () => {
  targetPointerX = 0;
  targetPointerY = 0;
});

setInterval(() => {
  if (!autoplay || reducedMotion.matches || document.hidden || heroArt.matches(":hover") || heroArt.contains(document.activeElement)) return;
  updateSlide(activeSlide + 1, false);
}, 6500);

function createCoverTexture(title, symbol, color) {
  const coverCanvas = document.createElement("canvas");
  coverCanvas.width = 512;
  coverCanvas.height = 320;
  const context = coverCanvas.getContext("2d");
  context.fillStyle = color;
  context.fillRect(0, 0, coverCanvas.width, coverCanvas.height);
  context.strokeStyle = "rgba(255, 250, 238, 0.68)";
  context.lineWidth = 3;
  context.strokeRect(18, 18, coverCanvas.width - 36, coverCanvas.height - 36);
  context.fillStyle = "#fffaf0";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = "bold 74px Georgia, serif";
  context.fillText(symbol, coverCanvas.width / 2, 104);
  context.font = "bold 28px Georgia, serif";
  context.fillText(title, coverCanvas.width / 2, 211, 438);
  const texture = new THREE.CanvasTexture(coverCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createBook(title, symbol, color, index) {
  const width = 2.65 - index * 0.11;
  const height = 0.38;
  const depth = 1.65 - index * 0.06;
  const cover = new THREE.MeshStandardMaterial({ color, roughness: 0.76 });
  const pages = new THREE.MeshStandardMaterial({ color: "#f2e7d0", roughness: 0.92 });
  const book = new THREE.Group();
  const core = new THREE.Mesh(
    new THREE.BoxGeometry(width, height, depth),
    [cover, cover, pages, cover, pages, cover],
  );
  core.castShadow = true;
  core.receiveShadow = true;
  book.add(core);

  const labelMaterial = new THREE.MeshStandardMaterial({
    map: createCoverTexture(title, symbol, color),
    roughness: 0.85,
    side: THREE.DoubleSide,
  });
  const label = new THREE.Mesh(new THREE.PlaneGeometry(width * 0.84, depth * 0.84), labelMaterial);
  label.rotation.x = -Math.PI / 2;
  label.position.y = height / 2 + 0.002;
  book.add(label);

  const spine = new THREE.Mesh(
    new THREE.BoxGeometry(width, height * 0.92, 0.045),
    new THREE.MeshStandardMaterial({ color, roughness: 0.72 }),
  );
  spine.position.z = depth / 2;
  spine.castShadow = true;
  book.add(spine);

  book.rotation.y = -0.18 + index * 0.06;
  book.rotation.z = index === 1 ? -0.055 : 0.035;
  book.position.y = index * (height - 0.015);
  return { group: book, cover, label: { material: labelMaterial } };
}

async function startThreeScene() {
  THREE = await import("https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 3.25, 7.4);
  camera.lookAt(0, 0.45, 0);

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.22;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  scene.add(new THREE.HemisphereLight("#fff8e9", "#798867", 2.3));
  const keyLight = new THREE.DirectionalLight("#fff5dc", 3.4);
  keyLight.position.set(-3, 7, 5);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(1024, 1024);
  scene.add(keyLight);

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(2.15, 64),
    new THREE.MeshStandardMaterial({ color: "#e7dfc9", roughness: 1 }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, -0.11, 0);
  ground.receiveShadow = true;
  scene.add(ground);

  const sun = new THREE.Mesh(
    new THREE.CircleGeometry(0.52, 64),
    new THREE.MeshBasicMaterial({ color: "#e8cb81" }),
  );
  sun.position.set(1.36, 2.15, -1.4);
  scene.add(sun);

  const stack = new THREE.Group();
  const initialSlide = slides[activeSlide];
  initialSlide.covers.forEach((color, index) => {
    const book = createBook(initialSlide.titles[index], initialSlide.symbols[index], color, index);
    sceneBooks.push(book);
    stack.add(book.group);
  });
  stack.position.y = 0.13;
  stack.rotation.z = -0.025;
  scene.add(stack);

  const clock = new THREE.Clock();
  const resizeObserver = new ResizeObserver(() => {
    const width = heroArt.clientWidth;
    const height = heroArt.clientHeight;
    if (!width || !height) return;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  });
  resizeObserver.observe(heroArt);

  heroArt.classList.add("webgl-ready");

  function animate() {
    if (!heroArt.isConnected) {
      resizeObserver.disconnect();
      renderer.dispose();
      return;
    }

    requestAnimationFrame(animate);
    if (document.hidden) return;
    const elapsed = clock.getElapsedTime();
    const motion = reducedMotion.matches ? 0 : 1;
    stack.position.y = 0.13 + Math.sin(elapsed * 0.8) * 0.055 * motion;
    stack.rotation.y += (targetPointerX - stack.rotation.y) * 0.035;
    stack.rotation.x += (-targetPointerY - stack.rotation.x) * 0.035;
    if (motion) stack.rotation.y += 0.0008;
    renderer.render(scene, camera);
  }

  animate();
}

try {
  await startThreeScene();
} catch (error) {
  console.error("The 3D book preview could not be initialized; the illustrated hero remains available.", error);
}
