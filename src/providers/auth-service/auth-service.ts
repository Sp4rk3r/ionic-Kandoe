//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from '../../mode/user'

//import { AppDataService} from "../../services/app-data.service";

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class Users {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;

  }
}

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AuthServiceProvider {
  currentUser: Users;
  constructor(private http: HttpClient) {

  }

  public login(credentials) {
    if (credentials.email === null || credentials.password === null ) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!

        let access = (credentials.password === "pass" && credentials.email === "email");
        this.currentUser = new Users('Koen', 'koenrombout@hotmail.com');
        observer.next(access);
        observer.complete();
      });
    }
  }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null || credentials.username == null || credentials.firstname == null || credentials.lastname == null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      //TODO communicate with java backend
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  login2(username: string, password:string): Observable<any> {
    const credentials = {username: username, password: password};
    let body = JSON.stringify(credentials);
    console.log(body);
    return  this.http.post('https://kandoe-backend.herokuapp.com/token/generate-token', body,httpOptions);
  }

  register2(user: User): Observable<any> {
    let body = JSON.stringify(user);
    console.log(body);
    return this.http.post("https://kandoe-backend.herokuapp.com/register", body, httpOptions);
  }

  /*getUser() {
    const url = '${this.userUrl}/${this.registerCredentials.email}';
    return this.http.get<User>(url);
  }*/


  /*const url = `${this.themesurl}/${id}`;
  return this.http.get<Theme>(url);*/


  public getUserInfo() : Users {
    return this.currentUser;
  }

  getUsername() {
    return this.currentUser.name;
  }

  getUserEmaom() {
    return this.currentUser.email;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

}
