import { Injectable } from '@angular/core';
import { LoginType } from '../models/login-type';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  login(loginData:LoginType){
    return {loginData}
  }
}
