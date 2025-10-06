import { Injectable, signal } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { DecodeToken } from '../models/decode-token';

@Injectable({
  providedIn: 'root'
})
export class Jwt {
  currentToken = signal<string | null>(null);

  setToken(token: string | null) {
    this.currentToken.set(token);
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }

  getToken() {
    const token = localStorage.getItem('token');
    this.currentToken.set(token);
    return token;
  }

  clearToken() {
    this.setToken(null);
  }

  isAuthenticated() {
    return !!this.getToken();
  }

  getCurrentUser(){
    const user = jwtDecode(this.getToken() as string) as DecodeToken
    return user.id
  }
}
