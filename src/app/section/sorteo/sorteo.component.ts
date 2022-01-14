import { Component } from '@angular/core';

@Component({
  selector: 'app-sorteo',
  templateUrl: './sorteo.component.html',
  styleUrls: ['./sorteo.component.css'],
})
export class SorteoComponent {
  constructor() {}
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
