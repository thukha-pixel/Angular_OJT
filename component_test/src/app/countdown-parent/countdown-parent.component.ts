import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-parent',
  template: `
    <h3>Countdown to Liftoff (via local variable)</h3>
    <button type="button" (click)="timer.start()">Start</button>
    <button type="button" (click)="timer.stop()">Stop</button>
    <app-countdown-child-timer #timer></app-countdown-child-timer>
  `,
  styles: [
  ]
})
export class CountdownParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
