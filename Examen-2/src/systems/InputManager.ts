/**
 * InputManager - Captura y procesa inputs del teclado
 * Maneja WASD para movimiento 4-direccional
 */
export class InputManager {
  private keys: { [key: string]: boolean } = {};

  constructor() {
    this.setupListeners();
  }

  private setupListeners(): void {
    window.addEventListener('keydown', (e) => {
      this.keys[e.key.toLowerCase()] = true;
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.key.toLowerCase()] = false;
    });
  }

  // Devuelve -1, 0, o 1 según teclas presionadas
  public getHorizontal(): number {
    let h = 0;
    if (this.keys['a'] || this.keys['arrowleft']) h -= 1;
    if (this.keys['d'] || this.keys['arrowright']) h += 1;
    return h;
  }

  public getVertical(): number {
    let v = 0;
    if (this.keys['w'] || this.keys['arrowup']) v -= 1;
    if (this.keys['s'] || this.keys['arrowdown']) v += 1;
    return v;
  }

  public isKeyPressed(key: string): boolean {
    return this.keys[key.toLowerCase()] || false;
  }
}
