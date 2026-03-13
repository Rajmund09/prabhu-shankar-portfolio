/* ============================================================
   TOST.JS — Premium Developer Portfolio Skills Page
   Enhanced: animations, 3D cube, custom cursor, scroll reveal,
   skill tabs, counter, dot-grid background, new tools/skills
   ============================================================ */

// ─── Data: Development Tools (expanded) ──────────────────────
const tools = [
  { name: "VS Code",    icon: "fas fa-code" },
  { name: "Replit",     icon: "fas fa-terminal" },
  { name: "Blender",    icon: "fas fa-cube" },
  { name: "Ubuntu",     icon: "fab fa-ubuntu" },
  { name: "MySQL",      icon: "fas fa-database" },
  { name: "Unity",      icon: "fab fa-unity" },
  { name: "Jupyter",    icon: "fas fa-book" },
  { name: "IntelliJ",   icon: "fas fa-jet-fighter" },
  { name: "PyCharm",    icon: "fas fa-brain" },
  { name: "Docker",     icon: "fab fa-docker" },
  { name: "Chrome",     icon: "fab fa-chrome" },
  { name: "Git",        icon: "fab fa-git-alt" },
  { name: "Figma",      icon: "fas fa-palette" },
  { name: "Spline",     icon: "fas fa-shapes" },
  // ── New additions ──────────────────────────
  { name: "GitHub",     icon: "fab fa-github" },
  { name: "Postman",    icon: "fas fa-paper-plane" },
  { name: "Vercel",     icon: "fas fa-triangle-exclamation" },
  { name: "Firebase",   icon: "fas fa-fire" },
  { name: "Linux",      icon: "fab fa-linux" },
  { name: "AWS",        icon: "fab fa-aws" },
  { name: "TensorFlow", icon: "fas fa-robot" },
  { name: "PyTorch",    icon: "fas fa-fire-flame-curved" },
  { name: "OpenAI API", icon: "fas fa-microchip" },
  { name: "Netlify",    icon: "fas fa-bolt" }
];

// ─── Data: Technical Skills (expanded + categorised) ─────────
const skills = [
  // Languages
  { name: "Python",       icon: "fab fa-python",       category: "languages" },
  { name: "Java",         icon: "fab fa-java",          category: "languages" },
  { name: "C++",          icon: "fas fa-cogs",          category: "languages" },
  { name: "JavaScript",   icon: "fab fa-js",            category: "languages" },
  { name: "TypeScript",   icon: "fas fa-code",          category: "languages" },
  { name: "HTML5",        icon: "fab fa-html5",         category: "languages" },
  { name: "CSS",          icon: "fab fa-css3-alt",      category: "languages" },
  { name: "SQL",          icon: "fas fa-database",      category: "languages" },
  { name: "Bash",         icon: "fas fa-terminal",      category: "languages" },

  // Frameworks
  { name: "React",        icon: "fab fa-react",         category: "frameworks" },
  { name: "Node.js",      icon: "fab fa-node-js",       category: "frameworks" },
  { name: "Next.js",      icon: "fas fa-n",             category: "frameworks" },
  { name: "Express.js",   icon: "fas fa-server",        category: "frameworks" },
  { name: "Flask",        icon: "fas fa-flask",         category: "frameworks" },

  // AI / Data
  { name: "Machine Learning", icon: "fas fa-robot",     category: "ai" },
  { name: "Data Analysis",    icon: "fas fa-chart-line", category: "ai" },
  { name: "Pandas",           icon: "fas fa-table",      category: "ai" },
  { name: "NumPy",            icon: "fas fa-infinity",   category: "ai" },
  { name: "Scikit-learn",     icon: "fas fa-brain",      category: "ai" },
  { name: "3D Design",        icon: "fas fa-cube",       category: "ai" },

  // Databases & Other
  { name: "MongoDB",      icon: "fas fa-leaf",          category: "databases" },
  { name: "MySQL",        icon: "fas fa-database",      category: "databases" },
  { name: "APIs",         icon: "fas fa-network-wired", category: "databases" },
  { name: "DSA",          icon: "fas fa-project-diagram", category: "databases" }
];

