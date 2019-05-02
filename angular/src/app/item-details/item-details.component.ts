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
  carouselPage = [];
  currentCarouselIndex = 0;

  ngOnInit() {
  }

  getDaylight() {
    this._dataService.getDaylight()
    .then (data => {
      this.similarItems = this.makeCarouselPages(data.outfitRes);
      this.carouselPage = this.similarItems[this.currentCarouselIndex]
      console.log(this.similarItems);
      console.log(this.carouselPage);
    });
  }

  makeCarouselPages(list) {
    let result = []
    let pages = [];
    let loopCount = 0;
    let itemCount = list.length;
    console.log('obj')
    list.forEach(o => {
      if(o.subCategory == this.selectedItem.subCategory && o.title != this.selectedItem.title) {
        if(itemCount != 0) {
          if(loopCount == 5) {
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
      }
    });
    return result;
  }

  changeCarouselIndex(direction) {
    if(direction == "previous") {
      if(this.currentCarouselIndex > 0) {
        this.currentCarouselIndex--
      }
    } else {
      if(this.currentCarouselIndex < (this.similarItems.length - 1)) {
        this.currentCarouselIndex++
      }
    }
    this.carouselPage = this.similarItems[this.currentCarouselIndex];
  }

}
