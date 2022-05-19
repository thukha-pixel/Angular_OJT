import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-version-child',
  template: `
    <h3>Version {{major}}.{{minor}}</h3>
    <h4>Change Log:</h4>
    <ul>
      <li *ngFor="let change of changeLog">
        {{change}}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class VersionChildComponent implements OnInit, OnChanges {

  @Input() major = 0;
  @Input() minor = 0;
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    const log: string[] = [];

    console.log(changes);
    for (const propName in changes) {
      const changedProp = changes[propName]; // currentValue , previousValue
      console.log("propName"+ " : "+ propName);
      console.log("changedprop"+ " : "+ changedProp);

      const to = JSON.stringify(changedProp.currentValue);
      console.log(to);

      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`)
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
