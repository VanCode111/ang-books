import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() href: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectTo(path: string): void {
    this.router.navigate([path]);
  }
}
