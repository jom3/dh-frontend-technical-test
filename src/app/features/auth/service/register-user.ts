import { Injectable } from '@angular/core';
import { LoginType } from '../models/login-type';

@Injectable({
  providedIn: 'root'
})
export class RegisterUser {


  registerUser(loginData:LoginType){
    return loginData
  }
}
