import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export default class Login {
  form!: FormGroup;
  wasValidated: boolean = false;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  logIn() {
    this.wasValidated = true;
    console.log(this.form);
    if (this.form.invalid) return;
  }
}