// ─── Data: Code Demos ─────────────────────────────────────────
const demos = [
  {
    title: "Python",
    tool: "Python 3.11",
    lines: [
      { text: "# List comprehension + f-string", type: "comment" },
      { text: "def greet(name: str) -> str:", type: "function" },
      { text: "    return f'Hello, {name}! 👋'", type: "string" },
      { text: "", type: "normal" },
      { text: "users = ['Alice', 'Bob', 'Carol']", type: "variable" },
      { text: "msgs = [greet(u) for u in users]", type: "keyword" },
      { text: "print(msgs)", type: "normal" }
    ],
    typewriterLines: [2, 3, 5, 6]
  },
  {
    title: "JavaScript",
    tool: "ES2024",
    lines: [
      { text: "// Async / await fetch pattern", type: "comment" },
      { text: "const fetchData = async (url) => {", type: "function" },
      { text: "  const res  = await fetch(url);", type: "keyword" },
      { text: "  const data = await res.json();", type: "variable" },
      { text: "  return data.slice(0, 5);", type: "keyword" },
      { text: "};", type: "normal" }
    ],
    typewriterLines: [2, 3, 4, 5]
  },
  {
    title: "C++",
    tool: "C++17",
    lines: [
      { text: "#include <iostream>", type: "keyword" },
      { text: "#include <string>", type: "keyword" },
      { text: "int main() {", type: "function" },
      { text: "  auto msg = std::string(\"Hello C++\");", type: "variable" },
      { text: "  std::cout << msg << std::endl;", type: "normal" },
      { text: "  return 0;", type: "keyword" },
      { text: "}", type: "normal" }
    ],
    typewriterLines: [3, 4, 5]
  },
  {
    title: "React",
    tool: "React 18",
    lines: [
      { text: "import { useState } from 'react';", type: "keyword" },
      { text: "export function Toggle() {", type: "function" },
      { text: "  const [on, setOn] = useState(false);", type: "variable" },
      { text: "  return (", type: "keyword" },
      { text: "    <button onClick={() => setOn(!on)}>", type: "normal" },
      { text: "      {on ? '✅ ON' : '⭕ OFF'}", type: "string" },
      { text: "    </button>", type: "normal" },
      { text: "  );", type: "normal" },
      { text: "}", type: "normal" }
    ],
    typewriterLines: [1, 2, 5, 6]
  },
  {
    title: "HTML / CSS",
    tool: "CSS3",
    lines: [
      { text: "/* Glassmorphism card */", type: "comment" },
      { text: ".card {", type: "keyword" },
      { text: "  backdrop-filter: blur(16px);", type: "normal" },
      { text: "  background: rgba(255,255,255,.08);", type: "string" },
      { text: "  border: 1px solid rgba(255,255,255,.12);", type: "normal" },
      { text: "  transition: transform 0.3s ease;", type: "normal" },
      { text: "}", type: "keyword" }
    ],
    typewriterLines: [2, 3, 4, 5]
  },
  {
    title: "SQL",
    tool: "MySQL 8",
    lines: [
      { text: "-- Revenue by user segment", type: "comment" },
      { text: "SELECT u.name, SUM(o.total) AS revenue", type: "keyword" },
      { text: "FROM orders o", type: "keyword" },
      { text: "JOIN users u ON o.user_id = u.id", type: "normal" },
      { text: "WHERE o.total > 100", type: "keyword" },
      { text: "GROUP BY u.name", type: "keyword" },
      { text: "ORDER BY revenue DESC;", type: "keyword" }
    ],
    typewriterLines: [2, 3, 4, 5]
  },
  {
    title: "TypeScript",
    tool: "TS 5.4",
    lines: [
      { text: "// Generic API response wrapper", type: "comment" },
      { text: "interface ApiResponse<T> {", type: "keyword" },
      { text: "  data: T;", type: "variable" },
      { text: "  status: number;", type: "variable" },
      { text: "}", type: "normal" },
      { text: "function logUser(user: ApiResponse<User>) {", type: "function" },
      { text: "  console.log(user.data.name);", type: "string" },
      { text: "}", type: "normal" }
    ],
    typewriterLines: [2, 3, 6, 7]
  }
];

// ─── Three.js state ───────────────────────────────────────────
let scene, camera, renderer, cube;
let isRotating = true;
let isWireframe = false;
let scale = 1;
let materialIndex = 0;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let previousTouchDistance = null;

const materials = [
  { color: 0x1e2a3a, metalness: 0.95, roughness: 0.05, envMapIntensity: 1 },
  { color: 0x1a4a6e, metalness: 0.80, roughness: 0.20, envMapIntensity: 0.9 },
  { color: 0x0f3d2e, metalness: 0.85, roughness: 0.15, envMapIntensity: 0.9 }
];

