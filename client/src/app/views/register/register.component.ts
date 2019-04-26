import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { User, ErrorStateForms, Notification } from '../../shared/models';
import { ApiService, NotificationService, LoaderService } from './../../shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  styles: [`
  `]
})
export class RegisterComponent implements OnInit {

  public accountForm: FormGroup;
  public matcher: ErrorStateForms;

  public hideRepass = true;
  public hidePass = true;

  public samePasswords = false;

  constructor(
    private builder: FormBuilder,
    private api: ApiService,
    private notificationService: NotificationService,
    private loaderService: LoaderService,
    private router: Router
  ) { }

  ngOnInit() {
    // Create form
    this.createRegisterForm();
  }
  createRegisterForm() {
    this.accountForm = this.builder.group({
      'name': ['Flavio', [Validators.required]],
      'lastname': ['Alfaro', [Validators.required]],
      'password': ['123123', [Validators.required]],
      'confirm_password': ['123123', [Validators.required]],
      'email': ['fg.alfaro94@gmail.com', [Validators.required,
      Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      'telephone': ['24242424', [Validators.required, Validators.pattern(/^\d+$/)]]
    }, { validator: this.matchPassword });

    this.matcher = new ErrorStateForms();

  }

  matchPassword(control: AbstractControl) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirm_password').value;

    if (password !== confirmPassword) {
      control.get('confirm_password').setErrors({ confirmPassword: true });
    } else {
      return null;
    }
  }

  createAccount() {
    // this.loaderService.addLoaderComponent();
    if (this.accountForm.invalid) {
      return;
    }

    const user: User = new User();
    for (const item of Object.keys(this.accountForm.value)) {
      if (item !== 'confirm_password') {
        user[item] = this.accountForm.value[item];
      }
    }

    this.api.post('user', user).subscribe(response => {
      this.loaderService.destroyLoader();
      console.log('response', response);
      const notification: Notification = new Notification('success', 'Usuario creado correctamente');
      this.notificationService.openSnackBar(notification);
      this.router.navigate(['/login']);
    });

  }
}
