import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  @Input() loginForm!: FormGroup;
  @Output() signin = new EventEmitter<MouseEvent>();
  constructor() {}

  ngOnInit(): void {
    console.log(this.email?.errors);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit(): void {
    this.signin.emit();
  }
}