// ─── Animated dot-grid background canvas ─────────────────────
function initBgCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, dots = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    buildDots();
  }

  function buildDots() {
    dots = [];
    const gap = 38;
    for (let x = 0; x < W; x += gap) {
      for (let y = 0; y < H; y += gap) {
        dots.push({ x, y, base: x, baseY: y, r: Math.random(), phase: Math.random() * Math.PI * 2 });
      }
    }
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    frame++;
    dots.forEach(d => {
      const pulse = 0.5 + 0.5 * Math.sin(frame * 0.012 + d.phase);
      ctx.beginPath();
      ctx.arc(d.x, d.y, 1 + d.r * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99,179,237,${0.06 + pulse * 0.08})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  draw();
}

// ─── Custom cursor ────────────────────────────────────────────
function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let rx = 0, ry = 0; // ring position (lagged)
  let mx = 0, my = 0; // mouse position

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  // Ring lags behind
  function lerpRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(lerpRing);
  }
  lerpRing();

  // Hover class for interactive elements
  const hoverTargets = 'a, button, .tool-item, .skill-item, .demo-card, .skill-tab';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverTargets)) ring.classList.add('hovering');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverTargets)) ring.classList.remove('hovering');
  });
}

// ─── Scroll reveal (IntersectionObserver) ────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
}

// ─── Animated number counters ─────────────────────────────────
function initCounters() {
  const nums = document.querySelectorAll('.stat-num[data-count]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.count;
      let start = 0;
      const step = Math.ceil(target / 30);
      const timer = setInterval(() => {
        start = Math.min(start + step, target);
        el.textContent = start;
        if (start >= target) clearInterval(timer);
      }, 40);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  nums.forEach(el => observer.observe(el));
}

// ─── Render: Tools grid ───────────────────────────────────────
function renderTools() {
  const grid = document.getElementById('tools-grid');
  if (!grid) return;

  tools.forEach((tool, i) => {
    const el = document.createElement('div');
    el.className = 'tool-item';
    el.innerHTML = `
      <div class="tool-icon"><i class="${tool.icon}"></i></div>
      <div class="tool-name">${tool.name}</div>`;
    grid.appendChild(el);

    // Staggered entrance via IntersectionObserver
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('card-visible'), i * 45);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    obs.observe(el);
  });
}

// ─── Render: Skills grid with category filter ─────────────────
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  skills.forEach((skill, i) => {
    const el = document.createElement('div');
    el.className = 'skill-item';
    el.dataset.category = skill.category;
    el.innerHTML = `
      <div class="skill-icon"><i class="${skill.icon}"></i></div>
      <div class="skill-name">${skill.name}</div>`;
    grid.appendChild(el);

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('card-visible'), i * 40);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    obs.observe(el);
  });
}

// Skill tab filter
function initSkillTabs() {
  const tabs = document.querySelectorAll('.skill-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const cat = tab.dataset.category;
      document.querySelectorAll('.skill-item').forEach(item => {
        const show = cat === 'all' || item.dataset.category === cat;
        item.style.transition = 'opacity 0.25s, transform 0.25s';
        if (show) {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0) scale(1)';
          item.style.display = '';
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(8px) scale(0.96)';
          setTimeout(() => { item.style.display = 'none'; }, 250);
        }
      });
    });
  });
}

// ─── Render: Code demo terminals ─────────────────────────────
function renderDemos() {
  const grid = document.getElementById('demos-grid');
  if (!grid) return;

  demos.forEach((demo, idx) => {
    const card = document.createElement('div');
    card.className = 'demo-card';
    card.innerHTML = `
      <div class="terminal-header">
        <div class="terminal-controls">
          <div class="terminal-btn close-btn"></div>
          <div class="terminal-btn minimize-btn"></div>
          <div class="terminal-btn maximize-btn"></div>
        </div>
        <div class="terminal-title">
          <i class="fas fa-code"></i> ${demo.title}
        </div>
        <div class="terminal-tool">${demo.tool}</div>
      </div>
      <div class="terminal-body" id="terminal-body-${idx}"></div>`;
    grid.appendChild(card);

    // Staggered entrance
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            card.classList.add('card-visible');
            renderCodeLines(demo, idx);
          }, idx * 150);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    obs.observe(card);
  });
}

function renderCodeLines(demo, idx) {
  const container = document.getElementById(`terminal-body-${idx}`);
  if (!container || container.dataset.rendered) return;
  container.dataset.rendered = '1';

  demo.lines.forEach((line, li) => {
    const div = document.createElement('div');
    div.className = `code-line ${line.type}`;
    div.dataset.line = li + 1;

    if (demo.typewriterLines && demo.typewriterLines.includes(li + 1)) {
      // Will be typed character-by-character
      div.textContent = '';
      container.appendChild(div);
      setTimeout(() => {
        div.classList.add('visible');
        typewrite(div, line.text);
      }, li * 220 + 100);
    } else {
      div.textContent = line.text;
      container.appendChild(div);
      setTimeout(() => div.classList.add('visible'), li * 130 + 60);
    }
  });

  // Blinking cursor at end
  setTimeout(() => {
    const cursorLine = document.createElement('div');
    cursorLine.className = 'code-line normal visible';
    cursorLine.innerHTML = '<span class="typewriter-cursor"></span>';
    container.appendChild(cursorLine);
  }, demo.lines.length * 240 + 300);
}

