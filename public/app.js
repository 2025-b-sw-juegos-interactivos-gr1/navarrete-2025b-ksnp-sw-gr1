window.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('renderCanvas');
    var engine = new BABYLON.Engine(canvas, true);
    
    var createScene = function () {
        var scene = new BABYLON.Scene(engine);
        
        // Color azul profundo del océano
        scene.clearColor = new BABYLON.Color3(0.05, 0.15, 0.3);
        scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
        scene.fogColor = new BABYLON.Color3(0.1, 0.2, 0.4);
        scene.fogStart = 20;
        scene.fogEnd = 60;
        
        // Cámara submarina
        var camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 30, new BABYLON.Vector3(0, 5, 0), scene);
        camera.attachControl(canvas, true);
        camera.lowerRadiusLimit = 10;
        camera.upperRadiusLimit = 50;
        
        // Iluminación submarina (luz filtrada desde arriba)
        var sunLight = new BABYLON.DirectionalLight("sunLight", new BABYLON.Vector3(0, -1, 0.3), scene);
        sunLight.position = new BABYLON.Vector3(0, 30, -10);
        sunLight.intensity = 0.6;
        sunLight.diffuse = new BABYLON.Color3(0.4, 0.6, 0.8);
        
        var ambientLight = new BABYLON.HemisphericLight("ambientLight", new BABYLON.Vector3(0, 1, 0), scene);
        ambientLight.intensity = 0.3;
        ambientLight.diffuse = new BABYLON.Color3(0.2, 0.4, 0.6);
        
        // Suelo arenoso del océano
        var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 100, height: 100}, scene);
        var groundMat = new BABYLON.StandardMaterial("groundMat", scene);
        groundMat.diffuseColor = new BABYLON.Color3(0.8, 0.75, 0.6);
        groundMat.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);
        ground.material = groundMat;
        
        // Material coral brillante
        var coralMat1 = new BABYLON.StandardMaterial("coralMat1", scene);
        coralMat1.diffuseColor = new BABYLON.Color3(1, 0.3, 0.4);
        coralMat1.emissiveColor = new BABYLON.Color3(0.2, 0.05, 0.05);
        
        var coralMat2 = new BABYLON.StandardMaterial("coralMat2", scene);
        coralMat2.diffuseColor = new BABYLON.Color3(0.8, 0.2, 0.8);
        coralMat2.emissiveColor = new BABYLON.Color3(0.15, 0.03, 0.15);
        
        var coralMat3 = new BABYLON.StandardMaterial("coralMat3", scene);
        coralMat3.diffuseColor = new BABYLON.Color3(1, 0.6, 0.2);
        coralMat3.emissiveColor = new BABYLON.Color3(0.2, 0.1, 0.03);
        
        // Función para crear coral ramificado
        function createCoral(x, z, material) {
            var coralBase = BABYLON.MeshBuilder.CreateCylinder("coralBase", {
                height: 2, 
                diameterTop: 0.3, 
                diameterBottom: 0.6,
                tessellation: 8
            }, scene);
            coralBase.position = new BABYLON.Vector3(x, 1, z);
            coralBase.material = material;
            
            // Ramas del coral
            for (var i = 0; i < 5; i++) {
                var branch = BABYLON.MeshBuilder.CreateCylinder("branch", {
                    height: 1.5, 
                    diameterTop: 0.05, 
                    diameterBottom: 0.2,
                    tessellation: 6
                }, scene);
                
                var angle = (Math.PI * 2 / 5) * i;
                branch.position = new BABYLON.Vector3(
                    Math.cos(angle) * 0.3,
                    1.5 + Math.random() * 0.5,
                    Math.sin(angle) * 0.3
                );
                branch.rotation = new BABYLON.Vector3(
                    Math.random() * 0.5,
                    angle,
                    0.3 + Math.random() * 0.3
                );
                branch.parent = coralBase;
                branch.material = material;
                
                // Sub-ramas
                if (Math.random() > 0.5) {
                    var subBranch = BABYLON.MeshBuilder.CreateCylinder("subBranch", {
                        height: 0.8, 
                        diameterTop: 0.02, 
                        diameterBottom: 0.1,
                        tessellation: 5
                    }, scene);
                    subBranch.position = new BABYLON.Vector3(0, 0.8, 0);
                    subBranch.rotation.z = 0.5;
                    subBranch.parent = branch;
                    subBranch.material = material;
                }
            }
            
            return coralBase;
        }
        
        // Crear arrecife de coral
        var corals = [];
        var coralPositions = [
            {x: -8, z: -5, mat: coralMat1},
            {x: -10, z: 3, mat: coralMat2},
            {x: -5, z: -8, mat: coralMat3},
            {x: 8, z: -6, mat: coralMat1},
            {x: 10, z: 2, mat: coralMat2},
            {x: 6, z: -10, mat: coralMat3},
            {x: -2, z: 8, mat: coralMat1},
            {x: 3, z: 10, mat: coralMat2}
        ];
        
        coralPositions.forEach(function(pos) {
            var coral = createCoral(pos.x, pos.z, pos.mat);
            corals.push(coral);
        });
        
        // Animación suave de corales (meciéndose con la corriente)
        scene.registerBeforeRender(function() {
            corals.forEach(function(coral, idx) {
                coral.rotation.z = Math.sin(Date.now() * 0.0005 + idx) * 0.05;
            });
        });
        
        // Material para peces
        var fishMat1 = new BABYLON.StandardMaterial("fishMat1", scene);
        fishMat1.diffuseColor = new BABYLON.Color3(0.1, 0.5, 0.9);
        fishMat1.emissiveColor = new BABYLON.Color3(0.05, 0.1, 0.2);
        
        var fishMat2 = new BABYLON.StandardMaterial("fishMat2", scene);
        fishMat2.diffuseColor = new BABYLON.Color3(0.9, 0.8, 0.1);
        fishMat2.emissiveColor = new BABYLON.Color3(0.2, 0.15, 0.02);
        
        // Función para crear pez
        function createFish(x, y, z, material, scale) {
            var fishBody = BABYLON.MeshBuilder.CreateSphere("fishBody", {
                diameter: 1,
                diameterX: 1.5
            }, scene);
            fishBody.position = new BABYLON.Vector3(x, y, z);
            fishBody.scaling = new BABYLON.Vector3(scale, scale * 0.7, scale * 0.6);
            fishBody.material = material;
            
            // Cola del pez
            var tail = BABYLON.MeshBuilder.CreateCylinder("tail", {
                height: 0.8,
                diameterTop: 0.5,
                diameterBottom: 0.01,
                tessellation: 3
            }, scene);
            tail.rotation.x = Math.PI / 2;
            tail.position = new BABYLON.Vector3(-0.8 * scale, 0, 0);
            tail.parent = fishBody;
            tail.material = material;
            
            // Aletas
            var fin1 = BABYLON.MeshBuilder.CreateCylinder("fin", {
                height: 0.4,
                diameterTop: 0.3,
                diameterBottom: 0.01,
                tessellation: 3
            }, scene);
            fin1.rotation.z = Math.PI / 2;
            fin1.position = new BABYLON.Vector3(0, 0.3 * scale, 0.3 * scale);
            fin1.parent = fishBody;
            fin1.material = material;
            
            var fin2 = fin1.clone("fin2");
            fin2.position.z = -0.3 * scale;
            fin2.parent = fishBody;
            
            return fishBody;
        }
        
        // Crear cardumen de peces
        var fishes = [];
        for (var f = 0; f < 12; f++) {
            var fish = createFish(
                Math.random() * 20 - 10,
                3 + Math.random() * 8,
                Math.random() * 20 - 10,
                f % 2 === 0 ? fishMat1 : fishMat2,
                0.5 + Math.random() * 0.5
            );
            fishes.push({
                mesh: fish,
                speed: 0.02 + Math.random() * 0.03,
                radius: 8 + Math.random() * 5,
                angle: Math.random() * Math.PI * 2,
                height: 3 + Math.random() * 8
            });
        }
        
        // Animación de peces nadando en círculos
        scene.registerBeforeRender(function() {
            fishes.forEach(function(fish) {
                fish.angle += fish.speed * 0.016;
                fish.mesh.position.x = Math.cos(fish.angle) * fish.radius;
                fish.mesh.position.z = Math.sin(fish.angle) * fish.radius;
                fish.mesh.position.y = fish.height + Math.sin(Date.now() * 0.001 + fish.angle) * 0.5;
                fish.mesh.rotation.y = fish.angle + Math.PI / 2;
            });
        });
        
        // Rocas en el fondo
        for (var r = 0; r < 15; r++) {
            var rock = BABYLON.MeshBuilder.CreateSphere("rock" + r, {
                diameter: 1 + Math.random() * 2,
                segments: 6
            }, scene);
            rock.position = new BABYLON.Vector3(
                Math.random() * 40 - 20,
                (1 + Math.random() * 2) * 0.3,
                Math.random() * 40 - 20
            );
            rock.scaling.y = 0.6 + Math.random() * 0.3;
            var rockMat = new BABYLON.StandardMaterial("rockMat" + r, scene);
            rockMat.diffuseColor = new BABYLON.Color3(0.3, 0.3, 0.35);
            rockMat.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);
            rock.material = rockMat;
        }
        
        // Burbujas ascendentes
        var bubbleMat = new BABYLON.StandardMaterial("bubbleMat", scene);
        bubbleMat.diffuseColor = new BABYLON.Color3(0.8, 0.9, 1);
        bubbleMat.specularColor = new BABYLON.Color3(1, 1, 1);
        bubbleMat.alpha = 0.3;
        
        var bubbles = [];
        for (var b = 0; b < 30; b++) {
            var bubble = BABYLON.MeshBuilder.CreateSphere("bubble" + b, {diameter: 0.1 + Math.random() * 0.2}, scene);
            bubble.position = new BABYLON.Vector3(
                Math.random() * 30 - 15,
                Math.random() * 15,
                Math.random() * 30 - 15
            );
            bubble.material = bubbleMat;
            bubbles.push({
                mesh: bubble,
                speed: 0.02 + Math.random() * 0.03,
                wobble: Math.random() * Math.PI * 2
            });
        }
        
        // Animación de burbujas
        scene.registerBeforeRender(function() {
            bubbles.forEach(function(bubble) {
                bubble.mesh.position.y += bubble.speed;
                bubble.wobble += 0.05;
                bubble.mesh.position.x += Math.sin(bubble.wobble) * 0.01;
                
                if (bubble.mesh.position.y > 20) {
                    bubble.mesh.position.y = 0;
                    bubble.mesh.position.x = Math.random() * 30 - 15;
                    bubble.mesh.position.z = Math.random() * 30 - 15;
                }
            });
        });
        
        // Medusa luminosa
        var jellyfishBody = BABYLON.MeshBuilder.CreateSphere("jellyfishBody", {
            diameter: 2,
            diameterY: 1.5
        }, scene);
        jellyfishBody.position = new BABYLON.Vector3(-5, 8, 5);
        var jellyfishMat = new BABYLON.StandardMaterial("jellyfishMat", scene);
        jellyfishMat.diffuseColor = new BABYLON.Color3(0.6, 0.3, 0.9);
        jellyfishMat.emissiveColor = new BABYLON.Color3(0.3, 0.15, 0.45);
        jellyfishMat.alpha = 0.6;
        jellyfishBody.material = jellyfishMat;
        
        // Tentáculos de medusa
        for (var t = 0; t < 8; t++) {
            var tentacle = BABYLON.MeshBuilder.CreateCylinder("tentacle" + t, {
                height: 3,
                diameterTop: 0.1,
                diameterBottom: 0.02,
                tessellation: 6
            }, scene);
            var angle = (Math.PI * 2 / 8) * t;
            tentacle.position = new BABYLON.Vector3(
                Math.cos(angle) * 0.6,
                -1.8,
                Math.sin(angle) * 0.6
            );
            tentacle.parent = jellyfishBody;
            tentacle.material = jellyfishMat;
        }
        
        // Animación de medusa
        scene.registerBeforeRender(function() {
            jellyfishBody.position.y = 8 + Math.sin(Date.now() * 0.001) * 2;
            jellyfishBody.position.x = -5 + Math.sin(Date.now() * 0.0005) * 3;
            jellyfishBody.scaling.y = 1 + Math.sin(Date.now() * 0.002) * 0.1;
        });

        BABYLON.SceneLoader.ImportMeshAsync(null, "./assets/models/buceador/", "scene.gltf", scene).then((result) => {
        const meshes = result.meshes;
        if (meshes && meshes.length) {
            meshes[0].scaling = new BABYLON.Vector3(1, 1, 1);
            meshes[0].position = new BABYLON.Vector3(0, 3, 0);
        }
        }).catch((err) => {
            console.error('No se pudo cargar el modelo', err);
        });
        
        return scene;
    };
    
    var scene = createScene();
    
    engine.runRenderLoop(function () {
        scene.render();
    });
    
    window.addEventListener('resize', function () {
        engine.resize();
    });
});
