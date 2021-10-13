import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUserData, RegisterUserResponse } from './auth.types';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: RegisterUserData): Observable<RegisterUserResponse> {
    return this.http.post<RegisterUserResponse>(`${environment.apiUrl}/register`, data);
  }
}
