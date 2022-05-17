import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'route_test';
  name: any;
  isShow: boolean = true;
  

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

  shouldShow() {
    if (this.isShow === false) {
      return "none";
    }
    return ;
  }

  changeView() {
    this.isShow = false;
  }
}
