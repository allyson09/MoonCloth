import { Component, OnInit, DoCheck } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  check = 0;
  currentMenu = "";
  menuCheck = "";
  navCheck = "";
  loggedList = [];
  admin = 'womp';
  loveNumber;
  sideBar = false;
  sideMenu = {
    daylight: false,
    moonlight: false,
    accessories: false,
  };

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

  getlikedOutfits() {
    this._dataService.getLikedOutfits()
    .then(data => {
      if(data.error) {
        console.log(data.error);
      } else {
        if(data.loveList.length > 0) {
          this.loveNumber = data.loveList.length;
          console.log('loved amount', this.loveNumber);
        }
      }
    })
  }

  logout() {
    this._dataService.logout();
    this.loggedList = [];
  }

  initMenu(menu) {
    if (menu.includes('NAV')) {
      if (this.currentMenu == "") {
        this.currentMenu = menu.slice(0, -3);
      }
      else {
        this.navCheck = menu.slice(0, -3)
      }
    }
    else {
      this.menuCheck = menu;
    }
  }

  closeMenu(menu) {
    if (menu.includes('NAV')) {
      setTimeout(() => {
        if (this.navCheck != "") {
          this.currentMenu = this.navCheck;
          this.navCheck = "";
        }
        else if (this.menuCheck != "") {
          this.currentMenu = this.menuCheck;
          this.menuCheck = "";
        }
        else {
          this.currentMenu = "";
        }
      }, 50);
    }
    else {
      this.currentMenu = "";
      this.menuCheck = "";
      this.navCheck = "";
    }
  }

  toggleSideBar() {
    if (this.sideBar == false) {
      this.sideBar = true;
    } else {
      this.sideBar = false;
    }
  }

  expandNav(page) {
    console.log('page', page)
    for (let key in this.sideMenu) {
      console.log(key,page)
      if (key == page) {
        this.sideMenu[key] = true;
      } else {
        this.sideMenu[key] = false;
      }
    }
  }

  closeNav(page) {
    this.sideMenu[page] = false;
  }

  checkIfLiked() {
    if(this.loveNumber > 0) {
      return true;
    } else {
      return false;
    }
  }
}
