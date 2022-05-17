import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial';
  showNav = "none";
  hideLogin = "";

  Login() {
    this.showNav = "";
    this.hideLogin = "none";
  }

  Logout() {
    this.showNav = "none";
    this.hideLogin = "";
  }
}
