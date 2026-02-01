# 🏗️ Arquitectura Técnica de Astro Salvager

> **Diseño de Software Simplificado para Juego Arcade**  
> **Stack Principal:** Babylon.js + TypeScript
> **Proyecto:** Astro Salvager

---

## 📑 Tabla de Contenidos

1. [Visión General](#1-visión-general)
2. [Stack Tecnológico](#2-stack-tecnológico)
3. [Patrón Arquitectónico](#3-patrón-arquitectónico)
4. [Arquitectura de Alto Nivel](#4-arquitectura-de-alto-nivel)
5. [Patrones de Diseño](#5-patrones-de-diseño)
6. [Diagramas UML](#6-diagramas-uml)
7. [Gestión de Datos](#7-gestión-de-datos)
8. [Performance y Optimización](#8-performance-y-optimización)
9. [Consideraciones de Despliegue](#9-consideraciones-de-despliegue)

---

## 1. Visión General

### 1.1 Objetivo de Este Documento

Este documento define la **arquitectura técnica de Astro Salvager**, un juego arcade 3D espacial simplificado. Objetivos:

- ✅ Demostrar comprensión de arquitectura Component-Based para juegos
- ✅ Justificar decisiones técnicas (por qué NO usar physics engine completo)
- ✅ Documentar 6 patrones de diseño aplicados al gameplay arcade
- ✅ Crear diagramas UML específicos para las entidades del juego

> 🎮 **Contexto:** Astro Salvager es un juego arcade simple con ~30 entidades simultáneas máximo. No necesitamos arquitectura compleja (ECS puro) ni física realista.

### 1.2 Principios de Diseño para Astro Salvager

Arquitectura simplificada siguiendo:

1. **KISS (Keep It Simple, Stupid):** Prioridad #1 para juego arcade
   - No usar physics engine si podemos hacer colisiones AABB manualmente
   - No implementar sistemas complejos que no aportan al gameplay

2. **Composition over Inheritance:** Component-Based pattern
   - GameObject base + componentes (Transform, Renderer, Collider, etc.)
   - Evitar jerarquías profundas de clases

3. **SOLID Principles aplicados:**
   - **S**ingle Responsibility: GameManager solo gestiona estado global
   - **O**pen/Closed: Factory permite nuevos tipos de debris sin modificar código
   - **L**iskov Substitution: Cualquier GameObject puede reemplazarse
   - **I**nterface Segregation: Componentes pequeños y específicos
   - **D**ependency Inversion: Systems dependen de interfaces, no implementaciones

4. **Performance via Object Pooling:** Reusar objetos en lugar de create/destroy constante

---

## 2. Stack Tecnológico de Astro Salvager

### 2.1 Tecnologías Core

#### 2.1.1 Motor de Juego: Babylon.js

| Aspecto | Detalle |
|---------|---------|
| **Nombre** | Babylon.js |
| **Tipo** | Motor 3D web-based |
| **Licencia** | Apache 2.0 (Open Source) |
| **Tamaño bundle** | ~1.2 MB gzipped (core) |

**Justificación para Astro Salvager:**

✅ **Ventajas clave:**
- **TypeScript nativo:** Type-safety perfecta para desarrollo académico
- **Babylon.GUI integrado:** UI sin librerías externas
- **Performance suficiente:** 60 FPS con 50+ objetos low-poly
- **Inspector integrado:** Debug visual en tiempo real (F12)
- **Documentación excelente:** Playground con ejemplos

❌ **Limitaciones (y cómo las mitigamos):**
- Performance menor que motores nativos → Mitigado: Low-poly art style (300 polys/obj)
- Bundle size grande → Mitigado: Tree-shaking con Vite, lazy loading
- Sin sistema de partículas avanzado → Mitigado: Simple billboard particles suficientes

**Alternativas descartadas:**
- ❌ **Three.js:** Más bajo nivel, requiere implementar sistemas que Babylon tiene built-in
- ❌ **Unity WebGL:** Bundle >50MB, tiempo de carga inaceptable
- ❌ **Phaser:** 2D only

#### 2.1.2 Lenguaje: TypeScript

| Aspecto | Detalle |
|---------|---------|
| **Nombre** | TypeScript |
| **Versión** | 5.3.3 |
| **Superset de** | JavaScript (ES2023+) |

**Justificación:**
- ✅ **Type Safety crítica:** Detecta errores de tipo en GameManager.score (number vs string)
- ✅ **Enums para estados:** `enum GameState { Menu, Playing, GameOver }`
- ✅ **Interfaces para componentes:** `interface IUpdatable { update(dt: number): void }`
- ✅ **Autocomplete:** IDE sugiere propiedades de Babylon Mesh automáticamente
- ✅ **Refactoring seguro:** Renombrar `Debris` a `Scrap` actualiza todas las referencias

**Configuración TypeScript para Astro Salvager:**
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "lib": ["ES2022", "DOM"]
  }
}
```

#### 2.1.3 Build Tool: Vite

| Aspecto | Detalle |
|---------|---------|
| **Nombre** | Vite |
| **Versión** | 5.0.12 |
| **Propósito** | Dev server + bundler |
| **Tiempo HMR** | <50ms |

**Justificación:**
- ⚡ **Velocidad de desarrollo:** Cambios en código reflejan instantáneamente
- 📦 **Bundling optimizado:** Tree-shaking elimina código no usado de Babylon
- 🔧 **Zero config:** `npm create vite@latest astro-salvager -- --template vanilla-ts`
- 🌐 **Compatible:** Babylon.js funciona out-of-the-box

### 2.2 Decisión Clave: NO usar Motor de Física Completo

#### ❌ **Astro Salvager NO usa Cannon.js ni Ammo.js**

**Justificación técnica detallada:**

| Característica | Cannon.js/Ammo.js | Implementación Manual AABB |
|----------------|-------------------|----------------------------|
| **Bundle size** | +200 KB gzipped | ~100 líneas TypeScript (~2 KB) |
| **Colisiones soportadas** | Meshes complejos, cóncavos, convex hulls | Solo AABB (cajas alineadas) |
| **Features NO necesarios** | Constraints, joints, ragdolls, soft bodies, vehículos | N/A |
| **Features que SÍ necesitamos** | ✅ Detección colisión nave-asteroide<br>✅ Detección nave-chatarra | ✅ Implementados manualmente |
| **Complejidad de integración** | Alta (configurar world, bodies, materials) | Baja (función simple) |
| **Performance** | Overhead para features innecesarios | Óptimo para nuestro caso |

**Implementación de colisiones AABB en Astro Salvager:**

```typescript
// src/physics/CollisionSystem.ts

interface AABB {
  min: Vector3;
  max: Vector3;
}

class CollisionSystem {
  
  // Detectar colisión entre dos AABBs
  static checkAABB(a: AABB, b: AABB): boolean {
    return (
      a.min.x <= b.max.x && a.max.x >= b.min.x &&
      a.min.y <= b.max.y && a.max.y >= b.min.y &&
      a.min.z <= b.max.z && a.max.z >= b.min.z
    );
  }
  
  // Calcular AABB desde un Mesh de Babylon
  static getAABBFromMesh(mesh: Mesh): AABB {
    const bounds = mesh.getBoundingInfo().boundingBox;
    return {
      min: bounds.minimumWorld,
      max: bounds.maximumWorld
    };
  }
  
  // Update loop: Chequear todas las colisiones
  update(deltaTime: number): void {
    const playerAABB = CollisionSystem.getAABBFromMesh(this.player.mesh);
    
    // Check colisión con asteroides (Game Over)
    for (const asteroid of this.asteroids) {
      const asteroidAABB = CollisionSystem.getAABBFromMesh(asteroid.mesh);
      if (CollisionSystem.checkAABB(playerAABB, asteroidAABB)) {
        this.onPlayerCollisionWithAsteroid();
        break; // Game Over, no necesitamos más checks
      }
    }
    
    // Check colisión con chatarra (Recolectar)
    for (let i = this.debris.length - 1; i >= 0; i--) {
      const debrisAABB = CollisionSystem.getAABBFromMesh(this.debris[i].mesh);
      if (CollisionSystem.checkAABB(playerAABB, debrisAABB)) {
        this.collectDebris(this.debris[i]);
        this.debris.splice(i, 1); // Remover de array
      }
    }
  }
}
```

**Total líneas:** ~80 líneas implementan toda la física que Astro Salvager necesita.

**Comparación de complejidad:**

```typescript
// CON Cannon.js (complejidad alta)
import * as CANNON from 'cannon-es';

// Setup physics world
const world = new CANNON.World({ gravity: new CANNON.Vec3(0, 0, 0) });

// Setup nave con RigidBody
const shipShape = new CANNON.Box(new CANNON.Vec3(1, 0.5, 1));
const shipBody = new CANNON.Body({ mass: 1, shape: shipShape });
world.addBody(shipBody);

// Setup materiales de colisión
const playerMaterial = new CANNON.Material('player');
const asteroidMaterial = new CANNON.Material('asteroid');
const contactMaterial = new CANNON.ContactMaterial(playerMaterial, asteroidMaterial, {
  friction: 0.0,
  restitution: 0.0
});
world.addContactMaterial(contactMaterial);

// Sincronizar Babylon mesh con Cannon body cada frame
scene.onBeforeRenderObservable.add(() => {
  shipMesh.position.copyFrom(shipBody.position);
  shipMesh.rotationQuaternion = shipBody.quaternion;
});

// ... 100+ líneas más de configuración

// vs

// SIN Cannon.js (simplicidad máxima)
if (CollisionSystem.checkAABB(playerAABB, asteroidAABB)) {
  gameOver();
}
```

**Decisión final:** Implementación manual AABB es **15x más simple** y ahorra 200 KB del bundle final.

---

### 2.3 Librerías Incluidas

| Librería | Versión | Propósito | Bundle Impact |
|----------|---------|-----------|---------------|
| **Babylon.js Core** | 6.48.1 | Motor 3D principal | ~1.2 MB gzipped |
| **Babylon.GUI** | 6.48.1 | UI in-game (HUD) | +150 KB |
| **TypeScript** | 5.3.3 | Lenguaje (compile-time only) | 0 KB (transpilado) |
| **Vite** | 5.0.12 | Build tool (dev-only) | 0 KB (dev-only) |

**Total bundle estimado:** ~1.4 MB gzipped (acceptable para juego web)

**Optimizaciones aplicadas:**
- Tree-shaking de Babylon (solo importar módulos usados)
- Lazy loading de audio assets (cargar on-demand)
- Compresión GZIP/Brotli en hosting

---

### 2.4 Herramientas de Desarrollo

| Herramienta | Propósito | Configuración |
|-------------|-----------|---------------|
| **ESLint** | Linting de TypeScript | Strict mode, reglas de Babylon |
| **Prettier** | Formateo automático | Single quotes, 2 espacios |
| **Vite Dev Server** | HMR durante desarrollo | Puerto 5173, proxy API si fuera multiplayer |
| **Babylon Inspector** | Debug visual (F12 en runtime) | Incluido en dev build, removido en prod |
| **Git** | Control de versiones | Branches: main, develop, feature/* |

---

## 3. Patrón Arquitectónico: Component-Based

### 3.1 Component-Based Architecture Explicado

**Definición:** Cada entidad del juego (`GameObject`) es un contenedor de componentes reutilizables. Los componentes tienen datos y comportamiento específico.

**Inspiración:** Unity's GameObject/Component system (simplificado)

**Estructura básica en Astro Salvager:**

```
GameObject (base)
  ├─ Transform (posición, rotación, escala)
  ├─ MeshRenderer (modelo 3D + material)
  ├─ Collider (AABB para colisiones)
  ├─ Movement (velocidad, inercia) [opcional]
  └─ Custom scripts (PlayerController, DebrisRotator, etc.)
```

**Ejemplo concreto: Nave VALKYRIE-7**

```typescript
// La nave del jugador es un GameObject con 5 componentes

class PlayerShip extends GameObject {
  
  // Componentes
  private transform: TransformComponent;
  private renderer: MeshRendererComponent;
  private collider: AABBColliderComponent;
  private movement: MovementComponent;
  private controller: PlayerInputController;
  
  constructor(scene: Scene) {
    super(scene);
    
    // Agregar componentes
    this.transform = this.addComponent(new TransformComponent());
    this.renderer = this.addComponent(new MeshRendererComponent('PlayerShip.glb'));
    this.collider = this.addComponent(new AABBColliderComponent(2.0, 1.0, 2.0)); // Size
    this.movement = this.addComponent(new MovementComponent(8.0, 0.8)); // Speed, drag
    this.controller = this.addComponent(new PlayerInputController());
  }
  
  update(deltaTime: number): void {
    // Los componentes se actualizan automáticamente
    super.update(deltaTime);
  }
}
```

**Ventajas para Astro Salvager:**
- ✅ **Reutilización:** `MovementComponent` funciona igual para nave y asteroides
- ✅ **Flexibilidad:** Agregar/quitar componentes en runtime (debug)
- ✅ **Claridad:** Cada componente tiene 1 responsabilidad (SRP)
- ✅ **Testing:** Testear `ColliderComponent` aisladamente sin todo el GameObject

**Desventajas (mitigadas):**
- ⚠️ **Comunicación entre componentes:** Resuelto con `EventBus` (Observer pattern)
- ⚠️ **Overhead:** Mínimo con <50 GameObjects simultáneos

---

### 3.2 Alternativas Consideradas y Descartadas

| Patrón | Pros | Contras | ¿Por qué NO? |
|--------|------|---------|--------------|
| **ECS Puro** (Entity-Component-System) | Performance máximo (cache-friendly) | Complejidad alta, curva de aprendizaje | Overkill para 30-50 entidades |
| **Herencia Clásica** (GameObject → Ship → PlayerShip) | Simple, familiar de OOP | Jerarquías rígidas, difícil de extender | No escala con nuevas features |
| **MVC** (Model-View-Controller) | Bueno para apps web | No natural para juegos en tiempo real | Pensado para UIs, no game loops |

**Decisión:** Component-Based es el sweet spot para Astro Salvager (balance simplicidad/flexibilidad).

---

## 4. Arquitectura de Alto Nivel

### 4.1 Diagrama de Capas de Astro Salvager

```
┌───────────────────────────────────────────────────────────┐
│         CAPA 1: PRESENTATION (UI)                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │  MainMenu    │  │     HUD      │  │  GameOver    │   │
│  │  (HTML/CSS)  │  │ (Babylon.GUI)│  │   Screen     │   │
│  └──────────────┘  └──────────────┘  └──────────────┘   │
└──────────────────────────┬────────────────────────────────┘
                           │ Events (start, restart, etc.)
┌──────────────────────────▼────────────────────────────────┐
│         CAPA 2: GAME LOGIC (Core)                         │
│  ┌──────────────────────────────────────────────┐         │
│  │          GameManager (Singleton)             │         │
│  │  - Inicializa sistemas                       │         │
│  │  - Gestiona GameState (Menu/Playing/GameOver)│         │
│  │  - Coordina game loop                        │         │
│  └──────────────────────────────────────────────┘         │
│           │                      │                         │
│           ▼                      ▼                         │
│  ┌──────────────┐      ┌──────────────┐                  │
│  │ SceneManager │      │ ScoreManager │                  │
│  │ (Arena única)│      │(Puntos+combo)│                  │
│  └──────────────┘      └──────────────┘                  │
└──────────────────────────┬────────────────────────────────┘
                           │
┌──────────────────────────▼────────────────────────────────┐
│      CAPA 3: ENTITY LAYER (GameObjects)                   │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐         │
│  │ PlayerShip │  │  Debris    │  │  Asteroid  │         │
│  │ (VALKYRIE) │  │  (x3 tipos)│  │  (x2 tipos)│         │
│  └────────────┘  └────────────┘  └────────────┘         │
│  Todos heredan de GameObject con componentes             │
└──────────────────────────┬────────────────────────────────┘
                           │
┌──────────────────────────▼────────────────────────────────┐
│        CAPA 4: SYSTEMS (Procesamiento)                    │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐           │
│  │ InputSystem│ │CollisionSys│ │ AudioSystem│           │
│  │ (WASD keys)│ │ (AABB only)│ │(Music+SFX) │           │
│  └────────────┘ └────────────┘ └────────────┘           │
│  ┌────────────┐ ┌────────────┐                           │
│  │ SpawnSystem│ │ParticleSys │                           │
│  │(Debris+Ast)│ │(VFX pools) │                           │
│  └────────────┘ └────────────┘                           │
└──────────────────────────┬────────────────────────────────┘
                           │
┌──────────────────────────▼────────────────────────────────┐
│      CAPA 5: DATA/SERVICES                                │
│  ┌────────────────┐    ┌────────────────┐               │
│  │  SaveSystem    │    │  AssetLoader   │               │
│  │ (LocalStorage) │    │  (.glb + audio)│               │
│  └────────────────┘    └────────────────┘               │
└───────────────────────────────────────────────────────────┘
```

### 4.2 Flujo de Ejecución Típico (Un Frame)

```
1. Input
                     │
┌────────────────────▼────────────────────────────┐
│         RUNTIME & BUILD                         │
│                                                 │
│  ┌──────────┐ ┌────────┐ ┌──────────┐         │
│  │TypeScript│ │  Vite  │ │  Node.js │         │
│  │(Language)│ │(Bundle)│ │(Runtime) │         │
│  └──────────┘ └────────┘ └──────────┘         │
└────────────────────┬────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────┐
│            PLATAFORMA                           │
│                                                 │
│      Browser (Chrome, Firefox, Safari)          │
│      WebGL 2.0 / WebGPU                         │
└─────────────────────────────────────────────────┘
```

---

## 3. Patrón Arquitectónico

### 3.1 Patrón Elegido: Component-Based Architecture

**Descripción:** Cada entidad del juego (GameObject) es un contenedor de componentes. Los componentes contienen datos y comportamiento específico.

**Inspirado en:** Unity's Component System (no tan estricto como ECS puro)

### 3.2 ¿Por Qué Component-Based?

✅ **Ventajas:**
- **Composición sobre herencia:** Más flexible que jerarquías de clases profundas
- **Reutilización:** Un componente `HealthComponent` funciona en jugador y enemigo
- **Debugging:** Podemos añadir/quitar componentes en runtime para testear
- **Babylon.js lo soporta nativamente:** `TransformNode` como base

❌ **Desventajas:**
- **Comunicación entre componentes:** Requiere un sistema de mensajería
- **Performance:** No tan óptimo como ECS puro para miles de entidades

### 3.3 Alternativas Consideradas

| Patrón | Pros | Contras | ¿Por qué NO? |
|--------|------|---------|--------------|
| **MVC** | Separación clara | Demasiado web-oriented | No es natural para games |
| **ECS Puro** | Performance extremo | Complejidad alta | Overkill para nuestro scope |
| **Herencia Clásica** | Simple al inicio | Jerarquías rígidas | No escala bien |

---

## 4. Arquitectura de Alto Nivel

### 4.1 Diagrama de Capas

```
┌───────────────────────────────────────────────────────────┐
│              PRESENTATION LAYER (UI)                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐               │
│  │  Menus   │  │   HUD    │  │ Dialogs  │               │
│  └──────────┘  └──────────┘  └──────────┘               │
└────────────────────────┬──────────────────────────────────┘
                         │
┌────────────────────────▼──────────────────────────────────┐
│           GAME LOGIC LAYER (Core Gameplay)                │
│                                                           │
│  ┌────────────────┐     ┌────────────────┐              │
│  │  Game Manager  │────▶│ Scene Manager  │              │
│  │  (Singleton)   │     │  (State Mgmt)  │              │
│  └────────────────┘     └────────────────┘              │
│           │                      │                        │
│           ▼                      ▼                        │
│  ┌─────────────────────────────────────────┐            │
│  │         ENTITY/COMPONENT LAYER          │            │
│  │  ┌──────────┐ ┌──────────┐ ┌─────────┐ │            │
│  │  │  Player  │ │ Enemies  │ │ Items   │ │            │
│  │  │(GameObject)│(GameObject)│(GameObj)│ │            │
│  │  └──────────┘ └──────────┘ └─────────┘ │            │
│  └─────────────────────────────────────────┘            │
└────────────────────────┬──────────────────────────────────┘
                         │
┌────────────────────────▼──────────────────────────────────┐
│                SYSTEMS LAYER                              │
│  ┌───────────┐ ┌──────────┐ ┌─────────┐ ┌─────────┐    │
│  │  Input    │ │ Physics  │ │  Audio  │ │   AI    │    │
│  │  System   │ │  System  │ │ System  │ │ System  │    │
│  └───────────┘ └──────────┘ └─────────┘ └─────────┘    │
└────────────────────────┬──────────────────────────────────┘
                         │
┌────────────────────────▼──────────────────────────────────┐
│              DATA/SERVICES LAYER                          │
│  ┌────────────┐ ┌────────────┐ ┌─────────────┐          │
│  │ Save/Load  │ │  Config    │ │   Assets    │          │
│  │   System   │ │   Data     │ │   Loader    │          │
│  └────────────┘ └────────────┘ └─────────────┘          │
└───────────────────────────────────────────────────────────┘
```

### 4.2 Descripción de Capas

#### 4.2.1 Presentation Layer (UI)

**Responsabilidad:** Toda la interfaz visual que NO es parte del mundo 3D.

**Componentes:**
- **MainMenu:** Pantalla inicial, opciones, créditos
- **HUD:** Barra de vida, munición, minimapa
- **PauseMenu:** Menú de pausa con opciones
- **Dialogs:** Modales para confirmaciones, tutoriales

**Tecnología:** Babylon.GUI + HTML/CSS para menús complejos

**Patrón:** MVP (Model-View-Presenter) para desacoplar lógica de presentación

#### 4.2.2 Game Logic Layer

**Responsabilidad:** Lógica central del juego, state management, coordinación de sistemas.

**Componentes clave:**

1. **GameManager (Singleton)**
   - Punto de entrada de la aplicación
   - Inicializa todos los sistemas
   - Gestiona el game loop principal
   - Coordina transiciones de escenas

2. **SceneManager**
   - Carga/descarga escenas (niveles)
   - Transiciones entre escenas
   - Mantiene referencia a la escena activa

3. **Entity/Component Layer**
   - Todos los GameObjects del juego
   - Jugador, enemigos, items, props
   - Cada uno es un contenedor de componentes

**Patrón:** Game Loop con Update(deltaTime)

#### 4.2.3 Systems Layer

**Responsabilidad:** Sistemas globales que procesan componentes específicos.

**Sistemas principales:**

1. **InputSystem**
   - Captura teclado, mouse, gamepad
   - Mapea inputs a acciones (configurables)
   - Maneja diferentes contextos (gameplay, UI, pause)

2. **PhysicsSystem**
   - Integración con Cannon.js
   - Maneja colisiones
   - Raycast para interacciones

3. **AudioSystem**
   - Reproduce música y SFX
   - Control de volumen por categoría
   - Audio 3D posicional

4. **AISystem**
   - Update de todos los enemigos
   - Pathfinding
   - Decision-making (FSM)

5. **RenderSystem**
   - (Manejado por Babylon.js automáticamente)
   - Optimizaciones de rendering (frustum culling, LOD)

#### 4.2.4 Data/Services Layer

**Responsabilidad:** Persistencia de datos, configuración, carga de assets.

**Servicios:**

1. **SaveSystem**
   - Guardar/Cargar partida
   - Formato JSON en LocalStorage
   - Versionado de saves

2. **ConfigService**
   - Configuración del juego (balance, stats)
   - Cargado desde JSON externos
   - Hot-reload en desarrollo

3. **AssetLoader**
   - Carga de modelos 3D, texturas, audio
   - Asset bundling y lazy loading
   - Progress tracking para loading screens

---

## 5. Patrones de Diseño

Esta sección documenta los **Design Patterns** clásicos que aplicaremos y **dónde** los usaremos.

### 5.1 Singleton Pattern

**Definición:** Asegurar que una clase tenga solo una instancia y proveer un punto de acceso global.

**Cuándo usarlo:**
- Managers que deben existir una vez (GameManager, AudioManager)
- Servicios globales (InputSystem, SaveSystem)

**Ejemplo conceptual:**

```typescript
class GameManager {
  private static instance: GameManager;
  
  private constructor() {
    // Constructor privado previene instanciación directa
  }
  
  public static getInstance(): GameManager {
    if (!GameManager.instance) {
      GameManager.instance = new GameManager();
    }
    return GameManager.instance;
  }
  
  public startGame(): void {
    // Lógica de inicio
  }
}

// Uso
const game = GameManager.getInstance();
game.startGame();
```

**Aplicaciones en nuestro juego:**
- `GameManager`
- `AudioManager`
- `InputManager`
- `SceneManager`

**⚠️ Cuidado:** Singletons pueden complicar testing. Considera usar Dependency Injection para mayor flexibilidad.

---

### 5.2 Observer Pattern (Event System)

**Definición:** Define una dependencia uno-a-muchos. Cuando un objeto cambia de estado, todos sus dependientes son notificados.

**Cuándo usarlo:**
- Eventos de juego (PlayerDied, LevelComplete)
- UI reaccionando a cambios de gameplay
- Achievements/Stats tracking

**Babylon.js tiene `Observable` built-in:**

```typescript
import { Observable } from '@babylonjs/core';

class Player {
  public onHealthChanged = new Observable<number>();
  
  private _health: number = 100;
  
  public takeDamage(amount: number): void {
    this._health -= amount;
    // Notificar a todos los observers
    this.onHealthChanged.notifyObservers(this._health);
    
    if (this._health <= 0) {
      this.onDeath.notifyObservers();
    }
  }
}

// Observers (UI, por ejemplo)
player.onHealthChanged.add((newHealth) => {
  updateHealthBar(newHealth);
});
```

**Aplicaciones en nuestro juego:**
- Sistema de eventos global (EventBus)
- UI reaccionando a cambios de stats
- Sistema de logros
- Triggers de nivel (puertas que se abren al derrotar enemigos)

**Alternativa:** Implementar un EventBus centralizado

```typescript
class EventBus {
  private events: Map<string, Function[]> = new Map();
  
  public on(eventName: string, callback: Function): void {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName)!.push(callback);
  }
  
  public emit(eventName: string, data?: any): void {
    const callbacks = this.events.get(eventName);
    if (callbacks) {
      callbacks.forEach(cb => cb(data));
    }
  }
}

// Uso
EventBus.emit('player:died', { score: 1234 });
```

---

### 5.3 Factory Pattern

**Definición:** Crear objetos sin especificar su clase exacta.

**Cuándo usarlo:**
- Creación de enemigos (diferentes tipos)
- Instanciar items/power-ups
- Generar proyectiles

**Ejemplo conceptual:**

```typescript
// Interfaz común
interface Enemy {
  attack(): void;
  update(dt: number): void;
}

// Implementaciones concretas
class Grunt implements Enemy {
  attack() { /* lógica básica */ }
  update(dt: number) { /* IA simple */ }
}

class Elite implements Enemy {
  attack() { /* lógica compleja */ }
  update(dt: number) { /* IA avanzada */ }
}

// Factory
class EnemyFactory {
  public static create(type: string, position: Vector3): Enemy {
    switch(type) {
      case 'grunt':
        return new Grunt(position);
      case 'elite':
        return new Elite(position);
      default:
        throw new Error(`Unknown enemy type: ${type}`);
    }
  }
}

// Uso
const enemy = EnemyFactory.create('grunt', new Vector3(10, 0, 5));
```

**Aplicaciones en nuestro juego:**
- `EnemyFactory.create(type, position)`
- `ItemFactory.create(itemID, position)`
- `ProjectileFactory.create(type, origin, direction)`

**Ventajas:**
- Centraliza lógica de creación
- Fácil añadir nuevos tipos sin modificar código existente (Open/Closed Principle)

---

### 5.4 State Pattern (Finite State Machine)

**Definición:** Permitir a un objeto alterar su comportamiento cuando su estado interno cambia.

**Cuándo usarlo:**
- Estados del jugador (Idle, Walking, Jumping, Attacking)
- IA de enemigos (Patrol, Alert, Combat, Fleeing)
- Game state (MainMenu, Playing, Paused, GameOver)

**Ejemplo conceptual:**

```typescript
// Estado abstracto
interface State {
  enter(): void;
  update(dt: number): void;
  exit(): void;
}

// Estados concretos
class IdleState implements State {
  constructor(private player: Player) {}
  
  enter() {
    this.player.playAnimation('idle');
  }
  
  update(dt: number) {
    if (InputManager.isMoving()) {
      this.player.changeState(new WalkingState(this.player));
    }
  }
  
  exit() {}
}

class WalkingState implements State {
  // Similar...
}

// Entidad con FSM
class Player {
  private currentState: State;
  
  public changeState(newState: State): void {
    this.currentState?.exit();
    this.currentState = newState;
    this.currentState.enter();
  }
  
  public update(dt: number): void {
    this.currentState.update(dt);
  }
}
```

**Aplicaciones en nuestro juego:**
- Máquina de estados del jugador
- IA de cada tipo de enemigo
- Game state global (menú → juego → pausa → fin)

**Diagrama de estados:** (Ver sección de UML)

---

### 5.5 Object Pool Pattern

**Definición:** Reutilizar objetos en lugar de crearlos/destruirlos constantemente.

**Cuándo usarlo:**
- Proyectiles (balas, flechas)
- Partículas
- Efectos visuales temporales
- Audio sources (si hay muchos simultáneos)

**Problema que resuelve:**
- Garbage Collection pausas en JavaScript
- Performance al instanciar/destruir cientos de objetos por segundo

**Ejemplo conceptual:**

```typescript
class BulletPool {
  private pool: Bullet[] = [];
  private active: Bullet[] = [];
  
  constructor(private scene: Scene, initialSize: number) {
    // Pre-crear objetos
    for (let i = 0; i < initialSize; i++) {
      const bullet = new Bullet(scene);
      bullet.setEnabled(false); // Desactivado por defecto
      this.pool.push(bullet);
    }
  }
  
  public spawn(position: Vector3, direction: Vector3): Bullet {
    let bullet: Bullet;
    
    if (this.pool.length > 0) {
      // Reutilizar del pool
      bullet = this.pool.pop()!;
    } else {
      // Si no hay disponibles, crear nuevo
      bullet = new Bullet(this.scene);
    }
    
    bullet.setEnabled(true);
    bullet.reset(position, direction);
    this.active.push(bullet);
    return bullet;
  }
  
  public despawn(bullet: Bullet): void {
    bullet.setEnabled(false);
    this.active = this.active.filter(b => b !== bullet);
    this.pool.push(bullet);
  }
}
```

**Aplicaciones en nuestro juego:**
- Pool de proyectiles
- Pool de partículas
- Pool de text popups (damage numbers)

---

### 5.6 Command Pattern

**Definición:** Encapsular una acción como un objeto, permitiendo undo/redo.

**Cuándo usarlo:**
- Sistema de replay
- Tutoriales (grabar acciones del jugador)
- Undo system (menos común en juegos, más en editors)

**Ejemplo conceptual:**

```typescript
interface Command {
  execute(): void;
  undo(): void;
}

class MoveCommand implements Command {
  constructor(
    private entity: GameObject,
    private direction: Vector3
  ) {}
  
  execute() {
    this.entity.position.addInPlace(this.direction);
  }
  
  undo() {
    this.entity.position.subtractInPlace(this.direction);
  }
}

// Command Manager
class CommandHistory {
  private history: Command[] = [];
  
  public executeCommand(command: Command): void {
    command.execute();
    this.history.push(command);
  }
  
  public undo(): void {
    const command = this.history.pop();
    command?.undo();
  }
}
```

**Aplicaciones posibles:**
- Sistema de replay para debugging
- Tutorial que graba y reproduce acciones
- (Opcional) Puzzle games con mecánica de rewind

---

### 5.7 Component Pattern

**Definición:** Ya lo usamos como patrón arquitectónico principal. Cada GameObject es un contenedor de componentes.

**Componentes comunes en nuestro juego:**

```typescript
// Base Component
abstract class Component {
  constructor(protected owner: GameObject) {}
  
  abstract update(dt: number): void;
  
  public onDestroy(): void {
    // Cleanup
  }
}

// Componentes específicos
class HealthComponent extends Component {
  private health: number = 100;
  
  public takeDamage(amount: number): void {
    this.health -= amount;
    if (this.health <= 0) {
      this.owner.destroy();
    }
  }
  
  update(dt: number) {
    // Regeneración de vida, etc.
  }
}

class MovementComponent extends Component {
  private speed: number = 5.0;
  
  update(dt: number) {
    const input = InputManager.getMovementInput();
    this.owner.position.addInPlace(
      input.scale(this.speed * dt)
    );
  }
}

// GameObject contenedor
class GameObject {
  private components: Map<string, Component> = new Map();
  
  public addComponent<T extends Component>(
    name: string, 
    component: T
  ): T {
    this.components.set(name, component);
    return component;
  }
  
  public getComponent<T extends Component>(name: string): T | undefined {
    return this.components.get(name) as T;
  }
  
  public update(dt: number): void {
    this.components.forEach(comp => comp.update(dt));
  }
}
```

**Ventajas:**
- Composición flexible: `Player = HealthComponent + MovementComponent + InputComponent`
- Reutilización: El mismo `HealthComponent` funciona para jugador y enemigo
- Fácil de testear: Cada componente es independiente

---

### 5.8 Strategy Pattern

**Definición:** Definir una familia de algoritmos, encapsular cada uno y hacerlos intercambiables.

**Cuándo usarlo:**
- Diferentes comportamientos de IA
- Algoritmos de pathfinding intercambiables
- Diferentes armas con mecánicas distintas

**Ejemplo conceptual:**

```typescript
// Estrategia abstracta
interface WeaponStrategy {
  attack(owner: GameObject, target: Vector3): void;
}

// Estrategias concretas
class SwordStrategy implements WeaponStrategy {
  attack(owner: GameObject, target: Vector3) {
    // Ataque melee en área
    const enemiesInRange = findEnemiesInRadius(owner.position, 2.0);
    enemiesInRange.forEach(e => e.takeDamage(20));
  }
}

class BowStrategy implements WeaponStrategy {
  attack(owner: GameObject, target: Vector3) {
    // Proyectil a distancia
    const arrow = ProjectileFactory.create('arrow', owner.position, target);
    arrow.launch();
  }
}

// Contexto
class Player {
  private weaponStrategy: WeaponStrategy = new SwordStrategy();
  
  public equipWeapon(weapon: WeaponStrategy): void {
    this.weaponStrategy = weapon;
  }
  
  public attack(target: Vector3): void {
    this.weaponStrategy.attack(this, target);
  }
}
```

**Aplicaciones:**
- Sistema de armas intercambiables
- Comportamientos de IA (agresivo vs defensivo)
- Diferentes modos de dificultad (ajusta valores con estrategias)

---

### 5.9 Resumen de Patrones

| Patrón | Uso en Nuestro Juego | Prioridad |
|--------|---------------------|-----------|
| **Singleton** | GameManager, AudioManager | 🔴 Alta |
| **Observer** | Sistema de eventos, UI | 🔴 Alta |
| **Factory** | Creación de enemigos, items | 🔴 Alta |
| **State (FSM)** | Estados de jugador, IA | 🔴 Alta |
| **Object Pool** | Proyectiles, partículas | 🟡 Media |
| **Command** | Replay system (opcional) | 🟢 Baja |
| **Component** | Base de toda la arquitectura | 🔴 Alta |
| **Strategy** | Armas, IA behaviors | 🟡 Media |

---

## 6. Diagramas UML

> **Nota:** Los diagramas completos en alta resolución están en `/diagramas/`

### 6.1 Diagrama de Clases (Conceptual)

Este diagrama muestra las clases principales y sus relaciones.

```
┌──────────────────────────┐
│     GameObject           │◄────────────┐
├──────────────────────────┤             │
│ + position: Vector3      │             │ Herencia
│ + rotation: Vector3      │             │
│ + components: Component[]│             │
├──────────────────────────┤             │
│ + update(dt: number)     │             │
│ + addComponent(c: Comp)  │             │
│ + destroy()              │             │
└────────────┬─────────────┘             │
             │                           │
             │ Composición               │
             │                           │
             ▼                           │
┌──────────────────────────┐             │
│   <<abstract>>           │             │
│   Component              │             │
├──────────────────────────┤             │
│ # owner: GameObject      │             │
├──────────────────────────┤             │
│ + update(dt: number)     │             │
│ + onDestroy()            │             │
└────────────┬─────────────┘             │
             │                           │
        ┌────┴────┬──────────┐          │
        │         │          │          │
        ▼         ▼          ▼          │
┌─────────┐ ┌─────────┐ ┌─────────┐    │
│ Health  │ │Movement │ │ Render  │    │
│Component│ │Component│ │Component│    │
└─────────┘ └─────────┘ └─────────┘    │
                                        │
┌───────────────────────┐              │
│      Player           │──────────────┘
├───────────────────────┤
│ + health: HealthComp  │
│ + movement: MoveComp  │
├───────────────────────┤
│ + handleInput()       │
└───────────────────────┘

┌───────────────────────┐
│      Enemy            │──────────────┘
├───────────────────────┤
│ + health: HealthComp  │
│ + aiState: FSM        │
├───────────────────────┤
│ + updateAI(dt)        │
└───────────────────────┘
```

**Explicación:**
- `GameObject` es la clase base para todo en el mundo
- Contiene una lista de `Component`
- `Player` y `Enemy` heredan de `GameObject`
- Cada uno tiene componentes específicos (`HealthComponent`, `MovementComponent`)

**Relaciones:**
- **Herencia (línea con triángulo):** Player IS-A GameObject
- **Composición (diamante relleno):** GameObject HAS Components
- **Asociación (línea simple):** Conexión entre clases

---

### 6.2 Diagrama de Secuencia: Game Loop

Muestra cómo fluye el update en cada frame.

```
┌─────────┐     ┌───────────┐     ┌─────────┐     ┌─────────┐
│ Babylon │     │   Game    │     │  Scene  │     │ Player  │
│  Engine │     │  Manager  │     │ Manager │     │ (Entity)│
└────┬────┘     └─────┬─────┘     └────┬────┘     └────┬────┘
     │                │                 │               │
     │ render()       │                 │               │
     │───────────────>│                 │               │
     │                │                 │               │
     │                │ update(dt)      │               │
     │                │────────────────>│               │
     │                │                 │               │
     │                │                 │ update(dt)    │
     │                │                 │──────────────>│
     │                │                 │               │
     │                │                 │               │ updateComponents()
     │                │                 │               │─────────┐
     │                │                 │               │         │
     │                │                 │               │<────────┘
     │                │                 │               │
     │                │                 │<──────────────│
     │                │<────────────────│               │
     │<───────────────│                 │               │
     │                │                 │               │
```

**Explicación:**
1. Babylon Engine llama `render()` cada frame (~60 FPS)
2. GameManager propaga `update(deltaTime)` a SceneManager
3. SceneManager llama `update()` en todas las entidades activas
4. Cada entidad actualiza sus componentes
5. Componentes ejecutan su lógica (movimiento, IA, física)

---

### 6.3 Diagrama de Estados: Player FSM

```
        ┌─────────────┐
   ┌───▶│    IDLE     │◄───┐
   │    └──────┬──────┘    │
   │           │            │
   │     [WASD Press]       │
   │           ▼            │
   │    ┌─────────────┐    │
   │    │   WALKING   │────┘
   │    └──────┬──────┘  [Stop Input]
   │           │
   │     [Shift Hold]
   │           ▼
   │    ┌─────────────┐
   │    │  RUNNING    │
   │    └──────┬──────┘
   │           │ [Shift Release]
   │           └──────────┐
   │                      │
   │           [Space]    │
   │           ▼          ▼
   │    ┌─────────────┐  │
   │    │   JUMPING   │  │
   │    └──────┬──────┘  │
   │           │          │
   │     [Land] │         │
   └───────────┴─────────┘
   
        [Click]
           ▼
    ┌─────────────┐
    │  ATTACKING  │───┐
    └─────────────┘   │
           ▲          │ [Animation End]
           └──────────┘
```

**Transiciones:**
- Idle → Walking: Presionar WASD
- Walking → Running: Mantener Shift
- Walking → Jumping: Presionar Space
- Jumping → Idle: Al aterrizar
- Cualquier estado → Attacking: Click (si no está ya atacando)

---

### 6.4 Diagrama de Casos de Uso

```
                 ┌───────────────────────┐
                 │      JUGADOR          │
                 └──────────┬────────────┘
                            │
         ┌──────────────────┼──────────────────┐
         │                  │                  │
         ▼                  ▼                  ▼
    ┌────────┐         ┌────────┐        ┌────────┐
    │ Mover  │         │ Atacar │        │ Usar   │
    │Personaje│        │Enemigos│        │ Item   │
    └────────┘         └────────┘        └────────┘
         │                  │                  │
         │                  │                  │
         └──────────────────┼──────────────────┘
                            │
                            ▼
                   ┌─────────────────┐
                   │   Sistema de    │
                   │  Juego (Game)   │
                   └─────────────────┘
                            │
         ┌──────────────────┼──────────────────┐
         │                  │                  │
         ▼                  ▼                  ▼
    ┌────────┐         ┌────────┐        ┌────────┐
    │Guardar │         │ Cargar │        │Config  │
    │Partida │         │Partida │        │Opciones│
    └────────┘         └────────┘        └────────┘
```

**Actores:**
- **Jugador:** Interactúa con el juego

**Casos de Uso:**
- Mover personaje
- Atacar enemigos
- Usar items
- Guardar/Cargar partida
- Configurar opciones

---

### 6.5 Diagrama de Componentes

Muestra los módulos principales del sistema.

```
┌─────────────────────────────────────────────────┐
│               GameApplication                   │
│                                                 │
│  ┌───────────────┐      ┌──────────────────┐  │
│  │  GameManager  │──────│  SceneManager    │  │
│  │  (Singleton)  │      │                  │  │
│  └───────┬───────┘      └──────────────────┘  │
│          │                                      │
│          │ usa                                  │
│          ▼                                      │
│  ┌──────────────────────────────────────────┐ │
│  │         Systems Package                  │ │
│  │  ┌──────────┐  ┌──────────┐  ┌────────┐ │ │
│  │  │  Input   │  │ Physics  │  │  Audio │ │ │
│  │  │  System  │  │  System  │  │ System │ │ │
│  │  └──────────┘  └──────────┘  └────────┘ │ │
│  └──────────────────────────────────────────┘ │
│          │                                      │
│          │ usa                                  │
│          ▼                                      │
│  ┌──────────────────────────────────────────┐ │
│  │        Entities Package                  │ │
│  │  ┌──────┐  ┌───────┐  ┌──────┐         │ │
│  │  │Player│  │ Enemy │  │ Item │         │ │
│  │  └──────┘  └───────┘  └──────┘         │ │
│  └──────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

**Explicación:**
- `GameApplication` es el contenedor principal
- `GameManager` coordina todos los sistemas
- `Systems Package` contiene sistemas globales
- `Entities Package` tiene todas las entidades del juego

---

## 7. Gestión de Datos

### 7.1 Sistema de Guardado (Save System)

#### 7.1.1 ¿Qué Guardar?

| Categoría | Datos |
|-----------|-------|
| **Progreso** | Niveles completados, checkpoints |
| **Player** | Posición, vida, inventario, stats |
| **Mundo** | Estado de puzzles, enemigos derrotados |
| **Configuración** | Volumen, calidad gráfica, controles |
| **Estadísticas** | Tiempo jugado, muertes, kills |

#### 7.1.2 Formato de Datos

**Formato elegido:** JSON en LocalStorage

**Justificación:**
- ✅ LocalStorage: Persiste entre sesiones
- ✅ JSON: Fácil de leer/escribir, debuggable
- ✅ Sin backend necesario (para single-player)

**Alternativas:**
- IndexedDB: Para saves más grandes (>5MB)
- Backend con API REST: Para cloud saves
- Binary format: Para protección (pero es web, fácil de hackear anyway)

#### 7.1.3 Estructura de Save File

```json
{
  "version": "1.0.0",
  "timestamp": "2026-02-01T10:30:00Z",
  "player": {
    "level": 5,
    "xp": 1250,
    "health": 80,
    "maxHealth": 100,
    "position": {"x": 10.5, "y": 0, "z": 5.2},
    "inventory": [
      {"id": "sword_iron", "quantity": 1, "equipped": true},
      {"id": "potion_health", "quantity": 3}
    ],
    "skills": {
      "strength": 10,
      "agility": 8,
      "intelligence": 5
    }
  },
  "progress": {
    "currentLevel": "level_02",
    "levelsCompleted": ["level_01"],
    "checkpoints": ["level_02_checkpoint_01"],
    "unlockedAbilities": ["double_jump", "dash"]
  },
  "world": {
    "defeatedBosses": ["boss_01"],
    "solvedPuzzles": ["puzzle_temple_01"],
    "collectedItems": ["key_red", "artifact_ancient"]
  },
  "settings": {
    "volume": {
      "master": 0.8,
      "music": 0.6,
      "sfx": 1.0
    },
    "graphics": {
      "quality": "medium",
      "antialiasing": true,
      "shadows": true
    },
    "controls": {
      "sensitivity": 1.0,
      "invertY": false
    }
  },
  "stats": {
    "playtime": 7200,
    "deaths": 12,
    "enemiesKilled": 156
  }
}
```

#### 7.1.4 Implementación Conceptual

```typescript
interface SaveData {
  version: string;
  timestamp: string;
  player: PlayerData;
  progress: ProgressData;
  world: WorldData;
  settings: SettingsData;
  stats: StatsData;
}

class SaveSystem {
  private static SAVE_KEY = 'gamedata_slot_';
  
  public static save(slotIndex: number, data: SaveData): void {
    data.timestamp = new Date().toISOString();
    const json = JSON.stringify(data);
    localStorage.setItem(this.SAVE_KEY + slotIndex, json);
  }
  
  public static load(slotIndex: number): SaveData | null {
    const json = localStorage.getItem(this.SAVE_KEY + slotIndex);
    if (!json) return null;
    
    const data = JSON.parse(json) as SaveData;
    
    // Validación de versión
    if (data.version !== '1.0.0') {
      console.warn('Save file version mismatch');
      // Migrar save antiguo si es necesario
    }
    
    return data;
  }
  
  public static delete(slotIndex: number): void {
    localStorage.removeItem(this.SAVE_KEY + slotIndex);
  }
  
  public static listSaves(): SaveData[] {
    const saves: SaveData[] = [];
    for (let i = 0; i < 3; i++) { // 3 slots
      const save = this.load(i);
      if (save) saves.push(save);
    }
    return saves;
  }
}
```

#### 7.1.5 Versionado de Saves

**Problema:** ¿Qué pasa si actualizamos el juego y cambia la estructura de datos?

**Solución:** Migración de saves

```typescript
class SaveMigrator {
  public static migrate(data: any): SaveData {
    const version = data.version || '0.0.0';
    
    if (version === '1.0.0') {
      return data as SaveData;
    }
    
    if (version === '0.9.0') {
      // Migrar de 0.9 a 1.0
      return this.migrateFrom_0_9_to_1_0(data);
    }
    
    throw new Error('Unsupported save version');
  }
  
  private static migrateFrom_0_9_to_1_0(oldData: any): SaveData {
    // Ejemplo: En 0.9 no existía "skills"
    return {
      ...oldData,
      version: '1.0.0',
      player: {
        ...oldData.player,
        skills: {
          strength: 5,
          agility: 5,
          intelligence: 5
        }
      }
    };
  }
}
```

---

### 7.2 Sistema de Configuración (Config System)

#### 7.2.1 Configuración Externa

**Propósito:** Valores de balance que pueden cambiar sin recompilar.

**Archivo:** `config/game_balance.json`

```json
{
  "player": {
    "baseHealth": 100,
    "baseSpeed": 5.0,
    "jumpHeight": 2.0,
    "attackDamage": 20
  },
  "enemies": {
    "grunt": {
      "health": 50,
      "speed": 3.0,
      "damage": 10,
      "detectionRange": 10.0
    },
    "elite": {
      "health": 150,
      "speed": 4.0,
      "damage": 25,
      "detectionRange": 15.0
    }
  },
  "items": {
    "potion_health": {
      "healAmount": 30,
      "cooldown": 5.0
    }
  },
  "difficulty": {
    "easy": {
      "damageMultiplier": 0.5,
      "healthMultiplier": 1.5
    },
    "normal": {
      "damageMultiplier": 1.0,
      "healthMultiplier": 1.0
    },
    "hard": {
      "damageMultiplier": 1.5,
      "healthMultiplier": 0.75
    }
  }
}
```

#### 7.2.2 Carga de Configuración

```typescript
class ConfigService {
  private static config: any = null;
  
  public static async load(): Promise<void> {
    const response = await fetch('/config/game_balance.json');
    this.config = await response.json();
  }
  
  public static get(path: string): any {
    // Ejemplo: get('player.baseHealth') → 100
    const parts = path.split('.');
    let value = this.config;
    
    for (const part of parts) {
      value = value[part];
      if (value === undefined) {
        console.warn(`Config path not found: ${path}`);
        return null;
      }
    }
    
    return value;
  }
}

// Uso en código
const playerHealth = ConfigService.get('player.baseHealth');
```

**Ventajas:**
- Diseñadores pueden ajustar balance sin tocar código
- A/B testing de diferentes valores
- Hot-reload en desarrollo

---

### 7.3 Sistema de Assets

#### 7.3.1 Estructura de Assets

```
/assets
├── models/
│   ├── characters/
│   │   ├── player.glb
│   │   └── enemy_grunt.glb
│   ├── environment/
│   │   └── tree.glb
│   └── props/
│       └── crate.glb
├── textures/
│   ├── ground_grass.jpg
│   └── ui_button.png
├── audio/
│   ├── music/
│   │   ├── main_theme.mp3
│   │   └── battle_theme.mp3
│   └── sfx/
│       ├── footstep.wav
│       └── sword_swing.wav
└── config/
    └── game_balance.json
```

#### 7.3.2 AssetLoader

```typescript
class AssetLoader {
  private loadedAssets: Map<string, any> = new Map();
  
  public async loadModel(
    scene: Scene, 
    path: string
  ): Promise<AbstractMesh> {
    // Caché para no cargar dos veces
    if (this.loadedAssets.has(path)) {
      return this.loadedAssets.get(path).clone();
    }
    
    const result = await SceneLoader.ImportMeshAsync(
      '',
      '/assets/models/',
      path,
      scene
    );
    
    this.loadedAssets.set(path, result.meshes[0]);
    return result.meshes[0];
  }
  
  public async loadTexture(
    path: string, 
    scene: Scene
  ): Promise<Texture> {
    if (this.loadedAssets.has(path)) {
      return this.loadedAssets.get(path);
    }
    
    const texture = new Texture('/assets/textures/' + path, scene);
    this.loadedAssets.set(path, texture);
    return texture;
  }
  
  public getLoadProgress(): number {
    // Para loading screen
    return SceneLoader.ShowLoadingScreen ? 0 : 100;
  }
}
```

#### 7.3.3 Loading Screen

```typescript
class LoadingManager {
  private progressBar: HTMLElement;
  
  public async loadLevel(levelName: string): Promise<void> {
    this.showLoadingScreen();
    
    // Cargar assets del nivel
    const assets = this.getLevelAssets(levelName);
    let loaded = 0;
    
    for (const asset of assets) {
      await AssetLoader.loadModel(this.scene, asset);
      loaded++;
      this.updateProgress(loaded / assets.length);
    }
    
    this.hideLoadingScreen();
  }
  
  private updateProgress(percent: number): void {
    this.progressBar.style.width = `${percent * 100}%`;
  }
}
```

---

## 8. Performance y Optimización

### 8.1 Consideraciones de Performance

Aunque no implementamos, debemos **diseñar pensando en performance**.

#### 8.1.1 Optimizaciones de Rendering

| Técnica | Descripción | Cuándo Usar |
|---------|-------------|-------------|
| **Frustum Culling** | No renderizar objetos fuera de cámara | Babylon lo hace automáticamente |
| **Occlusion Culling** | No renderizar objetos tapados | Niveles con muchos interiores |
| **Level of Detail (LOD)** | Modelos menos detallados lejos de cámara | Mundos abiertos grandes |
| **Instancing** | Renderizar muchos objetos iguales eficientemente | Árboles, rocas, enemigos |
| **Texture Atlasing** | Combinar texturas en una sola | Reducir draw calls |

**Ejemplo de LOD:**
```typescript
const tree = new Mesh('tree', scene);
// Modelo detallado
const highDetail = await AssetLoader.load('tree_hd.glb');
// Modelo simple
const lowDetail = await AssetLoader.load('tree_ld.glb');

// LOD automático basado en distancia
tree.addLODLevel(50, highDetail); // < 50m: HD
tree.addLODLevel(100, lowDetail); // 50-100m: LD
tree.addLODLevel(200, null);      // > 200m: no renderizar
```

#### 8.1.2 Optimizaciones de Física

- **Capas de colisión:** Jugador no colisiona con items (solo los recoge)
- **Simplified colliders:** Usar cajas/esferas en vez de mesh colliders complejos
- **Sleep physics bodies:** Objetos estáticos no calculan física

```typescript
// Ejemplo de capas
const COLLISION_LAYERS = {
  PLAYER: 1 << 0,      // 0b00001
  ENEMY: 1 << 1,       // 0b00010
  PROJECTILE: 1 << 2,  // 0b00100
  ENVIRONMENT: 1 << 3, // 0b01000
  ITEM: 1 << 4         // 0b10000
};

// Proyectil colisiona con enemigos y entorno, NO con items
projectile.collisionMask = COLLISION_LAYERS.ENEMY | COLLISION_LAYERS.ENVIRONMENT;
```

#### 8.1.3 Optimizaciones de Código

- **Object Pooling:** Para proyectiles y efectos (ya discutido)
- **Spatial Partitioning:** Quad/Octree para buscar entidades cercanas rápido
- **Lazy Loading:** Cargar assets solo cuando se necesitan
- **Web Workers:** Pathfinding en thread separado (avanzado)

### 8.2 Targets de Performance

| Métrica | Target | Cómo Medir |
|---------|--------|-----------|
| **FPS** | 60 FPS constante | `scene.getEngine().getFps()` |
| **Load Time** | < 10 segundos | Desde inicio hasta gameplay |
| **Memory** | < 500MB | DevTools Performance Monitor |
| **Draw Calls** | < 1000 por frame | Babylon Inspector |

### 8.3 Profiling

```typescript
// Babylon tiene profiling built-in
scene.debugLayer.show({
  embedMode: true,
  globalRoot: document.body
});

// Ver:
// - FPS
// - Draw calls
// - Mesh count
// - Texture memory
```

---

## 9. Consideraciones de Despliegue

### 9.1 Build de Producción

**Proceso:**
1. **Transpilación:** TypeScript → JavaScript (ES2020)
2. **Bundling:** Vite empaqueta todo en `dist/`
3. **Minificación:** Uglify/Terser reduce tamaño
4. **Tree-shaking:** Elimina código no usado
5. **Asset optimization:** Comprime imágenes/audio

**Comando:**
```bash
npm run build
```

**Resultado:**
```
dist/
├── index.html
├── assets/
│   ├── models/
│   ├── textures/
│   └── audio/
└── js/
    ├── main.[hash].js      # Bundle principal
    ├── vendor.[hash].js    # Librerías (Babylon, etc.)
    └── chunk.[hash].js     # Lazy-loaded chunks
```

## 📌 Conclusión

Esta arquitectura está diseñada para ser:
- ✅ **Escalable:** Fácil añadir nuevos enemigos, niveles, mecánicas
- ✅ **Mantenible:** Código organizado en capas y módulos
- ✅ **Testeable:** Componentes desacoplados se pueden testear aisladamente
- ✅ **Performante:** Diseñada con optimizaciones en mente
- ✅ **Profesional:** Sigue principios SOLID y patrones de diseño estándar

**Próximos pasos:**
1. [ ] Crear diagramas UML completos en Draw.io/PlantUML
2. [ ] Validar que soporte todos los features del GDD
3. [ ] Configurar proyecto base con Babylon.js + TypeScript
