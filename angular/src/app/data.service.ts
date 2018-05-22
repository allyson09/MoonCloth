import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
  loggedList = [];

  constructor(private http: Http) { }

  register (data) {
    this.loggedList.push(data.email);
    return this.http.post('/register', data)
      .map(response => response.json()).toPromise();
  }
  login(data) {
    this.loggedList.push(data.email);
    return this.http.post('/login', data)
      .map(response => response.json()).toPromise();
  }
  logout() {
    this.loggedList = [];
    return this.http.get('/logout')
      .map(response => response.json()).toPromise();
  }
  getloggedList() {
    return this.loggedList;
  }
  adminCheck() {
    return this.http.get('/admincheck')
    .map(response => response.json()).toPromise();
  }
  createOutfit(data) {
    return this.http.post('/createOutfit', data)
    .map(response => response.json()).toPromise();
  }
  getDaylight() {
    return this.http.get('/getDaylight')
    .map(response => response.json()).toPromise();
  }
}
