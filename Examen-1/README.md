# 🏰 Mensajero Medieval - Juego 3D con Babylon.js

## 📖 Descripción
Juego 3D desarrollado con Babylon.js donde interpretas a un mensajero medieval que debe llevar un pergamino importante del Castillo del Rey al Torreón del Mago.

## 🎮 Temática
**Mensajero Medieval**: Lleva un pergamino real desde el majestuoso castillo hasta el misterioso torreón del mago, atravesando un hermoso paisaje medieval.

## ✨ Características Implementadas

### Jugador
- ✅ Personaje 3D con cuerpo, cabeza y capa roja
- ✅ Control fluido con WASD o teclas de flecha
- ✅ Rotación izquierda/derecha
- ✅ Animación de caminar
- ✅ Proyección de sombras

### Entorno 3D
- ✅ **Castillo del Rey** con 4 torres, techos cónicos y bandera animada
- ✅ **Torreón del Mago** con ventanas iluminadas y esfera mágica pulsante
- ✅ Suelo con textura procedural de piedra
- ✅ Árboles decorativos distribuidos por el mapa
- ✅ Camino de piedras entre las dos estructuras
- ✅ Sistema de iluminación con luz hemisférica y direccional
- ✅ Niebla atmosférica para ambiente medieval
- ✅ Sistema de sombras suaves

### Mecánicas de Juego
- ✅ **Objeto a recoger**: Pergamino enrollado con sello de cera
- ✅ **Zona de recogida** (verde): Ubicada en el castillo
- ✅ **Zona de entrega** (morada): Ubicada en el torreón del mago
- ✅ Sistema de estados: sin pergamino / con pergamino
- ✅ Interacción con tecla **E**
- ✅ El pergamino se une al jugador cuando lo recoge
- ✅ Validación de zonas antes de recoger/entregar
- ✅ Animación de flotación del pergamino

### Interfaz y Feedback
- ✅ HUD con título, instrucciones y estado actual
- ✅ Mensajes de feedback visual animados
- ✅ Indicador de estado de la misión
- ✅ Pantalla de victoria al completar el juego
- ✅ Botón para reiniciar después de ganar
- ✅ Diseño responsivo y estilizado

### Texturas y Visuales
- ✅ Texturas procedurales para el suelo
- ✅ Materiales con colores temáticos medievales
- ✅ Efectos de emisión en objetos mágicos
- ✅ Animaciones: bandera, luz mágica, pergamino flotante
- ✅ Cielo azul con niebla atmosférica

## 🎯 Controles

| Tecla | Acción |
|-------|--------|
| **W** o **↑** | Mover hacia adelante |
| **S** o **↓** | Mover hacia atrás |
| **A** o **←** | Rotar a la izquierda |
| **D** o **→** | Rotar a la derecha |
| **E** | Recoger/Entregar pergamino |
| **Mouse** | Rotar cámara |

## 🚀 Cómo Ejecutar

### Opción 1: Servidor Local Simple
```bash
# Con Python 3
python3 -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js (si tienes http-server instalado)
npx http-server -p 8000
```

Luego abre tu navegador en: `http://localhost:8000`

### Opción 2: Live Server (VS Code)
1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `index.html`
3. Selecciona "Open with Live Server"

### Opción 3: Abrir directamente
Algunos navegadores permiten abrir el archivo `index.html` directamente, aunque es recomendable usar un servidor local.

## 📂 Estructura del Proyecto
```
Examen-1/
├── index.html      # Estructura HTML principal
├── style.css       # Estilos y diseño de la interfaz
├── game.js         # Lógica del juego en Babylon.js
└── README.md       # Este archivo
```

## 🎓 Objetivo del Juego
1. Comienza en el Castillo del Rey (zona verde)
2. Presiona **E** para recoger el pergamino flotante
3. Camina hacia el Torreón del Mago (zona morada) siguiendo el camino
4. Presiona **E** nuevamente en la zona morada para entregar el pergamino
5. ¡Misión cumplida! El reino está a salvo

## 🔧 Requisitos Técnicos
- Navegador moderno compatible con WebGL (Chrome, Firefox, Edge, Safari)
- JavaScript habilitado
- Conexión a internet (para cargar Babylon.js desde CDN)

## 📝 Requisitos Cumplidos

### Mecánica Principal ✅
- [x] Jugador controlable (WASD/Flechas)
- [x] Objeto a recoger (pergamino)
- [x] Zona de recogida (castillo)
- [x] Zona de entrega (torreón)
- [x] Mecánica de recogida con tecla E
- [x] Mecánica de entrega con tecla E
- [x] Sistema de estados (con/sin paquete)
- [x] No puede recoger si ya tiene uno
- [x] No puede entregar si no tiene nada

### Temática Medieval ✅
- [x] Castillo del Rey detallado
- [x] Torreón del Mago con efectos mágicos
- [x] Pergamino con sello de cera
- [x] Ambiente medieval (texturas, colores, niebla)
- [x] Decoración temática (árboles, caminos)
- [x] Iluminación atmosférica

### Extras Implementados 🌟
- [x] Cámara 3D rotable con mouse
- [x] Sistema de sombras dinámicas
- [x] Animaciones fluidas (bandera, luz mágica, pergamino)
- [x] HUD informativo completo
- [x] Pantalla de victoria
- [x] Mensajes de feedback visual
- [x] Límites del mapa
- [x] Diseño profesional y pulido

## 🎨 Detalles Visuales
- **Castillo**: Piedra gris con 4 torres, techos rojos y bandera ondeante
- **Torreón**: Torre oscura con ventanas iluminadas y esfera mágica
- **Pergamino**: Color pergamino con sello de cera rojo
- **Jugador**: Mensajero con túnica azul y capa roja
- **Zonas**: Verde (recogida) y Morada (entrega) con transparencia

## 👨‍💻 Autor
Kenny Navarrete - EPN 2025B - Juegos Interactivos

## 📜 Licencia
Proyecto educativo - Examen 1

---
**¡Disfruta del juego y completa tu misión medieval!** 🏰⚔️🧙‍♂️
