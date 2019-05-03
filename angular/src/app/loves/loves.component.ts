import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loves',
  templateUrl: './loves.component.html',
  styleUrls: ['./loves.component.css']
})
export class LovesComponent implements OnInit {

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) {
    console.log('in construction') 
    this.getlikedOutfits();
  }

  loveList = [];

  ngOnInit() {
    console.log('in oninit')
  }

  getlikedOutfits() {
    this._dataService.getLikedOutfits()
    .then(data => {
      if(data.error) {
        console.log(data.error);
      } else {
        if(data.loveList.length > 0) {
          this.loveList.forEach(loveId => {
            
          });
        }
        this.loveList = data.loveList;
        console.log('LOVE LIST', this.loveList);
      }
    })
  }
  heartClicked(item) {
    console.log('heart clicked', item);
  }
  selectItem(outfit) {
    this._dataService.selectedItem.push(outfit);
  }
}
