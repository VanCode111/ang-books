import { IAssembly } from './assembly';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const ASSEMBLY_API =
  'https://jsonproject-53629-default-rtdb.firebaseio.com/get-assembly.json';

@Injectable({
  providedIn: 'root',
})
export class AssemblyService {
  constructor(private http: HttpClient) {}

  getAssembly(): Observable<any> {
    return this.http.get(ASSEMBLY_API);
  }
}
