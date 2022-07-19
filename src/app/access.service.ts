import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccessService {
  constructor(private http: HttpClient) {}

  getAssessTokens(): Observable<{ data: string[] }> {
    return this.http.get<{ data: string[] }>(
      'https://fir-auth-93a4f-default-rtdb.europe-west1.firebasedatabase.app/access-rights.json'
    );
  }
}
