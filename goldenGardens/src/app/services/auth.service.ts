import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from '../models/LoginUser';
import { HttpClient } from '@angular/common/http';

const Api_Url = "https://efa-gardenapp-backend.herokuapp.com/api";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  login(loginInfo: LoginUser) {
    const str = `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    return this._http.post(`${Api_Url}/auth/login`,{grant_type:"password",email:encodeURI(loginInfo.email),password:encodeURI(loginInfo.password)});
  }
}
