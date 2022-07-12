import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLogin!: boolean;

  loginForm!: FormGroup;
  registerForm!: FormGroup;

  constructor(private router: Router) {
    this._createForm();
  }

  ngOnInit(): void {
    this.isLogin = this.router.url === '/auth/signin';
  }

  private _createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
    this.registerForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
    });
  }
}
