import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.sass']
})
export class LoginComponent implements OnInit {
  public showUsernamePlaceholder: boolean;
  public showPasswordPlaceholder: boolean;
  constructor() {
    this.showPasswordPlaceholder = true;
    this.showUsernamePlaceholder = true;
  }
  ngOnInit() {

  }

  focusEvent(type: string) {
    type === 'user' ? this.showUsernamePlaceholder = false : this.showPasswordPlaceholder = false;
  }
  blurEvent(type: string) {
    type === 'user' ? this.showUsernamePlaceholder = true : this.showPasswordPlaceholder = true;
  }
}
