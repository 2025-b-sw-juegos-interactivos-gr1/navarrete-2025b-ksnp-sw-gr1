import { Vector3 } from '@babylonjs/core';

/**
 * CollisionSystem - Sistema simple de colisiones circulares (2D en plano XZ)
 * Implementación manual sin Cannon.js - suficiente para el Vertical Slice
 */
export class CollisionSystem {
  
  /**
   * Detecta colisión entre dos entidades usando radio circular
   */
  public checkCollision(
    entityA: { getPosition(): Vector3; collisionRadius: number },
    entityB: { getPosition(): Vector3; collisionRadius: number }
  ): boolean {
    const posA = entityA.getPosition();
    const posB = entityB.getPosition();

    // Distancia en plano XZ (ignoramos Y)
    const dx = posA.x - posB.x;
    const dz = posA.z - posB.z;
    const distanceSquared = dx * dx + dz * dz;

    // Suma de radios al cuadrado
    const radiusSum = entityA.collisionRadius + entityB.collisionRadius;
    const radiusSumSquared = radiusSum * radiusSum;

    return distanceSquared < radiusSumSquared;
  }
}
