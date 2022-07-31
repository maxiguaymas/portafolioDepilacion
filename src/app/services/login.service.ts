import { Injectable } from '@angular/core';
import { Account } from './login-account';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  authLogin(user: string, password: string): string{
    if(user == Account.user && password == Account.password){
      return "dsks2022ccv21";
    }
    else{
      return "";
    }
  }
}
