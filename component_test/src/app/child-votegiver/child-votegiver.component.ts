import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child-votegiver',
  template: `
    <h4>{{name}}</h4>
    <button type="button" (click)="vote(true)" [disabled]="didVote">Agree</button>
    <button type="button" (click)="vote(false)" [disabled]="didVote">Disgree</button>
  `,
  styles: [
  ]
})
export class ChildVotegiverComponent implements OnInit {

  @Input() name = "";
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote =true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
