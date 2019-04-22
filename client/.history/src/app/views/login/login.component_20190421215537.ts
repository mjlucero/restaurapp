import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.sass']
})
export class LoginComponent implements OnInit {
  public showPlaceholder: boolean;
  constructor() {
    this.showPlaceholder = true;
  }
  ngOnInit() {

  }

  focusEvent() {
    this.showPlaceholder = false;
  }
  blurEvent() {
    this.showPlaceholder = true;
  }
}
