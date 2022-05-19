import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-child-timer',
  template: `
    <p>{{ message }}</p>
  `,
  styles: [
  ]
})
export class CountdownChildTimerComponent implements OnInit, OnDestroy {

  intervalId = 0;
  message = "";
  seconds = 11;

  private clearTimer() { clearInterval(this.intervalId); }

  private countDown() {
    this.clearTimer();

    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;

      if (this.seconds === 0) {
        this.message = "Blast Off!"
      } else {
        if (this.seconds < 0) { this.seconds = 10; }

        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  start() { this.countDown(); }
  stop() { 
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  constructor() { }
  ngOnInit(): void {
  }

}
