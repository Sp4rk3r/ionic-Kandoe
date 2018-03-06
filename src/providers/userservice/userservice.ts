import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {TOKEN_NAME} from '../auth-constant/auth-constant';
import {JwtHelper} from "angular2-jwt";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the UserserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserserviceProvider {
  jwtHelper: JwtHelper = new JwtHelper();
  accesToken: string;
  isAdmin: boolean;


  constructor(private http: HttpClient) {

  }

  /*login(accesToken: string) {
    const decodeToken = this.jwtHelper.decodeToken(this.accesToken);
    console.log(decodeToken);

    this.isAdmin = decodeToken.authorities.some(el => el == 'ADMIN_USER');
    this.accesToken = this.accesToken;

    localStorage.setItem(TOKEN_NAME, accesToken);
  }
*/
  getUser(userId: number): Observable<any> {
    return this.http.get('https://kandoe-backend.herokuapp.com/user/' + userId);
  }



}
