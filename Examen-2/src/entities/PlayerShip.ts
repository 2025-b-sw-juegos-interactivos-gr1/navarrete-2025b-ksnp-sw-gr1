import { Scene, Vector3, Mesh, AbstractMesh, SceneLoader } from '@babylonjs/core';
import '@babylonjs/loaders/OBJ';
import { GameManager } from '../core/GameManager';

/**
 * PlayerShip - Representa la nave VALKYRIE-7 del jugador
 * Movimiento con inercia en 4 direcciones (WASD)
 */
export class PlayerShip {
  private scene: Scene;
  public mesh: Mesh;
  private modelLoaded: boolean = false;

  // Física simplificada
  private moveSpeed: number = 15.0;               // units/s - velocidad base
  private readonly speedIncrement: number = 7.0;  // Incremento por debris recogido
  private isMoving: boolean = false;              // Si la nave ya empezó a moverse
  private lastDirection: Vector3 = new Vector3(0, 0, -1); // Última dirección (hacia adelante por defecto)

  // Colisión (AABB)
  public readonly collisionRadius: number = 1.5;

  // Límites de la arena
  private readonly arenaBounds: number = 40; // Arena 80x80, radius 40

  constructor(scene: Scene) {
    this.scene = scene;

    // Crear mesh temporal mientras carga el modelo
    this.mesh = new Mesh('playerShip', this.scene);
    this.mesh.position = new Vector3(0, 1, 0);

    // Cargar modelo 3D
    this.loadModel();

    console.log('🚀 Cargando modelo de la nave...');
  }

  private async loadModel(): Promise<void> {
    try {
      const result = await SceneLoader.ImportMeshAsync(
        '',
        '/src/models/spaceship/',
        'spaceship.obj',
        this.scene
      );

      // Asignar TODOS los meshes cargados como hijos
      result.meshes.forEach((loadedMesh, index) => {
        if (loadedMesh) {
          loadedMesh.parent = this.mesh;
          loadedMesh.position = Vector3.Zero();
          loadedMesh.rotation = Vector3.Zero();
          
          // Aplicar escala a TODOS los meshes para que las texturas también se escalen
          loadedMesh.scaling = new Vector3(1.35, 1.35, 1.35);
        }
      });
      
      this.modelLoaded = true;
      console.log('✅ Modelo de nave cargado correctamente -', result.meshes.length, 'meshes');
    } catch (error) {
      console.error('❌ Error cargando modelo de nave:', error);
      // Crear cubo de respaldo
      this.createFallbackMesh();
    }
  }

  private createFallbackMesh(): void {
    const fallback = Mesh.CreateBox('playerShipFallback', 2, this.scene);
    fallback.parent = this.mesh;
    fallback.position = Vector3.Zero();
    console.log('⚠️ Usando modelo de respaldo (cubo)');
  }

  public update(deltaTime: number): void {
    const gameManager = GameManager.getInstance();
    const input = gameManager.getInputManager();

    // Obtener la cámara para calcular direcciones relativas
    const camera = this.scene.activeCamera;
    if (!camera) return;

    // Calcular vectores de dirección relativos a la cámara
    // Forward: dirección de alejamiento de la cámara (proyectado en XZ)
    const cameraForward = camera.getDirection(Vector3.Forward());
    cameraForward.y = 0; // Proyectar en plano horizontal
    cameraForward.normalize();
    
    // Right: perpendicular al forward (también en XZ)
    const cameraRight = camera.getDirection(Vector3.Right());
    cameraRight.y = 0;
    cameraRight.normalize();

    // Convertir input WASD a movimiento relativo a la cámara
    const horizontal = input.getHorizontal(); // A/D
    const vertical = input.getVertical();     // W/S
    
    const inputDir = new Vector3(0, 0, 0);
    inputDir.addInPlace(cameraForward.scale(-vertical));  // W aleja, S acerca
    inputDir.addInPlace(cameraRight.scale(horizontal));   // D derecha, A izquierda

    // Debug temporal
    const hasInput = inputDir.lengthSquared() > 0;

    // Determinar dirección de movimiento
    let moveDirection: Vector3;
    
    if (hasInput) {
      // Hay input: activar movimiento y actualizar dirección
      this.isMoving = true;
      moveDirection = inputDir.normalize();
      this.lastDirection = moveDirection.clone();
      
      console.log('Input detectado - Nueva dirección:', moveDirection.x, moveDirection.z);
    } else if (this.isMoving) {
      // No hay input pero ya está en movimiento: mantener última dirección
      moveDirection = this.lastDirection;
      console.log('Sin input - Manteniendo dirección:', moveDirection.x, moveDirection.z);
    } else {
      // No hay input y no ha empezado a moverse: no hacer nada
      return;
    }

    // Aplicar movimiento continuo
    const movement = moveDirection.scale(this.moveSpeed * deltaTime);
    this.mesh.position.addInPlace(movement);
    
    // Rotación visual hacia dirección de movimiento (+ 180° para corregir orientación del modelo)
    const targetRotation = Math.atan2(moveDirection.x, moveDirection.z) + Math.PI;
    this.mesh.rotation.y = targetRotation;

    // Clamp a límites de arena
    this.mesh.position.x = Math.max(
      -this.arenaBounds,
      Math.min(this.arenaBounds, this.mesh.position.x)
    );
    this.mesh.position.z = Math.max(
      -this.arenaBounds,
      Math.min(this.arenaBounds, this.mesh.position.z)
    );
  }

  public getPosition(): Vector3 {
    return this.mesh.position.clone();
  }

  public increaseSpeed(): void {
    this.moveSpeed += this.speedIncrement;
    console.log('💨 Velocidad aumentada a:', this.moveSpeed.toFixed(1), 'units/s');
  }

  public destroy(): void {
    this.mesh.dispose();
  }
}
