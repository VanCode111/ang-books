import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  authState,
  createUserWithEmailAndPassword,
  signInWithPopup,
  UserCredential,
  GoogleAuthProvider,
  User,
} from '@angular/fire/auth';
import { concatMap, from, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) {}

  signUp({
    email,
    name,
    password,
  }: {
    email: string;
    password: string;
    name: string;
  }): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  signIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Observable<UserCredential> {
    console.log('aaa');
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  signInViaGoogle(): Observable<UserCredential> {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider));
  }

  logout(): Observable<any> {
    return from(this.auth.signOut());
  }
}
