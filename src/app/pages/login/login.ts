import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from './login-service';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export default class Login {
  form!: FormGroup;
  wasValidated: boolean = false;
  message: string = '';
  router = inject(Router);
  loginService = inject(LoginService);
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl(' ', Validators.required),
    });
  }
  logIn() {
    this.wasValidated = true;
    if (this.form.invalid) return;
    const user = this.loginService.getUserFromLocalStorage(
      this.form.get('username')?.value,
      this.form.get('password')?.value
    );
    if (user === null) {
      this.message = 'username or password are incorrect';
      return;
    }
    this.router.navigate(['mainPage']);
  }
}
