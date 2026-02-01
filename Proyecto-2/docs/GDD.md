# 📘 Game Design Document (GDD)

> **Documento Maestro de Diseño del Videojuego**  
> **Framework:** MDA (Mechanics, Dynamics, Aesthetics)  
> **Fecha:** 1 de Febrero 2026  
> **Versión:** 1.0

---

## 📑 Tabla de Contenidos

1. [Ficha Técnica y Concepto](#1-ficha-técnica-y-concepto)
2. [Análisis MDA](#2-análisis-mda-el-núcleo-del-diseño)
3. [Mecánicas Detalladas](#3-mecánicas-detalladas-game-system-design)
4. [Narrativa y Mundo](#4-narrativa-y-mundo-worldbuilding)
5. [Diseño de Niveles](#5-diseño-de-niveles-level-design)
6. [Arte y Audio](#6-arte-y-audio-look--feel)
7. [Arquitectura de Software](#7-arquitectura-de-software-ingeniería)
8. [Apéndices](#8-apéndices)

---

## 1. Ficha Técnica y Concepto

### 1.1 Información General

| Campo | Descripción |
|-------|-------------|
| **Título del Juego** | [Nombre del videojuego] |
| **Título Provisional** | [Nombre de desarrollo/código] |
| **Género Principal** | [Ej: Acción, RPG, Puzzle, Estrategia] |
| **Subgénero(s)** | [Ej: Roguelike, Metroidvania, Tower Defense] |
| **Plataforma(s)** | Web (Babylon.js), PC, Mobile, Consolas |
| **Público Objetivo** | [Edad, perfil de jugador] |
| **Modelo de Negocio** | Free-to-play, Premium, Freemium |
| **Motor/Tecnología** | Babylon.js + TypeScript |
| **Fecha Estimada** | [Timeframe de desarrollo estimado] |

### 1.2 Elevator Pitch

> **Fórmula:** [Título] es un juego de [Género] donde [Jugador] debe [Acción Principal] para [Objetivo] mientras [Obstáculo Principal].

**Ejemplo:**
```
"Shadows of Steel es un juego de acción-stealth donde controlas a un ninja 
cibernético que debe infiltrarse en corporaciones para robar secretos corporativos 
mientras evitas drones de seguridad y guardias aumentados con IA."
```

**Tu Pitch:**
```
Astro Salvager es un juego arcade 3D donde pilotas una nave espacial 
que debe recolectar chatarra flotante en una zona delimitada del espacio 
para maximizar tu puntaje, mientras esquivas asteroides y restos peligrosos 
antes de que el tiempo se agote.
```

### 1.3 Concepto "X meets Y"

Describe tu juego usando referencias conocidas:

- **Juego A:** Pac-Man - Tomamos la jugabilidad de recolección constante en zona delimitada
- **Juego B:** Asteroids - Tomamos el movimiento en el espacio y la estética retro espacial
- **Juego C:** Katamari Damacy - Tomamos el concepto de "recolectar todo lo posible"

**Descripción:** Es *Pac-Man* en el espacio meets *Asteroids* con una pizca de *Katamari Damacy*

### 1.4 Unique Selling Points (USPs)

¿Por qué alguien jugaría tu juego? Lista 3-5 características únicas:

1. **Simplicidad Arcade Pura**
   - Descripción: Jugabilidad accesible de "un botón" - solo movimiento, sin disparos ni combate complejo
   - Impacto técnico: Permite enfocarse en polish del movimiento y feel de la nave
   - Ejemplo: "Cualquiera puede jugar en 10 segundos, pero dominar el high score toma horas"

2. **Sistema de Momentum y Deriva Espacial**
   - Descripción: La nave tiene inercia sutil - no frena instantáneamente, requiere anticipación
   - Impacto técnico: Sistema de física simplificado pero con sensación de "peso" espacial
   - Ejemplo: "Movimiento que se siente espacial sin ser frustrante"

3. **Escalada de Dificultad Dinámica**
   - Descripción: El juego acelera mientras más recolectas - más chatarra = más velocidad = más reto
   - Impacto técnico: Sistema de spawning procedural basado en score y tiempo
   - Ejemplo: "El juego siempre te empuja al límite de tus habilidades"

4. **Estética Retro-Futurista Minimalista**
   - Descripción: Gráficos limpios con neones y estrellas, inspirado en arcades de los 80s
   - Impacto técnico: Menor demanda de assets complejos, enfoque en efectos de partículas
   - Ejemplo: "Tron meets Geometry Wars en el espacio"

### 1.5 Pilares de Diseño

Los 3 pilares fundamentales que guiarán todas las decisiones de Astro Salvager:

1. **"Instantáneamente Jugable"**
   - Sin tutoriales largos ni curvas de aprendizaje empinadas
   - Controles inmediatos: teclas de dirección, eso es todo
   - El jugador entiende el objetivo en 5 segundos: recolecta chatarra, evita obstáculos

2. **"Un Turno Más"**
   - Partidas rápidas de 2-4 minutos
   - Sistema de puntuación alto que invita a superar tu récord
   - Sensación de "casi lo logro" que motiva reintentos inmediatos

3. **"Dominio de Movimiento"**
   - La maestría viene de controlar la nave con precisión
   - Sistema de inercia sutil que recompensa la anticipación
   - High score = habilidad pura de movimiento, no suerte

---

## 2. Análisis MDA (El Núcleo del Diseño)

> **MDA Framework:** Conecta las reglas del sistema con la experiencia emocional del jugador.

```
┌─────────────────────────────────────────────────────────┐
│  AESTHETICS (Estética) - La Experiencia Emocional      │
│  ¿Qué queremos que SIENTA el jugador?                  │
└──────────────────────┬──────────────────────────────────┘
                       │ Emerge de ↓
┌─────────────────────────────────────────────────────────┐
│  DYNAMICS (Dinámicas) - Patrones de Comportamiento     │
│  ¿Cómo INTERACTÚAN las mecánicas para crear emociones? │
└──────────────────────┬──────────────────────────────────┘
                       │ Emerge de ↓
┌─────────────────────────────────────────────────────────┐
│  MECHANICS (Mecánicas) - Las Reglas Base               │
│  ¿CUÁLES son las reglas y sistemas fundamentales?      │
└─────────────────────────────────────────────────────────┘
```

### 2.1 AESTHETICS (Estética) - La Experiencia Objetivo

#### 2.1.1 Emociones Primarias

¿Qué experiencia emocional buscamos provocar en Astro Salvager?

| Estética | Prioridad | Descripción en Astro Salvager |
|----------|-----------|-------------------------------|
| 🎯 **Reto (Challenge)** | **Alta** | Superar tu high score, mejorar precisión de movimiento, sobrevivir oleadas más intensas |
| 🎭 **Fantasía (Fantasy)** | **Media** | Ser un piloto espacial salvando recursos en el vacío del espacio |
| 📖 **Narrativa (Narrative)** | **Baja** | Historia ambiental mínima - eres un salvager independiente |
| 🎲 **Descubrimiento (Discovery)** | **Media** | Aprender patrones óptimos de movimiento, descubrir combos de recolección |
| 🤝 **Compañerismo (Fellowship)** | **Baja** | Competencia indirecta vía leaderboards (no implementado en MVP) |
| 🎨 **Expresión (Expression)** | **Baja** | Estilo personal de pilotaje (agresivo vs cauteloso) |
| 🎪 **Sumisión (Submission)** | **Baja** | No es un juego relajante - requiere atención constante |
| 😱 **Sensación (Sensation)** | **Media-Alta** | Velocidad, reflejos, feedback audiovisual de colisiones y recolección |

**Estética Principal de Astro Salvager:**
```
Queremos que el jugador sienta RETO (Challenge) y SENSACIÓN (Sensation) como emociones dominantes.

- RETO: "Puedo hacerlo mejor" - La motivación de superar el high score propio
- SENSACIÓN: La adrenalina de esquivar asteroides por centímetros mientras recolectas
- FANTASÍA: El contexto de ser un piloto espacial valiente en una zona peligrosa

La experiencia ideal: "Una más, casi llego a 1000 puntos esta vez"
```

#### 2.1.2 Curva Emocional Deseada

```
Intensidad Emocional
       ▲
   10  │                    ╱╲
       │                   ╱  ╲
    8  │               ╱╲╱    ╲
       │              ╱         ╲
    6  │          ╱╲╱            ╲╲ Frustración
       │         ╱                 ╲  (Game Over)
    4  │     ╱╲╱                    ╲
       │    ╱  Tensión               ╲
    2  │ ╱╱    Creciente              ╲
       │╱                               ╲
    0  └──────────────────────────────────►
       Inicio  30s   60s   90s  120s  Fin   Tiempo

Fases:
1. Inicio Suave (0-15s): Aprende controles, pocos obstáculos
2. Rampa Progresiva (15-60s): Más objetos, mayor velocidad
3. Intensidad Máxima (60-120s): Caos controlado, test de skill
4. Clímax (120s+): Supervivencia extrema, tiempo crítico
5. Resolución: Game Over → Ver score → "Retry"
```

Describe cómo varía la intensidad emocional durante una sesión típica:

```
Intensidad
   Alta  │     ╱╲     
         │    ╱  ╲    ╱╲
         │   ╱    ╲  ╱  ╲
   Baja  │__╱______╲╱____╲____
         └─────────────────────→ Tiempo
         Inicio    Mitad    Final

[DESCRIBE TU CURVA AQUÍ]
```

### 2.2 DYNAMICS (Dinámicas) - Los Patrones Emergentes

Las dinámicas son comportamientos que emergen de la interacción de mecánicas en Astro Salvager. **NO son reglas escritas**, son patrones que aparecen cuando el jugador interactúa con el sistema.

#### 2.2.1 Dinámicas Clave Identificadas

**Dinámica #1: Avaricia Castigada**
- **Mecánicas que la crean:**
  - Recolección automática al acercarse (radio de 3 unidades)
  - Chatarra da más puntos cuanto más lejos del centro esté
  - Obstáculos peligrosos en zonas exteriores
  - Temporizador descendente crea urgencia
- **Comportamiento emergente:**
  - El jugador debe decidir entre ir a lo seguro (centro) con bajo puntaje o arriesgarse (bordes) para high scores
  - Jugadores avanzados "danzan" entre obstáculos en zonas peligrosas
  - Se crea tensión entre seguridad y ambición
- **Conexión con Estética:**
  - Genera **RETO** (decisiones de riesgo/recompensa constantes)
  - Provoca **SENSACIÓN** (adrenalina al esquivar por poco)

**Dinámica #2: Planificación de Rutas Mentales**
- **Mecánicas que la crean:**
  - Sistema de inercia (la nave no frena instantáneamente)
  - Spawning predecible de chatarra en patrones
  - Colisión destructiva con asteroides (game over)
- **Comportamiento emergente:**
  - Los jugadores trazan rutas mentales antes de moverse
  - Aprenden a anticipar la inercia para girar en el momento exacto
  - Desarrollan "líneas óptimas" como en racing games
- **Conexión con Estética:**
  - Genera **DESCUBRIMIENTO** (encontrar la ruta perfecta)
  - Refuerza **DOMINIO** (skill de movimiento preciso)

**Dinámica #3: Escalada de Presión Temporal**
- **Mecánicas que la crean:**
  - Temporizador descendente (120 segundos)
  - Velocidad de spawn aumenta con el tiempo
  - Velocidad de movimiento de obstáculos aumenta gradualmente
  - No hay forma de recuperar tiempo
- **Comportamiento emergente:**
  - Los primeros 30 segundos son exploratorios y cautelosos
  - A los 60 segundos el jugador entra en "modo survival"
  - Los últimos 20 segundos son desesperados - recolección kamikaze
  - Se crea una narrativa natural en cada partida
- **Conexión con Estética:**
  - Genera **TENSIÓN** creciente (curva emocional ascendente)
  - Crea la experiencia de "un turno más" (quiero llegar más lejos)

#### 2.2.2 Análisis de Decisiones del Jugador

¿Qué tipo de decisiones toma el jugador repetidamente en Astro Salvager?

- ⚖️ **Riesgo vs Recompensa:** ¿Voy por esa chatarra valiosa cerca del asteroide o juego seguro con la que está en zona abierta?
- 📊 **Optimización:** ¿Cuál es la ruta más eficiente para recolectar 3 piezas sin retroceder?
- 🎯 **Priorización:** ¿Esquivo primero ese asteroide grande o intento recolectar antes de moverme?
- ⏰ **Timing:** ¿Cuándo inicio el movimiento para que la inercia me lleve exactamente donde necesito?
- 🗺️ **Posicionamiento:** ¿Dónde me coloco para tener mejor acceso a la próxima oleada de chatarra?

### 2.3 MECHANICS (Mecánicas) - Las Reglas Base

Lista de mecánicas fundamentales de Astro Salvager (las expandiremos en la Sección 3):

#### 2.3.1 Core Mechanics (Mecánicas Principales)

Las acciones más repetidas del juego:

1. **Movimiento 4-Direccional con Inercia**
   - Input: Teclas WASD o flechas direccionales
   - Output: Nave se mueve con aceleración/desaceleración suave
   - Parámetros: Vel. máx. 15 u/s, aceleración 8 u/s², inercia 5 u/s²

2. **Recolección Automática por Proximidad**
   - Input: Distancia nave-chatarra < 3 unidades
   - Output: Chatarra desaparece, score aumenta, efecto visual
   - Parámetros: Radio 3u, puntos 10/25/50 según tamaño

3. **Colisión con Obstáculos**
   - Input: Colisión nave-asteroide
   - Output: Game Over (asteroides grandes) o penalización de tiempo (pequeños)
   - Parámetros: Radio asteroide > 2u = letal, < 2u = -5 segundos

4. **Temporizador Descendente**
   - Input: Inicio de partida
   - Output: Cuenta regresiva desde 120s, game over al llegar a 0
   - Parámetros: 120s iniciales, +10s por combo, -5s por colisión menor

5. **Spawning Dinámico**
   - Input: Intervalo de tiempo, score actual
   - Output: Aparición de chatarra y obstáculos en zonas aleatorias
   - Parámetros: Spawn cada 2s (inicial) → 0.5s (máxima dificultad), 70% chatarra / 30% obstáculos

#### 2.3.2 Sistemas Interconectados

Sistemas principales de Astro Salvager:

- 🎮 **Sistema de Movimiento:** Física simplificada con inercia, límites de zona, detección de inputs
- 💥 **Sistema de Colisiones:** Detección AABB básica, diferenciación entre obstáculos letales/menores
- 📦 **Sistema de Spawning:** Generación procedural de objetos con dificultad escalable
- 🎯 **Sistema de Puntuación:** Tracking de score, multiplicadores, bonus de combo
- ⏱️ **Sistema de Tiempo:** Temporizador descendente, bonus/penalizaciones temporales
- 🎨 **Sistema de Efectos:** Partículas de recolección, trails de la nave, explosiones de colisión
- 📊 **Sistema de Escalado de Dificultad:** Ajuste progresivo de velocidades y frecuencias de spawn

---

## 3. Mecánicas Detalladas (Game System Design)

Esta sección expande la "M" del MDA con especificaciones técnicas.

### 3.1 Core Loop (Bucle Principal)

El Core Loop de Astro Salvager es la secuencia de acciones que el jugador repetirá constantemente.

#### 3.1.1 Diagrama del Core Loop

```
┌────────────────┐
│ INICIO PARTIDA │
│  (Spawn nave)  │
└────────┬───────┘
         │
         ↓
┌────────────────┐
│ 1. EXPLORAR    │ ← Mover nave, observar spawns
│ (0-10s)        │   Identificar chatarra segura
└────────┬───────┘
         │
         ↓
┌────────────────┐
│ 2. RECOLECTAR  │ ← Acercarse a chatarra
│ (10-30s)       │   Acumular puntos
└────────┬───────┘
         │
         ↓
┌────────────────┐
│ 3. ESQUIVAR    │ ← Evitar asteroides
│ (30-60s)       │   Aumenta la densidad
└────────┬───────┘
         │
         ↓
┌────────────────┐
│ 4. OPTIMIZAR   │ ← Buscar rutas eficientes
│ (60-90s)       │   Riesgo vs Recompensa
└────────┬───────┘
         │
         ↓
┌────────────────┐
│ 5. SOBREVIVIR  │ ← Dificultad máxima
│ (90-120s)      │   Caos controlado
└────────┬───────┘
         │
         ↓
     ┌───┴────┐
     │GAME    │
     │OVER    │ → Ver score → Retry
     └────────┘
```

**Descripción Narrativa del Loop:**
```
1. El jugador aparece en el centro de la zona espacial con la nave
2. Explora el área para identificar patrones de spawn (primeros 10 segundos)
3. Recolecta chatarra cercana de forma conservadora para familiarizarse
4. La dificultad escala - más objetos aparecen, se mueven más rápido
5. Debe esquivar asteroides mientras mantiene la recolección
6. Optimiza rutas para maximizar puntos antes de que expire el tiempo
7. Los últimos segundos son supervivencia pura - alta tensión
8. Game Over → Pantalla de puntaje final → "Presiona R para reiniciar"
9. El ciclo se repite con el objetivo de superar el high score anterior
```

#### 3.1.2 Tiempo del Core Loop

- **Duración mínima:** 30 segundos - Jugadores novatos que chocan rápido
- **Duración típica:** 90-120 segundos - Jugadores promedio
- **Duración máxima:** 120 segundos + bonus de combo (hasta ~150s posible) - Jugadores expertos
- **Duración promedio:** [X minutos] - Para jugadores típicos
- **Duración máxima:** [X minutos] - Para jugadores exploradores/completistas

### 3.2 Sistema de Movimiento y Locomoción

#### 3.2.1 Movimiento Básico de la Nave

| Parámetro | Valor | Unidades | Notas |
|-----------|-------|----------|-------|
| Velocidad Máxima | 15.0 | units/s | Velocidad terminal de la nave |
| Aceleración | 8.0 | units/s² | Qué tan rápido alcanza velocidad máxima |
| Desaceleración (Inercia) | 5.0 | units/s² | Qué tan rápido se detiene al soltar tecla |
| Velocidad de Giro | Instantánea | N/A | No hay "giro" - movimiento omnidireccional |
| Zona Delimitada | 50x50 | unidades | Cubo invisible que delimita el área de juego |
| Rebote en Bordes | Suave | N/A | La nave no puede salir, rebota con fricción |

**Notas de Diseño:**
- La inercia crea "drift espacial" - la nave no frena instantáneamente
- No hay gravedad - movimiento puramente en plano XZ (horizontal)
- Los bordes invisibles tienen "padding" visual (avisos cuando te acercas)

#### 3.2.2 Estados de Movimiento

Diagrama de máquina de estados (FSM) de la nave:

```
        ┌──────────┐
   ┌────│  IDLE    │────┐
   │    │(flotando)│    │
   │    └──────────┘    │
   │         │          │
   │    [WASD input]    │
   │         ↓          │
   │    ┌──────────┐   │
   │────│ MOVING   │───┤
   │    │(acelerando)│  │
   │    └──────────┘   │
   │         │          │
   │    [velocidad     │
   │     máxima]       │
   │         ↓          │
   │    ┌──────────┐   │
   └────│ MAX_SPEED│───┘
        │(constante)│
        └──────────┘
             │
        [colisión]
             ↓
        ┌──────────┐
        │DESTROYED │ → GAME OVER
        │(explosión)│
        └──────────┘
```

**Transiciones:**
- Idle → Moving: Jugador presiona cualquier tecla direccional (WASD)
- Moving → Max_Speed: Velocidad alcanza 15 units/s
- Max_Speed → Moving: Jugador suelta tecla, empieza desaceleración
- Moving → Idle: Velocidad llega a 0
- Cualquier estado → Destroyed: Colisión con asteroide grande
- Destroyed → Idle: Reinicio de partida (respawn)

#### 3.2.3 Controles (Input Mapping)

| Acción | Teclado | Gamepad | Touch/Mobile | Notas |
|--------|---------|---------|--------------|-------|
| Mover Adelante | W o ↑ | Left Stick ↑ | Virtual Joystick | Aumenta velocidad en eje Z+ |
| Mover Atrás | S o ↓ | Left Stick ↓ | Virtual Joystick | Aumenta velocidad en eje Z- |
| Mover Izquierda | A o ← | Left Stick ← | Virtual Joystick | Aumenta velocidad en eje X- |
| Mover Derecha | D o → | Left Stick → | Virtual Joystick | Aumenta velocidad en eje X+ |
| Pausa | ESC o P | Start | Botón Pausa | Congela el juego, muestra menú |
| Reiniciar | R | Y (en Game Over) | Botón Retry | Solo disponible tras Game Over |

**Nota:** No hay "sprint", "salto", "agacharse" ni "interactuar" - el juego es puramente de movimiento arcade

### 3.3 Sistema de Recolección y Puntuación

Astro Salvager no tiene combate - el sistema principal es recolección de chatarra.

#### 3.3.1 Mecánicas de Recolección

**Tipo de Recolección:** Automática por Proximidad

**Tipos de Chatarra:**

1. **Chatarra Pequeña (Tornillos, Placas)**
   - Radio de detección: 3.0 unidades desde centro de nave
   - Puntos base: 10 pts
   - Multiplicador zona peligrosa: x1.5 (15 pts)
   - Frecuencia de spawn: 60% de objetos
   - Modelo visual: Cubo pequeño metálico con glow cyan

2. **Chatarra Mediana (Motores, Paneles)**
   - Radio de detección: 3.0 unidades
   - Puntos base: 25 pts
   - Multiplicador zona peligrosa: x1.5 (37 pts)
   - Frecuencia de spawn: 30% de objetos
   - Modelo visual: Esfera mediana con textura industrial

3. **Chatarra Grande (Núcleos, Tanques)**
   - Radio de detección: 3.0 unidades
   - Puntos base: 50 pts
   - Multiplicador zona peligrosa: x1.5 (75 pts)
   - Frecuencia de spawn: 10% de objetos
   - Modelo visual: Dodecaedro grande con partículas

#### 3.3.2 Sistema de Puntuación

**Fórmula Base:**
```
Score Final = Σ(Puntos de Chatarra) + Bonus de Combo + Bonus de Tiempo

Puntos de Chatarra = Valor Base × Multiplicador de Zona × Multiplicador de Combo

Multiplicador de Combo:
- 1 recolección: x1.0
- 2-4 recolecciones consecutivas: x1.2
- 5+ recolecciones consecutivas: x1.5
  (Se reinicia si pasan 3 segundos sin recolectar)

Bonus de Tiempo Restante:
- Por cada segundo que queda al terminar: +5 pts
```

**Tabla de Scoring:**
| Condición | Puntos | Notas |
|-----------|--------|-------|
| Chatarra pequeña (zona segura) | 10 | Centro del mapa |
| Chatarra pequeña (zona peligrosa) | 15 | Bordes del mapa |
| Chatarra mediana (zona segura) | 25 | |
| Chatarra mediana (zona peligrosa) | 37 | |
| Chatarra grande (zona segura) | 50 | Rara |
| Chatarra grande (zona peligrosa) | 75 | Muy rara |
| Combo de 5 recolecciones | +50 | Bonus adicional |
| Combo de 10 recolecciones | +100 | Bonus adicional |
| Sobrevivir 120 segundos | +200 | Bonus de completitud |
   - Input:
   - Daño:
   - Costo: [Mana/Stamina/Recurso]
   - Cooldown:

3. **Defensa/Esquiva**
   - Input:
   - Efecto:
   - Duración/Ventana:

#### 3.3.2 Fórmulas de Daño

```
Daño Final = (Daño Base + Bonus Equipo) × Multiplicador Crítico - Defensa Enemigo

[DEFINE TU FÓRMULA]
```

**Variables:**
- Daño Base: [Fuente]
- Crítico: [Probabilidad y multiplicador]
- Defensa: [Cómo se calcula]

#### 3.3.3 Sistema de Salud/Vida

| Parámetro | Valor Inicial | Valor Máximo | Regeneración |
|-----------|--------------|--------------|--------------|
| HP Jugador | [100] | [500] | [5/seg después de 3s sin daño] |
| HP Enemigo Básico | [50] | [50] | [No regenera] |
| HP Enemigo Elite | [200] | [200] | [2/seg] |
| HP Boss | [1000] | [1000] | [Por fases] |

### 3.4 Sistema de Obstáculos y Peligros

Astro Salvager no tiene inventario, recursos persistentes ni items - el sistema se basa en obstáculos que deben evitarse.

#### 3.4.1 Tipos de Obstáculos

**Obstáculo Tipo 1: Asteroide Grande**
- **Comportamiento:** Estático o movimiento lento lineal (2 units/s)
- **Efecto al colisionar:** Game Over instantáneo
- **Radio de colisión:** 2.5 unidades
- **Modelo visual:** Roca espacial gris oscuro con cráteres
- **Frecuencia de spawn:** 20% de los obstáculos
- **Zonas de aparición:** Preferentemente en bordes del mapa

**Obstáculo Tipo 2: Resto Metálico Peligroso**
- **Comportamiento:** Rotación lenta en su eje, movimiento errático
- **Efecto al colisionar:** Penalización de -5 segundos del temporizador
- **Radio de colisión:** 1.5 unidades
- **Modelo visual:** Fragmentos de naves metálicas con bordes afilados
- **Frecuencia de spawn:** 10% de los obstáculos
- **Efecto visual:** Glow rojo indicando peligro

#### 3.4.2 Comportamiento de Obstáculos

**Patrones de Movimiento:**

1. **Estático Absoluto (40% de obstáculos)**
   - El asteroide permanece flotando sin moverse
   - Crea "zonas seguras" predecibles en el mapa

2. **Movimiento Lineal Lento (40% de obstáculos)**
   - Se mueve en línea recta de un borde al otro del mapa
   - Velocidad: 2-4 units/s
   - Al tocar borde: rebota o desaparece y respawnea

3. **Movimiento Errático (20% de obstáculos)**
   - Cambia dirección cada 3-5 segundos aleatoriamente
   - Velocidad: 3-5 units/s
   - Más impredecible, mayor reto

**Escalado de Dificultad en Obstáculos:**
```
Tiempo transcurrido → Cambios en obstáculos:

0-30s:  Pocos obstáculos (3-5), todos estáticos
30-60s: Densidad media (6-10), 50% con movimiento lineal
60-90s: Alta densidad (12-16), 60% con movimiento
90-120s: Máxima densidad (18-25), 80% con movimiento, algunos erráticos
```

### 3.5 Sistema de Escalado de Dificultad

Astro Salvager no tiene progresión persistente (niveles, XP) - cada partida es independiente con dificultad creciente durante la sesión.

#### 3.5.1 Curva de Dificultad Temporal

**Fórmula de Escalado:**
```
Frecuencia de Spawn (chatarra) = Base_Interval - (Tiempo_Transcurrido / 20)
Mínimo: 0.5 segundos

Frecuencia de Spawn (obstáculos) = Base_Interval - (Tiempo_Transcurrido / 30)
Mínimo: 1.0 segundo

Velocidad de Obstáculos Móviles = Base_Speed + (Tiempo_Transcurrido / 40)
Máximo: 8 units/s
```

**Tabla de Escalado por Tiempo:**

| Tiempo | Spawn Chatarra | Spawn Obstáculos | Velocidad Obstáculos | Densidad Total |
|--------|----------------|------------------|----------------------|----------------|
| 0-15s  | Cada 2.0s      | Cada 6.0s        | 2 u/s                | 5-8 objetos    |
| 15-30s | Cada 1.5s      | Cada 4.5s        | 3 u/s                | 8-12 objetos   |
| 30-60s | Cada 1.0s      | Cada 3.0s        | 4 u/s                | 12-16 objetos  |
| 60-90s | Cada 0.7s      | Cada 2.0s        | 5.5 u/s              | 18-22 objetos  |
| 90-120s| Cada 0.5s      | Cada 1.5s        | 7 u/s                | 25-30 objetos  |

#### 3.5.2 Zonas de Riesgo/Recompensa

El mapa se divide en 3 zonas concéntricas:

1. **Zona Segura (Centro - Radio 15 unidades)**
   - Multiplicador de puntos: x1.0
   - Frecuencia de obstáculos: 50% de la normal
   - Chatarra: Solo piezas pequeñas y medianas

2. **Zona Media (Radio 15-30 unidades)**
   - Multiplicador de puntos: x1.25
   - Frecuencia de obstáculos: 100% normal
   - Chatarra: Mezcla equilibrada de todos los tamaños

3. **Zona Peligrosa (Radio 30-50 unidades - bordes)**
   - Multiplicador de puntos: x1.5
   - Frecuencia de obstáculos: 150% de la normal
   - Chatarra: Más piezas grandes, mayor recompensa
   - Advertencia visual: Bordes con glow rojo pulsante

### 3.6 Sistema de IA y Spawning Procedural

Astro Salvager no tiene enemigos con IA - el sistema de "inteligencia" es el spawning adaptativo de objetos.

#### 3.6.1 Algoritmo de Spawning Inteligente

**Reglas de Spawning:**

1. **Anti-Frustración:**
   - Nunca spawnear obstáculo a menos de 5 unidades de la nave
   - No spawnear más de 3 obstáculos en una línea recta de 10 unidades
   - Siempre dejar al menos un "corredor seguro" de 8 unidades de ancho

2. **Distribución Espacial:**
   - Divide el mapa en grid de 10x10 (100 celdas)
   - No spawnear más de 2 objetos por celda
   - Rotar zonas de spawn cada 15 segundos

3. **Predicción de Dificultad:**
   - Si el jugador lleva 20s sin recolectar → Aumentar spawns de chatarra fácil
   - Si el jugador tiene combo x1.5 activo → Aumentar levemente densidad de obstáculos
   - Si quedan <30 segundos → Modo "supervivencia" con máxima densidad

#### 3.6.2 Máquina de Estados del Spawner

```
┌──────────────┐
│ EASY_MODE    │ ← 0-30 segundos
│ (Tutorial)   │   Spawns lentos, pocos obstáculos
└──────┬───────┘
       │ Tiempo > 30s
       ↓
┌──────────────┐
│ NORMAL_MODE  │ ← 30-60 segundos
│ (Equilibrado)│   Spawns balanceados
└──────┬───────┘
       │ Tiempo > 60s
       ↓
┌──────────────┐
│ HARD_MODE    │ ← 60-90 segundos
│ (Desafiante) │   Más obstáculos, velocidad aumenta
└──────┬───────┘
       │ Tiempo > 90s
       ↓
┌──────────────┐
│ EXTREME_MODE │ ← 90-120 segundos
│ (Supervivencia)│  Densidad máxima, velocidades altas
└──────────────┘
```

---

## 4. Narrativa y Mundo del Juego

> **Nota:** Astro Salvager es un juego arcade puro enfocado en gameplay, por lo que la narrativa es minimalista y ambiental.

### 4.1 Setting (Ambientación)

#### 4.1.1 Contexto del Mundo

**¿Dónde y cuándo ocurre?**
```
Año 2347, en el sector conocido como "La Zona de Cascara"
(The Debris Belt en inglés).

Tras la Gran Guerra Espacial de 2298, millones de naves destruidas
quedaron flotando en esta región del espacio. La chatarra espacial
se convirtió en un recurso valioso para colonias que necesitan metales.

Los "Salvagers" (recuperadores) son pilotos independientes que se
arriesgan en estas zonas peligrosas, donde asteroides y restos de
combate crean un campo de navegación mortal, para recolectar
chatarra valiosa y venderla.

No hay gobiernos aquí - solo pilotos solitarios buscando ganarse la vida.
```

#### 4.1.2 Conflicto Principal

**¿Cuál es el problema que impulsa la historia?**
```
El Sector 7G de la Zona de Cascara es un territorio en disputa. 
Tres mega-corporaciones (OmniTech, Helix Dynamics, y Novus Industries) 
compiten agresivamente por controlar los derechos de salvamento.

Recientemente, las corporaciones comenzaron a sembrar la zona con 
"RECLAMADORES" - drones automatizados que destruyen naves de salvagers 
independientes para monopolizar los recursos. Los asteroides y restos 
de combate son lo único que mantiene a las corporaciones fuera... por ahora.

Los salvagers independientes como tú tienen días contados. Cada run 
podría ser el último antes de que lleguen los drones corporativos.
```

**Antagonista/Fuerza Opositora:**
```
ANTAGONISTA PRINCIPAL: El Entorno Hostil del Espacio

No hay un villano tradicional. Los verdaderos enemigos son:
- Los asteroides y restos de combate (peligro físico)
- El tiempo limitado (presión temporal)
- El vacío del espacio (aislamiento)
- Las corporaciones (amenaza de fondo, no presente directamente)

La tensión viene de la supervivencia contra las probabilidades, 
no de un enemigo con rostro.
```

### 4.2 Personajes

#### 4.2.1 Protagonista

| Aspecto | Descripción |
|---------|-------------|
| **Nombre** | "El Piloto" (sin nombre específico - es el jugador) |
| **Edad/Origen** | Salvager independiente, piloto de la nave VALKYRIE-7. Edad desconocida. Veterano de múltiples runs en zonas peligrosas. |
| **Motivación** | Supervivencia económica. Cada tonelada de chatarra = créditos para combustible, reparaciones, y comida. No hay glamour - solo necesidad. |
| **Habilidad Única** | Reflejos excepcionales y conocimiento intuitivo de patrones de asteroides. Puede "leer" el campo de escombros mejor que la mayoría. |
| **Arco Narrativo** | No hay arco tradicional (juego arcade). Cada partida es una "historia" independiente de supervivencia. El jugador crea su propia narrativa. |

**Diseño de Personaje (Implícito):**
- No vemos al piloto físicamente (cámara cenital externa)
- Su personalidad se expresa a través del pilotaje (agresivo vs cauteloso)
- Es uno de los últimos salvagers independientes que quedan

#### 4.2.2 Personajes Secundarios

> **Nota:** Astro Salvager es un juego arcade sin NPCs ni diálogos. Los "personajes" son implícitos a través de Environmental Storytelling.

**"VOZ DE CONTROL" (Solo en pantalla de título - opcional):**
- Nombre: "Estación Cascara - Control de Tráfico"
- Rol: Voz mecánica que autoriza el acceso al Sector 7G
- Relación con el protagonista: Burocrática, indiferente
- Presencia: Solo texto en pantalla de inicio: "Sector 7G cleared for salvage. 120 seconds. Good luck, Pilot."

**"LOS ANTERIORES PILOTOS" (Implícito):**
- Nombre: Múltiples salvagers que intentaron antes
- Presencia: Los restos metálicos que recolectas son de sus naves destruidas
- Relación: No los conociste, pero estás siguiendo sus pasos
- Narrativa ambiental: Cada pieza de chatarra tiene una historia silenciosa

**"LAS CORPORACIONES" (Antagonistas ausentes):**
- Nombres: OmniTech, Helix Dynamics, Novus Industries
- Motivación: Monopolizar recursos espaciales, eliminar competencia independiente
- Relación con el protagonista: Enemigos indirectos - no aparecen en el juego, pero su amenaza está implícita
- Presencia: Logos corporativos en algunas piezas de chatarra (Easter eggs visuales)

### 4.3 Historia / Estructura Narrativa

#### 4.3.1 Estructura Narrativa de Astro Salvager

> **Nota Importante:** Astro Salvager no tiene estructura narrativa de 3 actos tradicional. En su lugar, usa **Narrativa Ambiental Minimalista** y **Storytelling por Mecánicas**.

**ENFOQUE NARRATIVO: Micro-Historia por Partida**

Cada run de 120 segundos es una historia completa en sí misma:

**INICIO (0-30 segundos) - "La Calma"**
- **Momento:** El piloto entra al Sector 7G
- **Estado emocional:** Confianza, preparación
- **Narrativa implícita:** "Puedo hacerlo. Solo 2 minutos."
- **Presentación del mundo:** Campo de asteroides, restos de naves, silencio espacial

**DESARROLLO (30-90 segundos) - "La Prueba"**
- **Escalada:** La densidad de objetos aumenta, decisiones se vuelven críticas
- **Estado emocional:** Tensión creciente, concentración máxima
- **Punto de inflexión:** El jugador activa un combo x1.5 o comete un error casi fatal
- **Narrativa implícita:** "Puedo llegar más lejos esta vez. Solo un poco más..."

**CLÍMAX (90-120 segundos) - "La Supervivencia"**
- **Confrontación final:** Máxima densidad de obstáculos, reflejos al límite
- **Estado emocional:** Adrenalina pura, flow state o pánico controlado
- **Narrativa implícita:** "No puedo morir ahora. Solo 10 segundos más."

**RESOLUCIÓN (Game Over) - "El Legado"**
- **Desenlace:** Colisión con asteroide O tiempo agotado
- **Cierre:** Pantalla de puntaje - "Final Score: 3,450"
- **Epílogo:** High score guardado - tu nombre (o puntaje) permanece
- **Narrativa implícita:** "La próxima vez llegaré más lejos."

**Estructura Cíclica:**
```
Run 1 → Game Over → "Retry" → Run 2 → Game Over → "Retry" → Run 3...

Cada run es una micro-historia de supervivencia.
El jugador construye su propia narrativa a través de intentos repetidos.
```

#### 4.3.2 Integración Narrativa con Gameplay

¿Cómo se cuenta la historia en Astro Salvager?

- [✓] **Environmental Storytelling (narrativa ambiental)** ← PRINCIPAL
  - Los restos de naves destruidas cuentan historias silenciosas
  - Logos corporativos en chatarra implican el conflicto de fondo
  - El campo de asteroides mismo es un "cementerio" de la guerra
  
- [✓] **Mecánicas como Narrativa**
  - El temporizador de 120s representa "tiempo de seguridad" antes de que lleguen drones
  - La inercia de la nave representa la dificultad de pilotar en gravedad cero
  - Los multiplicadores de zona representan "riesgo vs recompensa" de la vida del salvager
  
- [✓] **Texto Minimalista en Pantalla de Título**
  - Línea única: "Sector 7G cleared for salvage. 120 seconds. Good luck, Pilot."
  - Establece contexto sin interrumpir el gameplay
  
- [✗] **Cinemáticas/Cutscenes** - No hay. Interrumpirían el flujo arcade.
  
- [✗] **Diálogos in-game** - No hay. El piloto está solo en el vacío.
  
- [✗] **Collectibles/Logs** - No hay coleccionables narrativos. Solo chatarra para puntos.
  
- [✗] **Eventos scripteados** - No. Todo el gameplay es emergente y procedural.

**Filosofía Narrativa:**
```
"Show, don't tell" llevado al extremo.
No necesitamos explicar la historia con texto.
El jugador la entiende jugando.
```

### 4.4 Temática y Tono

**Temas principales:**

1. **"Supervivencia contra las Probabilidades"**
   - El piloto está solo contra un universo hostil
   - No hay narrativa épica de "salvar el mundo" - solo sobrevivir el próximo minuto
   - Conexión con estética "Challenge" del MDA

2. **"El Valor del Riesgo Calculado"**
   - ¿Vale la pena arriesgar tu vida por 50 puntos más?
   - Refleja la vida de un salvager: cada decisión puede ser la última
   - Conexión con mecánicas de zona peligrosa

3. **"Soledad y Autosuficiencia"**
   - No hay compañeros, no hay rescate
   - Solo tú, tu nave, y el vacío
   - El high score es tu único legado

4. **"Nostalgia Arcade"**
   - Honrar juegos clásicos como Asteroids (1979)
   - "Un turno más" - la adicción de superar tu propio récord
   - Conexión con estética visual synthwave/retro

**Tono general:**

- **Tonos presentes:**
  - 🚀 **Arcade Puro:** Sin pretensiones narrativas pesadas, directo al gameplay
  - 🎮 **Retro-Nostálgico:** Evoca la era dorada de los arcades de los 80s
  - 🌌 **Soledad Espacial:** Atmósfera de aislamiento, pero no deprimente
  - ⚡ **Tensión Creciente:** De tranquilo a frenético en 2 minutos
  - 🎯 **Competitivo Pero Justo:** El juego no hace trampa - si mueres, fue tu error

- **Tonos ausentes:**
  - ❌ No es épico ni grandioso (no estás salvando galaxias)
  - ❌ No es cómico ni satírico
  - ❌ No es oscuro ni grimdark (no hay gore ni horror)
  - ❌ No es melodramático ni emocional

**Referencias tonales:**

| Referencia | Qué Tomamos | Qué Evitamos |
|------------|-------------|--------------|
| **Asteroids (1979)** | Pureza arcade, sin historia explícita | Gráficos vectoriales antiguos |
| **Geometry Wars** | Tensión creciente, flow state, neon aesthetic | Complejidad de armas |
| **Drive (2011 film)** | Atmósfera synthwave, soledad cool, protagonista silencioso | Violencia gráfica |
| **Firefly/Serenity** | Salvagers espaciales independientes, atmósfera de frontera | Diálogos extensos, tripulación |
| **FTL: Faster Than Light** | Tensión de supervivencia espacial, runs independientes | Complejidad de sistemas |

**Elevator Pitch del Tono:**
```
"Asteroids (1979) reimaginado para 2026 con estética synthwave.
Pura tensión arcade sin historia que interrumpa el gameplay.
Tú contra el vacío - 120 segundos para demostrar que vales."
```

---

## 5. Diseño de Niveles (Level Design)

> **Nota:** Astro Salvager tiene un solo "nivel" - una arena espacial delimitada. No hay progresión de niveles tradicional.

### 5.1 Filosofía de Level Design

**Principios guía para la arena de Astro Salvager:**

1. **"Visibilidad Total desde el Inicio"**
   - El jugador puede ver toda la arena desde cualquier punto
   - No hay esquinas ciegas ni fog of war
   - Permite planificación estratégica de rutas

2. **"Zonas de Riesgo Claras"**
   - División visual entre zona segura (centro) y peligrosa (bordes)
   - El jugador siempre sabe dónde está el peligro
   - Colores y efectos visuales indican niveles de riesgo

3. **"Espacio de Maniobra Justo"**
   - Siempre hay espacio para esquivar obstáculos
   - No spawns "injustos" (nunca encima del jugador)
   - Corredores seguros garantizados incluso en dificultad máxima

### 5.2 La Arena Única: "Zona de Cascara - Sector 7G"

#### 5.2.1 Descripción General

**Dimensiones:** Cubo invisible de 50x50x20 unidades (XZ horizontal, Y altura limitada)

**Concepto:** Un "cubo" de espacio delimitado artificialmente por campos de fuerza invisibles (lore: zona de salvamento regulada)

**Composición:**
- 🌌 Campo de estrellas estático en el fondo (skybox)
- 💠 3 zonas concéntricas con diferentes densidades de objetos
- 🔲 Bordes invisibles con efectos de advertencia al acercarse
- ✨ Partículas ambientales (polvo espacial) para sensación de profundidad

#### 5.2.2 Zonas de la Arena

| Zona | Radio | Características Visuales | Multiplicador | Densidad Obstáculos |
|------|-------|-------------------------|---------------|---------------------|
| **Centro Seguro** | 0-15u | Iluminación azul suave, pocas partículas | x1.0 | 50% normal |
| **Zona Media** | 15-30u | Iluminación neutra, partículas medias | x1.25 | 100% normal |
| **Zona Peligrosa** | 30-50u | Glow rojo pulsante, partículas densas | x1.5 | 150% normal |

#### 5.2.3 Mapa Top-Down de la Arena

```
┌──────────────────────────────────────────────────┐
│ 🔴 ZONA PELIGROSA (Bordes - Multiplicador x1.5) │
│  ┌──────────────────────────────────────────┐    │
│  │ 🟡 ZONA MEDIA (Multiplicador x1.25)      │    │
│  │  ┌──────────────────────────────────┐    │    │
│  │  │ 🟢 ZONA SEGURA (Centro)         │    │    │
│  │  │                                 │    │    │
│  │  │         🚀 Spawn Inicial        │    │    │
│  │  │              (0,0)              │    │    │
│  │  │                                 │    │    │
│  │  └──────────────────────────────────┘    │    │
│  │                                           │    │
│  └──────────────────────────────────────────┘    │
│                                                   │
└──────────────────────────────────────────────────┘

Leyenda:
🚀 Punto de spawn del jugador (centro siempre)
💎 Zonas preferentes de spawn de chatarra valiosa (bordes)
☄️ Zonas de spawn de asteroides (distribuidas uniformemente)
```

### 5.3 Diseño Detallado de la Arena

#### NIVEL ÚNICO: Zona de Cascara - Sector 7G

**Objetivos de Diseño:**
- **Objetivo pedagógico:** Enseñar movimiento con inercia en los primeros 15 segundos
- **Objetivo narrativo:** Establecer atmósfera de soledad espacial peligrosa
- **Objetivo emocional:** Escalada de tensión de 0 a 10 en 2 minutos

**Elementos Visuales Clave:**

1. **Skybox (Fondo Estrellado):**
   - Campo de estrellas procedural estático
   - Nebulosa púrpura/cyan en la distancia
   - No se mueve (referencia visual para orientación)

2. **Iluminación:**
   - Luz ambiental suave azulada (simula luz de estrella distante)
   - Spotlight sutil en el centro (zona segura)
   - Glow rojo en los bordes (advertencia visual)
   - Cada objeto tiene emisión propia (self-illuminated)

3. **Puntos de Spawn Estratégicos:**
   ```
   Chatarra pequeña: Grid de 10x10 celdas, spawn aleatorio
   Chatarra mediana: 70% en zona media, 30% en bordes
   Chatarra grande: 80% en zona peligrosa
   
   Asteroides pequeños: Distribuidos uniformemente
   Asteroides grandes: Preferentemente en zona media/bordes
   ```

4. **Advertencias Visuales:**
   - Al acercarse a 5 unidades del borde: Borde pulsa rojo
   - Al tocar el borde: Efecto de "rebote" visual + sonido
   - No hay colisión mortal con bordes - solo límite de movimiento

**Evolución Temporal de la Arena:**

| Tiempo | Estado de la Arena | Cambios Visuales |
|--------|-------------------|------------------|
| 0-30s | Limpia y espaciosa | Pocas partículas, buena visibilidad |
| 30-60s | Poblándose | Más objetos visibles simultáneamente |
| 60-90s | Densa | Trails de movimiento en obstáculos |
| 90-120s | Caótica | Efecto de "blur" sutil por velocidad |

**Tiempo de Completitud:**
- **Novatos:** 30-60 segundos (mueren rápido)
- **Promedio:** 90-110 segundos
- **Expertos:** 120 segundos + bonus de combos (hasta 150s)

---

### 5.4 Curva de Dificultad de Astro Salvager

```
Dificultad (Objetos/seg + Velocidad)
   10 │                               ╱╱╱ MAX
      │                          ╱╱╱╱
    8 │                     ╱╱╱╱
      │                ╱╱╱╱
    6 │           ╱╱╱╱
      │      ╱╱╱╱
    4 │  ╱╱╱╱
      │╱╱
    2 │╱ Tutorial suave
      │
    0 └────────────────────────────────────────→ Tiempo
      0s   15s   30s   45s   60s   75s   90s  120s

Fases:
• 0-15s:  TUTORIAL - Spawn lento, sin obstáculos móviles
• 15-45s: RAMPA - Incremento lineal de densidad
• 45-90s: PLATEAU - Dificultad estable pero intensa
• 90-120s: CLIMAX - Máxima densidad y velocidad
```

**Justificación de la Curva:**

1. **Inicio Suave (0-15s):** 
   - Permite aprender controles sin presión
   - Solo chatarra, sin obstáculos
   - Jugador puede moverse libremente y "sentir" la inercia

2. **Rampa Gradual (15-60s):**
   - Introduce obstáculos uno a uno
   - Velocidades aumentan progresivamente
   - Permite adaptación sin frustración

3. **Meseta Intensa (60-90s):**
   - Dificultad alta pero consistente
   - Test de habilidad sostenida
   - Momento de "flow state" para jugadores hábiles

4. **Clímax Final (90-120s):**
   - Máxima presión antes del time-out
   - Supervivencia pura
   - Recompensa: Sensación de logro al completar

**Balance de Dificultad:**
- 🟢 Accesible: Cualquiera puede jugar 30 segundos
- 🟡 Desafiante: Llegar a 90 segundos requiere práctica
- 🔴 Maestría: Completar 120s = top 10% de jugadores

---

## 6. Arte y Audio (Look & Feel)

> Ver documento detallado en: [ARTE_Y_DISEÑO.md](ARTE_Y_DISEÑO.md)

### 6.1 Dirección Artística

#### 6.1.1 Estilo Visual

**Estilo General:** **Low-Poly Retro-Futurista con Neones**

**Características:**
- Modelos 3D de baja poligonización (100-500 polígonos por objeto)
- Texturas flat con colores sólidos (sin gradientes complejos)
- Emisión (glow) en todos los objetos para estética neón
- Sin sombras realistas - iluminación stylizada
- Partículas simples tipo "billboards" con glow

**Referencias visuales:**
- **Tron (1982):** Estética neón, líneas brillantes, fondo oscuro espacial
- **Geometry Wars:** Partículas vibrantes, contraste alto, feedback visual intenso
- **Rez / Tetris Effect:** Geometría limpia con efectos de luz psicodélicos
- **Asteroids (1979):** Simplicidad visual, enfoque en gameplay sobre realismo
- **Synthwave art:** Paleta cyan/magenta/púrpura, nostalgia 80s

**Filosofía de Arte:**
> "Menos es más. Cada objeto debe ser identificable instantáneamente a 50 unidades de distancia."

#### 6.1.2 Paleta de Colores

**Paleta Principal (Synthwave/Neon):**

- 🎨 **Cyan Neón:** `#00FFFF` - Color primario - Nave del jugador, chatarra valiosa, UI
- 🎨 **Magenta Eléctrico:** `#FF00FF` - Color secundario - Obstáculos peligrosos, advertencias
- 🎨 **Púrpura Profundo:** `#8B00FF` - Ambiente - Nebulosas, partículas de fondo
- 🎨 **Naranja Retro:** `#FF6600` - Acentos - Efectos de colisión, explosiones
- 🎨 **Blanco Brillante:** `#FFFFFF` - Highlights - Estrellas, destellos, UI crítica
- 🎨 **Negro Espacial:** `#0A0E27` - Fondo base - Skybox, áreas oscuras

**Paleta por Zona de la Arena:**

- **Centro Seguro (Zona Verde):** 
  - Dominante: Cyan `#00FFFF` y azul suave `#4169E1`
  - Transmite: Calma, seguridad, zona de respiro
  - Objetos: Glow azul suave, sin efectos agresivos

- **Zona Media (Zona Amarilla):**
  - Dominante: Púrpura `#8B00FF` y cyan `#00FFFF` mezclados
  - Transmite: Transición, alerta moderada
  - Objetos: Glow medio, trails sutiles

- **Zona Peligrosa (Zona Roja):**
  - Dominante: Magenta `#FF00FF` y rojo `#FF0033`
  - Transmite: Peligro, alta recompensa, adrenalina
  - Objetos: Glow intenso, partículas densas, efectos de advertencia pulsantes

#### 6.1.3 Assets Necesarios

| Categoría | Descripción | Cantidad | Prioridad |
|-----------|-------------|----------|-----------|
| Personajes | Modelo del jugador + animaciones | 1 | Alta |
| Enemigos | [Tipo A, Tipo B, Boss] | 5 | Alta |
| Entorno | Modelos de escenario (árboles, rocas, edificios) | 50+ | Media |
| Props | Objetos interactuables | 20+ | Media |
| UI | Iconos, botones, menús | 30+ | Alta |
| Efectos | VFX (explosiones, magia, etc.) | 15 | Media |

### 6.2 Audio y Música

#### 6.2.1 Dirección Musical

**Estilo Musical:** **Synthwave/Chiptune Electrónico** (Retro-futurista)

**Referencias de Compositores/Soundtracks:**
- **Kavinsky - "Nightcall"**: Sintetizadores oscuros, pulsaciones rítmicas
- **Mitch Murder**: Synthwave melódico, nostalgia 80s
- **FTL: Faster Than Light OST** (Ben Prunty): Ambient espacial con tensión
- **Geometry Wars 2 OST**: Pulsos electrónicos, ritmo constante
- **Hotline Miami OST**: Synthwave agresivo, alta energía

**Lista de Música (Music Cues):**

| Track | Contexto | Duración | Tempo/Mood | Implementación | BPM |
|-------|----------|----------|------------|----------------|-----|
| **Main Menu Theme** | Pantalla de inicio | 90 seg loop | Nostálgico, Misterioso | Loop seamless | 95 BPM |
| **Gameplay Base Layer** | 0-60 segundos de partida | 120 seg loop | Ambient, Tensión baja | Loop + layers dinámicos | 120 BPM |
| **Intensity Layer 1** | 60-90 segundos | 60 seg | Agrega sintetizadores | Se suma al base layer | 120 BPM |
| **Intensity Layer 2** | 90-120 segundos | 30 seg | Drums pesados, tensión máxima | Se suma a layers anteriores | 140 BPM |
| **Game Over Sting** | Muerte del jugador | 3 seg | Descendente, Triste | One-shot, detiene música | N/A |
| **High Score Jingle** | Nuevo récord personal | 5 seg | Triunfal, Synth brillante | One-shot después de Game Over | N/A |

**Sistema de Capas Dinámicas:**
```
Tiempo 0s:    [Base Layer] ──────────────────────────────────────→
                 ↓
Tiempo 60s:   [Base] + [Layer 1 - Synths] ──────────────────────→
                            ↓
Tiempo 90s:   [Base] + [Layer 1] + [Layer 2 - Drums intensos] ──→
                                       ↓
Game Over:    [STOP] → [Game Over Sting]
```

#### 6.2.2 Efectos de Sonido (SFX)

**Categorías de SFX para Astro Salvager:**

1. **Nave del Jugador:**
   - **Motor en idle**: Zumbido suave continuo (loop)
   - **Motor acelerando**: Whoosh al presionar teclas direccionales
   - **Motor desacelerando**: Whoosh inverso al soltar teclas
   - **Rebote en borde**: Sonido de "campo de fuerza" eléctrico
   - **Explosión de nave**: Boom sintético + distorsión

2. **Recolección:**
   - **Chatarra pequeña**: "Bleep" agudo cyan (300ms)
   - **Chatarra mediana**: "Bloop" medio cyan (400ms)
   - **Chatarra grande**: "Boom" grave profundo (600ms)
   - **Combo x1.2**: Arpeggio ascendente corto
   - **Combo x1.5**: Arpeggio ascendente + reverb espacial
   - **Bonus de tiempo (+10s)**: Chime cristalino brillante

3. **Colisiones y Peligros:**
   - **Colisión con asteroide grande**: Crash metálico + explosión → Game Over
   - **Colisión con resto pequeño**: Clang metálico corto + efecto de "tiempo reduciéndose"
   - **Advertencia de proximidad**: Beep pulsante al acercarse a asteroides (radio 5u)
   - **Advertencia de tiempo**: Beeps rápidos cuando quedan <20 segundos

4. **UI y Sistema:**
   - **Hover en botón de menú**: Synth suave ascendente (100ms)
   - **Click en botón**: Synth confirmación (150ms)
   - **Inicio de partida**: Countdown "3...2...1...GO!" con synth
   - **Pausa**: Efecto de "tiempo congelándose" (pitch down)
   - **Reanudación**: Efecto inverso (pitch up)
   - **Nuevo high score**: Fanfarria synthwave corta (5 segundos)

5. **Ambiente Espacial:**
   - **Loop ambiente**: Rumble grave espacial continuo (muy bajo volumen)
   - **Ecos de comunicación**: "Radio chatter" distorsionado aleatorio
   - **Campo de estrellas**: Partículas con ocasionales "twinkling" sutiles

**Procesamiento de Audio:**
- Todos los SFX tienen ligero reverb espacial (0.8 segundos decay)
- Compresión side-chain: SFX ducking de música durante eventos críticos
- Pitch variation: ±10% aleatoria en colecciones para evitar repetición monótona
- Volumen adaptativo: Baja música 30% cuando spawns son densos para claridad de SFX
#### 6.2.3 Audio Dinámico

**Sistema de Capas Musicales Adaptativas:**

Astro Salvager usa un sistema de "audio dinámico" donde la música responde al tiempo transcurrido:

- **0-60s:** Solo base layer (ambient suave, sintetizadores sutiles)
- **60-90s:** Base + Layer 1 (añade melodía synth, aumenta tensión)
- **90-120s:** Base + Layer 1 + Layer 2 (drums intensos, bassline agresivo)

**Transiciones Suaves:**
- Crossfade de 2 segundos al añadir capas
- No hay cortes bruscos - todo es aditivo
- Al morir: Fade out rápido (0.5s) → Game Over sting

**Audio 3D Posicional:**

Astro Salvager usa audio **no posicional** (2D stereo) por diseño:
- La cámara siempre está centrada en el jugador
- Todos los objetos están visibles simultáneamente
- SFX en stereo simple para claridad arcade

**Excepción:** Advertencias de proximidad de asteroides tienen ligero panning:
- Asteroide a la izquierda → SFX ligeramente más fuerte en canal L
- Asteroide a la derecha → SFX ligeramente más fuerte en canal R
- Ayuda a orientación espacial sin complejidad 3D completa

---

## 7. Arquitectura de Software (Ingeniería)

> Ver documento detallado en: [ARQUITECTURA.md](ARQUITECTURA.md)

### 7.1 Stack Tecnológico de Astro Salvager

#### 7.1.1 Tecnologías Core

| Categoría | Tecnología | Versión | Justificación |
|-----------|-----------|---------|---------------|
| **Motor 3D** | Babylon.js | 6.x | Motor web nativo, excelente para juegos arcade 3D simples, cross-platform |
| **Lenguaje** | TypeScript | 5.x | Type-safety reduce bugs, mejor autocompletado, escalabilidad |
| **Build Tool** | Vite | 5.x | HMR ultrarrápido, bundling optimizado, configuración mínima |
| **Linter** | ESLint + Prettier | Latest | Consistencia de código, detección temprana de errores |
| **Hosting** | GitHub Pages / Netlify | - | Deploy automático, gratuito para proyectos académicos |

#### 7.1.2 Librerías Adicionales (Simplificadas para Arcade)

- **Physics:** ❌ **No usar** - Física custom simple (solo AABB collision)
- **UI:** ✅ Babylon.GUI - Sistema de UI nativo de Babylon
- **Audio:** ✅ Babylon Sound System - Manejo de audio 2D suficiente
- **State Management:** ✅ Custom simple (enums para GameState)
- **Networking:** ❌ **No aplica** - Juego single-player local
- **Particles:** ✅ Babylon ParticleSystem - Para efectos de recolección/explosiones

**Justificación de "No Usar Física Compleja":**
```
Astro Salvager NO necesita un motor de física completo como Cannon.js
porque:
- Solo requiere detección de colisiones AABB (bounding boxes)
- Movimiento controlado manualmente (no física realista)
- La "inercia" es simulada con interpolación de velocidad simple
- Usar un physics engine completo añadiría 200KB+ innecesarios al bundle
```

### 7.2 Arquitectura General

#### 7.2.1 Patrón Arquitectónico Principal

**Patrón elegido:** **Component-Based Architecture** (inspirado en Unity)

**Justificación:**

Component-Based es ideal para Astro Salvager porque:

1. SIMPLICIDAD: Solo tenemos 4 tipos de entidades (Nave, Chatarra, Asteroides, UI)
2. COMPOSICIÓN: Cada objeto tiene componentes reutilizables (Transform, Renderer, Collider)
3. ESCALABILIDAD: Fácil añadir nuevos tipos de chatarra u obstáculos sin refactorizar
4. BABYLON-FRIENDLY: Babylon.js usa un modelo similar con sus Meshes y Components

No usamos ECS puro porque:
- El juego tiene <50 entidades simultáneas (no necesitamos optimización extrema)
- La complejidad extra de ECS no justifica el beneficio en un arcade simple


#### 7.2.2 Diagrama de Arquitectura de Alto Nivel

```
┌─────────────────────────────────────────────────────────────┐
│                    ASTRO SALVAGER APP                       │
├─────────────────────────────────────────────────────────────┤
│  ┌────────────────┐         ┌─────────────────┐            │
│  │  Game Manager  │────────→│  Scene Manager  │            │
│  │  (Singleton)   │         │  (Menu/Game/End)│            │
│  └────────┬───────┘         └─────────┬───────┘            │
│           │                           │                     │
│           ↓                           ↓                     │
├─────────────────────────────────────────────────────────────┤
│                      SYSTEMS LAYER                          │
│  ┌─────────┐ ┌──────────┐ ┌────────┐ ┌─────────┐         │
│  │ Input   │ │ Spawner  │ │ Audio  │ │ Score   │         │
│  │ System  │ │ System   │ │ System │ │ System  │         │
│  └────┬────┘ └─────┬────┘ └───┬────┘ └────┬────┘         │
├───────┼────────────┼──────────┼──────────┼────────────────┤
│       ↓            ↓          ↓          ↓                 │
│              ENTITY/COMPONENT LAYER                        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│  │  Player  │ │ Debris   │ │Asteroid  │ │   UI     │    │
│  │  Entity  │ │ Entity   │ │ Entity   │ │ Elements │    │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘    │
├─────────────────────────────────────────────────────────────┤
│                  BABYLON.JS ENGINE LAYER                    │
│  [Scene] [Meshes] [Materials] [Cameras] [Lights]          │
└─────────────────────────────────────────────────────────────┘

├─────────────────────────────────────────┤
│         ENTITY/COMPONENT LAYER          │
│  ┌────────┐ ┌────────┐ ┌────────┐     │
│  │ Player │ │ Enemy  │ │ Items  │     │
│  └────────┘ └────────┘ └────────┘     │
├─────────────────────────────────────────┤
│         DATA LAYER                      │
│  ┌────────┐ ┌────────┐ ┌────────┐     │
│  │ Save   │ │ Config │ │ Assets │     │
│  │ System │ │  Data  │ │Loader  │     │
│  └────────┘ └────────┘ └────────┘     │
└─────────────────────────────────────────┘

```

### 7.3 Patrones de Diseño Aplicados

#### 7.3.1 Patrones Utilizados en Astro Salvager

**Patrón #1: Singleton**
- **Uso:** GameManager, AudioManager, ScoreSystem
- **Justificación:** Solo debe existir una instancia global de estos gestores
- **Ejemplo:** `GameManager.getInstance().startGame()`
- **Implementación:** Clase con constructor privado y método estático getInstance()

**Patrón #2: Observer/Event System**
- **Uso:** Eventos de gameplay ("DebrisCollected", "AsteroidHit", "TimeExpired")
- **Justificación:** Desacoplar sistemas - ScoreSystem no necesita conocer Spawner
- **Ejemplo:** `Events.emit('DebrisCollected', { value: 50 })`
- **Implementación:** Custom EventEmitter con tipado TypeScript

**Patrón #3: Factory**
- **Uso:** Creación de Debris (chatarra), Asteroides con variantes
- **Justificación:** Centralizar lógica de creación con parámetros aleatorios
- **Ejemplo:** `DebrisFactory.create(DebrisSize.LARGE, position)`
- **Implementación:** Clase estática con métodos create() que retornan GameObjects

**Patrón #4: Object Pool**
- **Uso:** Partículas de recolección, efectos visuales, asteroides
- **Justificación:** Evitar instanciación/destrucción constante (garbage collection)
- **Ejemplo:** `ParticlePool.acquire()` en lugar de `new Particle()`
- **Implementación:** Array preallocado de objetos reutilizables con estado active/inactive

**Patrón #5: State Machine (FSM)**
- **Uso:** Estados del juego (Menu → Playing → GameOver → Menu)
- **Justificación:** Controlar transiciones válidas entre estados
- **Ejemplo:** 
  ```
  Menu → Playing: Al presionar Start
  Playing → GameOver: Al colisionar o tiempo = 0
  GameOver → Menu: Al presionar Retry
  ```
- **Implementación:** Enum GameState + switch case con transiciones permitidas

**Patrón #6: Component Pattern**
- **Uso:** Cada GameObject tiene componentes (Transform, Renderer, Collider, Movement)
- **Justificación:** Composición sobre herencia - flexible y reutilizable
- **Ejemplo:** Nave = Transform + Renderer + Collider + PlayerController + TrailRenderer
- **Implementación:** Babylon Mesh con custom components attached

### 7.4 Diagramas UML

> Los diagramas completos en PlantUML están en la carpeta `/diagramas`

#### 7.4.1 Diagrama de Clases Principal - Astro Salvager

```
┌───────────────────────┐
│   <<abstract>>        │
│   GameObject          │
├───────────────────────┤
│ + mesh: Mesh          │
│ + position: Vector3   │
│ + isActive: boolean   │
├───────────────────────┤
│ + update(dt): void    │
│ + destroy(): void     │
│ + setActive(b): void  │
└──────────┬────────────┘
           │
    ┌──────┴──────────────────┬──────────────┐
    │                         │              │
┌───▼──────────┐  ┌───────────▼────┐  ┌─────▼────────┐
│ PlayerShip   │  │ Debris         │  │ Asteroid     │
├──────────────┤  ├────────────────┤  ├──────────────┤
│ + speed: n   │  │ + value: int   │  │ + size: enum │
│ + velocity: V│  │ + size: enum   │  │ + speed: n   │
├──────────────┤  ├────────────────┤  ├──────────────┤
│ + move()     │  │ + collect()    │  │ + rotate()   │
│ + checkColl()│  │ + getPoints()  │  │ + move()     │
└──────────────┘  └────────────────┘  └──────────────┘

┌──────────────────────┐
│  <<Singleton>>       │
│  GameManager         │
├──────────────────────┤
│ - instance: GM       │
│ + score: int         │
│ + timeLeft: float    │
│ + state: GameState   │
├──────────────────────┤
│ + getInstance(): GM  │
│ + startGame()        │
│ + endGame()          │
│ + update(dt)         │
└──────────────────────┘

┌──────────────────────┐
│  SpawnerSystem       │
├──────────────────────┤
│ - spawnInterval: n   │
│ - difficulty: float  │
├──────────────────────┤
│ + spawnDebris()      │
│ + spawnAsteroid()    │
│ + updateDifficulty() │
└──────────────────────┘
```

#### 7.4.2 Diagrama de Casos de Uso

```
         ┌──────────┐
         │  Player  │
         └────┬─────┘
              │
      ┌───────┼───────┐
      │       │       │
      ▼       ▼       ▼
   (Moverse) (Atacar) (Usar Item)
      │       │       │
      └───────┼───────┘
              ▼
        [Game System]
```

### 7.5 Gestión de Datos

#### 7.5.1 Persistencia (Save System)

**¿Qué datos se guardan?**
- Progreso del jugador (nivel, XP)
- Inventario
- Niveles completados
- Configuración (volumen, controles)
- Estadísticas

**Formato elegido:** [JSON / LocalStorage / IndexedDB / Backend]

**Ejemplo de estructura de guardado:**
```json
{
  "version": "1.0",
  "player": {
    "level": 5,
    "xp": 1250,
    "position": {"x": 10, "y": 0, "z": 5},
    "inventory": [
      {"id": "sword_01", "quantity": 1},
      {"id": "potion", "quantity": 5}
    ]
  },
  "progress": {
    "levelsCompleted": [1, 2, 3],
    "currentLevel": 4
  },
  "settings": {
    "volume": 0.7,
    "quality": "medium"
  }
}
```

#### 7.5.2 Configuración del Juego

¿Qué es configurable externamente (sin recompilar)?

- **Balance:** Stats de enemigos, daño, velocidades
- **Niveles:** Ubicación de enemigos, items
- **UI:** Posiciones, tamaños
- **Audio:** Volúmenes por categoría

**Formato:** [JSON / YAML / Archivo custom]

---

## 8. Apéndices

#### 8.1 Teoría de Diseño Aplicada

- **MDA Framework:** Hunicke, R., LeBlanc, M., Zubek, R. (2004). "MDA: A Formal Approach to Game Design and Game Research"
  - **Aplicación:** Usado como núcleo del diseño de Astro Salvager (Sección 2 completa)
  
- **Game Feel:** Steve Swink (2008) - "Game Feel: A Game Designer's Guide to Virtual Sensation"
  - **Aplicación:** Inercia espacial diseñada para "sentirse bien"
  
- **Flow Theory:** Csikszentmihalyi, M. (1990) - "Flow: The Psychology of Optimal Experience"
  - **Aplicación:** Curva de dificultad para mantener flow state

### 8.2 Control de Versiones del Documento

| Versión | Fecha | Cambios | Autor |
|---------|-------|---------|-------|
| 0.1 | 01/02/2026 | Plantilla inicial del proyecto | Equipo |
| 1.0 | 01/02/2026 | **GDD completo para Astro Salvager** - Análisis MDA, mecánicas detalladas, arquitectura | Equipo |

---

## 📌 Conclusión

Este Game Design Document define completamente **Astro Salvager**, un juego arcade 3D espacial que aplica formalmente el **Framework MDA** para crear una experiencia de alto desafío con feedback inmediato.

**Pilares cumplidos:**
- ✅ **Análisis MDA completo** (Sección 2): Estéticas, Dinámicas y Mecánicas claramente definidas
- ✅ **Simplicidad arcade**: Controles 4-direccionales, objetivo claro
- ✅ **Escalado de dificultad**: Curva progresiva temporal de 0 a 120 segundos
- ✅ **Estética retro-futurista**: Low-poly con neones synthwave y paleta cyan/magenta

**Características técnicas destacadas:**
- Física custom simple (sin engine pesado)
- Component-Based Architecture
- 6 patrones de diseño aplicados
- Audio dinámico por capas
- Spawning procedural inteligente

**Próximos pasos del proyecto:**
1. ✅ **Documentación completa** (ESTE DOCUMENTO)
2. ⏳ **Sprint Planning** detallado (ver BACKLOG.md)
3. ⏳ **Diagramas UML** en PlantUML (carpeta /diagramas)
4. ⏳ **Mockups de UI** (carpeta /mockups)
5. ⏳ **Implementación** en Babylon.js + TypeScript

---

**Documento creado:** 1 de febrero de 2026  
**Última actualización:** 1 de febrero de 2026  
**Estado:** ✅ **COMPLETO** - Listo para desarrollo

---

**Fin del Game Design Document - Astro Salvager v1.0**
