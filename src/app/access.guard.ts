import { AccessService } from './access.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { Location } from '@angular/common';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AccessGuard implements CanActivate {
  tokens: string[] = [''];

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private accessService: AccessService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.accessService.getAssessTokens().pipe(
      map(({ data }) => {
        if (!data.includes(route.data['token'])) {
          this.router.navigate(['']);
          this.toastr.error('Доступ запрещен');
          return false;
        }
        return true;
      })
    );
  }
}
