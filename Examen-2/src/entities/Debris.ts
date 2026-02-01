import { Scene, Vector3, Mesh, SceneLoader, PBRMaterial, Texture } from '@babylonjs/core';
import '@babylonjs/loaders/OBJ';

/**
 * Debris - Chatarra espacial recolectable
 * Aparece como un ovni estático
 */
export class Debris {
  private scene: Scene;
  public mesh: Mesh;

  // Colisión
  public readonly collisionRadius: number = 1.5;

  // Puntos que otorga
  public readonly points: number = 50;

  constructor(scene: Scene, x: number, z: number) {
    this.scene = scene;

    // Crear mesh contenedor
    this.mesh = new Mesh('debris', this.scene);
    this.mesh.position = new Vector3(x, 1, z);

    // Cargar modelo 3D
    this.loadModel();
  }

  private async loadModel(): Promise<void> {
    try {
      const result = await SceneLoader.ImportMeshAsync(
        '',
        '/src/models/ovni/',
        'ovni.obj',
        this.scene
      );

      // Crear material PBR una sola vez
      const mat = new PBRMaterial('ovniMat', this.scene);
      mat.albedoTexture = new Texture('/src/models/ovni/aiStandardSurface1_baseColor.png', this.scene);
      mat.bumpTexture = new Texture('/src/models/ovni/aiStandardSurface1_normal.png', this.scene);
      mat.emissiveTexture = new Texture('/src/models/ovni/aiStandardSurface1_emissive.png', this.scene);
      mat.metallicTexture = new Texture('/src/models/ovni/aiStandardSurface1_metallicRoughness.png', this.scene);
      mat.useRoughnessFromMetallicTextureAlpha = false;
      mat.useRoughnessFromMetallicTextureGreen = true;
      mat.useMetallnessFromMetallicTextureBlue = true;

      // Asignar todos los meshes como hijos
      result.meshes.forEach((loadedMesh, index) => {
        if (loadedMesh) {
          loadedMesh.parent = this.mesh;
          loadedMesh.position = Vector3.Zero();
          loadedMesh.rotation = Vector3.Zero();
          
          // Aplicar escala a TODOS los meshes (no solo al raíz)
          loadedMesh.scaling = new Vector3(0.5, 0.5, 0.5);
          
          // Aplicar material solo a meshes con vértices (no al contenedor raíz)
          if (index > 0 && loadedMesh instanceof Mesh && loadedMesh.getTotalVertices() > 0) {
            loadedMesh.material = mat;
            console.log('Material aplicado a mesh:', loadedMesh.name);
          }
        }
      });
      
      console.log('✅ Modelo de debris (ovni) cargado -', result.meshes.length, 'meshes');
    } catch (error) {
      console.error('❌ Error cargando modelo de debris:', error);
    }
  }

  public getPosition(): Vector3 {
    return this.mesh.position.clone();
  }

  public destroy(): void {
    this.mesh.dispose();
  }
}
