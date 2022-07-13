import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLogin!: boolean;

  parentForm!: FormGroup;

  constructor(private router: Router, private authService: AuthService) {
    this.isLogin = this.router.url === '/auth/signin';
    this._createForm();
  }

  ngOnInit(): void {}

  private _createForm() {
    this.parentForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
    if (!this.isLogin) {
      this.parentForm.addControl(
        'name',
        new FormControl(null, [Validators.required, Validators.minLength(3)])
      );
      this.parentForm.get('password')?.addValidators(Validators.minLength(8));
    }
  }

  signUp(): void {
    this.authService.signup(this.parentForm.getRawValue()).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log('error: ', err);
      }
    );
    this.parentForm.patchValue({});
    this.parentForm.reset();
  }

  signIn(): void {
    this.authService.signin(this.parentForm.getRawValue()).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log('error: ', err);
      }
    );
    this.parentForm.patchValue({});
    this.parentForm.reset();
  }
}
