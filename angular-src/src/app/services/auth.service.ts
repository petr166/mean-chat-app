import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) { }

  registerUser(user) {
    let headers = new Headers({"Content-Type": "application/json"});
    return this.http.post("users/register", user, {headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers({"Content-Type": "application/json"});
    return this.http.post("users/authenticate", user, {headers: headers})
      .map(res => res.json());
  }

  getProfile() {
    this.loadToken();
    let headers = new Headers({
      "Content-Type": "application/json",
      "Authorization": this.authToken
    });
    return this.http.get("users/profile", {headers: headers})
      .map(res => res.json());
  }

  storeUserData(token, user) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    let token = localStorage.getItem("token");
    this.authToken = token;
  }

  loggedIn(): boolean {
    return tokenNotExpired();
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
