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
    this.blurEvent();
  }
  ngOnInit() {

  }

  focusEvent() {
    this.showUsernamePlaceholder = false;
    this.showPasswordPlaceholder = false;
  }
  blurEvent() {
    this.showUsernamePlaceholder = true;
    this.showPasswordPlaceholder = true;
  }

  
}
