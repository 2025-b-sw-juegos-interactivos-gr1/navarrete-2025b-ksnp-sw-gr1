# 📋 Product Backlog & Sprint Planning - Astro Salvager

> **Gestión de Proyecto con Metodología Ágil**  
> **Proyecto:** Astro Salvager 
> **Framework:** Scrum adaptado para Game Development  
> **Herramienta:** GitHub Projects

---

## 📑 Tabla de Contenidos

1. [Introducción a la Gestión](#1-introducción-a-la-gestión)
2. [Configuración de GitHub Projects](#2-configuración-de-github-projects)
3. [Épicas del Proyecto](#3-épicas-del-proyecto)
4. [User Stories Detalladas](#4-user-stories-detalladas)
5. [Sprint Planning](#5-sprint-planning)
6. [Estimaciones y Velocity](#6-estimaciones-y-velocity)
7. [Definition of Done](#7-definition-of-done)

---

## 1. Introducción a la Gestión

### 1.1 Metodología Elegida

**Scrum adaptado para Game Development de Astro Salvager**

¿Por qué Scrum para este proyecto de documentación?
- ✅ **Iterativo:** Permite refinar análisis MDA y mecánicas progresivamente
- ✅ **Transparencia:** El equipo y profesor ven progreso en tiempo real
- ✅ **Priorización:** MDA Framework primero (requisito crítico académico)
- ✅ **Timeboxed:** 6 sprints de 1 semana = 6 semanas totales

### 1.2 Roles del Proyecto Astro Salvager

| Rol | Responsable | Responsabilidades Clave |
|-----|-------------|-------------------------|
| **Product Owner** | Equipo | Priorizar features, validar contra requisitos de la cátedra |
| **Scrum Master** | Equipo | Facilitar dailys, remover impedimentos de documentación |
| **Game Designer** | Equipo | Análisis MDA, mecánicas de movimiento/recolección, balanceo |
| **Technical Architect** | Equipo | Diagramas UML, patrones de diseño, justificación del stack |
| **Narrative Designer** | Equipo | Narrativa ambiental minimalista, setting espacial |
| **Level Designer** | Equipo | Diseño de arena única, zonas de riesgo |
| **Art Director** | Equipo | Dirección retro-futurista, paleta synthwave |

*Nota: Proyecto académico individual/pequeño equipo - roles compartidos*

### 1.3 Ceremonias Scrum Adaptadas

| Ceremonia | Frecuencia | Duración | Objetivo en Astro Salvager |
|-----------|------------|----------|----------------------------|
| **Sprint Planning** | Inicio de sprint | 1h | Planificar qué secciones del GDD completar |
| **Daily Check-in** | Diario | 10min | Reportar avance en documentación |
| **Sprint Review** | Final de sprint | 45min | Revisar documentación completada |
| **Sprint Retrospective** | Final de sprint | 30min | Mejorar proceso de documentación |

---

## 2. Configuración de GitHub Projects

### 2.1 Estructura del Board

**Columnas recomendadas:**

```
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│   BACKLOG   │ │   TO DO     │ │ IN PROGRESS │ │   REVIEW    │ │    DONE     │
│             │ │             │ │             │ │             │ │             │
│ (Priorizado)│ │(Este Sprint)│ │  (Haciendo) │ │ (Revisión)  │ │ (Completo)  │
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
```

### 2.2 Labels/Etiquetas

Crear las siguientes etiquetas en GitHub:

| Label | Color | Uso |
|-------|-------|-----|
| `epic` | 🔴 Rojo | Para marcar épicas principales |
| `user-story` | 🟢 Verde | Historias de usuario |
| `task` | 🔵 Azul | Tareas técnicas |
| `documentation` | 📘 Azul claro | Documentación |
| `design` | 🎨 Morado | Diseño de juego |
| `architecture` | 🏗️ Naranja | Arquitectura técnica |
| `art` | 🖼️ Rosa | Arte y assets |
| `audio` | 🔊 Amarillo | Audio y música |
| `high-priority` | ⚠️ Rojo oscuro | Alta prioridad |
| `blocked` | 🚫 Gris | Bloqueado esperando algo |
| `bug` | 🐛 Rojo | Errores en documentación |

### 2.3 Estimación: Story Points

Usaremos la **secuencia de Fibonacci** para estimar complejidad:

| Story Points | Complejidad | Tiempo Aproximado | Ejemplo |
|--------------|-------------|-------------------|---------|
| **1** | Trivial | < 1 hora | Crear un párrafo de descripción |
| **2** | Muy Simple | 1-2 horas | Definir paleta de colores |
| **3** | Simple | 2-4 horas | Escribir sinopsis de historia |
| **5** | Media | 4-8 horas | Crear diagrama de clases |
| **8** | Compleja | 1-2 días | Diseñar sistema completo de combate |
| **13** | Muy Compleja | 2-3 días | Análisis MDA completo del juego |
| **21** | Épica | 1 semana | [Debe dividirse en stories más pequeñas] |

**Regla:** Si una story es **> 13 puntos**, debe dividirse en stories más pequeñas.

---

## 3. Épicas del Proyecto

Las **Épicas** son grandes bloques de trabajo que agrupan múltiples User Stories.

### EPIC 1: Conceptualización y High Concept de Astro Salvager 🎯

**Descripción:** Definir la identidad de Astro Salvager como juego arcade 3D espacial.

**Objetivo:** Documento que responda: ¿Qué es Astro Salvager? ¿Para quién? ¿Por qué es único?

**Historias de Usuario incluidas:** (Ver sección 4)
- #1.1 - Definir identidad del juego (arcade espacial, score attack)
- #1.2 - Análisis de referencias (Pac-Man, Asteroids, Katamari, Geometry Wars)
- #1.3 - Definir USPs (simplicidad arcade, inercia espacial, dificultad dinámica, estética retro)
- #1.4 - Establecer pilares de diseño (Instantáneamente Jugable, Un Turno Más, Dominio de Movimiento)

**Criterios de aceptación de la Épica:**
- [✓] Elevator pitch completo: "Pac-Man en el espacio meets Asteroids"
- [✓] 4 juegos de referencia analizados con takeaways específicos
- [✓] 4 USPs documentados con impacto técnico justificado
- [✓] 3 pilares de diseño establecidos y explicados

**Estimación total:** 8 Story Points

**Prioridad:** 🔴 ALTA - Base conceptual del proyecto

**Estado:** ✅ COMPLETADO

---

### EPIC 2: Análisis MDA y Core Gameplay de Astro Salvager 🎮

**Descripción:** Aplicar el framework MDA para justificar diseño de gameplay arcade.

**Objetivo:** Conectar Estética (Reto+Sensación) → Dinámicas (Avaricia Castigada, Planificación de Rutas) → Mecánicas (Movimiento+Recolección).

**Historias de Usuario incluidas:**
- #2.1 - Definir Aesthetics: Reto, Sensación, Fantasía (piloto espacial)
- #2.2 - Identificar 3 Dynamics emergentes (Avaricia Castigada, Planificación Mental, Escalada Temporal)
- #2.3 - Especificar 5 Mechanics core (Movimiento, Recolección, Colisión, Temporizador, Spawning)
- #2.4 - Diseñar Core Loop (Explorar → Recolectar → Esquivar → Optimizar → Sobrevivir)
- #2.5 - Crear diagrama de flujo del gameplay con tiempos

**Criterios de aceptación de la Épica:**
- [✓] Sección MDA del GDD completa (4+ páginas con tablas y gráficos)
- [✓] 3 dinámicas emergentes identificadas con conexión a mecánicas
- [✓] Core Loop documentado con diagrama de 5 fases y tiempos
- [✓] Curva emocional dibujada (0-120 segundos)

**Estimación total:** 21 Story Points

**Prioridad:** 🔴 ALTA - Núcleo teórico del proyecto (requisito crítico académico)

**Estado:** ✅ COMPLETADO

---

### EPIC 3: Especificación de Mecánicas y Sistemas de Astro Salvager ⚙️

**Descripción:** Detallar todas las mecánicas arcade con valores numéricos precisos.

**Objetivo:** Especificaciones técnicas completas para sistema de movimiento, recolección, obstáculos y scoring.

**Historias de Usuario incluidas:**
- #3.1 - Sistema de movimiento con inercia espacial (velocidad, aceleración, fricción)
- #3.2 - Sistema de recolección automática por proximidad (radio, puntos, multiplicadores)
- #3.3 - Sistema de obstáculos (asteroides, colisiones, tipos de daño)
- #3.4 - Sistema de escalado de dificultad temporal (spawning dinámico)
- #3.5 - Sistema de puntuación (fórmulas, combos, zonas de riesgo)
- #3.6 - Controles (Input mapping: WASD, ESC, R)

**Criterios de aceptación de la Épica:**
- [✓] Cada sistema tiene valores numéricos específicos (15 u/s, 8 u/s², etc.)
- [✓] Tablas de balance: puntos por chatarra, tiempos de spawn, velocidades
- [✓] FSM de estados del juego (Menu → Playing → GameOver)
- [✓] Fórmulas matemáticas: scoring, escalado de dificultad, combos

**Estimación total:** 34 Story Points

**Prioridad:** 🔴 ALTA

**Estado:** ✅ COMPLETADO

---

### EPIC 4: Narrativa y Worldbuilding 📖

**Descripción:** Crear el universo narrativo del juego.

**Objetivo:** Historia, personajes y mundo coherente que soporte el gameplay.

**Historias de Usuario incluidas:**
- #4.1 - Premisa y contexto del mundo
- #4.2 - Diseño de protagonista
- #4.3 - Diseño de personajes secundarios
- #4.4 - Estructura narrativa (3 actos)
- #4.5 - Integración narrativa con gameplay

**Criterios de aceptación de la Épica:**
- [x] Sinopsis completa (500+ palabras)
- [x] Al menos 3 personajes con fichas completas
- [x] Estructura de 3 actos definida
- [x] Temas y tono documentados

**Estimación total:** 21 Story Points

**Prioridad:** 🟡 MEDIA - Importante pero no bloquea arquitectura

---

### EPIC 5: Diseño de Arena y Level Design de Astro Salvager 🗺️

**Descripción:** Diseño de la arena única espacial con 3 zonas de riesgo.

**Objetivo:** Plano detallado de la arena 50x50 unidades con zonas, spawning y curva de dificultad temporal.

**Historias de Usuario incluidas:**
- #5.1 - Filosofía de level design arcade (visibilidad total, zonas claras, espacio justo)
- #5.2 - Diseño de arena única: Zona de Cascara Sector 7G
- #5.3 - Sistema de 3 zonas concéntricas (Segura, Media, Peligrosa)
- #5.4 - Mapeo de zonas de spawn (chatarra vs asteroides)
- #5.5 - Evolución visual temporal de la arena (0-120s)
- #5.6 - Curva de dificultad temporal con fases (Tutorial→Rampa→Plateau→Clímax)

**Criterios de aceptación de la Épica:**
- [✓] Arena única diseñada con ASCII art y descripción detallada
- [✓] Curva de dificultad justificada con gráfico y fases temporales
- [✓] 3 zonas definidas con multiplicadores (x1.0, x1.25, x1.5)
- [✓] Tiempos estimados: Novatos 30-60s, Promedio 90-110s, Expertos 120s+

**Estimación total:** 13 Story Points

**Prioridad:** 🟡 MEDIA

**Estado:** ✅ COMPLETADO

---

### EPIC 6: Dirección de Arte y Audio Retro-Futurista de Astro Salvager 🎨🔊

**Descripción:** Definir estética synthwave low-poly con audio dinámico por capas.

**Objetivo:** Paleta neón (cyan/magenta/púrpura), referencias visuales, assets 3D y música electrónica.

**Historias de Usuario incluidas:**
- #6.1 - Estilo visual: Low-poly retro-futurista con neones (Tron, Geometry Wars, Rez)
- #6.2 - Paleta synthwave: Cyan #00FFFF, Magenta #FF00FF, Púrpura #8B00FF, Naranja #FF6600
- #6.3 - Assets 3D necesarios: Nave (300-500 polys), 3 chatarras, 2 asteroides, skybox, partículas
- #6.4 - Dirección musical: Synthwave/Chiptune con capas dinámicas (base→layer1→layer2)
- #6.5 - 25+ SFX categorizados: Nave, Recolección, Colisiones, UI, Ambiente
- #6.6 - Audio dinámico: Sistema de capas que responde al tiempo (0-60s-90s-120s)

**Criterios de aceptación de la Épica:**
- [✓] Referencias visuales: Tron, Geometry Wars, Asteroids, Synthwave art
- [✓] Paleta de 6 colores con códigos hex y uso documentado
- [✓] Lista de 8+ assets 3D con conteo de polígonos y prioridades
- [✓] 6 tracks musicales definidos con BPM, duración y contexto
- [✓] Sistema de audio dinámico por capas documentado

**Estimación total:** 21 Story Points

**Prioridad:** 🟡 MEDIA

**Estado:** ✅ COMPLETADO

---

### EPIC 7: Arquitectura Técnica Component-Based de Astro Salvager 🏗️

**Descripción:** Diseño técnico simplificado para juego arcade sin física compleja.

**Objetivo:** Babylon.js + TypeScript + Vite, Component-Based Architecture, 6 patrones de diseño justificados.

**Historias de Usuario incluidas:**
- #7.1 - Stack: Babylon.js 6.x + TypeScript 5.x + Vite (justificar NO usar Cannon.js)
- #7.2 - Diagrama de arquitectura: GameManager → Systems → Entities → Babylon Engine
- #7.3 - Diagrama de clases: GameObject → PlayerShip/Debris/Asteroid, Singleton GameManager
- #7.4 - FSM de estados del juego: Menu → Playing → GameOver
- #7.5 - 6 patrones: Singleton, Observer, Factory, Object Pool, FSM, Component
- #7.6 - Sistema de guardado minimalista: High scores en LocalStorage (JSON simple)

**Criterios de aceptación de la Épica:**
- [✓] Stack justificado: Babylon.js nativo sin physics engine pesado
- [✓] 3 diagramas UML: Arquitectura general, Clases, FSM de estados
- [✓] 6 patrones identificados con ejemplo de uso específico de Astro Salvager
- [✓] Config.json para balanceo sin recompilar (velocidades, spawns, scores)
- [✓] Estructura JSON de high scores con 10 campos

**Estimación total:** 34 Story Points

**Prioridad:** 🔴 ALTA - Crítico para evaluación académica

**Estado:** ✅ COMPLETADO

---

### EPIC 8: Documentación Final y Pulido de Astro Salvager 📚

**Descripción:** Revisión, formato y preparación del repositorio para entrega académica.

**Objetivo:** GDD completo (1,500+ líneas), BACKLOG con épicas, README navegable, estructura organizada.

**Historias de Usuario incluidas:**
- #8.1 - Revisar ortografía y formato de GDD.md (7 secciones completas)
- #8.2 - Crear README.md principal con navegación y descripción de Astro Salvager
- #8.3 - Verificar enlaces internos entre documentos (GDD ↔ BACKLOG ↔ ARQUITECTURA)
- #8.4 - Generar TOC automáticos en documentos largos
- #8.5 - Crear INICIO_RAPIDO.md con timeline de 6 semanas
- #8.6 - Organizar carpetas: /docs, /diagramas, /mockups, /referencias

**Criterios de aceptación de la Épica:**
- [✓] GDD.md: 1,507 líneas con análisis MDA completo
- [✓] BACKLOG.md: 8 épicas actualizadas para Astro Salvager
- [✓] README.md: Navegación clara, descripción del juego, enlaces funcionales
- [✓] Estructura de carpetas profesional con README en cada folder
- [✓] .gitignore configurado correctamente
- [✓] INICIO_RAPIDO.md con checklist de tareas

**Estimación total:** 13 Story Points

**Prioridad:** 🔴 ALTA - Para entrega

**Estado:** ✅ COMPLETADO

---

## 4. User Stories Detalladas

### 📖 Formato de User Story

Todas las historias siguen esta estructura:

```
Como [ROL],
Quiero [ACCIÓN/FUNCIONALIDAD],
Para [BENEFICIO/VALOR].

Criterios de Aceptación:
- [ ] Criterio 1
- [ ] Criterio 2
- [ ] Criterio 3

Estimación: [X] Story Points
Prioridad: Alta/Media/Baja
Épica: [EPIC #X]
```

---

### EPIC 1: Conceptualización

#### User Story #1.1: Definir Identidad del Juego

**Como** equipo de diseño,  
**Quiero** establecer el género, target y elevator pitch,  
**Para** que todos tengamos la misma visión del proyecto.

**Criterios de Aceptación:**
- [ ] Ficha técnica completada (Sección 1.1 del GDD)
- [ ] Elevator pitch de máx. 3 líneas escrito
- [ ] Género principal y subgénero definidos
- [ ] Público objetivo especificado (edad, perfil)
- [ ] Validado con al menos 2 personas externas

**Tareas técnicas:**
1. Completar tabla de información general
2. Escribir elevator pitch siguiendo la fórmula
3. Definir plataformas objetivo

**Estimación:** 3 Story Points  
**Prioridad:** 🔴 Alta  
**Asignado a:** [Nombre]  
**Épica:** EPIC 1

---

#### User Story #1.2: Análisis de Referencias

**Como** diseñador de juego,  
**Quiero** analizar 3 juegos similares,  
**Para** identificar qué evitar y qué inspirarnos.

**Criterios de Aceptación:**
- [ ] Lista de 3 juegos competidores/similares
- [ ] Para cada juego: capturas, análisis de mecánicas
- [ ] Tabla "Lo bueno" vs "Lo malo" de cada juego
- [ ] Lecciones aprendidas documentadas

**Tareas técnicas:**
1. Investigar juegos del mismo género
2. Capturar pantallas de UI y gameplay
3. Analizar mecánicas core
4. Documentar en sección de referencias

**Estimación:** 5 Story Points  
**Prioridad:** 🟡 Media  
**Asignado a:** [Nombre]  
**Épica:** EPIC 1

---

#### User Story #1.3: Definir USPs (Unique Selling Points)

**Como** product owner,  
**Quiero** listar los 3 puntos únicos del juego,  
**Para** priorizar mecánicas futuras y diferenciarnos.

**Criterios de Aceptación:**
- [ ] Mínimo 3 USPs documentados
- [ ] Cada USP tiene descripción y impacto técnico
- [ ] USPs son verificables (no subjetivos como "es divertido")
- [ ] Revisado por todo el equipo

**Ejemplo de USP bien definido:**
```
USP #1: Sistema de Olfato Visual
- Descripción: El jugador ve "rastros de olor" en lugar de visión directa
- Impacto técnico: Requiere post-procesado shader y sistema de partículas
```

**Estimación:** 3 Story Points  
**Prioridad:** 🔴 Alta  
**Asignado a:** [Nombre]  
**Épica:** EPIC 1

---

#### User Story #1.4: Establecer Pilares de Diseño

**Como** líder de diseño,  
**Quiero** definir 3 pilares fundamentales,  
**Para** guiar todas las decisiones de diseño futuras.

**Criterios de Aceptación:**
- [ ] 3 pilares documentados (ej: "Tensión Constante")
- [ ] Cada pilar tiene explicación de cómo se manifiesta
- [ ] Ejemplos de decisiones que apoya/rechaza cada pilar
- [ ] Consenso del equipo

**Estimación:** 2 Story Points  
**Prioridad:** 🔴 Alta  
**Asignado a:** [Nombre]  
**Épica:** EPIC 1

---

### EPIC 2: Análisis MDA

#### User Story #2.1: Definir Aesthetics (Emociones Objetivo)

**Como** diseñador,  
**Quiero** identificar las emociones que queremos provocar,  
**Para** validar que las mecánicas las generan.

**Criterios de Aceptación:**
- [ ] Tabla de estéticas completada (8 categorías MDA)
- [ ] Prioridad asignada (Alta/Media/Baja) a cada estética
- [ ] Estética principal justificada con al menos 100 palabras
- [ ] Curva emocional diagramada

**Estimación:** 5 Story Points  
**Prioridad:** 🔴 Alta  
**Asignado a:** [Nombre]  
**Épica:** EPIC 2

---

#### User Story #2.2: Identificar Dynamics (Patrones Emergentes)

**Como** diseñador,  
**Quiero** documentar las dinámicas que emergen de las mecánicas,  
**Para** asegurar que el comportamiento del jugador sea el deseado.

**Criterios de Aceptación:**
- [ ] Al menos 3 dinámicas identificadas
- [ ] Cada dinámica lista las mecánicas que la crean
- [ ] Comportamiento emergente descrito claramente
- [ ] Conexión con estética explicada

**Ejemplo:**
```
Dinámica: Sigilo Forzado
Mecánicas: Munición limitada + Enemigos letales + Ruido
Comportamiento: Jugador evita combate aunque pueda disparar
Estética: Genera Tensión (Reto + Sensación)
```

**Estimación:** 8 Story Points  
**Prioridad:** 🔴 Alta  
**Asignado a:** [Nombre]  
**Épica:** EPIC 2

---

#### User Story #2.3: Especificar Mechanics (Reglas Base)

**Como** diseñador técnico,  
**Quiero** listar todas las mecánicas core con sus parámetros,  
**Para** tener especificaciones claras para implementación.

**Criterios de Aceptación:**
- [ ] Mínimo 5 mecánicas core listadas
- [ ] Cada mecánica tiene: Input, Output, Parámetros numéricos
- [ ] Sistemas interconectados identificados
- [ ] Sección 2.3 del GDD completa

**Estimación:** 5 Story Points  
**Prioridad:** 🔴 Alta  
**Asignado a:** [Nombre]  
**Épica:** EPIC 2

---

#### User Story #2.4: Diseñar Core Loop

**Como** diseñador,  
**Quiero** crear el diagrama del bucle principal de juego,  
**Para** visualizar la experiencia repetitiva del jugador.

**Criterios de Aceptación:**
- [ ] Diagrama de flujo del Core Loop creado
- [ ] Descripción narrativa paso a paso
- [ ] Tiempos estimados (min/promedio/max)
- [ ] Validado que el loop es "divertido" en papel

**Estimación:** 3 Story Points  
**Prioridad:** 🔴 Alta  
**Asignado a:** [Nombre]  
**Épica:** EPIC 2

---

### EPIC 3: Mecánicas y Sistemas

#### User Story #3.1: Sistema de Movimiento

**Como** diseñador técnico,  
**Quiero** especificar todas las variables de movimiento,  
**Para** que un programador pueda implementarlo sin ambigüedades.

**Criterios de Aceptación:**
- [ ] Tabla de parámetros completa (velocidades, aceleración, etc.)
- [ ] Diagrama de máquina de estados (Idle/Walk/Run/etc.)
- [ ] Transiciones entre estados documentadas
- [ ] Input mapping definido

**Estimación:** 5 Story Points  
**Prioridad:** 🔴 Alta  
**Asignado a:** [Nombre]  
**Épica:** EPIC 3

---

#### User Story #3.2: Sistema de Combate

**Como** diseñador de gameplay,  
**Quiero** definir las mecánicas de combate con fórmulas de daño,  
**Para** crear un combate balanceado.

**Criterios de Aceptación:**
- [ ] Acciones de combate documentadas (ataque, defensa, etc.)
- [ ] Fórmula de daño matemáticamente definida
- [ ] Tabla de HP de jugador y enemigos
- [ ] Cooldowns y velocidades especificadas

**Estimación:** 8 Story Points  
**Prioridad:** 🔴 Alta  
**Asignado a:** [Nombre]  
**Épica:** EPIC 3

---

#### User Story #3.3: Sistema de Inventario

**Como** diseñador de sistemas,  
**Quiero** diseñar el inventario y economía de recursos,  
**Para** crear decisiones significativas de gestión.

**Criterios de Aceptación:**
- [ ] Tipo de inventario elegido y justificado
- [ ] Tabla de recursos completada (fuente, uso, límite)
- [ ] Lista de items por categoría
- [ ] Relación con otros sistemas documentada

**Estimación:** 5 Story Points  
**Prioridad:** 🟡 Media  
**Asignado a:** [Nombre]  
**Épica:** EPIC 3

---

#### User Story #3.4: Sistema de Progresión

**Como** diseñador,  
**Quiero** definir cómo progresa el jugador,  
**Para** mantener motivación a largo plazo.

**Criterios de Aceptación:**
- [ ] Tipo de progresión elegido (XP, Skill Tree, etc.)
- [ ] Curva de experiencia con fórmula matemática
- [ ] Tabla de niveles y desbloqueos
- [ ] Recompensas por progreso definidas

**Estimación:** 5 Story Points  
**Prioridad:** 🟡 Media  
**Asignado a:** [Nombre]  
**Épica:** EPIC 3

---

#### User Story #3.5: Sistema de IA

**Como** diseñador técnico,  
**Quiero** diseñar el comportamiento de enemigos,  
**Para** crear desafíos variados e interesantes.

**Criterios de Aceptación:**
- [ ] Al menos 2 tipos de enemigos diseñados
- [ ] Cada tipo tiene: comportamiento, stats, ataques
- [ ] Máquina de estados de IA diagramada
- [ ] Rangos de detección y persecución especificados

**Estimación:** 8 Story Points  
**Prioridad:** 🔴 Alta  
**Asignado a:** [Nombre]  
**Épica:** EPIC 3

---

#### User Story #3.6: Input Mapping (Controles)

**Como** diseñador de UX,  
**Quiero** mapear todos los controles,  
**Para** asegurar ergonomía y accesibilidad.

**Criterios de Aceptación:**
- [ ] Tabla de controles para teclado/ratón
- [ ] Tabla de controles para gamepad
- [ ] Controles para móvil (si aplica)
- [ ] Alternativas para accesibilidad consideradas

**Estimación:** 3 Story Points  
**Prioridad:** 🟡 Media  
**Asignado a:** [Nombre]  
**Épica:** EPIC 3

---

### EPIC 4: Narrativa

#### User Story #4.1: Premisa y Contexto del Mundo

**Como** narrative designer,  
**Quiero** establecer el mundo y conflicto principal,  
**Para** dar contexto a las acciones del jugador.

**Criterios de Aceptación:**
- [ ] Descripción del mundo (dónde/cuándo) - 200+ palabras
- [ ] Conflicto principal claramente definido
- [ ] Antagonista o fuerza opositora identificada
- [ ] Temas principales documentados

**Estimación:** 5 Story Points  
**Prioridad:** 🟡 Media  
**Asignado a:** [Nombre]  
**Épica:** EPIC 4

---

#### User Story #4.2: Diseño del Protagonista

**Como** narrative designer,  
**Quiero** crear una ficha completa del protagonista,  
**Para** tener un personaje coherente y motivado.

**Criterios de Aceptación:**
- [ ] Ficha del protagonista completa (nombre, origen, motivación)
- [ ] Habilidad única que lo hace especial
- [ ] Arco narrativo (cómo cambia) definido
- [ ] Conexión con las mecánicas del juego

**Estimación:** 3 Story Points  
**Prioridad:** 🟡 Media  
**Asignado a:** [Nombre]  
**Épica:** EPIC 4

---

#### User Story #4.3: Personajes Secundarios

**Como** narrative designer,  
**Quiero** diseñar al menos 3 personajes secundarios,  
**Para** enriquecer el mundo y dar apoyo narrativo.

**Criterios de Aceptación:**
- [ ] Mínimo 3 NPCs diseñados (nombre, rol, relación)
- [ ] Al menos 1 aliado y 1 antagonista
- [ ] Relación con el protagonista establecida
- [ ] Propósito narrativo de cada uno claro

**Estimación:** 5 Story Points  
**Prioridad:** 🟢 Baja  
**Asignado a:** [Nombre]  
**Épica:** EPIC 4

---

#### User Story #4.4: Estructura Narrativa (3 Actos)

**Como** narrative designer,  
**Quiero** estructurar la historia en 3 actos,  
**Para** tener un ritmo narrativo clásico y efectivo.

**Criterios de Aceptación:**
- [ ] Acto 1 definido con eventos clave
- [ ] Acto 2 definido con punto medio y clímax
- [ ] Acto 3 definido con resolución
- [ ] Duración aproximada de cada acto

**Estimación:** 5 Story Points  
**Prioridad:** 🟡 Media  
**Asignado a:** [Nombre]  
**Épica:** EPIC 4

---

#### User Story #4.5: Integración Narrativa con Gameplay

**Como** diseñador,  
**Quiero** definir cómo se cuenta la historia durante el juego,  
**Para** que narrativa y gameplay se refuercen.

**Criterios de Aceptación:**
- [ ] Métodos de storytelling elegidos (cinemáticas, diálogos, etc.)
- [ ] Balance entre cutscenes y gameplay definido
- [ ] Environmental storytelling considerado
- [ ] Momentos narrativos clave mapeados a niveles

**Estimación:** 3 Story Points  
**Prioridad:** 🟡 Media  
**Asignado a:** [Nombre]  
**Épica:** EPIC 4

---

### EPIC 5: Diseño de Niveles

#### User Story #5.1: Filosofía de Level Design

**Como** level designer,  
**Quiero** establecer principios de diseño de niveles,  
**Para** mantener coherencia en todos los niveles.

**Criterios de Aceptación:**
- [ ] Al menos 3 principios documentados
- [ ] Ejemplos de cómo se aplican
- [ ] Consideraciones de accesibilidad
- [ ] Flujo de tutorialización definido

**Estimación:** 3 Story Points  
**Prioridad:** 🟡 Media  
**Asignado a:** [Nombre]  
**Épica:** EPIC 5

---

#### User Story #5.2: Lista y Estructura de Niveles

**Como** level designer,  
**Quiero** crear una tabla con todos los niveles planeados,  
**Para** tener una visión de la progresión completa.

**Criterios de Aceptación:**
- [ ] Tabla con mínimo 5 niveles/zonas
- [ ] Cada nivel tiene: nombre, temática, duración, dificultad
- [ ] Mecánicas introducidas por nivel documentadas
- [ ] Diagrama de flujo de progresión entre niveles

**Estimación:** 5 Story Points  
**Prioridad:** 🔴 Alta  
**Asignado a:** [Nombre]  
**Épica:** EPIC 5

---

#### User Story #5.3 - #5.5: Diseño Detallado de Niveles

**Como** level designer,  
**Quiero** diseñar [Nivel X] con layout, enemigos y objetivos,  
**Para** tener un blueprint implementable.

**Criterios de Aceptación:**
- [ ] Boceto/mapa del nivel creado
- [ ] Objetivos de diseño (pedagógico/narrativo/emocional)
- [ ] Ubicación de enemigos y puzzles
- [ ] Camino crítico documentado
- [ ] Tiempos estimados (speedrun/casual/completista)

**Estimación:** 5 Story Points (cada nivel)  
**Prioridad:** 🔴 Alta (nivel 1), 🟡 Media (resto)  
**Asignado a:** [Nombre]  
**Épica:** EPIC 5

---

#### User Story #5.6: Curva de Dificultad

**Como** diseñador,  
**Quiero** graficar la curva de dificultad del juego,  
**Para** asegurar pacing adecuado.

**Criterios de Aceptación:**
- [ ] Gráfica de dificultad vs progreso
- [ ] Justificación de subidas/bajadas
- [ ] Picos de dificultad alineados con bosses
- [ ] Momentos de descanso identificados

**Estimación:** 3 Story Points  
**Prioridad:** 🟡 Media  
**Asignado a:** [Nombre]  
**Épica:** EPIC 5

---

### EPIC 6: Arte y Audio

#### User Story #6.1: Estilo Visual y Referencias

**Como** art director,  
**Quiero** definir el estilo visual y crear moodboard,  
**Para** guiar la producción de assets.

**Criterios de Aceptación:**
- [ ] Estilo visual elegido y justificado
- [ ] Moodboard con mínimo 10 imágenes de referencia
- [ ] Referencias categorizadas (personajes, entorno, UI, FX)
- [ ] Documento de referencias guardado en `/referencias/visual/`

**Estimación:** 5 Story Points  
**Prioridad:** 🟡 Media  
**Asignado a:** [Nombre]  
**Épica:** EPIC 6

---

#### User Story #6.2: Paleta de Colores

**Como** art director,  
**Quiero** definir la paleta de colores del juego,  
**Para** mantener coherencia visual.

**Criterios de Aceptación:**
- [ ] Paleta principal con códigos hex
- [ ] Paleta por zona/nivel definida
- [ ] Uso de cada color documentado (UI, entorno, efectos)
- [ ] Consideraciones de accesibilidad (daltonismo)

**Estimación:** 3 Story Points  
**Prioridad:** 🟡 Media  
**Asignado a:** [Nombre]  
**Épica:** EPIC 6

---

#### User Story #6.3: Lista de Assets Necesarios

**Como** productor,  
**Quiero** una tabla completa de assets a crear,  
**Para** estimar recursos de producción.

**Criterios de Aceptación:**
- [ ] Tabla categorizada (personajes, entorno, UI, props, FX)
- [ ] Cantidad estimada de cada tipo
- [ ] Prioridad asignada (Alta/Media/Baja)
- [ ] Complejidad estimada

**Estimación:** 3 Story Points  
**Prioridad:** 🟡 Media  
**Asignado a:** [Nombre]  
**Épica:** EPIC 6

---

#### User Story #6.4: Dirección Musical

**Como** audio director,  
**Quiero** definir el estilo musical y lista de tracks,  
**Para** guiar la composición/selección de música.

**Criterios de Aceptación:**
- [ ] Estilo musical definido con referencias
- [ ] Tabla de music cues (contexto, duración, tempo/mood)
- [ ] Mínimo 5 tracks identificados
- [ ] Sistema de audio dinámico (si aplica) descrito

**Estimación:** 5 Story Points  
**Prioridad:** 🟢 Baja  
**Asignado a:** [Nombre]  
**Épica:** EPIC 6

---

#### User Story #6.5: Lista de SFX

**Como** audio designer,  
**Quiero** listar todos los efectos de sonido necesarios,  
**Para** planificar producción de audio.

**Criterios de Aceptación:**
- [ ] SFX categorizados (jugador, combate, ambiente, UI)
- [ ] Mínimo 20 SFX identificados
- [ ] Prioridad de cada SFX
- [ ] Referencia de ejemplo para cada uno

**Estimación:** 3 Story Points  
**Prioridad:** 🟢 Baja  
**Asignado a:** [Nombre]  
**Épica:** EPIC 6

---

#### User Story #6.6: Mockups de UI

**Como** UI/UX designer,  
**Quiero** crear wireframes de las pantallas principales,  
**Para** validar flujos antes de arte final.

**Criterios de Aceptación:**
- [ ] Wireframe del menú principal
- [ ] Wireframe del HUD durante gameplay
- [ ] Wireframe de menú de pausa/inventario
- [ ] Al menos 2 mockups guardados en `/mockups/ui/`

**Estimación:** 8 Story Points  
**Prioridad:** 🔴 Alta  
**Asignado a:** [Nombre]  
**Épica:** EPIC 6

---

### EPIC 7: Arquitectura Técnica

#### User Story #7.1: Definir Stack Tecnológico

**Como** technical lead,  
**Quiero** elegir y justificar el stack tecnológico,  
**Para** tomar decisiones informadas de arquitectura.

**Criterios de Aceptación:**
- [ ] Motor de juego elegido y justificado (Babylon.js)
- [ ] Lenguaje seleccionado (TypeScript)
- [ ] Build tools definidas (Vite/Webpack)
- [ ] Librerías adicionales listadas con propósito

**Estimación:** 3 Story Points  
**Prioridad:** 🔴 Alta  
**Asignado a:** [Nombre]  
**Épica:** EPIC 7

---

#### User Story #7.2: Diagrama de Arquitectura de Alto Nivel

**Como** arquitecto de software,  
**Quiero** crear un diagrama de capas de la aplicación,  
**Para** visualizar la estructura general del sistema.

**Criterios de Aceptación:**
- [ ] Diagrama con capas claramente separadas
- [ ] Sistemas principales identificados
- [ ] Relaciones entre componentes visibles
- [ ] Guardado en `/diagramas/arquitectura_general.png`

**Estimación:** 5 Story Points  
**Prioridad:** 🔴 Alta  
**Asignado a:** [Nombre]  
**Épica:** EPIC 7

---

#### User Story #7.3: Diagrama de Clases UML

**Como** desarrollador,  
**Quiero** un diagrama de clases de los componentes principales,  
**Para** entender las relaciones y herencias.

**Criterios de Aceptación:**
- [ ] Mínimo 5 clases principales diagramadas
- [ ] Relaciones (herencia, composición, asociación) visibles
- [ ] Atributos y métodos principales incluidos
- [ ] Formato UML estándar utilizado

**Estimación:** 8 Story Points  
**Prioridad:** 🔴 Alta  
**Asignado a:** [Nombre]  
**Épica:** EPIC 7

---

#### User Story #7.4: Diagrama de Casos de Uso

**Como** analista,  
**Quiero** diagramar los casos de uso principales,  
**Para** visualizar interacciones del jugador con el sistema.

**Criterios de Aceptación:**
- [ ] Actor (Jugador) identificado
- [ ] Mínimo 5 casos de uso principales
- [ ] Relaciones include/extend si aplican
- [ ] Guardado en `/diagramas/casos_uso.png`

**Estimación:** 5 Story Points  
**Prioridad:** 🟡 Media  
**Asignado a:** [Nombre]  
**Épica:** EPIC 7

---

#### User Story #7.5: Patrones de Diseño

**Como** arquitecto de software,  
**Quiero** identificar y justificar los patrones de diseño,  
**Para** aplicar buenas prácticas de ingeniería.

**Criterios de Aceptación:**
- [ ] Mínimo 3 patrones identificados
- [ ] Cada patrón tiene: uso, justificación, ejemplo
- [ ] Patrones apropiados para game dev (Singleton, Observer, Factory, etc.)
- [ ] Documentado en sección de arquitectura

**Estimación:** 8 Story Points  
**Prioridad:** 🔴 Alta  
**Asignado a:** [Nombre]  
**Épica:** EPIC 7

---

#### User Story #7.6: Sistema de Persistencia

**Como** developer,  
**Quiero** diseñar el sistema de guardado,  
**Para** definir cómo se persisten los datos.

**Criterios de Aceptación:**
- [ ] Qué datos se guardan listado
- [ ] Formato elegido (JSON, LocalStorage, etc.)
- [ ] Estructura de datos de guardado definida
- [ ] Estrategia de versionado considerada

**Estimación:** 5 Story Points  
**Prioridad:** 🟡 Media  
**Asignado a:** [Nombre]  
**Épica:** EPIC 7

---

### EPIC 8: Documentación Final

#### User Story #8.1: Revisión de Calidad

**Como** editor,  
**Quiero** revisar toda la documentación,  
**Para** eliminar errores y mejorar claridad.

**Criterios de Aceptación:**
- [ ] Todos los documentos revisados ortográficamente
- [ ] Formato consistente (headers, listas, tablas)
- [ ] Sin secciones [COMPLETA AQUÍ] pendientes
- [ ] Lenguaje claro y profesional

**Estimación:** 5 Story Points  
**Prioridad:** 🔴 Alta  
**Asignado a:** [Nombre]  
**Épica:** EPIC 8

---

#### User Story #8.2: README y Navegación

**Como** lector del proyecto,  
**Quiero** un README claro,  
**Para** navegar fácilmente por toda la documentación.

**Criterios de Aceptación:**
- [ ] README.md completo con índice
- [ ] Enlaces a todos los documentos principales
- [ ] Estructura del proyecto documentada
- [ ] Instrucciones de navegación claras

**Estimación:** 3 Story Points  
**Prioridad:** 🔴 Alta  
**Asignado a:** [Nombre]  
**Épica:** EPIC 8

---

#### User Story #8.3: Verificar Enlaces

**Como** QA,  
**Quiero** verificar que todos los enlaces funcionen,  
**Para** evitar links rotos en la entrega.

**Criterios de Aceptación:**
- [ ] Todos los enlaces internos verificados
- [ ] Enlaces a imágenes/diagramas funcionan
- [ ] Referencias externas accesibles
- [ ] Sin rutas rotas

**Estimación:** 2 Story Points  
**Prioridad:** 🟡 Media  
**Asignado a:** [Nombre]  
**Épica:** EPIC 8

---

#### User Story #8.4: Control de Versiones

**Como** project manager,  
**Quiero** documentar el historial de versiones,  
**Para** tener trazabilidad de cambios.

**Criterios de Aceptación:**
- [ ] Tabla de versiones en GDD actualizada
- [ ] Git commits con mensajes descriptivos
- [ ] Tag de versión final creado
- [ ] Changelog generado (opcional)

**Estimación:** 2 Story Points  
**Prioridad:** 🟢 Baja  
**Asignado a:** [Nombre]  
**Épica:** EPIC 8

---

#### User Story #8.5: Preparar Presentación

**Como** presentador,  
**Quiero** crear slides de presentación del proyecto,  
**Para** defender el diseño ante el profesor/evaluadores.

**Criterios de Aceptación:**
- [ ] Presentación de 10-15 slides
- [ ] Incluye: Concepto, MDA, Arquitectura, Mockups
- [ ] Duración estimada: 10-15 minutos
- [ ] Formato exportado (PDF o PPT)

**Estimación:** 5 Story Points  
**Prioridad:** 🟡 Media (si se requiere presentación)  
**Asignado a:** [Nombre]  
**Épica:** EPIC 8

---

## 5. Sprint Planning

### Sprint 0: Inception y Setup (Semana 1)

**Objetivo:** Configurar el proyecto y definir bases creativas

**Duración:** 1 semana

**User Stories incluidas:**
- #1.1 - Definir identidad del juego (3 pts)
- #1.2 - Análisis de referencias (5 pts)
- #1.3 - Definir USPs (3 pts)
- #1.4 - Establecer pilares (2 pts)
- Configurar repositorio GitHub

**Total:** 13 Story Points

**Entregable:** Sección 1 del GDD completa + Repositorio configurado

---

### Sprint 1: Análisis MDA (Semana 2)

**Objetivo:** Completar el núcleo teórico del diseño

**Duración:** 1 semana

**User Stories incluidas:**
- #2.1 - Definir Aesthetics (5 pts)
- #2.2 - Identificar Dynamics (8 pts)
- #2.3 - Especificar Mechanics (5 pts)
- #2.4 - Diseñar Core Loop (3 pts)

**Total:** 21 Story Points

**Entregable:** Sección 2 del GDD completa (Análisis MDA)

---

### Sprint 2: Sistemas de Gameplay (Semana 3)

**Objetivo:** Especificar todos los sistemas mecánicos

**Duración:** 1 semana

**User Stories incluidas:**
- #3.1 - Sistema de movimiento (5 pts)
- #3.2 - Sistema de combate (8 pts)
- #3.3 - Sistema de inventario (5 pts)
- #3.5 - Sistema de IA (8 pts)

**Total:** 26 Story Points (Sprint largo)

**Entregable:** Sección 3 del GDD completa

---

### Sprint 3: Narrativa y Niveles (Semana 4)

**Objetivo:** Crear mundo narrativo y diseñar niveles

**Duración:** 1 semana

**User Stories incluidas:**
- #4.1 - Premisa del mundo (5 pts)
- #4.2 - Diseño de protagonista (3 pts)
- #4.4 - Estructura narrativa (5 pts)
- #5.1 - Filosofía de level design (3 pts)
- #5.2 - Lista de niveles (5 pts)
- #5.3 - Diseño de Nivel 1 (5 pts)

**Total:** 26 Story Points

**Entregable:** Secciones 4 y 5 del GDD

---

### Sprint 4: Arte y Arquitectura (Semana 5)

**Objetivo:** Definir look & feel y arquitectura técnica

**Duración:** 1 semana

**User Stories incluidas:**
- #6.1 - Estilo visual (5 pts)
- #6.2 - Paleta de colores (3 pts)
- #6.6 - Mockups UI (8 pts)
- #7.1 - Stack tecnológico (3 pts)
- #7.2 - Arquitectura alto nivel (5 pts)
- #7.3 - Diagrama de clases (8 pts)

**Total:** 32 Story Points (Sprint complejo)

**Entregable:** Secciones 6 y 7 del GDD + Diagramas

---

### Sprint 5: Refinamiento y Entrega (Semana 6)

**Objetivo:** Pulir documentación y preparar entrega final

**Duración:** 1 semana

**User Stories incluidas:**
- #7.5 - Patrones de diseño (8 pts)
- #8.1 - Revisión de calidad (5 pts)
- #8.2 - README (3 pts)
- #8.3 - Verificar enlaces (2 pts)
- #8.5 - Presentación (5 pts)

**Total:** 23 Story Points

**Entregable:** Proyecto completo listo para evaluar

---

## 6. Estimaciones y Velocity

### 6.1 Velocity Estimado

**Velocity:** Cantidad de Story Points que el equipo puede completar por sprint.

**Para este proyecto (1 persona trabajando medio tiempo):**
- Velocity estimado: **15-20 Story Points por semana**
- Ajustar según disponibilidad real

**Para equipos de 2-3 personas:**
- Velocity estimado: **25-35 Story Points por semana**

### 6.2 Burndown Chart

Trackear el progreso con un gráfico de burndown:

```
Story Points
  Restantes
     150│●
        │ ●
     100│  ●
        │   ●●
      50│     ●●
        │       ●●
       0│_________●●
         Sprint: 0 1 2 3 4 5

```

### 6.3 Ajustes

Si un sprint se sobrepasa:
1. **Re-estimar:** Las tareas fueron más complejas de lo pensado
2. **Mover stories:** Pasar al siguiente sprint
3. **Simplificar:** Reducir scope de features no críticas

---

## 7. Definition of Done (DoD)

Una User Story se considera "DONE" cuando:

### Para Documentación:
- [ ] Ortografía y gramática revisadas
- [ ] Formato Markdown correcto
- [ ] Enlaces funcionales (si aplica)

### Para Diagramas:
- [ ] Diagrama creado con herramienta profesional
- [ ] Legible y con resolución adecuada
- [ ] Guardado en carpeta correcta (`/diagramas`)
- [ ] Referenciado desde el documento principal

### Para Mockups:
- [ ] Wireframe completo y claro
- [ ] Elementos UI identificables
- [ ] Guardado en carpeta `/mockups`
- [ ] Anotaciones de funcionalidad (si es necesario)

---

## 📌 Notas Finales

### Tips de Gestión

1. **Actualiza el board diariamente:** Mueve las cards según progresas
2. **No acumules Work In Progress (WIP):** Máximo 2-3 tareas simultáneas
3. **Si te bloqueas:** Marca la issue como `blocked` y pasa a otra
4. **Celebra los hitos:** Al completar una Épica, date un break

### Retrospectivas

Al final de cada sprint, hazte estas preguntas:
- ¿Qué salió bien?
- ¿Qué podría mejorar?
- ¿Las estimaciones fueron precisas?
- ¿Hubo impedimentos?
