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

  getAssembly(): Observable<{ data: IAssembly[] }> {
    return this.http.get<{ data: IAssembly[] }>(ASSEMBLY_API);
  }
}