function typewrite(el, text, speed = 38) {
  let i = 0;
  function step() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(step, speed);
    }
  }
  step();
}

// ─── Three.js: Metallic Cube ──────────────────────────────────
function initMetallicCube() {
  const container = document.getElementById('blender-model-container');
  if (!container || !window.THREE) return;

  scene    = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  camera   = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0, 0.2, 4.5);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  container.appendChild(renderer.domElement);

  // ── Lights ──────────────────────────────────────────────────
  const ambient = new THREE.AmbientLight(0x404060, 0.4);
  scene.add(ambient);

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
  keyLight.position.set(4, 5, 4);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width  = 1024;
  keyLight.shadow.mapSize.height = 1024;
  keyLight.shadow.radius = 6;
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x63b3ed, 0.6);
  fillLight.position.set(-3, 2, -2);
  scene.add(fillLight);

  const rimLight = new THREE.PointLight(0x9f7aea, 1.2, 12);
  rimLight.position.set(-2, -2, -3);
  scene.add(rimLight);

  // ── Cube ────────────────────────────────────────────────────
  const geometry = new THREE.BoxGeometry(1.8, 1.8, 1.8);
  const mat = new THREE.MeshStandardMaterial({
    ...materials[materialIndex],
    envMapIntensity: 1
  });
  cube = new THREE.Mesh(geometry, mat);
  cube.castShadow = true;
  cube.rotation.x = 0.3;
  cube.rotation.y = 0.5;
  scene.add(cube);

  // ── Wireframe overlay ────────────────────────────────────────
  const wfGeo = new THREE.EdgesGeometry(geometry);
  const wfMat = new THREE.LineBasicMaterial({
    color: 0x63b3ed,
    transparent: true,
    opacity: 0.25
  });
  const wireframe = new THREE.LineSegments(wfGeo, wfMat);
  cube.add(wireframe);

  // ── Ground plane (shadow catcher) ───────────────────────────
  const planeGeo = new THREE.PlaneGeometry(10, 10);
  const planeMat = new THREE.ShadowMaterial({ opacity: 0.25 });
  const plane = new THREE.Mesh(planeGeo, planeMat);
  plane.rotation.x = -Math.PI / 2;
  plane.position.y = -1.6;
  plane.receiveShadow = true;
  scene.add(plane);

  // ── Subtle grid floor ────────────────────────────────────────
  const gridHelper = new THREE.GridHelper(8, 16, 0x1a2a3a, 0x0d1520);
  gridHelper.position.y = -1.6;
  gridHelper.material.opacity = 0.4;
  gridHelper.material.transparent = true;
  scene.add(gridHelper);

  // ── Extra controls (injected into container) ─────────────────
  const ctrlDiv = document.createElement('div');
  ctrlDiv.className = 'blender-extra-controls';
  ctrlDiv.innerHTML = `
    <button class="extra-btn" onclick="changeMaterial()" title="Change material">
      <i class="fas fa-palette"></i>
    </button>
    <button class="extra-btn" onclick="toggleScale()" title="Toggle scale">
      <i class="fas fa-expand-alt"></i>
    </button>
    <button class="extra-btn" onclick="toggleSpin()" title="Toggle spin">
      <i class="fas fa-sync"></i>
    </button>`;
  container.appendChild(ctrlDiv);

  // ── Mouse events ─────────────────────────────────────────────
  container.addEventListener('mousedown', onMouseDown);
  container.addEventListener('mousemove', onMouseMove);
  container.addEventListener('mouseup',   onMouseUp);
  container.addEventListener('mouseleave', onMouseUp);
  container.addEventListener('wheel', onMouseWheel, { passive: false });

  // ── Touch events ─────────────────────────────────────────────
  container.addEventListener('touchstart', onTouchStart, { passive: false });
  container.addEventListener('touchmove',  onTouchMove,  { passive: false });
  container.addEventListener('touchend',   onTouchEnd,   { passive: false });

  window.addEventListener('resize', onWindowResize);

  // Update interaction hint based on device
  const hint = document.getElementById('interaction-hint');
  if (hint) {
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    const hintText = hint.querySelector('.hint-text');
    const hintIcon = hint.querySelector('.hint-icon');
    if (isTouch) {
      if (hintText) hintText.textContent = 'Touch to rotate · Pinch to zoom';
      if (hintIcon) hintIcon.className = 'fas fa-hand-pointer hint-icon';
    }
  }

  animate();
}

