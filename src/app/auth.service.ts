import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = "/api/login";
  
  constructor(private http: HttpClient) { }

  loginUser(user:any)
  {
    return this.http.post<any>(this._loginUrl, user)
  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }

}
