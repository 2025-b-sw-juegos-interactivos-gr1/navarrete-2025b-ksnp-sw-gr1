class MedievalMessengerGame {
    constructor() {
        this.canvas = document.getElementById("renderCanvas");
        this.engine = new BABYLON.Engine(this.canvas, true);
        this.scene = null;
        this.camera = null;
        this.player = null;
        this.scroll = null;
        this.pickupZone = null;
        this.deliveryZone = null;
        
        // Estado del juego
        this.hasScroll = false;
        this.gameCompleted = false;
        
        // Controles
        this.keys = {};
        
        // Referencias UI
        this.statusElement = document.getElementById("status");
        this.messageElement = document.getElementById("message");
        
        // Referencias al modelo 3D
        this.knightModel = null;
        this.knightMeshes = null;
        
        this.init();
    }
    
    init() {
        this.createScene();
        this.createEnvironment();
        this.createPlayer();
        this.createScroll();
        this.createZones();
        this.setupControls();
        this.setupCamera();
        
        // Game loop
        this.engine.runRenderLoop(() => {
            if (!this.gameCompleted) {
                this.update();
            }
            this.scene.render();
        });
        
        // Resize
        window.addEventListener("resize", () => {
            this.engine.resize();
        });
    }
    
    createScene() {
        this.scene = new BABYLON.Scene(this.engine);
        this.scene.clearColor = new BABYLON.Color3(0.53, 0.81, 0.92); // Cielo azul
        
        this.scene.fogMode = BABYLON.Scene.FOGMODE_NONE;
        
        // Luz hemisférica única y potente para iluminar toda la escena
        const mainLight = new BABYLON.HemisphericLight(
            "mainLight",
            new BABYLON.Vector3(0, 1, 0),
            this.scene
        );
        mainLight.intensity = 1.2;
        mainLight.diffuse = new BABYLON.Color3(1, 0.98, 0.95);
        mainLight.groundColor = new BABYLON.Color3(0.6, 0.5, 0.4);
        mainLight.specular = new BABYLON.Color3(0.3, 0.3, 0.3);
        
        this.shadowGenerator = null;
    }
    
    createEnvironment() {
        const ground = BABYLON.MeshBuilder.CreateGround(
            "ground",
            { width: 100, height: 100 },
            this.scene
        );
        const groundMat = new BABYLON.StandardMaterial("groundMat", this.scene);
        groundMat.diffuseColor = new BABYLON.Color3(0.4, 0.5, 0.3);
        groundMat.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);
        
        const groundTexture = new BABYLON.DynamicTexture(
            "groundTexture",
            512,
            this.scene
        );
        const ctx = groundTexture.getContext();
        ctx.fillStyle = "#5a6b4f";
        ctx.fillRect(0, 0, 512, 512);
        
        // Añadir piedras aleatorias
        for (let i = 0; i < 200; i++) {
            ctx.fillStyle = `rgb(${80 + Math.random() * 40}, ${90 + Math.random() * 40}, ${70 + Math.random() * 30})`;
            ctx.fillRect(
                Math.random() * 512,
                Math.random() * 512,
                5 + Math.random() * 10,
                5 + Math.random() * 10
            );
        }
        groundTexture.update();
        groundMat.diffuseTexture = groundTexture;
        ground.material = groundMat;
        ground.receiveShadows = true;
        
        this.createCastle(new BABYLON.Vector3(-30, 0, -30));
        
        this.createWizardTower(new BABYLON.Vector3(30, 0, 30));
        
        this.createTrees();
        
        this.createPath();
    }
    
    createCastle(position) {
        
        BABYLON.SceneLoader.ImportMesh(
            "",
            "models/castle/",
            "castle.glb",
            this.scene,
            (meshes) => {
                const castleRoot = meshes[0];
                
                if (castleRoot) {
                    castleRoot.position = new BABYLON.Vector3(-28.5, 0, -28.5);
                    
                    castleRoot.scaling = new BABYLON.Vector3(650, 650, 650);
                    
                    castleRoot.rotation = new BABYLON.Vector3(0, Math.PI / 4, 0);
                    
                    meshes.forEach(mesh => {
                        mesh.isVisible = true;
                    });
                }
            },
            (progress) => {
                if (progress.lengthComputable) {
                    const percent = (progress.loaded / progress.total * 100).toFixed(2);
                    console.log(`Cargando castillo: ${percent}%`);
                }
            },
            (scene, message, exception) => {
                console.error("Error al cargar el castillo:", message, exception);
            }
        );
    }
    
    createWizardTower(position) {
        
        BABYLON.SceneLoader.ImportMesh(
            "",
            "models/tower/",
            "Towerr.gltf",
            this.scene,
            (meshes) => {                
                meshes.forEach((mesh, index) => {
                    mesh.position = new BABYLON.Vector3(1.65, -1.75, 0.77);
                    
                    mesh.scaling = new BABYLON.Vector3(0.17, 0.17, 0.17);
                    
                    mesh.rotation = new BABYLON.Vector3(0, 0, 0);
                    
                    mesh.isVisible = true;
                    mesh.isPickable = true;
                    
                    if (mesh.material) {
                        mesh.material.backFaceCulling = false;
                        mesh.material.wireframe = false;
                    }
                    
                    mesh.refreshBoundingInfo();
                    mesh.computeWorldMatrix(true);
                });
            },
            (progress) => {
                if (progress.lengthComputable) {
                    const percent = (progress.loaded / progress.total * 100).toFixed(2);
                    console.log(`Cargando torre: ${percent}%`);
                }
            },
            (scene, message, exception) => {
                console.error("Error al cargar la torre:", message, exception);
            }
        );
    }
    
    createTrees() {
        const treePositions = [
            new BABYLON.Vector3(-40, 0, 10),
            new BABYLON.Vector3(-35, 0, 20),
            new BABYLON.Vector3(40, 0, -10),
            new BABYLON.Vector3(35, 0, -20),
            new BABYLON.Vector3(10, 0, -40),
            new BABYLON.Vector3(-10, 0, 40),
            new BABYLON.Vector3(20, 0, -35),
            new BABYLON.Vector3(-20, 0, 35)
        ];
        
        treePositions.forEach((pos, index) => {
            // Tronco
            const trunk = BABYLON.MeshBuilder.CreateCylinder(
                `trunk${index}`,
                { height: 5, diameter: 1 },
                this.scene
            );
            trunk.position = pos.add(new BABYLON.Vector3(0, 2.5, 0));
            const trunkMat = new BABYLON.StandardMaterial(`trunkMat${index}`, this.scene);
            trunkMat.diffuseColor = new BABYLON.Color3(0.3, 0.2, 0.1);
            trunk.material = trunkMat;
            
            // Copa del árbol
            const foliage = BABYLON.MeshBuilder.CreateSphere(
                `foliage${index}`,
                { diameter: 6 },
                this.scene
            );
            foliage.position = pos.add(new BABYLON.Vector3(0, 7, 0));
            const foliageMat = new BABYLON.StandardMaterial(`foliageMat${index}`, this.scene);
            foliageMat.diffuseColor = new BABYLON.Color3(0.2, 0.5, 0.2);
            foliage.material = foliageMat;
        });
    }
    
    createPath() {
        // Camino de piedras entre castillo y torreón
        const pathMat = new BABYLON.StandardMaterial("pathMat", this.scene);
        pathMat.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.45);
        
        for (let i = -25; i <= 25; i += 5) {
            const stone = BABYLON.MeshBuilder.CreateBox(
                `pathStone${i}`,
                { width: 4, height: 0.2, depth: 4 },
                this.scene
            );
            stone.position = new BABYLON.Vector3(i, 0.1, i);
            stone.rotation.y = Math.random() * 0.5;
            stone.material = pathMat;
        }
    }
    
    createPlayer() {
        const playerContainer = new BABYLON.TransformNode("playerContainer", this.scene);
        playerContainer.position = new BABYLON.Vector3(-35, 0, 0);
        
        this.player = playerContainer;
        this.player.speed = 0.3;
        this.player.rotationSpeed = 0.05;
        
        BABYLON.SceneLoader.ImportMesh(
            "",
            "models/knight/",
            "cavaleiro.gltf",
            this.scene,
            (meshes) => {
                const rootMesh = meshes[0];
                
                if (rootMesh) {
                    rootMesh.scaling = new BABYLON.Vector3(0.005, 0.005, 0.005);
                    
                    rootMesh.rotation.x = 0;
                    rootMesh.rotation.y = 0;
                    rootMesh.rotation.z = 0;
                    
                    rootMesh.position = new BABYLON.Vector3(0, 0, 0);
                    
                    rootMesh.parent = playerContainer;
                    
                    this.knightModel = rootMesh;
                    this.knightMeshes = meshes;
                }
            },
            (progress) => {
                if (progress.lengthComputable) {
                    const percentComplete = (progress.loaded / progress.total * 100).toFixed(2);
                    console.log(`Cargando: ${percentComplete}%`);
                }
            },
            (scene, message, exception) => {
                console.error("Error al cargar el modelo GLTF:", message);
                console.error("Excepción:", exception);
            }
        );
    }
    
    createScroll() {
        // Pergamino enrollado
        const scroll = BABYLON.MeshBuilder.CreateCylinder(
            "scroll",
            { height: 0.8, diameter: 0.2 },
            this.scene
        );
        scroll.rotation.z = Math.PI / 2;
        scroll.position = new BABYLON.Vector3(-20, 1.5, -20);
        
        const scrollMat = new BABYLON.StandardMaterial("scrollMat", this.scene);
        scrollMat.diffuseColor = new BABYLON.Color3(0.9, 0.85, 0.7);
        scrollMat.emissiveColor = new BABYLON.Color3(0.2, 0.18, 0.15);
        scroll.material = scrollMat;
        
        // Sello de cera rojo
        const seal = BABYLON.MeshBuilder.CreateSphere(
            "seal",
            { diameter: 0.15 },
            this.scene
        );
        seal.position = new BABYLON.Vector3(0, 0, 0);
        seal.parent = scroll;
        const sealMat = new BABYLON.StandardMaterial("sealMat", this.scene);
        sealMat.diffuseColor = new BABYLON.Color3(0.8, 0.1, 0.1);
        sealMat.emissiveColor = new BABYLON.Color3(0.3, 0, 0);
        seal.material = sealMat;
        
        this.scroll = scroll;
        this.scroll.initialPosition = scroll.position.clone();
        
        // Animación de flotación
        this.scene.registerBeforeRender(() => {
            if (!this.hasScroll && this.scroll.parent === null) {
                this.scroll.rotation.y += 0.02;
                this.scroll.position.y = 1.5 + Math.sin(Date.now() * 0.003) * 0.2;
            }
        });
    }
    
    createZones() {
        // Zona de recogida (castillo)
        const pickupZone = BABYLON.MeshBuilder.CreateCylinder(
            "pickupZone",
            { height: 0.5, diameter: 5 },
            this.scene
        );
        pickupZone.position = new BABYLON.Vector3(-20, 0.25, -20);
        const pickupMat = new BABYLON.StandardMaterial("pickupMat", this.scene);
        pickupMat.diffuseColor = new BABYLON.Color3(0.2, 0.8, 0.2);
        pickupMat.alpha = 0.3;
        pickupMat.emissiveColor = new BABYLON.Color3(0, 0.3, 0);
        pickupZone.material = pickupMat;
        this.pickupZone = pickupZone;
        
        // Zona de entrega (torreón)
        const deliveryZone = BABYLON.MeshBuilder.CreateCylinder(
            "deliveryZone",
            { height: 0.5, diameter: 5 },
            this.scene
        );
        deliveryZone.position = new BABYLON.Vector3(25, 0.25, 25);
        const deliveryMat = new BABYLON.StandardMaterial("deliveryMat", this.scene);
        deliveryMat.diffuseColor = new BABYLON.Color3(0.8, 0.2, 0.8);
        deliveryMat.alpha = 0.3;
        deliveryMat.emissiveColor = new BABYLON.Color3(0.3, 0, 0.3);
        deliveryZone.material = deliveryMat;
        this.deliveryZone = deliveryZone;
    }
    
    setupCamera() {
        // Cámara que sigue al jugador
        this.camera = new BABYLON.ArcRotateCamera(
            "camera",
            Math.PI - 0.3,
            Math.PI / 2.5,
            15,
            this.player.position,
            this.scene
        );
        this.camera.attachControl(this.canvas, true);
        this.camera.lowerRadiusLimit = 8;
        this.camera.upperRadiusLimit = 25;
        this.camera.lowerBetaLimit = 0.1;
        this.camera.upperBetaLimit = Math.PI / 2.2;
        
        // Configurar sensibilidad del mouse
        this.camera.angularSensibilityX = 1000;
        this.camera.angularSensibilityY = 1000;
        this.camera.panningSensibility = 0; // Desactivar paneo
    }
    
    setupControls() {
        // Capturar teclas presionadas
        window.addEventListener("keydown", (e) => {
            this.keys[e.key.toLowerCase()] = true;
            
            // Tecla E para recoger/entregar
            if (e.key.toLowerCase() === "e") {
                this.handleInteraction();
            }
        });
        
        window.addEventListener("keyup", (e) => {
            this.keys[e.key.toLowerCase()] = false;
        });
    }
    
    update() {
        // Movimiento del jugador relativo a la cámara
        let moved = false;
        
        const cameraDirection = this.camera.target.subtract(this.camera.position);
        cameraDirection.y = 0;
        cameraDirection.normalize();
        
        const right = BABYLON.Vector3.Cross(BABYLON.Axis.Y, cameraDirection);
        right.normalize();
        
        if (this.keys["w"] || this.keys["arrowup"]) {
            this.player.position.addInPlace(cameraDirection.scale(this.player.speed));
            moved = true;
        }
        if (this.keys["s"] || this.keys["arrowdown"]) {
            this.player.position.addInPlace(cameraDirection.scale(-this.player.speed));
            moved = true;
        }
        if (this.keys["a"] || this.keys["arrowleft"]) {
            this.player.position.addInPlace(right.scale(-this.player.speed));
            moved = true;
        }
        if (this.keys["d"] || this.keys["arrowright"]) {
            this.player.position.addInPlace(right.scale(this.player.speed));
            moved = true;
        }
        
        // Rotar el jugador hacia la dirección de movimiento
        if (moved) {
            const moveDirection = new BABYLON.Vector3(0, 0, 0);
            if (this.keys["w"] || this.keys["arrowup"]) {
                moveDirection.addInPlace(cameraDirection.scale(-1));
            }
            if (this.keys["s"] || this.keys["arrowdown"]) {
                moveDirection.addInPlace(cameraDirection);
            }
            if (this.keys["a"] || this.keys["arrowleft"]) {
                moveDirection.addInPlace(right);
            }
            if (this.keys["d"] || this.keys["arrowright"]) {
                moveDirection.addInPlace(right.scale(-1));
            }
            
            if (moveDirection.length() > 0) {
                moveDirection.normalize();
                const targetRotation = Math.atan2(moveDirection.x, moveDirection.z);
                this.player.rotation.y = targetRotation;
            }
        }
        
        // Mantener jugador en el mapa
        this.player.position.x = Math.max(-45, Math.min(45, this.player.position.x));
        this.player.position.z = Math.max(-45, Math.min(45, this.player.position.z));
        
        // Actualizar posición de la cámara
        this.camera.target = this.player.position;
        
        // Si el jugador tiene el pergamino, seguirlo
        if (this.hasScroll && this.scroll.parent === this.player) {
            this.scroll.position.y = 2;
        }
        
        if (moved && this.knightModel) {
            // Pequeño movimiento de rebote al caminar
            this.knightModel.position.y = Math.abs(Math.sin(Date.now() * 0.01)) * 0.05;
        } else if (this.knightModel) {
            this.knightModel.position.y = 0;
        }
    }
    
    handleInteraction() {
        if (this.gameCompleted) return;
        
        const playerPos = this.player.position;
        
        // Verificar si está en zona de recogida y no tiene pergamino
        if (!this.hasScroll) {
            const distToPickup = BABYLON.Vector3.Distance(
                playerPos,
                this.pickupZone.position
            );
            
            if (distToPickup < 3) {
                this.pickupScroll();
            } else {
                this.showMessage("❌ Debes estar en la zona verde del castillo");
            }
        }
        // Verificar si está en zona de entrega y tiene pergamino
        else {
            const distToDelivery = BABYLON.Vector3.Distance(
                playerPos,
                this.deliveryZone.position
            );
            
            if (distToDelivery < 3) {
                this.deliverScroll();
            } else {
                this.showMessage("❌ Debes llegar a la zona morada del torreón");
            }
        }
    }
    
    pickupScroll() {
        this.hasScroll = true;
        
        // Vincular pergamino al jugador
        this.scroll.parent = this.player;
        this.scroll.position = new BABYLON.Vector3(0.5, 0.8, 0);
        this.scroll.rotation = new BABYLON.Vector3(0, 0, Math.PI / 4);
        
        this.showMessage("📜 ¡Pergamino recogido! Llévalo al Torreón del Mago");
        this.updateStatus("Estado: Entrega el pergamino al Mago");
    }
    
    deliverScroll() {
        this.hasScroll = false;
        this.gameCompleted = true;
        
        // Desvincular pergamino
        this.scroll.parent = null;
        this.scroll.position = this.deliveryZone.position.add(new BABYLON.Vector3(0, 2, 0));
        
        // Efecto de entrega
        this.scroll.scaling = new BABYLON.Vector3(2, 2, 2);
        
        this.showMessage("¡Misión Completada! Has entregado el pergamino");
        this.updateStatus("Estado: ¡Misión Cumplida!");
        
        // Mostrar pantalla de victoria
        setTimeout(() => {
            document.getElementById("victoryScreen").style.display = "flex";
        }, 2000);
    }
    
    showMessage(text) {
        this.messageElement.textContent = text;
        this.messageElement.classList.remove("show");
        
        // Forzar reflow
        void this.messageElement.offsetWidth;
        
        this.messageElement.classList.add("show");
        
        setTimeout(() => {
            this.messageElement.classList.remove("show");
        }, 3000);
    }
    
    updateStatus(text) {
        this.statusElement.textContent = text;
    }
}

// Iniciar el juego cuando la página cargue
window.addEventListener("DOMContentLoaded", () => {
    new MedievalMessengerGame();
});