// ── Resize ─────────────────────────────────────────────────────
function onWindowResize() {
  const container = document.getElementById('blender-model-container');
  if (!container || !camera || !renderer) return;
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}

// ── Mouse handlers ─────────────────────────────────────────────
function onMouseDown(e) {
  e.preventDefault();
  isDragging = true;
  previousMousePosition = { x: e.clientX, y: e.clientY };
}
function onMouseMove(e) {
  if (!isDragging) return;
  const dx = e.clientX - previousMousePosition.x;
  const dy = e.clientY - previousMousePosition.y;
  cube.rotation.y += dx * 0.009;
  cube.rotation.x += dy * 0.009;
  previousMousePosition = { x: e.clientX, y: e.clientY };
}
function onMouseUp(e) {
  isDragging = false;
}
function onMouseWheel(e) {
  e.preventDefault();
  camera.position.z = Math.max(2.5, Math.min(9, camera.position.z + e.deltaY * 0.008));
}

// ── Touch handlers ─────────────────────────────────────────────
function onTouchStart(e) {
  e.preventDefault();
  if (e.touches.length === 1) {
    isDragging = true;
    previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  } else if (e.touches.length === 2) {
    previousTouchDistance = getTouchDist(e.touches[0], e.touches[1]);
  }
}
function onTouchMove(e) {
  e.preventDefault();
  if (e.touches.length === 1 && isDragging) {
    const dx = e.touches[0].clientX - previousMousePosition.x;
    const dy = e.touches[0].clientY - previousMousePosition.y;
    cube.rotation.y += dx * 0.009;
    cube.rotation.x += dy * 0.009;
    previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  } else if (e.touches.length === 2) {
    const dist = getTouchDist(e.touches[0], e.touches[1]);
    if (previousTouchDistance !== null) {
      const delta = dist - previousTouchDistance;
      camera.position.z = Math.max(2.5, Math.min(9, camera.position.z - delta * 0.01));
    }
    previousTouchDistance = dist;
  }
}
function onTouchEnd(e) {
  e.preventDefault();
  isDragging = false;
  previousTouchDistance = null;
}
function getTouchDist(t1, t2) {
  return Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
}

// ── Render loop ────────────────────────────────────────────────
function animate() {
  requestAnimationFrame(animate);
  if (isRotating && !isDragging) {
    cube.rotation.x += 0.006;
    cube.rotation.y += 0.010;
  }
  // Smooth scale lerp
  cube.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.08);
  renderer.render(scene, camera);
}

// ── Control functions (called by HTML onclick) ─────────────────
function toggleRotation() {
  isRotating = !isRotating;
  const btn = document.getElementById('rotate-btn');
  if (btn) btn.innerHTML = isRotating
    ? '<i class="fas fa-pause"></i> Pause'
    : '<i class="fas fa-play"></i>  Resume';
}
function toggleWireframe() {
  isWireframe = !isWireframe;
  cube.traverse(child => {
    if (child.isLineSegments) {
      child.material.opacity = isWireframe ? 0.85 : 0.25;
    }
  });
  const btn = document.getElementById('wireframe-btn');
  if (btn) btn.innerHTML = isWireframe
    ? '<i class="fas fa-cube"></i> Solid'
    : '<i class="fas fa-th"></i> Wireframe';
}
function resetCube() {
  cube.rotation.set(0.3, 0.5, 0);
  camera.position.set(0, 0.2, 4.5);
  scale = 1;
  isRotating = true;
  const btn = document.getElementById('rotate-btn');
  if (btn) btn.innerHTML = '<i class="fas fa-pause"></i> Pause';
}
function changeMaterial() {
  materialIndex = (materialIndex + 1) % materials.length;
  cube.material = new THREE.MeshStandardMaterial(materials[materialIndex]);
}
function toggleScale() {
  scale = scale === 1 ? 1.45 : 1;
}
function toggleSpin() {
  isRotating = !isRotating;
}

// ─── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initBgCanvas();
  initCursor();
  renderTools();
  renderSkills();
  renderDemos();
  initScrollReveal();
  initCounters();
  initSkillTabs();

  // Three.js deferred slightly so layout is settled
  setTimeout(initMetallicCube, 400);
});