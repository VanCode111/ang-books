import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @Input() registerForm!: FormGroup;
  @Output() signup = new EventEmitter<MouseEvent>();
  constructor() {}

  ngOnInit(): void {}

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get name() {
    return this.registerForm.get('name');
  }

  submit(): void {
    console.log('asg');
    this.signup.emit();
  }
}
