import { Scene, Engine } from '@babylonjs/core';
import { PlayerShip } from '../entities/PlayerShip';
import { Debris } from '../entities/Debris';
import { Asteroid } from '../entities/Asteroid';
import { InputManager } from '../systems/InputManager';
import { CollisionSystem } from '../systems/CollisionSystem';
import { UIManager } from '../ui/UIManager';

/**
 * GameManager - Singleton que coordina todos los sistemas del juego
 * Este es el "cerebro" que orquesta el gameplay del Vertical Slice
 */
export class GameManager {
  private static instance: GameManager;
  
  // Referencias a sistemas
  private scene: Scene;
  private engine: Engine;
  private inputManager: InputManager;
  private collisionSystem: CollisionSystem;
  private uiManager: UIManager;

  // Entidades del juego
  private player!: PlayerShip;
  private debrisList: Debris[] = [];
  private asteroidsList: Asteroid[] = [];

  // Estado del juego
  private score: number = 0;
  private timeRemaining: number = 120;
  private isGameOver: boolean = false;
  private totalDebrisToCollect: number = 7; // Objetivo simple

  // Game loop
  private lastTime: number = 0;

  constructor(scene: Scene, engine: Engine) {
    this.scene = scene;
    this.engine = engine;

    // Inicializar sistemas
    this.inputManager = new InputManager();
    this.collisionSystem = new CollisionSystem();
    this.uiManager = new UIManager();

    GameManager.instance = this;
  }

  public static getInstance(): GameManager {
    return GameManager.instance;
  }

  public initialize(): void {
    console.log('🚀 Inicializando Astro Salvager - Vertical Slice...');

    // Inicializar lastTime antes del primer frame
    this.lastTime = performance.now();

    // Crear jugador
    this.player = new PlayerShip(this.scene);
    
    // Crear chatarra (3 piezas estáticas)
    this.createDebris();
    
    // Crear asteroides (2 obstáculos estáticos)
    this.createAsteroids();

    // Configurar update loop
    this.scene.onBeforeRenderObservable.add(() => {
      this.update();
    });

    // Setup UI
    this.uiManager.updateScore(this.score);
    this.uiManager.updateTimer(this.timeRemaining);
    this.uiManager.setupRestartButton(() => this.restart());

    console.log('✅ Juego inicializado correctamente');
  }

  private update(): void {
    if (this.isGameOver) return;

    // Calcular deltaTime
    const currentTime = performance.now();
    const deltaTime = (currentTime - this.lastTime) / 1000;
    this.lastTime = currentTime;

    // Limitar deltaTime para evitar saltos grandes
    const dt = Math.min(deltaTime, 0.1);

    // Update player
    this.player.update(dt);

    // Update timer
    this.timeRemaining -= dt;
    this.uiManager.updateTimer(Math.ceil(this.timeRemaining));

    // Check time over
    if (this.timeRemaining <= 0) {
      this.gameOver('TIME OVER');
      return;
    }

    // Check colisiones con chatarra
    for (let i = this.debrisList.length - 1; i >= 0; i--) {
      const debris = this.debrisList[i];
      if (this.collisionSystem.checkCollision(this.player, debris)) {
        this.collectDebris(debris, i);
      }
    }

    // Check colisiones con asteroides
    for (const asteroid of this.asteroidsList) {
      if (this.collisionSystem.checkCollision(this.player, asteroid)) {
        this.gameOver('COLLISION!');
        return;
      }
    }

    // Check victoria
    if (this.debrisList.length === 0) {
      this.victory();
    }
  }

  private createDebris(): void {
    // Posiciones predefinidas para el Vertical Slice
    const positions = [
      { x: -10, z: 10 },
      { x: 12, z: -8 },
      { x: 0, z: 15 },  
      { x: -25, z: -20 },
      { x: -18, z: 30 },
      { x: 20, z: -25 }
    ];

    positions.forEach((pos, index) => {
      const debris = new Debris(this.scene, pos.x, pos.z);
      this.debrisList.push(debris);
    });

    console.log(`📦 Creadas ${this.debrisList.length} piezas de chatarra`);
  }

  private createAsteroids(): void {
    // Posiciones predefinidas para obstáculos
    const positions = [
      { x: -15, z: -12 },
      { x: 15, z: 8 },
      { x: 0, z: -15 },
      { x: -30, z: 5 },
      { x: 28, z: -18 }
    ];

    positions.forEach((pos) => {
      const asteroid = new Asteroid(this.scene, pos.x, pos.z);
      this.asteroidsList.push(asteroid);
    });

    console.log(`☄️ Creados ${this.asteroidsList.length} asteroides`);
  }

  private collectDebris(debris: Debris, index: number): void {
    // Añadir puntos
    this.score += 50;
    this.uiManager.updateScore(this.score);

    // Aumentar velocidad de la nave
    this.player.increaseSpeed();

    // Remover visual y de lista
    debris.destroy();
    this.debrisList.splice(index, 1);

    console.log(`✨ Chatarra recolectada! Score: ${this.score}`);
  }

  private gameOver(reason: string): void {
    this.isGameOver = true;
    this.uiManager.showGameOver(reason, this.score, false);
    console.log(`💥 Game Over: ${reason}`);
  }

  private victory(): void {
    this.isGameOver = true;
    this.uiManager.showGameOver('¡VICTORIA!', this.score, true);
    console.log(`🎉 ¡Victoria! Score final: ${this.score}`);
  }

  private restart(): void {
    console.log('🔄 Reiniciando juego...');
    
    // Limpiar entidades existentes
    this.player.destroy();
    this.debrisList.forEach(d => d.destroy());
    this.asteroidsList.forEach(a => a.destroy());
    
    // Resetear arrays
    this.debrisList = [];
    this.asteroidsList = [];

    // Resetear estado
    this.score = 0;
    this.timeRemaining = 120;
    this.isGameOver = false;
    this.lastTime = performance.now();

    // Reinicializar
    this.initialize();
    this.uiManager.hideGameOver();
  }

  // Getters
  public getPlayer(): PlayerShip {
    return this.player;
  }

  public getInputManager(): InputManager {
    return this.inputManager;
  }
}
