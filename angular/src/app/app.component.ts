import { Component, OnInit, DoCheck } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  daylight = false;
  moonlight = false;
  accessories = false;
  cosplay = false;
  check = 0;
  loggedList = [];
  admin = 'womp';

  constructor(private _dataService: DataService) {
  }

  ngOnInit() {
  }
  ngDoCheck() {
    if (this.check === 1) {
      console.log('CHECK IS TRUE CHECKING ADMIN');
      this._dataService.adminCheck()
        .then (data => {
          console.log('TURNING CHECK FALSE');
          this.admin = data.admin;
          console.log('stuff', data, data.admin);
          this.check++;
        });
      }
    if (this.loggedList.length > 0 && this.check === 0) {
      console.log('TURNING CHECK TRUE');
      this.check++;
    }
    if (this.loggedList.length === 0) {
      console.log('ABOUT TO GET LOGGED LIST');
      this.loggedList = this._dataService.getloggedList();
    }
  }

  logout() {
    this._dataService.logout();
    this.loggedList = [];
  }

  DayMenuOn() {
    this.daylight = true;
  }
  DayMenuOff() {
    this.daylight = false;
  }
  MoonMenuOn() {
    this.moonlight = true;
  }
  MoonMenuOff() {
    this.moonlight = false;
  }
  AccMenuOn() {
    this.accessories = true;
  }
  AccMenuOff() {
    this.accessories = false;
  }
  CosMenuOn() {
    this.cosplay = true;
  }
  CosMenuOff() {
    this.cosplay = false;
  }
}
