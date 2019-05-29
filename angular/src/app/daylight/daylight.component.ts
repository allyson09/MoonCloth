import { Component, OnInit, Directive, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Options } from 'ng5-slider';
import { IfObservable } from 'rxjs/observable/IfObservable';

@Directive({
  selector: '[onCreate]'
})
export class OnCreate implements OnInit {

  @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  ngOnInit() {
    this.onCreate.emit('testing');
  }
}

@Component({
  selector: 'app-daylight',
  templateUrl: './daylight.component.html',
  styleUrls: ['./daylight.component.css']
})
export class DaylightComponent implements OnInit {

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) { 
    this.loggedInCheck();
    this.getDaylight();
    this.getlikedOutfits();
    // this.sessionId = this._dataService.sessionId;
  }
  
  totalOutfitObjects;
  outfits;
  filtersON = false;
  filterStatuses = {
    category: false,
    color: false,
    size: false,
    range: false,
    order: false
  }
  pricefiltersON = false;
  categoryCheck = {
    casual: false,
    school: false,
    dresses: false
  }
  colorCheck = {
    pink : false,
    red: false,
    blue: false,
    purple: false,
    yellow: false,
    green: false,
    brown: false,
    black: false,
    white: false,
    orange: false
  }
  sizeCheck = {
    XL : false,
    L: false,
    M: false,
    S: false,
    XS: false
  }
  startRange = 0;
  endRange = 500;
  options: Options = {
    floor: 0,
    ceil: 500
  };
  orderCheck = "Newest";
  amountCheck = "Show 25";
  allPages = [];
  currentPageIndex = 0;
  loveList = "";
  loggedList = [];
  regPrompt = true;

  ngOnInit() {
    // this.sessionId = this._dataService.loggedUser()
    // .then(data => {
    //   if (data.loggedUserEmail != undefined) {
    //     this.sessionId = data.loggedUserId;
    //     console.log('logged in user id IN DAYLIGHT', this.sessionId)
    //   } else {
    //     this.sessionId = "notLogged"
    //   }
    // })
  }

  loggedInCheck() {
    if (this._dataService.loggedList.length > 0) {
      this.regPrompt = false;
    }
  }

  getlikedOutfits() {
    this._dataService.getLikedOutfits()
      .then(data => {
        let outfitIds = "";
        for (let outfit of data.loveList) {
          outfitIds += outfit._id;
        }
        this.loveList = outfitIds;
      });
  }

  checkIfLiked(outfit) {
    if(this.loveList.includes(outfit)) {
      return true;
    } else {
      return false;
    }
  }

  heartClicked(outfit) {
    if (this.checkIfLiked(outfit)) {
      console.log('in component removing outfit', outfit)
      this._dataService.dislikeOutfit({
        id: outfit
      });
      this.getlikedOutfits();
    } else {
      console.log('in component adding outfit', outfit)
      this._dataService.likeOutfit({
        id: outfit
      });
      this.getlikedOutfits();
    }
  }

  getDaylight() {
    this._dataService.getDaylight()
    .then (data => {
      this.totalOutfitObjects = data.outfitRes.reverse();
      this.allPages = this.makePages(this.totalOutfitObjects);
      this.outfits = this.allPages[this.currentPageIndex];
    });
    this.loggedList = this._dataService.getloggedList();
  }

  makePages(list) {
    //amountCheck comes to 50 correctly but when comparing this.amountCheck is the problem
    let result = []
    let pages = [];
    let loopCount = 0;
    let itemCount = list.length;
    list.forEach(o => {
      if(itemCount != 1) {
        let checkCase = "Show " + loopCount
        if(checkCase == this.amountCheck) {
          result.push(pages);
          pages = [o];
          loopCount = 1;
          itemCount--;
        } else {
          pages.push(o);
          loopCount++;
          itemCount--;
        }
      } else {
        pages.push(o);
        result.push(pages);
      }
    });
    return result;
  }

  filtering() {
    //category
    let filteredOutfits = [];
    if(this.filterStatuses.category) {
      let filters = [];
      Object.keys(this.categoryCheck).forEach(k => {
        if(this.categoryCheck[k]) {
          filters.push(k);
        }
      });
      if(filters.length < 3 && filters.length > 0) {
        this.totalOutfitObjects.forEach(o => {
          let filterFound = 0;
          filters.forEach(f => {
            if(o.subCategory == f) {
              filterFound++
            }
          });
          if(filterFound > 0) {
            filteredOutfits.push(o);
          }
        });
        this.filtersON = true;
      } else {
        filteredOutfits = this.totalOutfitObjects;
        this.filtersON = false;
      }
    } else {
      filteredOutfits = this.totalOutfitObjects;
      this.filtersON = false;
    }
    //color
    if(this.filterStatuses.color) {
      this.filtersON = true;
      let filters = [];
      Object.keys(this.colorCheck).forEach(k => {
        if(this.colorCheck[k]) {
          filters.push(k);
        }
      });
      if(filters.length < 10 && filters.length > 0) {
        let newFilter = [];
        filteredOutfits.forEach(o => {
          let filterFound = 0;
          filters.forEach(f => {
            if(o.colors[0][f]) {
              filterFound++
            }
          });
          if(filterFound > 0) {
            newFilter.push(o);
          }
        });
        filteredOutfits = newFilter;
        this.filtersON = true;
      }
    }
    //size
    if(this.filterStatuses.size) {
      this.filtersON = true;
      let filters = [];
      Object.keys(this.sizeCheck).forEach(k => {
        if(this.sizeCheck[k]) {
          filters.push(k);
        }
      });
      if(filters.length < 5 && filters.length > 0) {
        let newFilter = [];
        filteredOutfits.forEach(o => {
          let filterFound = 0;
          filters.forEach(f => {
            if(o.sizes[0][f] > 0) {
              filterFound++
            }
          });
          if(filterFound > 0) {
            newFilter.push(o);
          }
        });
        filteredOutfits = newFilter;
        this.filtersON = true;
      }
    }
    //range
    if(this.filterStatuses.range) {
      this.filtersON = true;
      let newFilter = [];
      filteredOutfits.forEach(o => {
        if(o.price >= this.startRange && o.price <= this.endRange) {
          newFilter.push(o);
        }
      });
      filteredOutfits = newFilter;
    }
    //order
    if(this.orderCheck == "Newest") {
      filteredOutfits.sort((a, b) => {
        return +new Date(a.createdAt) - +new Date(b.createdAt);
    }).reverse();
    }
    if(this.orderCheck == "Cheapest") {
      filteredOutfits.sort((a, b) => a.price - b.price);
    }
    if(this.orderCheck == "Popular") {
    }
    //amount
    
    this.allPages = this.makePages(filteredOutfits);
    this.outfits = this.allPages[this.currentPageIndex];
    console.log('AFTER FILTERING', this.categoryCheck)
  }

  categoryFilter(category) {
    if(!this.categoryCheck[category]) {
      console.log('WAS NOT SELECTED. SELECTING...')
      this.categoryCheck[category] = true;
      this.filterStatuses.category = true;
      this.filtering();
    } else {
      console.log('WAS SELECTED. SELECTING ')
      this.categoryCheck[category] = false;
      for(let c in this.categoryCheck) {
        if(c) {
          this.filterStatuses.category = true;
        }
      }
      this.filtering();
    }
  }

  colorFilter(color) {
    if(!this.colorCheck[color]) {
      this.colorCheck[color] = true;
      this.filterStatuses.color = true;
      this.filtering();
    } else {
      this.colorCheck[color] = false;
      for(let c in this.colorCheck) {
        if(c) {
          this.filterStatuses.color = true;
        }
      }
      this.filtering();
    }
  }
  sizeFilter(size) {
    if(!this.sizeCheck[size]) {
      this.sizeCheck[size] = true;
      this.filterStatuses.size = true;
      this.filtering();
    } else {
      this.sizeCheck[size] = false;
      for(let c in this.sizeCheck) {
        if(c) {
          this.filterStatuses.size = true;
        }
      }
      this.filtering();
    }
  }
  rangeFilter() {
    if(this.startRange > 0 || this.endRange < 500) {
      this.filterStatuses.range = true;
      this.filtering();
    }
  }
  orderFilter(order) {
    this.orderCheck = order.target.value;
    this.filtering();
  }
  amountFilter(amount) {
    this.amountCheck = amount.target.value;
    this.filtering();
  }

  changePageIndex(newPage) {
    if(typeof newPage === "number") {
      this.currentPageIndex = newPage;
    } else {
      if(newPage == "previous") {
        if(this.currentPageIndex > 0) {
          this.currentPageIndex--
        }
      } else {
        if(this.currentPageIndex < (this.allPages.length - 1)) {
          this.currentPageIndex++
        }
      }
    }
    this.outfits = this.allPages[this.currentPageIndex];
  }
  reRoute(page) {
    if (page == 'login') {
      this._router.navigate(['/login'])
    } else {
      this._router.navigate(['/join'])
    }
  }
  selectItem(outfit) {
    this._dataService.selectedItem.push(outfit);
  }
}
