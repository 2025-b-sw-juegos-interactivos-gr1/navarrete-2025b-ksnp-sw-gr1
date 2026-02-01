# 🎨 Arte y Diseño Visual/Auditivo - Astro Salvager

> **Dirección Artística Retro-Futurista Synthwave**  
> **Look & Feel:** Low-Poly Neón + Audio Electrónico Dinámico  
> **Proyecto:** Astro Salvager  
> **Fecha:** 1 de Febrero 2026

---

## 📑 Tabla de Contenidos

1. [Visión Artística General](#1-visión-artística-general)
2. [Dirección Visual](#2-dirección-visual)
3. [Paleta de Colores](#3-paleta-de-colores)
4. [Assets y Producción](#4-assets-y-producción)
5. [Diseño de UI/UX](#5-diseño-de-uiux)
6. [Dirección de Audio](#6-dirección-de-audio)
7. [Referencias y Moodboards](#7-referencias-y-moodboards)

---

## 1. Visión Artística General de Astro Salvager

### 1.1 Elevator Pitch Visual

> **El "look" de Astro Salvager en una frase:**
>
> _"Low-poly retro-futurista que combina **Tron** con **Geometry Wars**, creando una atmósfera **nostálgica synthwave** de los arcades de los 80s en el espacio"_

**Desglose:**
- **Low-poly:** Modelos 3D simples (100-500 polígonos) con geometría clara
- **Retro-futurista:** Estética de cómo imaginaban el futuro en los años 80
- **Tron:** Líneas neón brillantes sobre fondos oscuros
- **Geometry Wars:** Partículas vibrantes, feedback visual intenso
- **Synthwave:** Paleta cyan/magenta/púrpura, música electrónica

### 1.2 Pilares Artísticos

Los 3 principios que guían todas las decisiones visuales de Astro Salvager:

1. **"Claridad Arcade"**
   - Todo objeto debe ser identificable instantáneamente a distancia
   - Sin detalles que distraigan del gameplay
   - Siluetas simples y colores sólidos
   - Prioridad: Gameplay > Realismo visual

2. **"Neón Sobre Negro"**
   - Fondo espacial oscuro (#0A0E27) para hacer que los neones resalten
   - Todos los objetos tienen emisión (glow) para contraste máximo
   - Sin sombras realistas - iluminación stylizada
   - Efecto: Alto contraste = mejor legibilidad

3. **"Nostalgia Sintética"**
   - Homenaje a arcades clásicos (Asteroids, Pac-Man) pero en 3D moderno
   - Sintetizadores de los 80s en el audio
   - UI minimalista tipo arcade coin-op
   - Balance: Retro en espíritu, moderno en ejecución

### 1.3 Mood y Atmósfera

**Atmósfera objetivo:**  
Un arcade espacial oscuro pero vibrante, donde la soledad del espacio contrasta con la energía frenética del gameplay. Como entrar a un arcade de los 80s en una estación espacial abandonada.

**Adjetivos clave:**
- **Nostálgico:** Evoca arcades retro sin ser literalmente pixel art
- **Hipnótico:** Neones pulsantes, partículas que invitan a "un turno más"
- **Minimalista:** Sin sobrecarga visual, enfoque en lo esencial
- **Kinético:** Sentido de velocidad y movimiento constante
- **Cósmico:** Soledad del espacio profundo, scale épico

**Referencias cinematográficas:**
- **Tron (1982):** Estética neón, geometría simple, mundo digital oscuro
- **Blade Runner (1982):** Neones sobre oscuridad, atmósfera retrofuturista
- **Drive (2011):** Paleta synthwave, música electrónica nostálgica
- **2001: A Space Odyssey (1968):** Soledad espacial, minimalismo visual

---

## 2. Dirección Visual de Astro Salvager

### 2.1 Estilo Artístico Principal

**Seleccionado:** ✅ **Low-Poly 3D Estilizado con Neones**

#### Descripción Detallada

**Características técnicas:**
- **Conteo de polígonos:** 100-500 por objeto (extremadamente bajo)
- **Texturas:** Flat colors sin gradientes (excepto glow)
- **Shaders:** Emissive materials para efecto neón
- **Iluminación:** Sin shadows casting, solo ambient + emissive
- **Post-processing:** Bloom para glow, opcional vignette sutil

**Ventajas para Astro Salvager:**
- ✅ **Performance excelente:** 60 FPS garantizado con 50+ objetos
- ✅ **Producción rápida:** Modelos simples = menos tiempo de creación
- ✅ **Estética única:** Se distingue de otros juegos espaciales realistas
- ✅ **Legibilidad:** Objetos claros incluso en caos visual
- ✅ **Escalabilidad:** Funciona en hardware modesto (web game)

**Desventajas (y cómo las mitigamos):**
- ❌ Puede verse "barato" → Mitigado con efectos de partículas de calidad
- ❌ Menos "impresionante" en screenshots → Mitigado con paleta vibrante
- ❌ Requiere concept art sólido → Hacemos referencias visuales claras

**Referencias de estilo:**
1. **Superhot:** Low-poly extremo con colores sólidos
2. **Rez Infinite:** Geometría simple con efectos luminosos
3. **Thumper:** Túneles neón, minimalismo agresivo
4. **Furi:** Neones, glow intenso, estética synthwave
5. **Clustertruck:** Low-poly colorido, velocidad visual

#### Subtipos de Low-Poly (nuestro approach)

**Astro Salvager usa:** "Low-Poly Luminoso" (Glow-Heavy Low-Poly)

Características:
- Geometría simple (cubos, esferas, poliedros básicos)
- Sin texturas detalladas - colores sólidos por cara
- **CRÍTICO:** Cada objeto emite luz (emissive shader)
- Bordes definidos sin suavizado (flat shading opcional)
- Partículas billboard simples pero abundantes

**Ejemplos de referencia:** Minecraft, Teardown, Crossy Road

---

#### Opción 5: 2D Hand-Drawn

**Descripción:** Arte dibujado a mano, frame by frame (como animación tradicional).

**Ventajas:**
- ✅ Belleza artística única
- ✅ Expresión artística máxima

**Desventajas:**
- ❌ Producción MUY lenta y cara
- ❌ Difícil de animar (muchos frames)

**Ejemplos de referencia:** Cuphead, Hollow Knight, Ori

---

### 2.2 Estilo Elegido para Nuestro Juego

**Estilo principal:** [Elige uno de los anteriores]

**Justificación:**
```
[Explica POR QUÉ elegiste este estilo]

Ejemplo:
"Elegimos Pixel Art (16-bit style) porque:
1. Apela al público objetivo (jugadores nostálgicos de 25-35 años)
2. Permite iteración rápida durante pre-producción
3. Nuestro equipo tiene experiencia en Aseprite
4. Se alinea con la atmósfera retro-futurista que buscamos"
```

**Características específicas:**
- Resolución de sprites: [Ej: 32x32, 64x64 pixels]
- Paleta limitada: [Ej: 16 colores, 32 colores]
- Frame rate de animación: [Ej: 12 FPS para animaciones]
- Técnicas especiales: [Ej: Dithering para sombras, Subpixel animation]

---

### 2.3 Referencias Visuales

#### Top 3 Referencias Principales

**Referencia #1: [Nombre del Juego/Arte]**
- **Qué tomamos:** [Iluminación, paleta, composición de cámara]
- **Qué evitamos:** [Aspectos que NO queremos replicar]
- **Imagen:** [Incluir en `/referencias/visual/ref_01.jpg`]

**Referencia #2: [Nombre]**
- **Qué tomamos:**
- **Qué evitamos:**
- **Imagen:**

**Referencia #3: [Nombre]**
- **Qué tomamos:**
- **Qué evitamos:**
- **Imagen:**

#### Moodboard Completo

> **Ubicación:** `/referencias/visual/moodboard.png`

**Categorías del Moodboard:**
- [ ] Personajes (5+ imágenes)
- [ ] Ambientes/Escenarios (5+ imágenes)
- [ ] Iluminación (3+ imágenes)
- [ ] UI/HUD (3+ imágenes)
- [ ] Efectos especiales (3+ imágenes)

**Herramientas para crear moodboard:**
- Pinterest Board (colección pública)
- Figma / Miro
- PureRef (app para referencias)
- Collage en Photoshop

---

### 2.4 Iluminación y Atmósfera

#### 2.4.1 Sistema de Iluminación

**Tipo de iluminación principal:**
- [ ] Iluminación dinámica (tiempo real, sombras dinámicas)
- [ ] Iluminación baked (pre-calculada, mejor performance)
- [ ] Híbrida (mezcla de ambas)
- [ ] Pixel art (sin iluminación 3D real)

**Configuración de luces:**

| Tipo de Luz | Uso | Configuración |
|-------------|-----|---------------|
| **Directional Light** | Sol, luz de día | Intensidad: 1.0, Color: #FFE8CC |
| **Point Lights** | Antorchas, lámparas | Radio: 10m, Intensidad: 0.8 |
| **Spot Lights** | Focos, linternas | Ángulo: 45°, Radio: 15m |
| **Ambient Light** | Luz global base | Color: #1A1A2E, Intensidad: 0.2 |

#### 2.4.2 Esquemas de Iluminación por Zona

**Zona 1: [Nombre - Ej: "Bosque Encantado"]**
- **Hora del día:** Crepúsculo
- **Luz principal:** Directional (sol bajo, naranja)
- **Luces secundarias:** Partículas mágicas (point lights azules)
- **Mood:** Misterioso, mágico
- **Referencia:** [Imagen]

**Zona 2: [Nombre - Ej: "Ciudad Cyberpunk"]**
- **Hora del día:** Noche
- **Luz principal:** Neones (emissive materials)
- **Luces secundarias:** Carteles publicitarios, hologramas
- **Mood:** Vibrante, caótico
- **Referencia:** [Imagen]

---

## 3. Paleta de Colores

### 3.1 Paleta Principal

> **Herramienta recomendada:** https://coolors.co/

#### Paleta General del Juego## 3. Paleta de Colores de Astro Salvager

### 3.1 Paleta Principal Synthwave

**Filosofía:** "Neón sobre negro" - Alto contraste para máxima legibilidad arcade

| Nombre | Hex | Preview | Uso Principal en Astro Salvager |
|--------|-----|---------|----------------------------------|
| **Cyan Neón** | `#00FFFF` | 🔷 | Nave del jugador, chatarra valiosa, trails, UI principal |
| **Magenta Eléctrico** | `#FF00FF` | 🔶 | Asteroides peligrosos, advertencias, bordes de zona peligrosa |
| **Púrpura Profundo** | `#8B00FF` | 🟪 | Nebulosas de fondo, partículas ambientales, efectos de combo |
| **Naranja Retro** | `#FF6600` | 🟧 | Explosiones, colisiones, efectos de daño, alertas de tiempo |
| **Blanco Brillante** | `#FFFFFF` | ⬜ | Estrellas en skybox, destellos, highlights de recolección |
| **Negro Espacial** | `#0A0E27` | ⬛ | Fondo del skybox, áreas oscuras, base de UI |
| **Gris Metálico** | `#3C3C3C` | ⬜ | Casco de la nave, asteroides sin glow, elementos neutros |

### 3.2 Paletas por Zona de la Arena

Astro Salvager tiene una arena única pero 3 zonas concéntricas con identidad visual:

#### Zona Segura (Centro - Radio 0-15u)

**Paleta dominante:**
- **Cyan** `#00FFFF` + **Azul Suave** `#4169E1`
- Iluminación ambiental azulada
- Partículas flotantes escasas

**Mood cromático:** Frío, calmado, tecnológico

**Efecto psicológico:** "Estás a salvo aquí, pero los puntos son bajos"

#### Zona Media (Radio 15-30u)

**Paleta dominante:**
- **Púrpura** `#8B00FF` + **Cyan** `#00FFFF` (mezclado)
- Iluminación neutra/transicional
- Partículas medias

**Mood cromático:** Equilibrado, tensión moderada

**Efecto psicológico:** "Riesgo razonable con recompensa decente"

#### Zona Peligrosa (Bordes - Radio 30-50u)

**Paleta dominante:**
- **Magenta** `#FF00FF` + **Rojo** `#FF0033`
- Glow rojo pulsante en bordes invisibles
- Partículas densas, trails de obstáculos

**Mood cromático:** Cálido agresivo, alerta máxima

**Efecto psicológico:** "Alto riesgo = alta recompensa, adrenalina"

**Efecto visual de advertencia:**
```
Al acercarse a 5 unidades del borde:
- Bordes pulsan rojo (1 Hz)
- Sonido de advertencia
- Ligero vignette rojo en pantalla
```

---

### 3.3 Psicología del Color en Astro Salvager

**Uso estratégico del color para comunicar información de gameplay:**

| Color | Emoción/Asociación | Uso en Gameplay de Astro Salvager |
|-------|-------------------|-----------------------------------|
| 🔷 **Cyan** | Tecnología, futurista, neutral positivo | Nave jugador = cyan para fácil identificación. Chatarra = cyan para "recógeme" |
| 🔶 **Magenta/Rojo** | Peligro inminente, alerta | Asteroides letales. Al verlos, el jugador sabe instintivamente "evitar" |
| 🟪 **Púrpura** | Misterio espacial, profundidad | Fondo nebuloso, no distrae pero añade atmósfera cósmica |
| 🟧 **Naranja** | Atención urgente, explosión | Colisión = naranja brillante. Feedback visual inmediato de error |
| ⬜ **Blanco** | Claridad máxima, éxito | Destellos al recolectar. Sensación de "logro" instantáneo |
| ⬛ **Negro espacial** | Vacío, soledad, contexto | Fondo que hace resaltar todo lo demás. Estética de "vacío espacial" |

**Principio de diseño:** Color = Información

- ✅ **Cyan = Bueno** (nave, chatarra)
- ❌ **Magenta = Malo** (obstáculos, peligros)
- ⚪ **Blanco = Feedback positivo** (recolección exitosa)
- 🟧 **Naranja = Feedback negativo** (colisión)

### 3.4 Contraste y Legibilidad Arcade

**Reglas de contraste críticas para Astro Salvager:**

1. **Contraste Objeto-Fondo: Mínimo 7:1**
   - Negro espacial (#0A0E27) vs Cyan neón (#00FFFF) = ~12:1 ✅
   - Garantiza visibilidad incluso con 30+ objetos en pantalla

2. **UI sobre gameplay: Ratio 4.5:1 mínimo (WCAG AA)**
   - Score en blanco (#FFFFFF) sobre negro semi-transparente
   - Timer en naranja (#FF6600) cuando quedan <20 segundos

3. **Elementos interactuables destacan vía emisión**
   - Chatarra: Emissive shader con intensity 2.0
   - Asteroides: Emissive en bordes con intensity 0.5 (sutil advertencia)

**Test de accesibilidad implementados:**

- [✓] **Simulación de daltonismo:** Usamos formas además de colores
  - Chatarra = geometría simple reconocible (cubos, esferas)
  - Asteroides = geometría irregular con bordes afilados
  - No dependemos solo del color para diferenciar

- [✓] **Modo alto contraste (opcional):**
  - Desactivar bloom/glow
  - Aumentar brillo de outlines
  - Simplificar partículas

- [✓] **Outline en objetos críticos:**
  - Nave siempre tiene outline blanco sutil
  - Asteroides cercanos (<10u) tienen outline rojo pulsante

**Shader de outline (pseudocódigo):**
```glsl
// Outline simple para objetos importantes
if (distanceToPlayer < 10.0) {
  float outlineWidth = 0.05 + sin(time * 2.0) * 0.02; // Pulsa
  vec3 outlineColor = vec3(1.0, 0.0, 0.0); // Rojo
  applyOutline(outlineWidth, outlineColor);
}
```

---

## 4. Assets 3D y Producción de Astro Salvager

### 4.1 Lista Completa de Assets 3D

#### 4.1.1 Nave del Jugador

| Asset | Descripción | Cantidad | Polys | Textures | Prioridad |
|-------|-------------|----------|-------|----------|-----------|
| **PlayerShip_VALKYRIE7** | Nave delta wing pequeña, estilo fighter modificado | 1 | 400 | Emissive mat (sin texture) | 🔴 CRÍTICA |

**Detalles:**
- **Geometría:** Delta wing simétrico, 2 motores traseros visibles, cabina mínima
- **Color base:** Gris metálico `#3C3C3C` (flat color, no texture)
- **Emissive:** Cyan `#00FFFF` en motores y bordes (intensity 2.5)
- **Animaciones:** 
  - Idle: Flotación sutil (bob vertical 0.1u, 2 segundos)
  - Thrust: Motores intensifican glow al acelerar
  - Destroyed: Explosión de partículas naranjas (no animación de modelo)

#### 4.1.2 Chatarra Recolectable (Debris)

| Asset | Tamaño | Polys | Glow | Puntos | Prioridad |
|-------|--------|-------|------|--------|-----------|
| **Debris_Small_Cube** | Pequeño | 50 | Cyan suave | 10 pts | 🔴 CRÍTICA |
| **Debris_Medium_Sphere** | Mediano | 120 | Cyan medio | 25 pts | 🔴 CRÍTICA |
| **Debris_Large_Dodecahedron** | Grande | 200 | Cyan intenso + partículas | 50 pts | 🟡 ALTA |

**Características comunes:**
- **Material:** Metálico con glow cyan, shader de "pulse" (respiración 1 Hz)
- **Spawn:** Rotación lenta aleatoria (0.5-1 rpm)
- **Feedback:** Al recolectarse, explotan en 5-10 partículas blancas

#### 4.1.3 Obstáculos (Asteroides)

| Asset | Tamaño | Polys | Efecto al Colisionar | Prioridad |
|-------|--------|-------|----------------------|-----------|
| **Asteroid_Large** | Radio 2.5u | 300 | Game Over instantáneo | 🔴 CRÍTICA |
| **Asteroid_Small** | Radio 1.5u | 150 | Penalización -5 segundos | 🟡 ALTA |

**Detalles:**
- **Geometría:** Irregular con cráteres, asimétrica
- **Color:** Gris oscuro `#2B2B2B` SIN glow (contraste con chatarra)
- **Variantes:** 3 rotaciones/escalas diferentes de cada modelo para variedad
- **Advertencia visual:** Outline rojo cuando jugador está a <5 unidades

#### 4.1.4 Entorno

| Asset | Descripción | Tipo | Prioridad |
|-------|-------------|------|-----------|
| **Skybox_Stars** | Campo de estrellas procedural con nebulosa púrpura/cyan | Textura 6 caras | 🟡 ALTA |
| **ForcefieldBorder** | Efecto de campo de fuerza en bordes invisibles | Shader only | 🟢 MEDIA |
| **AmbientParticles** | Polvo espacial flotante (billboards) | Sistema de partículas | 🟢 MEDIA |

#### 4.1.5 Efectos Visuales (VFX)

| Efecto | Descripción | Sistema | Cantidad | Prioridad |
|--------|-------------|---------|----------|-----------|
| **CollectionBurst** | Explosión blanca al recolectar chatarra | Partículas (10 billboards) | Pool de 50 | 🔴 CRÍTICA |
| **ExplosionPlayer** | Explosión naranja masiva (Game Over) | Partículas (30-50) | 1 | 🔴 CRÍTICA |
| **ShipTrail** | Estela cyan de la nave | Trail renderer | 1 (persistent) | 🟡 ALTA |
| **AsteroidWarn** | Pulso rojo cuando asteroide cerca | Shader glow | Dinámico | 🟡 ALTA |
| **ComboEffect** | Partículas especiales al combo x1.5 | Partículas doradas | Pool de 10 | 🟢 MEDIA |

**Total VFX systems:** 5 principales

#### 4.1.6 UI/Iconos

| Elemento | Descripción | Tamaño | Formato | Prioridad |
|----------|-------------|--------|---------|-----------|
| **HUD_Score** | Texto score en esquina superior derecha | Font 32px | Raster | 🔴 CRÍTICA |
| **HUD_Timer** | Temporizador cuenta regresiva | Font 48px (grande) | Raster | 🔴 CRÍTICA |
| **HUD_ComboMultiplier** | "x1.5" cuando activo | Font 24px | Raster | 🟡 ALTA |
| **Menu_Button** | Botón rectangular con borde cyan | 256x64 | PNG | 🔴 CRÍTICA |
| **GameOver_Panel** | Panel semi-transparente con score final | 512x384 | PNG | 🔴 CRÍTICA |

**Total UI elements:** 8-10 elementos

---

### 4.2 Pipeline de Producción Simplificado

**Herramientas:**
- **Blender 4.0:** Modelado 3D (gratis, open source)
- **Babylon.js Sandbox:** Test de importación .glb
- **GIMP/Photoshop:** UI elements (si necesarios)

#### Flujo de Trabajo para Assets 3D de Astro Salvager:

```
1. CONCEPT (Simple sketch o referencia)
   ↓ 
2. MODELING en Blender (Low-poly <500 polys)
   ↓ (Box modeling, mantener geometría simple)
3. MATERIALES (NO textures - solo colores sólidos + emissive)
   ↓ (Emissive shader en Blender)
4. EXPORT a .glb (formato nativo de Babylon.js)
   ↓
5. IMPORT en Babylon.js
   ↓ (Verificar que glow funciona correctamente)
6. OBJECT POOLING setup (para debris y asteroides)
   ↓
7. TEST in-game (performance y legibilidad)
```

**Tiempo estimado por asset:**
- Nave jugador: 3-4 horas
- Chatarra (3 variantes): 1 hora c/u = 3 horas
- Asteroide (2 tipos): 1.5 horas c/u = 3 horas
- VFX (5 sistemas): 2 horas c/u = 10 horas
- UI (8 elementos): 30 min c/u = 4 horas

**Total producción art:** ~24 horas de trabajo
6. TEST de colisiones AABB (sin physics engine)
   ↓
7. OBJECT POOLING para reusabilidad
```

**Simplificado vs Juegos AAA:**
- ❌ NO hay UV unwrapping (sin texturas)
- ❌ NO hay rigging (modelos estáticos)
- ❌ NO hay animaciones complejas (solo rotación/traslación)
- ✅ SÍ hay modelado low-poly simple
- ✅ SÍ hay materiales emissive básicos

#### 4.2.2 Herramientas de Producción de Astro Salvager

| Tarea | Herramienta | Versión | Costo |
|-------|-------------|---------|-------|
| **3D Modeling** | Blender | 4.0+ | Gratis |
| **Asset Testing** | Babylon.js Sandbox | Web | Gratis |
| **UI Design** | Figma | Community | Gratis |
| **Audio Editing** | Audacity | 3.x | Gratis |
| **Version Control** | Git + GitHub | - | Gratis |

**Total inversión en software:** $0 (100% open source)

#### 4.2.3 Estándares Técnicos Específicos

**Para Babylon.js en Astro Salvager:**

| Aspecto | Estándar de Astro Salvager |
|---------|---------------------------|
| **Formato de modelos** | GLTF 2.0 (.glb) - exportado desde Blender |
| **Límite de polígonos** | Nave: <500, Debris: <200, Asteroides: <300 |
| **Texturas** | ❌ NO usamos texturas - solo colores + emissive |
| **Formato de audio** | MP3 (música), OGG (SFX) para compatibilidad web |
| **Nomenclatura** | PascalCase: `PlayerShip.glb`, `Debris_Small.glb` |
| **Jerarquía de carpetas** | `/public/assets/models/`, `/public/assets/audio/` |
| **Tamaño máximo bundle** | <10MB total (después de compresión) |

**Convenciones de naming en Astro Salvager:**
```
Formato: [Category][Name][Variant].glb

Ejemplos correctos:
- PlayerShip_VALKYRIE7.glb
- Debris_Small_Cube.glb
- Asteroid_Large_01.glb
- VFX_CollectionBurst.json

Evitar:
- ship.glb (demasiado genérico)
- player_ship_v2_final_FINAL.glb (redundante)
```

**Checklist de calidad por asset:**
- [ ] Poly count dentro del límite (<500)
- [ ] Escala correcta (1 unidad = 1 metro in-game)
- [ ] Pivote en centro de masa
- [ ] Sin geometría oculta innecesaria
- [ ] Emissive shader aplicado correctamente
- [ ] Exportado como .glb (no .gltf separado)
- [ ] Test en Babylon.js Sandbox antes de integrar

---

### 4.3 Asset Management de Astro Salvager

#### 4.3.1 Organización de Archivos

```
/public
└── assets/
    ├── models/
    │   ├── PlayerShip_VALKYRIE7.glb          (400 polys)
    │   ├── Debris_Small_Cube.glb             (50 polys)
    │   ├── Debris_Medium_Sphere.glb          (120 polys)
    │   ├── Debris_Large_Dodecahedron.glb     (200 polys)
    │   ├── Asteroid_Large_01.glb             (300 polys)
    │   ├── Asteroid_Large_02.glb             (variante)
    │   ├── Asteroid_Small_01.glb             (150 polys)
    │   └── Asteroid_Small_02.glb             (variante)
    ├── audio/
    │   ├── music/
    │   │   └── Synthwave_MainTheme_120s.mp3  (loop)
    │   └── sfx/
    │       ├── Collect_Small.ogg
    │       ├── Collect_Medium.ogg
    │       ├── Collect_Large.ogg
    │       ├── Explosion_Player.ogg
    │       ├── Collision_Asteroid.ogg
    │       ├── Warning_LowTime.ogg
    │       └── UI_ButtonClick.ogg
    └── ui/
        ├── MenuBackground.png                (1920x1080)
        ├── Button_Default.png                (256x64)
        └── GameOverPanel.png                 (512x384)
```

**Total archivos de arte:** ~20 archivos

**Tamaño estimado del bundle:**
- Modelos 3D: ~2-3 MB
- Audio: ~4-5 MB
- UI: ~1 MB
- **Total:** ~8 MB (dentro del objetivo de <10 MB)

#### 4.3.2 Asset Database de Astro Salvager

| ID | Nombre | Categoría | Polys | Estado | Prioridad | Notas |
|----|--------|-----------|-------|--------|-----------|-------|
| AS_001 | PlayerShip_VALKYRIE7 | Model | 400 | ⏸️ Pending | 🔴 CRÍTICA | Primero a modelar |
| AS_002 | Debris_Small_Cube | Model | 50 | ⏸️ Pending | 🔴 CRÍTICA | Geometría primitiva |
| AS_003 | Debris_Medium_Sphere | Model | 120 | ⏸️ Pending | 🔴 CRÍTICA | Icosphere subdividido |
| AS_004 | Debris_Large_Dodecahedron | Model | 200 | ⏸️ Pending | 🟡 ALTA | Dodecaedro Blender |
| AS_005 | Asteroid_Large | Model | 300 | ⏸️ Pending | 🔴 CRÍTICA | Displace modifier |
| AS_006 | Asteroid_Small | Model | 150 | ⏸️ Pending | 🟡 ALTA | Variante de Large |
| AS_007 | Skybox_Stars | Texture | N/A | ⏸️ Pending | 🟡 ALTA | Procedural en Blender |
| AS_008 | Synthwave_MainTheme | Audio | N/A | ⏸️ Pending | 🟢 MEDIA | Royalty-free de Incompetech |
| AS_009 | Collect_SFX | Audio | N/A | ⏸️ Pending | 🔴 CRÍTICA | Sonido sintético corto |
| AS_010 | Explosion_Player | Audio | N/A | ⏸️ Pending | 🔴 CRÍTICA | Explosión retro tipo atari |

**Estados de producción:**
- ⏸️ Pending: Aún no iniciado (fase de documentación actual)
- 🚧 WIP: En producción
- ✅ Done: Completo e integrado en juego
- ❌ Bloqueado: Esperando decisión de diseño

**Tracking de progreso:**
```
Sprint 1: AS_001 (nave), AS_002-003 (debris básicos) ← Prioridad máxima
Sprint 2: AS_004 (debris grande), AS_005-006 (asteroides)
Sprint 3: AS_007 (skybox), AS_008-010 (audio)
Sprints 4-6: VFX, UI, polish
```

---

## 5. Diseño de UI/UX de Astro Salvager

### 5.1 Principios de UI/UX Arcade

**Principios guía específicos de Astro Salvager:**

1. **Legibilidad en Movimiento:** Información clara incluso con nave a máxima velocidad
2. **Jerarquía de Información:** Score > Timer > Combo (en orden de importancia)
3. **Feedback Instantáneo:** Todo evento crítico tiene respuesta visual + audio
4. **Minimalismo Funcional:** Solo información esencial en pantalla
5. **Accesibilidad Cromática:** No depender solo del color para transmitir info

**Anti-patrones evitados:**
- ❌ HUD sobrecargado (sin minimapa, sin barra de vida compleja)
- ❌ Animaciones lentas en menús (transiciones <0.3s)
- ❌ Tutoriales intrusivos (controles simples, no necesitan tutorial largo)

---

### 5.2 HUD In-Game de Astro Salvager

#### Layout del HUD (1920x1080)

```
┌─────────────────────────────────────────────────┐
│  SCORE: 2,450       [COMBO x1.5]   ⏰ 01:35    │
│                                                 │
│                                                 │
│                                                 │
│                                                 │
│               🚀 [GAMEPLAY AREA]                │
│            (Arena 50x50, cámara cenital)        │
│                                                 │
│                                                 │
│                                                 │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Elementos del HUD (solo 3 principales):**

| Elemento | Ubicación | Tamaño | Color | Siempre visible | Descripción |
|----------|-----------|--------|-------|-----------------|-------------|
| **Score** | Top-left | 32px | Cyan `#00FFFF` | Sí | Puntuación actual, aumenta al recolectar |
| **Timer** | Top-right | 48px | Blanco → Naranja (<20s) | Sí | Cuenta regresiva de 120s → 0s |
| **Combo Multiplier** | Top-center | 24px | Púrpura `#8B00FF` | Solo si activo | "x1.5" aparece al recolectar 5 objetos sin parar |

**Elementos NO incluidos (simplicidad):**
- ❌ Barra de vida (no hay HP, colisión = Game Over inmediato)
- ❌ Minimapa (arena visible completa en cámara cenital)
- ❌ Inventario (no hay items)
- ❌ Hotbar (no hay habilidades)
- ❌ Quest markers (no hay misiones, solo objetivo implícito: "máximo score")

#### Feedback Visual In-Game

**Eventos con feedback visual:**

| Evento | Efecto Visual | Duración | Audio |
|--------|---------------|----------|-------|
| **Recolectar chatarra** | Partículas blancas (burst) | 0.3s | "Ding" sintético |
| **Activar combo x1.5** | Texto "COMBO x1.5" aparece con scale tween | 1s | Chord musical |
| **Timer <20 segundos** | Timer parpadea naranja (1 Hz) | Hasta Game Over | Beep cada segundo |
| **Colisión con asteroide** | Screen shake + flash rojo | 0.2s | Explosión retro |
| **Advertencia de borde** | Vignette rojo en bordes de pantalla | Mientras esté cerca | Alarm loop |

**Score Popup Animation:**

Cuando recolectas chatarra, aparece un texto flotante sobre el objeto:
```
"+10" (pequeño)   → escala de 0.5 a 1.2 → desvanece
"+25" (mediano)   → escala + color amarillo
"+50" (grande)    → escala + color dorado + partículas extra
```

Implementación (pseudocódigo):
```typescript
function showScorePopup(points: number, position: Vector3) {
  const text = createText(`+${points}`, position);
  text.color = points >= 50 ? GOLD : WHITE;
  
  animate(text)
    .scale(0.5 → 1.2, 0.2s, easeOutBack)
    .translate(y: +2, 1s, easeOut)
    .opacity(1 → 0, 1s, easeIn)
    .onComplete(() => text.dispose());
}
```

---

#### Mockups de HUD

> **Crear mockup en:** `/mockups/ui/hud_astrosalvager.png`

**Especificaciones del mockup:**

1. **Vista normal (primeros 100 segundos):**
   - Score: 2,450 (cyan, esquina superior izquierda)
   - Timer: 01:35 (blanco, esquina superior derecha, 48px)
   - Sin combo (no visible)
   - Fondo: Negro espacial con estrellas
   - Nave VALKYRIE-7 visible en centro
   - 5-10 objetos de chatarra dispersos
   - 2-3 asteroides visibles

2. **Vista con combo activo:**
   - Mismo layout
   - "COMBO x1.5" en centro superior (púrpura con glow)
   - Score aumentando rápidamente (números con efecto de cambio)

3. **Vista final (<20 segundos):**
   - Timer: 00:15 (naranja parpadeante, font más grande: 56px)
   - Bordes de pantalla con ligero vignette rojo
   - Más densidad de objetos (urgencia visual)

**Herramientas de mockup:**
- Figma (recomendado - colaborativo, gratis)
- Photoshop/GIMP (raster)
- Inkscape (vectorial gratis)

**Checklist del mockup:**
- [✓] Todos los elementos del HUD ubicados según especificación
- [✓] Proporciones realistas (1920x1080)
- [✓] 3 estados diferentes documentados (normal, combo, urgente)
- [✓] Anotaciones de comportamiento incluidas
- [ ] Exportar a `/mockups/ui/hud_astrosalvager.png`

---

### 5.3 Menús y Pantallas de Astro Salvager

#### 5.3.1 Menú Principal

**Layout (1920x1080):**
```
┌─────────────────────────────────────────────────┐
│                                                 │
│                                                 │
│          ░░░ ASTRO SALVAGER ░░░                 │
│          [Logo con neon cyan glow]              │
│                                                 │
│                  ┌───────────┐                  │
│                  │ NEW GAME  │ ← Cyan glow      │
│                  ├───────────┤                  │
│                  │ HIGH SCORES│                 │
│                  ├───────────┤                  │
│                  │  OPTIONS  │                  │
│                  ├───────────┤                  │
│                  │  CREDITS  │                  │
│                  └───────────┘                  │
│                                                 │
│  [Fondo: Skybox con estrellas en loop]         │
│                          v0.1.0-alpha           │
└─────────────────────────────────────────────────┘
```

**Detalles de interacción:**
- **Hover sobre botón:** Borde cyan pulsa (1 Hz) + sonido sutil "beep"
- **Click:** Sonido de confirmación sintético + fade out (0.3s)
- **Fondo animado:** Starfield con paralaje suave (scrolling lento hacia abajo)
- **Logo:** Breathing animation del glow (intensity 1.5 → 2.5, 2 segundos loop)

#### 5.3.2 Menú de Pausa (ESC)

**Layout:**
```
┌─────────────────────────────────────────────────┐
│        [Fondo: Gameplay con blur + darken]      │
│                                                 │
│              ┌──────────────┐                   │
│              │ ⏸ PAUSED     │                   │
│              ├──────────────┤                   │
│              │   RESUME     │ (ESC again)       │
│              ├──────────────┤                   │
│              │   RESTART    │ (R)               │
│              ├──────────────┤                   │
│              │ QUIT TO MENU │ (Q)               │
│              └──────────────┘                   │
│                                                 │
│  [Hint: ESC to resume]                          │
└─────────────────────────────────────────────────┘
```

#### 5.3.3 Pantalla de Game Over

**Layout:**
```
┌─────────────────────────────────────────────────┐
│                                                 │
│                                                 │
│              💥 GAME OVER 💥                     │
│                                                 │
│           FINAL SCORE: 3,450                    │
│                                                 │
│         ┌─────────────────────┐                 │
│         │  🏆 HIGH SCORES 🏆  │                 │
│         ├─────────────────────┤                 │
│         │ 1. 5,200            │                 │
│         │ 2. 4,800            │                 │
│         │ 3. 3,450 ← YOU!     │ (glow cyan)     │
│         │ 4. 2,100            │                 │
│         │ 5. 1,500            │                 │
│         └─────────────────────┘                 │
│                                                 │
│          [PLAY AGAIN]  [MAIN MENU]              │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Detalles:**
- **Si nuevo high score:** Partículas doradas caen de arriba + fanfare musical
- **Si NO high score:** Mensaje motivacional: "Try again, pilot!"
- **Auto-save high scores:** LocalStorage del navegador (top 10)

#### 5.3.4 Pantalla de Options (Simplificada)

**Layout:**
```
┌─────────────────────────────────────────────────┐
│  OPTIONS                             [X Close]  │
├─────────────────────────────────────────────────┤
│  [VIDEO] [AUDIO] [CONTROLS]    ← Tabs           │
├─────────────────────────────────────────────────┤
│                                                 │
│  Master Volume:  [========|---] 80%             │
│                                                 │
│  Music Volume:   [======|-----] 60%             │
│                                                 │
│  SFX Volume:     [===========-] 100%            │
│                                                 │
│                                                 │
│              [APPLY]  [CANCEL]                  │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

### 5.4 Tipografía de Astro Salvager

**Fuentes (Google Fonts - gratis):**

1. **"Orbitron" Bold:** Logo y títulos (64px-48px)
2. **"Rajdhani" SemiBold:** Botones y labels (24-18px)
3. **"Rajdhani" Bold:** HUD números (48-32px)
4. **"Rajdhani" Regular:** Texto descriptivo (16-12px)

**Jerarquía:**
- H1 (GAME OVER): Orbitron 48px
- H2 (Botones): Rajdhani 24px SemiBold
- HUD (Score/Timer): Rajdhani 32-48px Bold
- Body (Créditos): Rajdhani 16px Regular

---

### 5.5 Animaciones de UI

**Efectos principales:**
- **Botón hover:** Scale 1.0 → 1.05 + glow cyan (0.2s)
- **Score animado:** Números suben con odometer effect (0.5s)
- **Timer urgente:** Pulse 1s infinite + color naranja
- **Combo aparición:** Scale 0 → 1.2 → 1.0 con bounce (0.5s)
- **High score nuevo:** Partículas doradas + row highlighting dorado

---

## 6. Dirección de Audio de Astro Salvager

### 6.1 Estilo Musical Synthwave

#### 6.1.1 Género: Synthwave/Retro Electronica

**Justificación:**
Synthwave refuerza la estética retro-futurista arcade de Astro Salvager. Los sintetizadores electrónicos evocan los 80s (Asteroids, Tron) mientras que el tempo rápido (130 BPM) mantiene la tensión del gameplay de 120 segundos.

**Influencias musicales:**
- **Kavinsky:** Arpegios sintéticos, bassline pulsante
- **Carpenter Brut:** Energía agresiva, drops potentes
- **Geometry Wars OST:** Layers dinámicos que aumentan con intensidad
- **Hotline Miami OST:** Ritmo constante 4/4, synth leads memorables

**Características del soundtrack:**
- Tempo: 130 BPM
- Key: D Minor (oscuro pero épico)
- Estructura: Loop perfecto de 120 segundos (duración del juego)
- Instrumentación: Lead synth + bassline + drums 4/4 + pads atmosféricos + NO vocals

---

### 6.2 Music Cues de Astro Salvager

| ID | Track Name | Contexto | Duración | Tempo | Mood | Loop | Prioridad |
|----|------------|----------|----------|-------|------|------|-----------|
| **M01** | Synthwave_MainTheme | Gameplay principal | 120s | 130 BPM | Urgente, épico | Sí (perfecto) | 🔴 CRÍTICA |
| **M02** | Menu_Ambient | Menú principal / High Scores | 90s | 100 BPM | Nostálgico, tranquilo | Sí | 🟡 ALTA |
| **M03** | GameOver_Stinger | Pantalla Game Over | 5s | - | Derrota épica | No | 🟡 ALTA |
| **M04** | HighScore_Fanfare | Nuevo high score | 3s | - | Triunfal | No | 🟢 MEDIA |

**Total tracks:** 4 (minimalista arcade)

**Consideración de audio dinámico:**

```
Track M01 tiene 3 layers mezclados:
- Layer BASE: Arpeggio + pads (siempre presente)
- Layer MEDIUM: +Drums (activo cuando quedan <90s)
- Layer INTENSE: +Bass distorsionado (activo cuando quedan <30s)

Implementación (pseudocódigo):
if (timeRemaining < 90) {
  musicManager.enableLayer('drums');
}
if (timeRemaining < 30) {
  musicManager.enableLayer('intenseBass');
  musicManager.increaseTempo(1.05); // 5% más rápido
}
```

**Resultado:** Música aumenta tensión gradualmente sin cortes bruscos.

---

### 6.3 Efectos de Sonido (SFX) de Astro Salvager

#### 6.3.1 Categorización de SFX

**Nave del Jugador (6 sonidos):**

| SFX | Descripción | Variantes | Formato | Prioridad |
|-----|-------------|-----------|---------|-----------|
| `Ship_Thrust.ogg` | Aceleración de motores | 1 (pitch variable) | OGG loop | 🔴 CRÍTICA |
| `Ship_Turn.ogg` | Giro de nave (sutil) | 1 | OGG | 🟡 ALTA |

**Recolección (5 sonidos):**

| SFX | Descripción | Variantes | Prioridad |
|-----|-------------|-----------|-----------|
| `Collect_Small.ogg` | Debris pequeño (10 pts) | 1 | 🔴 CRÍTICA |
| `Collect_Medium.ogg` | Debris mediano (25 pts) | 1 | 🔴 CRÍTICA |
| `Collect_Large.ogg` | Debris grande (50 pts) | 1 | 🔴 CRÍTICA |
| `Combo_Activate.ogg` | Activar multiplicador x1.5 | 1 | 🟡 ALTA |
| `Combo_Collect.ogg` | Recolección con combo activo (pitch +10%) | 1 | 🟢 MEDIA |

**Colisiones y Peligros (5 sonidos):**

| SFX | Descripción | Prioridad |
|-----|-------------|-----------|
| `Explosion_Player.ogg` | Explosión de nave (Game Over) | 🔴 CRÍTICA |
| `Collision_Asteroid.ogg` | Impacto con asteroide | 🔴 CRÍTICA |
| `Warning_LowTime.ogg` | Beep cuando quedan <20s (1 Hz loop) | 🔴 CRÍTICA |
| `Warning_Border.ogg` | Alarma al acercarse al borde | 🟡 ALTA |
| `Asteroid_Whoosh.ogg` | Asteroide pasa cerca (<5 unidades) | 🟢 MEDIA |

**UI (4 sonidos):**

| SFX | Descripción | Prioridad |
|-----|-------------|-----------|
| `UI_Click.ogg` | Click en botón | 🔴 CRÍTICA |
| `UI_Hover.ogg` | Hover sobre botón (sutil beep) | 🔴 CRÍTICA |
| `UI_Start.ogg` | Al presionar "NEW GAME" | 🔴 CRÍTICA |
| `UI_Pause.ogg` | Al pausar (ESC) | 🟡 ALTA |

**Ambiente (2 sonidos):**

| SFX | Descripción | Loop | Prioridad |
|-----|-------------|------|-----------|
| `Ambient_SpaceDrone.ogg` | Drone espacial sutil | Sí | 🟢 MEDIA |
| `Ambient_Particles.ogg` | Polvo espacial (muy sutil) | Sí | 🟢 BAJA |

**Total SFX:** 22 archivos de audio

**Tamaño estimado:**
- Música (4 tracks): ~4 MB (OGG 192 kbps)
- SFX (22 archivos): ~500 KB (OGG 96 kbps)
- **Total audio:** ~4.5 MB

---

#### 6.3.2 Especificaciones Técnicas de Audio

| Aspecto | Valor Astro Salvager | Justificación |
|---------|----------------------|---------------|
| **Formato música** | OGG Vorbis | Compatible web, buena compresión |
| **Formato SFX** | OGG Vorbis | Consistencia, loops perfectos |
| **Sample rate** | 44.1 kHz | Estándar CD quality |
| **Bit depth** | 16-bit | Suficiente para synthwave |
| **Bitrate música** | 192 kbps | Alta calidad para track principal |
| **Bitrate SFX** | 96 kbps | SFX cortos no necesitan más |
| **Mono vs Stereo** | Stereo para música, Mono para SFX | SFX se convierte a stereo con audio 3D |

---

#### 6.3.3 Audio 3D y Espacialización

**Configuración de audio 3D en Babylon.js:**

```typescript
// Ejemplo: Sonido de asteroide peligroso
const asteroidSound = new Sound(
  "asteroid_warning",
  "/assets/audio/sfx/Asteroid_Whoosh.ogg",
  scene,
  null,
  {
    loop: false,
    autoplay: false,
    spatialSound: true,        // Activar 3D audio
    distanceModel: 'linear',
    maxDistance: 20,            // Se escucha hasta 20 unidades
    rolloffFactor: 1.5,
    refDistance: 5              // Volumen máximo a <5 unidades
  }
);

// Attachear a cada asteroide
asteroidSound.attachToMesh(asteroidMesh);
```

**Objetos con audio 3D:**
- ✅ Asteroides (whoosh al pasar cerca)
- ✅ Debris grande (pulse sutil para orientación)
- ❌ Nave del jugador (audio 2D siempre, es el centro de atención)
- ❌ UI (audio 2D)

---

#### 6.3.4 Mixing y Grupos de Audio

| Grupo | Volumen Base | Descripción |
|-------|-------------|-------------|
| **Master** | 100% | Control global |
| **Music** | 60% | Música de fondo, no debe opacar SFX críticos |
| **SFX** | 90% | Efectos de gameplay |
| **UI** | 80% | Sonidos de interfaz |
| **Ambient** | 30% | Drone espacial, muy sutil |

**Ducking (no implementado en v1):**
En versiones futuras, bajar música al activar combo o cuando quedan <10 segundos para enfocar atención.

**Prioridades de reproducción (límite 32 voces simultáneas):**
1. **Alta:** Explosión de nave, recolección, colisión
2. **Media:** Thrust de nave, warnings
3. **Baja:** Ambiente, asteroides lejanos

---

### 6.4 Fuentes de Audio Libres de Royalty

**Música synthwave gratis:**
- **Incompetech (Kevin MacLeod):** Filtrar por "Electronic" + "Fast Tempo"
  - URL: https://incompetech.com/music/royalty-free/music.html
- **Purple Planet Music:** Sección Techno/Electronic
  - URL: https://www.purple-planet.com/
- **Bensound:** Tracks electrónicos
  - URL: https://www.bensound.com/

**SFX retro/arcade gratis:**
- **Freesound.org:** Buscar "8-bit explosion", "retro beep", "arcade collect"
- **Zapsplat:** Categoría "Sci-Fi" + "Video Game"
- **SFXR / ChipTone:** Generadores de SFX retro (herramientas)

**Licencia:** Todos los assets deben permitir uso comercial (Attribution 4.0 o CC0).

---

## 7. Referencias Visuales y Moodboards de Astro Salvager

### 7.1 Moodboard Visual Completo

> **Ubicación objetivo:** `/referencias/visual/moodboard_astrosalvager.png`

**Secciones del moodboard (50 imágenes aprox.):**

#### 7.1.1 Estética Retro-Futurista (15 imágenes)

**Referencias de películas:**
- Tron (1982) - Grid digital luminoso, vehículos con trails neón
- Tron Legacy (2010) - Actualización moderna de estética neón
- Blade Runner (1982) - Atmósfera cyberpunk nocturna
- Drive (2011) - Paleta magenta/cyan, título estilizado
- Ready Player One (2018) - Naves espaciales arcade

**Referencias de arte:**
- Outrun aesthetic (Pinterest: buscar "outrun art")
- Vaporwave grids y sunsets (pero sin el exceso pastél)
- Arte de Beeple (especialmente sus renders espaciales neón)

#### 7.1.2 Videojuegos de Referencia Visual (10 imágenes)

| Juego | Qué Tomar | Qué Evitar |
|-------|-----------|------------|
| **Geometry Wars** | Neones sobre negro, claridad visual, partículas explosivas | Exceso de partículas (queremos más limpio) |
| **Superhot** | Low-poly angular, minimalismo extremo | No queremos todo blanco (necesitamos color) |
| **Rez / Rez Infinite** | Wireframes luminosos, ritmo visual | No queremos tanto wireframe (modelos sólidos) |
| **Thumper** | Túneles neón, velocidad, contraste | Demasiado agresivo/oscuro para nuestro tono |
| **Furi** | Boss fights con estética synth, UI minimalista | No tenemos combate complejo |
| **Neon Drive** | Carretera neón, obstáculos geométricos | Es 2D, nosotros somos 3D |

**Screenshots específicos a incluir:**
- Geometry Wars: Explosión de partículas al destruir enemigo
- Superhot: Geometría facetada de personajes
- Rez: Efectos de trails y partículas rítmicas

#### 7.1.3 Paleta de Colores y Lighting (10 imágenes)

**Imágenes de referencia de iluminación:**
- Neon signs en Tokio/Hong Kong de noche (cyan + magenta)
- Synthwave artwork con gradientes púrpura/cyan
- Screenshots de Tron con grid floor iluminado
- Blade Runner: Luces de neón reflejadas en superficies mojadas (concepto de glow)

**Paletas a incluir:**
- Swatches con los 6 colores principales (Cyan, Magenta, Púrpura, Naranja, Blanco, Negro)
- Gradientes de transición entre zonas (Segura=Cyan → Media=Púrpura → Peligrosa=Magenta)

#### 7.1.4 Diseño de Nave y Assets 3D (10 imágenes)

**Naves espaciales retro:**
- Viper de Battlestar Galactica (ángulos delta wing)
- Arwing de Star Fox (SNES era - low-poly intencional)
- Ships de Galaga/Space Invaders (inspiración arcade clásica)
- Concept art de Chris Foss (sci-fi clásico de los 70s)

**Low-poly aesthetic:**
- PS1 graphics (modelos facetados pero legibles)
- Modelos de Blender con flat shading + emissive materials
- Arte de Timothy Reynolds (low-poly isométrico)

#### 7.1.5 UI/HUD References (5 imágenes)

**UI minimalista arcade:**
- HUD de Pac-Man (score arriba, minimalismo extremo)
- UI de Hotline Miami (fuentes pixel + neón)
- Menús de Furi (tipografía grande, contraste alto)
- Pantalla de Game Over de arcade clásicos (centrada, legible)
- Cronómetros de juegos de carreras (números grandes y claros)

---

### 7.2 Análisis Detallado de Juegos Similares

#### Juego Referencia #1: Geometry Wars (Series)

**Análisis Visual:**
- ✅ **Qué funciona:**
  - Contraste perfecto: Neones sobre fondo negro profundo
  - Distinción clara entre tipos de enemigos por color + forma
  - Partículas explosivas dan feedback satisfactorio
  - Cámara cenital permite ver toda la arena (nuestro approach también)
- ❌ **Qué evitar:**
  - En momentos de alta intensidad, demasiadas partículas ocultan jugador
  - Algunas variantes tienen backgrounds demasiado busy (preferimos negro puro)

**Análisis de Audio:**
- ✅ **Qué funciona:**
  - Música electrónica con layers que aumentan con intensidad
  - SFX de explosión tienen peso, se sienten impactantes
- ❌ **Qué evitar:**
  - A veces la música opaca los SFX críticos (nuestro mixing debe priorizar feedback)

**Capturas de referencia:**
- `/referencias/screenshots/geometry_wars_explosion.png`
- `/referencias/screenshots/geometry_wars_hud.png`

---

#### Juego Referencia #2: Superhot

**Análisis Visual:**
- ✅ **Qué funciona:**
  - Low-poly intencional es elegante, no se ve "barato"
  - Uso de color para codificar información (rojo=enemigo, blanco=neutro)
  - Geometría angular facilita lectura de siluetas
- ❌ **Qué evitar:**
  - Paleta casi monocromática (nosotros necesitamos más variedad de color)
  - No tiene glow/emissive (nosotros sí lo necesitamos para estética neón)

**Análisis de Mecánicas (relevante para nuestra estética):**
- El tiempo se pausa cuando dejas de moverte → Nosotros al contrario: Presión temporal constante
- Movimiento lento y deliberado → Nosotros queremos velocidad arcade

**Capturas de referencia:**
- `/referencias/screenshots/superhot_lowpoly.png`

---

#### Juego Referencia #3: Rez / Rez Infinite

**Análisis Visual:**
- ✅ **Qué funciona:**
  - Wireframes luminosos sobre fondo espacial oscuro
  - Efectos de partículas rítmicas (sincronizan con música)
  - Trails de movimiento dan sensación de velocidad
- ❌ **Qué evitar:**
  - Wireframes puros son difíciles de leer a alta velocidad (preferimos modelos sólidos con glow)
  - Demasiados efectos visuales abstractos (queremos claridad arcade)

**Análisis de Audio:**
- ✅ **Qué funciona:**
  - Audio reactivo: Acciones del jugador añaden layers a la música
  - Concepto de "synaesthesia" (visuals + audio integrados)
- Posible implementación en Astro Salvager:
  ```
  Al recolectar chatarra, reproducir nota musical que encaja con el BPM de la música de fondo (130 BPM).
  Recolecciones rápidas = arpeggio musical ascendente.
  ```

**Capturas de referencia:**
- `/referencias/screenshots/rez_particles.png`
- `/referencias/screenshots/rez_trails.png`

---

### 7.3 Referencias de Audio

#### 7.3.1 Playlist de Referencia Musical

> **Crear playlist pública en Spotify:** "Astro Salvager - Music References"

**Tracks de referencia (15 seleccionados):**

1. **Kavinsky - Nightcall**
   - Qué tomar: Bassline pulsante, sintetizadores atmosféricos
   - Tempo: 100 BPM (más lento que nosotros, pero buen mood)

2. **Carpenter Brut - Turbo Killer**
   - Qué tomar: Energía agresiva, drops potentes
   - BPM: 140 (ligeramente más rápido, pero buena referencia de intensidad)

3. **Power Glove - Nightforce**
   - Qué tomar: Ritmo arcade, reminiscente de soundtracks de videojuegos 80s
   - BPM: 130 (perfecto, exactamente nuestro tempo objetivo)

4. **Lazerhawk - Overdrive**
   - Qué tomar: Arpegios sintéticos rápidos, driving rhythm
   - BPM: 135

5. **Miami Nights 1984 - Accelerated**
   - Qué tomar: Urgencia arcade, sintetizadores punzantes
   - BPM: 128 (cercano)

6. **Dance with the Dead - Diabolic**
   - Qué tomar: Metal + synthwave fusion, muy energético
   - BPM: 150 (demasiado rápido, pero gran referencia de intensidad)

7. **Perturbator - Future Club**
   - Qué tomar: Oscuro pero bailable, atmósfera cyberpunk
   - BPM: 125

8. **Com Truise - Brokendate**
   - Qué tomar: Sintetizadores cálidos, groove espacial
   - BPM: 90 (lento pero buen mood ambient)

9. **Mitch Murder - After Hours**
   - Qué tomar: Reminiscente de soundtracks de arcade clásicos
   - BPM: 120

10. **Scandroid - Aphelion**
    - Qué tomar: Épico, espacial, arpegios ascendentes
    - BPM: 130 (perfecto)

11. **Daft Punk - Derezzed** (Tron Legacy OST)
    - Qué tomar: Ritmo arcade frenético, sonidos digitales
    - BPM: 130 (perfecto, además es Tron = referencia directa)

12. **Deadmau5 - Some Chords**
    - Qué tomar: Build-ups progresivos, drops satisfactorios
    - BPM: 128

13. **Justice - Genesis**
    - Qué tomar: Intro épica, sintetizadores masivos
    - BPM: 104

14. **Danger - 0h59**
    - Qué tomar: Tensión creciente, atmósfera de countdown
    - BPM: 120

15. **M.O.O.N. - Dust** (Hotline Miami OST)
    - Qué tomar: Ritmo constante 4/4, arcade vibes
    - BPM: 130 (perfecto)

**Enlaces:**
- Spotify: `[CREAR PLAYLIST Y AÑADIR LINK AQUÍ]`
- YouTube: `[OPCIONAL: Backup playlist]`

**Notas de producción:**

Para nuestro track principal (M01 - Synthwave_MainTheme), combinar:
- Tempo de Power Glove/MOON (130 BPM)
- Energía de Carpenter Brut (drops potentes)
- Atmósfera espacial de Com Truise (pads atmosféricos)
- Ritmo arcade de Daft Punk - Derezzed (drums simples 4/4)

---

#### 7.3.2 Referencias de SFX

**Juegos con excelentes SFX arcade:**

| Juego | Qué Escuchar | Dónde Aplicar en Astro Salvager |
|-------|--------------|----------------------------------|
| **Pac-Man** | "Waka waka" (recolección rítmica) | Inspiración para Collect_Small.ogg |
| **Galaga** | Sonido de disparo láser | NO aplicable (no disparamos) |
| **Asteroids** | Explosión retro | Explosion_Player.ogg |
| **Space Invaders** | Beep acelerándose | Warning_LowTime.ogg (beep repetitivo) |
| **Geometry Wars** | Explosiones con peso | Collision_Asteroid.ogg |
| **Tron (arcade 1982)** | Sonidos digitales, "grid rezzing" | UI_Start.ogg, ambient effects |

**Herramientas para generar SFX retro:**
- **SFXR:** Generador clásico de SFX 8-bit
- **ChipTone:** Versión web de SFXR con más opciones
- **Bfxr:** Fork mejorado de SFXR

**Proceso de creación de SFX:**
1. Generar base con SFXR/Bfxr
2. Importar a Audacity
3. Aplicar: Reverb (sutil), EQ (boostar frecuencias medias), Limiter (volumen consistente)
4. Exportar como OGG Vorbis 96 kbps

---

## 📌 Conclusión y Próximos Pasos

Este documento de Arte y Diseño sirve como **biblia visual y sonora** de Astro Salvager. Todas las decisiones artísticas deben alinearse con:

1. **Pilares Visuales:** Claridad Arcade, Neón Sobre Negro, Nostalgia Sintética
2. **Estilo:** Low-poly retro-futurista (Tron + Geometry Wars)
3. **Paleta:** 6 colores synthwave (Cyan, Magenta, Púrpura, Naranja, Blanco, Negro)
4. **Audio:** Synthwave a 130 BPM con SFX arcade satisfactorios

---

### Checklist de Producción de Arte

**Fase 1 - Documentación (ACTUAL):**
- [✓] Definir pilares artísticos
- [✓] Seleccionar paleta de colores
- [✓] Documentar referencias visuales
- [✓] Documentar referencias de audio
- [ ] Crear moodboard consolidado en `/referencias/visual/moodboard_astrosalvager.png`

**Fase 2 - Pre-producción (Sprint 1-2):**
- [ ] Crear mockup de HUD en Figma
- [ ] Crear mockup de menú principal
- [ ] Concept art de nave VALKYRIE-7 (sketch simple)
- [ ] Test de paleta en Blender (cubo con materiales emissive)

**Fase 3 - Producción de Assets (Sprint 2-4):**
- [ ] Modelar nave VALKYRIE-7 (400 polys)
- [ ] Modelar 3 tipos de debris (50-200 polys c/u)
- [ ] Modelar 2 tipos de asteroides (150-300 polys c/u)
- [ ] Crear skybox con estrellas procedurales
- [ ] Generar/adquirir 22 SFX
- [ ] Adquirir/componer 4 music tracks

**Fase 4 - Integración y Polish (Sprint 5-6):**
- [ ] Integrar todos los assets en Babylon.js
- [ ] Configurar audio 3D y mixing
- [ ] VFX (partículas de explosión, trails, combo effects)
- [ ] UI implementation (HUD, menús)
- [ ] Playtesting y ajustes finales de feedback visual/audio

---

**Documento creado:** 1 de febrero de 2026  
**Última actualización:** 1 de febrero de 2026  
**Estado:** ✅ Completado (Fase de Documentación)  
**Versión:** 1.0

---

## Recursos Útiles para el Equipo

### Herramientas Gratuitas Recomendadas

**3D y Visuales:**
- **Blender 4.0+:** Modelado 3D, materiales emissive → https://www.blender.org/
- **Babylon.js Sandbox:** Test de modelos .glb → https://sandbox.babylonjs.com/
- **PureRef:** Moodboard y referencias → https://www.pureref.com/
- **Coolors:** Generador de paletas → https://coolors.co/ (ya tenemos la nuestra, pero útil para variaciones)
- **Figma:** UI mockups → https://www.figma.com/

**Audio:**
- **Audacity:** Edición de audio gratis → https://www.audacityteam.org/
- **LMMS:** DAW gratis para crear música → https://lmms.io/
- **Bfxr:** Generador de SFX retro → https://www.bfxr.net/
- **Freesound.org:** Biblioteca de SFX gratis

**Asset Stores (Royalty-Free):**
- **Kenney Assets:** Placeholder assets → https://kenney.nl/
- **OpenGameArt:** Assets libres CC0 → https://opengameart.org/
- **Incompetech:** Música gratis con atribución → https://incompetech.com/
- **Purple Planet Music:** Música electrónica gratis → https://www.purple-planet.com/

### Teoría y Aprendizaje

**Color y Diseño:**
- "The Non-Designer's Design Book" - Robin Williams
- "Color Theory for Designers" (artículo de Smashing Magazine)
- Game UI Database → https://www.gameuidatabase.com/

**Audio para Videojuegos:**
- "A Composer's Guide to Game Music" - Winifred Phillips
- "The Game Audio Tutorial" (libro interactivo)
- Canal de YouTube: "Game Audio"
