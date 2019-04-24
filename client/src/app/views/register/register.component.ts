import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { User, ErrorStateForms } from '../../shared/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  public accountForm: FormGroup;
  public matcher: ErrorStateForms;

  public hideRepass = true;
  public hidePass = true;

  public samePasswords = false;

  constructor(
    private builder: FormBuilder
  ) { }

  ngOnInit() {
    // Create form
    this.createRegisterForm();
  }
  createRegisterForm() {
    this.accountForm = this.builder.group({
      'name': ['', [Validators.required]],
      'lastname': ['', [Validators.required]],
      'password': ['', [Validators.required]],
      'confirm_password': ['', [Validators.required]],
      'email': ['', [Validators.required,
      Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
      'telephone': ['', [Validators.required, Validators.pattern(/^\d+$/)]]
    }, {validator: this.matchPassword});

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
    if (this.accountForm.invalid) {
      return;
    }

  }
}
