import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { FirebaseError } from 'firebase/app';
import { finalize, switchMap, from } from 'rxjs';
import { updateProfile } from '@angular/fire/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  isLogin!: boolean;
  error!: string;
  loading: boolean;
  parentForm!: FormGroup;

  constructor(private router: Router, private authService: AuthService) {
    this.loading = false;
    this.isLogin = this.router.url === '/auth/signin';
    this._createForm();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

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
    this.loading = true;
    const formData = { ...this.parentForm.getRawValue() };
    const subscription = this.authService
      .signUp(formData)
      .pipe(
        switchMap(({ user }) =>
          from(updateProfile(user, { displayName: formData.name }))
        )
      )
      .pipe(
        finalize(() => {
          subscription.unsubscribe();
          this.loading = false;
        })
      )
      .subscribe({
        next: (data) => {
          this.router.navigate(['book']);
        },
        error: (err: FirebaseError) => {
          console.log(err);
          this.error = err.message;
        },
      });
    this.parentForm.patchValue({});
    this.parentForm.reset();
  }

  signIn(): void {
    this.loading = true;
    const subscription = this.authService
      .signIn(this.parentForm.getRawValue())
      .pipe(
        finalize(() => {
          subscription.unsubscribe();
          console.log(111);
          this.loading = false;
        })
      )
      .subscribe({
        next: (data) => {
          this.router.navigate(['book']);
          subscription.unsubscribe();
        },
        error: (err: FirebaseError) => {
          console.log(err);
          this.error = err.message;
          subscription.unsubscribe();
        },
      });
    this.parentForm.patchValue({});
    this.parentForm.reset();
  }

  signInGoogle() {
    this.authService.signInViaGoogle().subscribe({
      next: () => {
        this.router.navigate(['book']);
      },
    });
  }
}
