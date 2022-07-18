import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private AuthService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.AuthService.logout().subscribe(() => this.router.navigate(['auth']));
  }
}
