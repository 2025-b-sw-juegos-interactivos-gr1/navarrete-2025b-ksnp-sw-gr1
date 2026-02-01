import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder, StandardMaterial, Color3, Color4 } from '@babylonjs/core';
import { GameManager } from './core/GameManager';
import './styles/main.css';

// Punto de entrada de la aplicación
class App {
  private canvas: HTMLCanvasElement;
  private engine: Engine;
  private scene!: Scene;
  private gameManager!: GameManager;

  constructor() {
    // Obtener canvas
    const canvasElement = document.getElementById('renderCanvas');
    if (!canvasElement || !(canvasElement instanceof HTMLCanvasElement)) {
      throw new Error('Canvas element not found');
    }
    this.canvas = canvasElement;
    
    // Crear motor Babylon.js
    this.engine = new Engine(this.canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true
    });

    // Inicializar escena
    this.createScene();
    
    // Ocultar loading
    const loadingElement = document.getElementById('loading');
    if (loadingElement) loadingElement.style.display = 'none';

    // Iniciar game loop
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });

    // Responsive
    window.addEventListener('resize', () => {
      this.engine.resize();
    });
  }

  private createScene(): void {
    // Crear escena
    this.scene = new Scene(this.engine);
    this.scene.clearColor = new Color4(0.04, 0.05, 0.15, 1); // #0A0E27 en RGB

    // Crear cámara cenital (top-down)
    const camera = new ArcRotateCamera(
      'camera',
      0,                    // Alpha (rotación horizontal)
      Math.PI / 4,          // Beta (ángulo cenital - 45 grados)
      60,                   // Radio (distancia)
      Vector3.Zero(),       // Target (centro de la escena)
      this.scene
    );
    
    // Configuración de cámara - Deshabilitar controles del mouse
    camera.lowerRadiusLimit = 60;  // Fijar distancia
    camera.upperRadiusLimit = 60;
    camera.lowerBetaLimit = Math.PI / 4;  // Fijar ángulo
    camera.upperBetaLimit = Math.PI / 4;
    
    // Deshabilitar completamente los inputs de la cámara
    camera.inputs.clear();
    
    // Opcional: Si quieres que siga al jugador, descomentar esto más adelante
    // camera.attachControl(this.canvas, false);

    // Luz ambiental azulada
    const light = new HemisphericLight(
      'light',
      new Vector3(0, 1, 0),
      this.scene
    );
    light.intensity = 0.7;
    light.diffuse = new Color3(0.5, 0.7, 1);   // Tinte azul
    light.groundColor = new Color3(0.1, 0.1, 0.2);

    // Crear arena (suelo)
    this.createArena();

    // Inicializar Game Manager
    this.gameManager = new GameManager(this.scene, this.engine);
    this.gameManager.initialize();
  }

  private createArena(): void {
    // Suelo de la arena
    const ground = MeshBuilder.CreateGround(
      'ground',
      { width: 80, height: 80 },
      this.scene
    );

    const groundMat = new StandardMaterial('groundMat', this.scene);
    groundMat.diffuseColor = new Color3(0.05, 0.05, 0.1);
    groundMat.specularColor = new Color3(0, 0, 0);
    groundMat.emissiveColor = new Color3(0.02, 0.03, 0.08); // Ligero glow
    ground.material = groundMat;

    // Grid opcional (visual de referencia)
    const lines = [];
    const gridSize = 80;
    const divisions = 16;
    const step = gridSize / divisions;

    for (let i = 0; i <= divisions; i++) {
      const offset = -gridSize / 2 + i * step;
      
      // Líneas horizontales
      lines.push([
        new Vector3(-gridSize / 2, 0.1, offset),
        new Vector3(gridSize / 2, 0.1, offset)
      ]);
      
      // Líneas verticales
      lines.push([
        new Vector3(offset, 0.1, -gridSize / 2),
        new Vector3(offset, 0.1, gridSize / 2)
      ]);
    }

    const grid = MeshBuilder.CreateLineSystem(
      'grid',
      { lines },
      this.scene
    );
    grid.color = new Color3(0, 0.5, 0.8); // Cyan oscuro
    grid.alpha = 0.2;
  }
}

// Iniciar aplicación cuando el DOM esté listo
window.addEventListener('DOMContentLoaded', () => {
  new App();
});
