import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AliensService {
  private apiUrl = 'http://localhost:8000/alien/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getAlien(id: string): Observable<any> {
    return this.http.get(this.apiUrl+id);
  }
}
