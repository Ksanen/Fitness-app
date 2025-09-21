import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegisterService } from './register-service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export default class Register {
  message: string = '';
  form!: FormGroup;
  wasValidated: boolean = false;
  registerService = inject(RegisterService);
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      passwordRepeat: new FormControl('', Validators.required),
    });
  }
  register() {
    this.wasValidated = true;
    if (this.form.invalid) return;
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;
    this.registerService.register(username, password);
  }
}
