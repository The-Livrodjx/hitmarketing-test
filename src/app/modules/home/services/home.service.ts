import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiInterface } from '../interfaces/api.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'https://hitdigital.com.br';

  constructor(private http: HttpClient) { }

  getResult(): Observable<ApiInterface> {
    return this.http.get<ApiInterface>(`${this.apiUrl}/test.php`);
  }
}
