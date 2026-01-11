        // Data
        const tools = [
            { name: "VS Code", icon: "fas fa-code" },
            { name: "Replit", icon: "fas fa-terminal" },
            { name: "Blender", icon: "fas fa-cube" },
            { name: "Ubuntu", icon: "fab fa-ubuntu" },
            { name: "MySQL", icon: "fas fa-database" },
            { name: "Unity", icon: "fab fa-unity" },
            { name: "Jupyter", icon: "fas fa-book" },
            { name: "IntelliJ", icon: "fas fa-jet-fighter" },
            { name: "PyCharm", icon: "fas fa-brain" },
            { name: "Docker", icon: "fab fa-docker" },
            { name: "Chrome", icon: "fab fa-chrome" },
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "Figma", icon: "fas fa-palette" },
            { name: "Spline", icon: "fas fa-shapes" }
        ];

        const skills = [
            { name: "Python", icon: "fab fa-python" },
            { name: "Java", icon: "fab fa-java" },
            { name: "C++", icon: "fas fa-cogs" },
            { name: "HTML5", icon: "fab fa-html5" },
            { name: "CSS", icon: "fab fa-css3-alt" },
            { name: "JavaScript", icon: "fab fa-js" },
            { name: "React", icon: "fab fa-react" },
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: "MongoDB", icon: "fas fa-database" },
            { name: "MySQL", icon: "fas fa-database" },
            { name: "APIs", icon: "fas fa-network-wired" },
            { name: "DSA", icon: "fas fa-project-diagram" },
            { name: "Data Analysis", icon: "fas fa-chart-line" },
            { name: "3D Design", icon: "fas fa-cube" }
        ];
        const demos = [
            {
                title: "Python",
                tool: "VS Code",
                lines: [
                    { text: "def greet(name):", type: "function" },
                    { text: "    return f'Hello, {name}!'", type: "string" },
                    { text: "", type: "normal" },
                    { text: "users = ['Alice', 'Bob']", type: "variable" },
                    { text: "print([greet(u) for u in users])", type: "keyword" }
                ],
                typewriterLines: [1, 2, 4, 5]
            },
            {
                title: "JavaScript",
                tool: "VS Code",
                lines: [
                    { text: "const fetchData = async (url) => {", type: "function" },
                    { text: "    const res = await fetch(url);", type: "keyword" },
                    { text: "    const data = await res.json();", type: "variable" },
                    { text: "    return data.slice(0, 5);", type: "keyword" },
                    { text: "};", type: "normal" }
                ],
                typewriterLines: [1, 2, 3, 4]
            },
            {
                title: "C++",
                tool: "VS Code",
                lines: [
                    { text: "#include <iostream>", type: "keyword" },
                    { text: "int main() {", type: "function" },
                    { text: "    auto msg = \"Hello C++\";", type: "variable" },
                    { text: "    std::cout << msg << std::endl;", type: "normal" },
                    { text: "    return 0;", type: "keyword" },
                    { text: "}", type: "normal" }
                ],
                typewriterLines: [1, 2, 3, 4, 5]
            },
            {
                title: "React",
                tool: "VS Code",
                lines: [
                    { text: "export function Toggle() {", type: "function" },
                    { text: "    const [on, setOn] = useState(false);", type: "variable" },
                    { text: "    return (", type: "keyword" },
                    { text: "        <button onClick={() => setOn(!on)}>", type: "normal" },
                    { text: "            {on ? 'ON' : 'OFF'}", type: "string" },
                    { text: "        </button>", type: "normal" },
                    { text: "    );", type: "normal" },
                    { text: "}", type: "normal" }
                ],
                typewriterLines: [1, 2, 4, 5]
            },
            {
                title: "HTML/CSS",
                tool: "VS Code",
                lines: [
                    { text: ".card:hover {", type: "keyword" },
                    { text: "    transform: translateY(-5px);", type: "normal" },
                    { text: "    box-shadow: 0 10px 20px rgba(0,0,0,0.2);", type: "normal" },
                    { text: "    background: linear-gradient(45deg, #00c, #00f);", type: "normal" },
                    { text: "    transition: 0.3s ease;", type: "normal" },
                    { text: "}", type: "normal" }
                ],
                typewriterLines: [1, 2, 3, 4, 5]
            },
            {
                title: "SQL",
                tool: "MySQL",
                lines: [
                    { text: "SELECT orders.id, users.name", type: "keyword" },
                    { text: "FROM orders", type: "keyword" },
                    { text: "JOIN users ON orders.user_id = users.id", type: "normal" },
                    { text: "WHERE orders.total > 100", type: "keyword" },
                    { text: "ORDER BY orders.created_at DESC;", type: "keyword" }
                ],
                typewriterLines: [1, 2, 3, 4, 5]
            },
            {
                title: "TypeScript",
                tool: "VS Code",
                lines: [
                    { text: "interface User { id: number; name: string; }", type: "keyword" },
                    { text: "function logUser(user: User): void {", type: "function" },
                    { text: "    console.log(`ID: ${user.id}, Name: ${user.name}`);", type: "string" },
                    { text: "}", type: "normal" }
                ],
                typewriterLines: [1, 2, 3]
            }
        ];

        // Enhanced 3D Variables
        let scene, camera, renderer, cube;
        let isRotating = true;
        let isWireframe = false;
        let scale = 1;
        let materialIndex = 0;
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };
        let previousTouchDistance = null;

        const materials = [
            { color: 0x1e293b, metalness: 0.9, roughness: 0.1 },
            { color: 0x60a5fa, metalness: 0.7, roughness: 0.3 },
            { color: 0x10b981, metalness: 0.8, roughness: 0.2 }
        ];

        // Initialize 3D Cube with Touch Support
        function initMetallicCube() {
            const container = document.getElementById('blender-model-container');

            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x000000);

            camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
            camera.position.z = 4;

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.shadowMap.enabled = true;
            container.appendChild(renderer.domElement);

            // Lights
            const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(3, 3, 3);
            directionalLight.castShadow = true;
            scene.add(directionalLight);

            // Cube with current material
            const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
            const material = new THREE.MeshStandardMaterial(materials[materialIndex]);
            cube = new THREE.Mesh(geometry, material);
            cube.castShadow = true;
            scene.add(cube);

            // Wireframe
            const wireframeGeometry = new THREE.WireframeGeometry(geometry);
            const wireframeMaterial = new THREE.LineBasicMaterial({
                color: 0x60a5fa,
                transparent: true,
                opacity: 0.3,
                linewidth: 2
            });
            const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
            cube.add(wireframe);

            // Add shadow plane
            const planeGeometry = new THREE.PlaneGeometry(5, 5);
            const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.3 });
            const plane = new THREE.Mesh(planeGeometry, planeMaterial);
            plane.rotation.x = -Math.PI / 2;
            plane.position.y = -2;
            plane.receiveShadow = true;
            scene.add(plane);

            // Enhanced Controls
            const controlsDiv = document.createElement('div');
            controlsDiv.className = 'blender-extra-controls';
            controlsDiv.innerHTML = `
                <button class="extra-btn" onclick="changeMaterial()" title="Change Material">
                    <i class="fas fa-palette"></i>
                </button>
                <button class="extra-btn" onclick="toggleScale()" title="Toggle Scale">
                    <i class="fas fa-expand-alt"></i>
                </button>
                <button class="extra-btn" onclick="toggleSpin()" title="Toggle Spin">
                    <i class="fas fa-sync"></i>
                </button>
            `;
            container.appendChild(controlsDiv);

            // Event Listeners for Mouse
            container.addEventListener('mousedown', onMouseDown);
            container.addEventListener('mousemove', onMouseMove);
            container.addEventListener('mouseup', onMouseUp);
            container.addEventListener('mouseleave', onMouseUp);

            // Event Listeners for Touch
            container.addEventListener('touchstart', onTouchStart, { passive: false });
            container.addEventListener('touchmove', onTouchMove, { passive: false });
            container.addEventListener('touchend', onTouchEnd);

            // Wheel for zoom
            container.addEventListener('wheel', onMouseWheel, { passive: false });

            // Window resize
            window.addEventListener('resize', onWindowResize);

            animate();
        }

        function onWindowResize() {
            const container = document.getElementById('blender-model-container');
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        }

        // Mouse Event Handlers
        function onMouseDown(event) {
            event.preventDefault();
            isDragging = true;
            previousMousePosition = {
                x: event.clientX,
                y: event.clientY
            };
            document.getElementById('blender-model-container').style.cursor = 'grabbing';
        }

        function onMouseMove(event) {
            if (!isDragging) return;
            event.preventDefault();

            const deltaX = event.clientX - previousMousePosition.x;
            const deltaY = event.clientY - previousMousePosition.y;

            cube.rotation.y += deltaX * 0.01;
            cube.rotation.x += deltaY * 0.01;

            previousMousePosition = {
                x: event.clientX,
                y: event.clientY
            };
        }

        function onMouseUp(event) {
            event.preventDefault();
            isDragging = false;
            document.getElementById('blender-model-container').style.cursor = 'grab';
        }

        function onMouseWheel(event) {
            event.preventDefault();
            camera.position.z += event.deltaY * 0.01;
            camera.position.z = Math.max(2, Math.min(10, camera.position.z));
        }

        // Touch Event Handlers
        function onTouchStart(event) {
            event.preventDefault();
            if (event.touches.length === 1) {
                // Single touch for rotation
                isDragging = true;
                previousMousePosition = {
                    x: event.touches[0].clientX,
                    y: event.touches[0].clientY
                };
            } else if (event.touches.length === 2) {
                // Two touches for pinch zoom
                previousTouchDistance = getTouchDistance(event.touches[0], event.touches[1]);
            }
        }

        function onTouchMove(event) {
            event.preventDefault();

            if (event.touches.length === 1 && isDragging) {
                // Single touch rotation
                const deltaX = event.touches[0].clientX - previousMousePosition.x;
                const deltaY = event.touches[0].clientY - previousMousePosition.y;

                cube.rotation.y += deltaX * 0.01;
                cube.rotation.x += deltaY * 0.01;

                previousMousePosition = {
                    x: event.touches[0].clientX,
                    y: event.touches[0].clientY
                };
            } else if (event.touches.length === 2) {
                // Pinch zoom
                const currentDistance = getTouchDistance(event.touches[0], event.touches[1]);

                if (previousTouchDistance !== null) {
                    const delta = currentDistance - previousTouchDistance;
                    camera.position.z -= delta * 0.01;
                    camera.position.z = Math.max(2, Math.min(10, camera.position.z));
                }

                previousTouchDistance = currentDistance;
            }
        }

        function onTouchEnd(event) {
            event.preventDefault();
            isDragging = false;
            previousTouchDistance = null;
        }

        function getTouchDistance(touch1, touch2) {
            const dx = touch1.clientX - touch2.clientX;
            const dy = touch1.clientY - touch2.clientY;
            return Math.sqrt(dx * dx + dy * dy);
        }

        function animate() {
            requestAnimationFrame(animate);

            if (isRotating && !isDragging) {
                cube.rotation.x += 0.008;
                cube.rotation.y += 0.012;
            }

            cube.scale.set(scale, scale, scale);
            renderer.render(scene, camera);
        }

        // Control Functions
        function toggleRotation() {
            isRotating = !isRotating;
            const btn = document.getElementById('rotate-btn');
            btn.innerHTML = isRotating ?
                '<i class="fas fa-pause"></i> Pause' :
                '<i class="fas fa-play"></i> Resume';
        }

        function toggleWireframe() {
            isWireframe = !isWireframe;
            cube.traverse((child) => {
                if (child.isLineSegments) {
                    child.material.opacity = isWireframe ? 0.8 : 0.3;
                }
            });
            const btn = document.getElementById('wireframe-btn');
            btn.innerHTML = isWireframe ?
                '<i class="fas fa-cube"></i> Solid' :
                '<i class="fas fa-th"></i> Wireframe';
        }

        function resetCube() {
            cube.rotation.x = 0;
            cube.rotation.y = 0;
            cube.rotation.z = 0;
            camera.position.z = 4;
            scale = 1;
            isRotating = true;
            document.getElementById('rotate-btn').innerHTML = '<i class="fas fa-pause"></i> Pause';
        }

        function changeMaterial() {
            materialIndex = (materialIndex + 1) % materials.length;
            cube.material = new THREE.MeshStandardMaterial(materials[materialIndex]);
        }

        function toggleScale() {
            scale = scale === 1 ? 1.5 : 1;
        }

        function toggleSpin() {
            isRotating = !isRotating;
        }

        // Render Functions
        function renderTools() {
            const toolsGrid = document.getElementById('tools-grid');
            tools.forEach((tool, index) => {
                const toolItem = document.createElement('div');
                toolItem.className = 'tool-item';
                toolItem.style.animationDelay = `${index * 100}ms`;
                toolItem.innerHTML = `
                    <div class="tool-icon">
                        <i class="${tool.icon}"></i>
                    </div>
                    <div class="tool-name">${tool.name}</div>
                `;
                toolsGrid.appendChild(toolItem);
            });
        }

        function renderSkills() {
            const skillsGrid = document.getElementById('skills-grid');
            skills.forEach((skill, index) => {
                const skillItem = document.createElement('div');
                skillItem.className = 'skill-item';
                skillItem.style.animationDelay = `${index * 100}ms`;
                skillItem.innerHTML = `
                    <div class="skill-icon">
                        <i class="${skill.icon}"></i>
                    </div>
                    <div class="skill-name">${skill.name}</div>
                `;
                skillsGrid.appendChild(skillItem);
            });
        }

        function renderDemos() {
            const demosGrid = document.getElementById('demos-grid');
            demos.forEach((demo, index) => {
                const demoCard = document.createElement('div');
                demoCard.className = 'demo-card';
                demoCard.style.animationDelay = `${index * 200}ms`;
                demoCard.innerHTML = `
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
                    <div class="terminal-body" id="terminal-body-${index}"></div>
                `;
                demosGrid.appendChild(demoCard);

                // Render code lines with delay
                setTimeout(() => {
                    renderCodeLines(demo, index);
                }, index * 400);
            });
        }

        function renderCodeLines(demo, index) {
            const container = document.getElementById(`terminal-body-${index}`);

            demo.lines.forEach((line, lineIndex) => {
                const lineDiv = document.createElement('div');
                lineDiv.className = `code-line ${line.type}`;
                lineDiv.textContent = line.text;
                container.appendChild(lineDiv);

                if (demo.typewriterLines && demo.typewriterLines.includes(lineIndex + 1)) {
                    setTimeout(() => {
                        lineDiv.classList.add('visible');
                        animateTypewriter(lineDiv);
                    }, lineIndex * 600);
                } else {
                    setTimeout(() => {
                        lineDiv.classList.add('visible');
                    }, lineIndex * 150);
                }
            });

            setTimeout(() => {
                const cursor = document.createElement('div');
                cursor.className = 'code-line visible';
                cursor.innerHTML = '<span class="typewriter-cursor"></span>';
                container.appendChild(cursor);
            }, demo.lines.length * 200);
        }

        function animateTypewriter(element) {
            const text = element.textContent;
            element.textContent = '';

            let i = 0;
            function typeWriter() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 40);
                }
            }
            typeWriter();
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            renderTools();
            renderSkills();
            renderDemos();
            setTimeout(() => initMetallicCube(), 500);
        });
