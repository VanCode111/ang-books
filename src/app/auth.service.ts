import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'httрs://ya.ru/';

interface ISignin {
  email: string;
  password: string;
}

interface ISignup extends ISignin {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signin({ email, password }: ISignin): Observable<any> {
    return this.http.post(AUTH_API, {
      email,
      password,
    });
  }
  signup({ email, password, name }: ISignup): Observable<any> {
    return this.http.post(AUTH_API, {
      name,
      email,
      password,
    });
  }
}
