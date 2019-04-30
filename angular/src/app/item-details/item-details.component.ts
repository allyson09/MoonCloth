import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor(private _dataService: DataService, private _router: Router) { 
    this.selectedItem = this._dataService.selectedItem[0];
    this._dataService.selectedItem = [];
    this.getDaylight();
  }

  selectedItem;
  similarItems = [];

  ngOnInit() {
  }

  getDaylight() {
    this._dataService.getDaylight()
    .then (data => {
      this.similarItems = data.outfitRes;
    });
  }

}
