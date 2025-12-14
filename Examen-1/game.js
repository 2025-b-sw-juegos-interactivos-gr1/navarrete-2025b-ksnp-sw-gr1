class MensajeroMedieval {
    constructor() {
        this.canvas = document.getElementById("renderCanvas");
        this.engine = new BABYLON.Engine(this.canvas, true);
        this.escena = null;
        this.camara = null;
        this.jugador = null;
        this.pergamino = null;
        this.zonaRecoger = null;
        this.zonaEntrega = null;
        
        // Estado del juego
        this.tienePergamino = false;
        this.juegoCompletado = false;
        
        // Controles
        this.teclas = {};
        
        // Referencias UI
        this.elementoEstado = document.getElementById("status");
        this.elementoMensaje = document.getElementById("message");
        
        // Referencias al modelo 3D
        this.modeloCaballero = null;
        this.meshesCaballero = null;
        
        this.init();
    }
    
    init() {
        this.crearEscena();
        this.crearEntorno();
        this.crearJugador();
        this.crearPergamino();
        this.crearZonas();
        this.setupControles();
        this.setupCamara();
        
        // Game loop
        this.engine.runRenderLoop(() => {
            if (!this.juegoCompletado) {
                this.update();
            }
            this.escena.render();
        });
        
        // Resize
        window.addEventListener("resize", () => {
            this.engine.resize();
        });
    }
    
    crearEscena() {
        this.escena = new BABYLON.Scene(this.engine);
        this.escena.clearColor = new BABYLON.Color3(0.53, 0.81, 0.92); // Cielo azul
        
        this.escena.fogMode = BABYLON.Scene.FOGMODE_NONE;
        
        // Luz hemisférica única y potente para iluminar toda la escena
        const lizPrincipal = new BABYLON.HemisphericLight(
            "mainLight",
            new BABYLON.Vector3(0, 1, 0),
            this.escena
        );
        lizPrincipal.intensity = 1.2;
        lizPrincipal.diffuse = new BABYLON.Color3(1, 0.98, 0.95);
        lizPrincipal.groundColor = new BABYLON.Color3(0.6, 0.5, 0.4);
        lizPrincipal.specular = new BABYLON.Color3(0.3, 0.3, 0.3);
        
        this.shadowGenerator = null;
    }
    
    crearEntorno() {
        const suelo = BABYLON.MeshBuilder.CreateGround(
            "ground",
            { width: 100, height: 100 },
            this.escena
        );
        const materialSuelo = new BABYLON.StandardMaterial("groundMat", this.escena);
        materialSuelo.diffuseColor = new BABYLON.Color3(0.4, 0.5, 0.3);
        materialSuelo.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);
        
        const texturaSuelo = new BABYLON.DynamicTexture(
            "groundTexture",
            512,
            this.escena
        );
        const ctx = texturaSuelo.getContext();
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
        texturaSuelo.update();
        materialSuelo.diffuseTexture = texturaSuelo;
        suelo.material = materialSuelo;
        suelo.receiveShadows = true;
        
        this.crearCastillo(new BABYLON.Vector3(-30, 0, -30));
        
        this.crearTorreonMago(new BABYLON.Vector3(30, 0, 30));
        
        this.crearArboles();
        
        this.crearCamino();
    }
    
    crearCastillo() {
        
        BABYLON.SceneLoader.ImportMesh(
            "",
            "models/castle/",
            "castle.glb",
            this.escena,
            (meshes) => {
                const castillo = meshes[0];
                
                if (castillo) {
                    castillo.position = new BABYLON.Vector3(-28.5, 0, -28.5);
                    
                    castillo.scaling = new BABYLON.Vector3(650, 650, 650);
                    
                    castillo.rotation = new BABYLON.Vector3(0, Math.PI / 4, 0);
                    
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
    
    crearTorreonMago() {
        
        BABYLON.SceneLoader.ImportMesh(
            "",
            "models/tower/",
            "Towerr.gltf",
            this.escena,
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
    
    crearArboles() {
        const posicionesArboles = [
            new BABYLON.Vector3(-40, 0, 10),
            new BABYLON.Vector3(-35, 0, 20),
            new BABYLON.Vector3(40, 0, -10),
            new BABYLON.Vector3(35, 0, -20),
            new BABYLON.Vector3(10, 0, -40),
            new BABYLON.Vector3(-10, 0, 40),
            new BABYLON.Vector3(20, 0, -35),
            new BABYLON.Vector3(-20, 0, 35)
        ];
        
        posicionesArboles.forEach((pos, index) => {
            const tronco = BABYLON.MeshBuilder.CreateCylinder(
                `trunk${index}`,
                { height: 5, diameter: 1 },
                this.escena
            );
            tronco.position = pos.add(new BABYLON.Vector3(0, 2.5, 0));
            const materialTronco = new BABYLON.StandardMaterial(`trunkMat${index}`, this.escena);
            materialTronco.diffuseColor = new BABYLON.Color3(0.3, 0.2, 0.1);
            tronco.material = materialTronco;
            
            const copaArbol = BABYLON.MeshBuilder.CreateSphere(
                `foliage${index}`,
                { diameter: 6 },
                this.escena
            );
            copaArbol.position = pos.add(new BABYLON.Vector3(0, 7, 0));
            const materialCopaArbol = new BABYLON.StandardMaterial(`foliageMat${index}`, this.escena);
            materialCopaArbol.diffuseColor = new BABYLON.Color3(0.2, 0.5, 0.2);
            copaArbol.material = materialCopaArbol;
        });
    }
    
    crearCamino() {
        // Camino de piedras entre castillo y torreón
        const materialCamino = new BABYLON.StandardMaterial("pathMat", this.escena);
        materialCamino.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.45);
        
        for (let i = -25; i <= 25; i += 5) {
            const piedra = BABYLON.MeshBuilder.CreateBox(
                `pathStone${i}`,
                { width: 4, height: 0.2, depth: 4 },
                this.escena
            );
            piedra.position = new BABYLON.Vector3(i, 0.1, i);
            piedra.rotation.y = Math.random() * 0.5;
            piedra.material = materialCamino;
        }
    }
    
    crearJugador() {
        const jugadorContainer = new BABYLON.TransformNode("playerContainer", this.escena);
        jugadorContainer.position = new BABYLON.Vector3(-35, 0, 0);
        
        this.jugador = jugadorContainer;
        this.jugador.speed = 0.3;
        this.jugador.rotationSpeed = 0.05;
        
        BABYLON.SceneLoader.ImportMesh(
            "",
            "models/knight/",
            "cavaleiro.gltf",
            this.escena,
            (meshes) => {
                const rootMesh = meshes[0];
                
                if (rootMesh) {
                    rootMesh.scaling = new BABYLON.Vector3(0.005, 0.005, 0.005);
                    
                    rootMesh.rotation.x = 0;
                    rootMesh.rotation.y = 0;
                    rootMesh.rotation.z = 0;
                    
                    rootMesh.position = new BABYLON.Vector3(0, 0, 0);
                    
                    rootMesh.parent = jugadorContainer;
                    
                    this.modeloCaballero = rootMesh;
                    this.meshesCaballero = meshes;
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
    
    crearPergamino() {
        const pergamino = BABYLON.MeshBuilder.CreateCylinder(
            "scroll",
            { height: 0.8, diameter: 0.2 },
            this.escena
        );
        pergamino.rotation.z = Math.PI / 2;
        pergamino.position = new BABYLON.Vector3(-20, 1.5, -20);
        
        const materialPergamino = new BABYLON.StandardMaterial("scrollMat", this.escena);
        materialPergamino.diffuseColor = new BABYLON.Color3(0.9, 0.85, 0.7);
        materialPergamino.emissiveColor = new BABYLON.Color3(0.2, 0.18, 0.15);
        pergamino.material = materialPergamino;
        
        const sello = BABYLON.MeshBuilder.CreateSphere(
            "seal",
            { diameter: 0.15 },
            this.escena
        );
        sello.position = new BABYLON.Vector3(0, 0, 0);
        sello.parent = pergamino;
        const materialSello = new BABYLON.StandardMaterial("sealMat", this.escena);
        materialSello.diffuseColor = new BABYLON.Color3(0.8, 0.1, 0.1);
        materialSello.emissiveColor = new BABYLON.Color3(0.3, 0, 0);
        sello.material = materialSello;
        
        this.pergamino = pergamino;
        this.pergamino.initialPosition = pergamino.position.clone();
        
        // Animación de flotación
        this.escena.registerBeforeRender(() => {
            if (!this.tienePergamino && this.pergamino.parent === null) {
                this.pergamino.rotation.y += 0.02;
                this.pergamino.position.y = 1.5 + Math.sin(Date.now() * 0.003) * 0.2;
            }
        });
    }
    
    crearZonas() {
        // Zona de recogida (castillo)
        const zonaRecoger = BABYLON.MeshBuilder.CreateCylinder(
            "pickupZone",
            { height: 0.5, diameter: 5 },
            this.escena
        );
        zonaRecoger.position = new BABYLON.Vector3(-20, 0.25, -20);
        const materialZonaRecoger = new BABYLON.StandardMaterial("pickupMat", this.escena);
        materialZonaRecoger.diffuseColor = new BABYLON.Color3(0.2, 0.8, 0.2);
        materialZonaRecoger.alpha = 0.3;
        materialZonaRecoger.emissiveColor = new BABYLON.Color3(0, 0.3, 0);
        zonaRecoger.material = materialZonaRecoger;
        this.zonaRecoger = zonaRecoger;
        
        // Zona de entrega (torreón)
        const zonaEntrega = BABYLON.MeshBuilder.CreateCylinder(
            "deliveryZone",
            { height: 0.5, diameter: 5 },
            this.escena
        );
        zonaEntrega.position = new BABYLON.Vector3(25, 0.25, 25);
        const materialZonaEntrega = new BABYLON.StandardMaterial("deliveryMat", this.escena);
        materialZonaEntrega.diffuseColor = new BABYLON.Color3(0.8, 0.2, 0.8);
        materialZonaEntrega.alpha = 0.3;
        materialZonaEntrega.emissiveColor = new BABYLON.Color3(0.3, 0, 0.3);
        zonaEntrega.material = materialZonaEntrega;
        this.zonaEntrega = zonaEntrega;
    }
    
    setupCamara() {
        // Cámara que sigue al jugador
        this.camara = new BABYLON.ArcRotateCamera(
            "camera",
            Math.PI - 0.3,
            Math.PI / 2.5,
            15,
            this.jugador.position,
            this.escena
        );
        this.camara.attachControl(this.canvas, true);
        this.camara.lowerRadiusLimit = 8;
        this.camara.upperRadiusLimit = 25;
        this.camara.lowerBetaLimit = 0.1;
        this.camara.upperBetaLimit = Math.PI / 2.2;
        
        // Configurar sensibilidad del mouse
        this.camara.angularSensibilityX = 1000;
        this.camara.angularSensibilityY = 1000;
        this.camara.panningSensibility = 0; // Desactivar paneo
    }
    
    setupControles() {
        // Capturar teclas presionadas
        window.addEventListener("keydown", (e) => {
            this.teclas[e.key.toLowerCase()] = true;
            
            // Tecla E para recoger/entregar
            if (e.key.toLowerCase() === "e") {
                this.verificarInteraccion();
            }
        });
        
        window.addEventListener("keyup", (e) => {
            this.teclas[e.key.toLowerCase()] = false;
        });
    }
    
    update() {
        // Movimiento del jugador relativo a la cámara
        let seMovio = false;
        
        const direccionCamara = this.camara.target.subtract(this.camara.position);
        direccionCamara.y = 0;
        direccionCamara.normalize();
        
        const derecha = BABYLON.Vector3.Cross(BABYLON.Axis.Y, direccionCamara);
        derecha.normalize();
        
        if (this.teclas["w"] || this.teclas["arrowup"]) {
            this.jugador.position.addInPlace(direccionCamara.scale(this.jugador.speed));
            seMovio = true;
        }
        if (this.teclas["s"] || this.teclas["arrowdown"]) {
            this.jugador.position.addInPlace(direccionCamara.scale(-this.jugador.speed));
            seMovio = true;
        }
        if (this.teclas["a"] || this.teclas["arrowleft"]) {
            this.jugador.position.addInPlace(derecha.scale(-this.jugador.speed));
            seMovio = true;
        }
        if (this.teclas["d"] || this.teclas["arrowright"]) {
            this.jugador.position.addInPlace(derecha.scale(this.jugador.speed));
            seMovio = true;
        }
        
        // Rotar el jugador hacia la dirección de movimiento
        if (seMovio) {
            const moveDirection = new BABYLON.Vector3(0, 0, 0);
            if (this.teclas["w"] || this.teclas["arrowup"]) {
                moveDirection.addInPlace(direccionCamara.scale(-1));
            }
            if (this.teclas["s"] || this.teclas["arrowdown"]) {
                moveDirection.addInPlace(direccionCamara);
            }
            if (this.teclas["a"] || this.teclas["arrowleft"]) {
                moveDirection.addInPlace(derecha);
            }
            if (this.teclas["d"] || this.teclas["arrowright"]) {
                moveDirection.addInPlace(derecha.scale(-1));
            }
            
            if (moveDirection.length() > 0) {
                moveDirection.normalize();
                const targetRotation = Math.atan2(moveDirection.x, moveDirection.z);
                this.jugador.rotation.y = targetRotation;
            }
        }
        
        // Mantener jugador en el mapa
        this.jugador.position.x = Math.max(-45, Math.min(45, this.jugador.position.x));
        this.jugador.position.z = Math.max(-45, Math.min(45, this.jugador.position.z));
        
        // Actualizar posición de la cámara
        this.camara.target = this.jugador.position;
        
        // Si el jugador tiene el pergamino, seguirlo
        if (this.tienePergamino && this.pergamino.parent === this.jugador) {
            this.pergamino.position.y = 2;
        }
        
        if (seMovio && this.modeloCaballero) {
            // Pequeño movimiento de rebote al caminar
            this.modeloCaballero.position.y = Math.abs(Math.sin(Date.now() * 0.01)) * 0.05;
        } else if (this.modeloCaballero) {
            this.modeloCaballero.position.y = 0;
        }
    }
    
    verificarInteraccion() {
        if (this.juegoCompletado) return;
        
        const posicionJugador = this.jugador.position;
        
        // Verificar si está en zona de recogida y no tiene pergamino
        if (!this.tienePergamino) {
            const distanciaParaRecoger = BABYLON.Vector3.Distance(
                posicionJugador,
                this.zonaRecoger.position
            );
            
            if (distanciaParaRecoger < 3) {
                this.recogerPergamino();
            } else {
                this.mostrarMensaje("❌ Debes estar en la zona verde del castillo");
            }
        }
        // Verificar si está en zona de entrega y tiene pergamino
        else {
            const distanciaParaEntregar = BABYLON.Vector3.Distance(
                posicionJugador,
                this.zonaEntrega.position
            );
            
            if (distanciaParaEntregar < 3) {
                this.entregarPergamino();
            } else {
                this.mostrarMensaje("❌ Debes llegar a la zona morada del torreón");
            }
        }
    }
    
    recogerPergamino() {
        this.tienePergamino = true;
        
        // Vincular pergamino al jugador
        this.pergamino.parent = this.jugador;
        this.pergamino.position = new BABYLON.Vector3(0.5, 0.8, 0);
        this.pergamino.rotation = new BABYLON.Vector3(0, 0, Math.PI / 4);
        
        this.mostrarMensaje("📜 ¡Pergamino recogido! Llévalo al Torreón del Mago");
        this.actualizarEstado("Estado: Entrega el pergamino al Mago");
    }
    
    entregarPergamino() {
        this.tienePergamino = false;
        this.juegoCompletado = true;
        
        // Desvincular pergamino
        this.pergamino.parent = null;
        this.pergamino.position = this.zonaEntrega.position.add(new BABYLON.Vector3(0, 2, 0));
        
        // Efecto de entrega
        this.pergamino.scaling = new BABYLON.Vector3(2, 2, 2);
        
        this.mostrarMensaje("¡Misión Completada! Has entregado el pergamino");
        this.actualizarEstado("Estado: ¡Misión Cumplida!");
        
        // Mostrar pantalla de victoria
        setTimeout(() => {
            document.getElementById("victoryScreen").style.display = "flex";
        }, 2000);
    }
    
    mostrarMensaje(texto) {
        this.elementoMensaje.textContent = texto;
        this.elementoMensaje.classList.remove("show");
        
        // Forzar reflow
        void this.elementoMensaje.offsetWidth;
        
        this.elementoMensaje.classList.add("show");
        
        setTimeout(() => {
            this.elementoMensaje.classList.remove("show");
        }, 3000);
    }
    
    actualizarEstado(texto) {
        this.elementoEstado.textContent = texto;
    }
}

// Iniciar el juego cuando la página cargue
window.addEventListener("DOMContentLoaded", () => {
    new MensajeroMedieval();
});
