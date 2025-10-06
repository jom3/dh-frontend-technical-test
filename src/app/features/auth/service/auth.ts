import { inject, Injectable } from '@angular/core';
import { LoginType } from '../models/login-type';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Jwt } from '../../../core/services/jwt';
import { v4 as uuidv4 } from 'uuid';
import { LoginResponse } from '../models/login-response';
import { RegisterResponse } from '../models/register-response';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private readonly http = inject(HttpClient);
  private readonly jwt = inject(Jwt);

  private readonly baseUrl = 'http://localhost:3000/api';

  login(loginData: LoginType): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/login`, loginData)
  }

  register(userData: Omit<User, 'id'>): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.baseUrl}/users`, userData)
  }
}
