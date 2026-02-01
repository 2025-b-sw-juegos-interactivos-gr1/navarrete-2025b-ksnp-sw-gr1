/**
 * UIManager - Gestiona el HUD y pantallas de UI
 */
export class UIManager {
  private scoreElement: HTMLElement;
  private timerElement: HTMLElement;
  private gameOverScreen: HTMLElement;
  private gameOverTitle: HTMLElement;
  private finalScoreElement: HTMLElement;
  private restartButton: HTMLElement;

  constructor() {
    this.scoreElement = document.getElementById('score')!;
    this.timerElement = document.getElementById('timer')!;
    this.gameOverScreen = document.getElementById('gameOverScreen')!;
    this.gameOverTitle = document.getElementById('gameOverTitle')!;
    this.finalScoreElement = document.getElementById('finalScore')!;
    this.restartButton = document.getElementById('restartButton')!;
  }

  public updateScore(score: number): void {
    this.scoreElement.textContent = `SCORE: ${score}`;
  }

  public updateTimer(seconds: number): void {
    this.timerElement.textContent = seconds.toString();

    // Animación de advertencia si queda poco tiempo
    if (seconds <= 20) {
      this.timerElement.classList.add('warning');
    } else {
      this.timerElement.classList.remove('warning');
    }
  }

  public showGameOver(title: string, finalScore: number, isVictory: boolean): void {
    this.gameOverTitle.textContent = title;
    this.gameOverTitle.style.color = isVictory ? '#00FF00' : '#FF0066';
    this.finalScoreElement.textContent = `FINAL SCORE: ${finalScore}`;
    this.gameOverScreen.classList.add('show');
  }

  public hideGameOver(): void {
    this.gameOverScreen.classList.remove('show');
  }

  public setupRestartButton(callback: () => void): void {
    this.restartButton.addEventListener('click', callback);
    
    // También con tecla R
    window.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'r' && this.gameOverScreen.classList.contains('show')) {
        callback();
      }
    });
  }
}
