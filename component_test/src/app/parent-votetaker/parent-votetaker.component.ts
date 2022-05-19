import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-votetaker',
  template: `
    <h2>Should mankind colonize the Universe?</h2>
    <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
    <app-child-votegiver *ngFor="let voter of voters" [name]="voter" (voted)="onVoted($event)"></app-child-votegiver>
  `,
  styles: [
  ]
})
export class ParentVotetakerComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters = ["Dr IQ", "Celeritas", "Bombasto"];

  constructor() { }

  ngOnInit(): void {
  }

  // parameter agreed is parameter (lol haha) not local this.agreed
  onVoted(agreed: boolean) {

    if (agreed) {
      this.agreed++;
    } else {
      this.disagreed++;
    }
  }

}
