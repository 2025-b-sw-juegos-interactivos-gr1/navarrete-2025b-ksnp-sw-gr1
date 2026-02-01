import { Scene, Vector3, Mesh, SceneLoader, PBRMaterial, Texture } from '@babylonjs/core';
import '@babylonjs/loaders/OBJ';

/**
 * Asteroid - Obstáculo peligroso
 * Colisionar con él causa Game Over
 */
export class Asteroid {
  private scene: Scene;
  public mesh: Mesh;

  // Colisión
  public readonly collisionRadius: number = 2.5;

  constructor(scene: Scene, x: number, z: number) {
    this.scene = scene;

    // Crear mesh contenedor
    this.mesh = new Mesh('asteroid', this.scene);
    this.mesh.position = new Vector3(x, 1.5, z);
    
    // Cargar modelo 3D con escala fija
    this.loadModel();
  }

  private async loadModel(): Promise<void> {
    try {
      const result = await SceneLoader.ImportMeshAsync(
        '',
        '/src/models/asteroide/',
        'asteroide.obj',
        this.scene
      );

      // Crear material PBR para el asteroide
      const mat = new PBRMaterial('asteroidMat', this.scene);
      mat.albedoTexture = new Texture('/src/models/asteroide/Asteroid_01_baseColor.png', this.scene);
      mat.bumpTexture = new Texture('/src/models/asteroide/Asteroid_01_normal.png', this.scene);
      mat.metallicTexture = new Texture('/src/models/asteroide/Asteroid_01_metallicRoughness.png', this.scene);
      mat.useRoughnessFromMetallicTextureAlpha = false;
      mat.useRoughnessFromMetallicTextureGreen = true;
      mat.useMetallnessFromMetallicTextureBlue = true;

      // Asignar todos los meshes como hijos
      result.meshes.forEach((loadedMesh) => {
        if (loadedMesh) {
          loadedMesh.parent = this.mesh;
          loadedMesh.position = Vector3.Zero();
          loadedMesh.rotation = Vector3.Zero();
          
          // Aplicar escala fija a todos los meshes
          const fixedScale = 0.02;
          loadedMesh.scaling = new Vector3(fixedScale, fixedScale, fixedScale);
          
          // Aplicar material a meshes con geometría
          if (loadedMesh instanceof Mesh && loadedMesh.getTotalVertices() > 0) {
            loadedMesh.material = mat;
          }
        }
      });
      
      console.log('✅ Modelo de asteroide cargado -', result.meshes.length, 'meshes');
    } catch (error) {
      console.error('❌ Error cargando modelo de asteroide:', error);
    }
  }

  public getPosition(): Vector3 {
    return this.mesh.position.clone();
  }

  public destroy(): void {
    this.mesh.dispose();
  }
}
