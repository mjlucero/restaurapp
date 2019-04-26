import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, NotificationService } from '../../shared/services';
import { Notification } from './../../shared/models';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public hidePass = true;
  constructor(
    private router: Router,
    private apiService: ApiService,
    private notificationService: NotificationService
  ) {
    this.email = '';
    this.password = '';
  }
  ngOnInit() {

  }

  login() {
    if (!this.email || !this.password) {
      const notification: Notification = new Notification('danger', 'Debe ingresar sus credenciales');
      this.notificationService.openSnackBar(notification);
      return;
    }
    const login = { email: this.email, password: this.password };

    this.router.navigate(['']);
    // this.apiService.post('login', login).subscribe(resp => {
    //   console.log('response login', resp);
    //   this.router.navigate(['']);
    // });
  }
}
