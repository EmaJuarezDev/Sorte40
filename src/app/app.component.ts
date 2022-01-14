import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  winner: number = -1;
  opcWinners: string[];

  selWin(stringOpc: string) {
    this.opcWinners = stringOpc.split('\n');
    this.winner = Math.trunc(Math.random() * this.opcWinners.length);
  }

  resetWin() {
    this.winner = -1;
  }
}
